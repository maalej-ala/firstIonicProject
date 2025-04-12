import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',  // <-- Assurez-vous que le service est fourni dans 'root'
})
export class ApiService {
  private baseUrl = 'http://localhost:5000/api';

  constructor(private http: HttpClient) {}  // <-- Injection de HttpClient

  signupPatient(patientData: any) {
    return this.http.post(`${this.baseUrl}/signup/patient`, patientData);
  }
}