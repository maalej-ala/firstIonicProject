import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root' // Makes this service available throughout the app
})
export class AuthService {
  private role: 'doctor' | 'admin' | 'patient' | null = null; // Store user role

  constructor() {}

  // ✅ Set role after login
  setRole(role: 'doctor' | 'admin' | 'patient') {
    this.role = role;
    localStorage.setItem('userRole', role); // Store role in localStorage
  }

  // ✅ Get the stored role
  getRole(): 'doctor' | 'admin' | 'patient' | null {
    return this.role || (localStorage.getItem('userRole') as 'doctor' | 'admin' | 'patient' | null);
  }

  // ✅ Check if user is authenticated
  isAuthenticated(): boolean {
    return this.getRole() !== null; // If role exists, user is authenticated
  }

  // ✅ Log out the user
  logout() {
    this.role = null;
    localStorage.removeItem('userRole'); // Remove role from localStorage
  }
}
