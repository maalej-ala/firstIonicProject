import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
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
