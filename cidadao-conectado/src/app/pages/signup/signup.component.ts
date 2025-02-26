import { Component } from '@angular/core';
import { SignupService } from '../../services/signup.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  name: string = '';
  email: string = '';
  password: string = '';
  confirmPassword: string = '';
  birthdate: string = '';
  responseMessage: string = '';
  responseColor: string = '';

  constructor(private http: HttpClient) {}

async onSubmit(event: Event): Promise<void> {
    event.preventDefault();
    console.log("🚀 Botão Cadastrar clicado! onSubmit() chamado.");

    const userData = {
      name: this.name.trim(),
      email: this.email.trim(),
      password: this.password.trim(),
      age: 20
    };

    console.log("📡 Enviando requisição manualmente:", userData);

    this.http.post('http://localhost:8080/auth/register', userData).subscribe({
      next: (data) => console.log("🟢 Resposta da API:", data),
      error: (error) => console.error("🔴 Erro na API:", error)
    });
}

  private setResponse(message: string, color: string): void {
    this.responseMessage = message;
    this.responseColor = color;
  }

  private clearForm(): void {
    this.name = '';
    this.email = '';
    this.password = '';
    this.confirmPassword = '';
    this.birthdate = '';
  }
}
