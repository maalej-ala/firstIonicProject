import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
  standalone:false,
})
export class SignupPage {
  nom: string = '';
  prenom: string = '';
  email: string = '';
  password: string = '';
  confirmPassword: string = '';
  submitted: boolean = false;
  loading: boolean = false;
  showPassword: boolean = false;  // Contrôle la visibilité du mot de passe
  showConfirmPassword: boolean = false;  // Contrôle la visibilité de la confirmation du mot de passe

  constructor(
    private http: HttpClient,
    private router: Router,
    private alertController: AlertController
  ) {}

  // Méthode pour basculer la visibilité du mot de passe
  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  // Méthode pour basculer la visibilité de la confirmation du mot de passe
  toggleConfirmPasswordVisibility() {
    this.showConfirmPassword = !this.showConfirmPassword;
  }

  // Méthode appelée lors de la soumission du formulaire
  async onSignup() {
    this.submitted = true;
    this.loading = true;

    // Validation des champs
    if (!this.nom || !this.prenom || !this.email || !this.password || !this.confirmPassword) {
      await this.showAlert('Erreur', 'Veuillez remplir tous les champs.');
      this.loading = false;
      return;
    }

    // Vérification que les mots de passe correspondent
    if (this.password !== this.confirmPassword) {
      await this.showAlert('Erreur', 'Les mots de passe ne correspondent pas.');
      this.loading = false;
      return;
    }

    // Préparation des données à envoyer au backend
    const userData = {
      nom: this.nom,
      prenom: this.prenom,
      email: this.email,
      password: this.password,
    };

    // Envoi de la requête POST au backend
    this.http.post('http://127.0.0.1:5000/signup', userData).subscribe(
      async (response: any) => {
        this.loading = false;
        console.log('Inscription réussie:', response);
        await this.showAlert('Succès', 'Inscription réussie !');
        this.router.navigate(['/login']);  // Redirection vers la page de connexion
      },
      async (error) => {
        this.loading = false;
        console.error('Échec de l\'inscription:', error);
        await this.showAlert('Erreur', "Échec de l'inscription. Veuillez réessayer.");
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