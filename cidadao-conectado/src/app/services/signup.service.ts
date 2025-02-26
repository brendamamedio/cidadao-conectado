import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root' // Disponível em toda a aplicação
})
export class SignupService {
  private apiUrl = 'http://localhost:8080/auth/register';

  constructor(private http: HttpClient) {}

  registerUser(userData: any): Observable<any> {
    console.log("Chamando API de cadastro com dados:", userData);
    return this.http.post<any>(this.apiUrl, userData);
  }
}
