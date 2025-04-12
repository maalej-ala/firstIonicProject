import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
  standalone: false,  // Assurez-vous que ce composant n'est pas "standalone"
})
export class SignupPage {
  // Variables pour stocker les données du formulaire
  nom: string = '';
  prenom: string = '';
  email: string = '';
  password: string = '';
  confirmPassword: string = '';

  constructor(
    private http: HttpClient,         // Pour les appels HTTP
    private router: Router,           // Pour la navigation
    private alertController: AlertController  // Pour afficher des alertes
  ) {}

  // Méthode pour gérer l'inscription
  async signup() {
    // Validation des champs
    if (!this.nom || !this.prenom || !this.email || !this.password || !this.confirmPassword) {
      this.showAlert('Erreur', 'Veuillez remplir tous les champs.');
      return;
    }

    // Vérification que les mots de passe correspondent
    if (this.password !== this.confirmPassword) {
      this.showAlert('Erreur', 'Les mots de passe ne correspondent pas.');
      return;
    }

    // Préparation des données à envoyer au backend
    const userData = {
      nom: this.nom,
      prenom: this.prenom,
      email: this.email,
      password: this.password,
    };

    // Envoi de la requête HTTP POST au backend
    this.http.post('http://127.0.0.1:5000/signup', userData).subscribe(
      (response: any) => {
        console.log('Inscription réussie:', response);
        this.showAlert('Succès', 'Inscription réussie !');
        this.router.navigate(['/login']);  // Redirection vers la page de connexion
      },
      (error) => {
        console.error('Échec de l\'inscription:', error);
        this.showAlert('Erreur', "Échec de l'inscription. Veuillez réessayer.");
      }
    );
  }

  // Méthode pour afficher une alerte
  async showAlert(header: string, message: string) {
    const alert = await this.alertController.create({
      header,
      message,
      buttons: ['OK'],
    });
    await alert.present();
  }
}