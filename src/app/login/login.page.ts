import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone:false,
})
export class LoginPage {
  email: string = '';
  password: string = '';
  submitted: boolean = false;
  loading: boolean = false;
  showPassword: boolean = false;  // Contrôle la visibilité du mot de passe

  constructor(
    private http: HttpClient,
    private router: Router,
    private alertController: AlertController
  ) {}

  // Méthode pour basculer la visibilité du mot de passe
  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }
  onPasswordChange(value: string) {
    this.password = value;  // Mise à jour de la propriété password
  }
  // Méthode appelée lors de la soumission du formulaire
  async onLogin() {
    this.submitted = true;
    this.loading = true;

    // Validation des champs
    if (!this.email || !this.password) {
      await this.showAlert('Erreur', 'Veuillez remplir tous les champs.');
      this.loading = false;
      return;
    }

    // Préparation des données à envoyer au backend
    const loginData = {
      email: this.email,
      password: this.password,
    };

    // Envoi de la requête POST au backend
    this.http.post('http://127.0.0.1:5000/login', loginData).subscribe(
      async (response: any) => {
        this.loading = false;
        console.log('Connexion réussie:', response);
        await this.showAlert('Succès', 'Connexion réussie !');
        this.router.navigate(['/home']);  // Redirection vers la page d'accueil
      },
      async (error) => {
        this.loading = false;
        console.error('Échec de la connexion:', error);
        await this.showAlert('Erreur', "Échec de la connexion. Veuillez réessayer.");
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