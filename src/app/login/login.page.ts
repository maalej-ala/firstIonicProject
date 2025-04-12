import { Component } from '@angular/core';
<<<<<<< HEAD
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
=======
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
>>>>>>> ff0545529bb7c35877499335c2d1de1aa7d8a5ca

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
<<<<<<< HEAD
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
=======
  standalone:false
})
export class LoginPage {
  constructor(private authService: AuthService, private router: Router) {}

  loginUser(
    //credentials

  ) {
    // Simulated role assignment (replace with API call)
    const role = 'doctor';
                // credentials.email.includes('doctor') ? 'doctor' :
                // credentials.email.includes('admin') ? 'admin' : 'patient';

    this.authService.setRole(role); // Store role in AuthService

    // Redirect user based on role
    if (role === 'doctor') {
      this.router.navigate(['/doctor-tabs']);
    } else if (role === 'admin') {
      this.router.navigate(['/admin-tabs']);
    } else {
      this.router.navigate(['/tabs']);
    }
  }
}
>>>>>>> ff0545529bb7c35877499335c2d1de1aa7d8a5ca
