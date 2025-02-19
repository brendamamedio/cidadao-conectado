import { Component } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  // Propriedades para armazenar os valores dos campos do formulário
  name: string = '';
  email: string = '';
  password: string = '';
  confirmPassword: string = '';
  birthdate: string = '';
  responseMessage: string = '';
  responseColor: string = '';

  constructor() {}

  // Método para lidar com o envio do formulário
  async onSubmit(event: Event): Promise<void> {
    event.preventDefault(); // Evita o recarregamento da página

    // Verifica se todos os campos estão preenchidos
    if (!this.name || !this.email || !this.password || !this.confirmPassword || !this.birthdate) {
      this.responseMessage = "Preencha todos os campos.";
      this.responseColor = "red";
      return;
    }

    // Valida se as senhas coincidem
    if (this.password !== this.confirmPassword) {
      this.responseMessage = "As senhas não coincidem.";
      this.responseColor = "red";
      return;
    }

    // Validação da data de nascimento
    const today = new Date();
    const birthDate = new Date(this.birthdate);
    if (isNaN(birthDate.getTime())) {
      this.responseMessage = "Data de nascimento inválida.";
      this.responseColor = "red";
      return;
    }

    // Calcula a idade
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }

    if (age < 18) {
      this.responseMessage = "Você precisa ter pelo menos 18 anos para se cadastrar.";
      this.responseColor = "red";
      return;
    }

    // Dados a serem enviados ao back-end
    const userData = {
      name: this.name,
      email: this.email,
      password: this.password,
      age: age
    };

    try {
      const response = await fetch('http://localhost:8080/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Erro ao cadastrar usuário.");
      }

      const data = await response.json();
      this.responseMessage = "Cadastro realizado com sucesso!";
      this.responseColor = "green";
      console.log("Resposta do back-end:", data);

      // Limpa o formulário após o sucesso
      this.name = '';
      this.email = '';
      this.password = '';
      this.confirmPassword = '';
      this.birthdate = '';
    } catch (error: any) {
      this.responseMessage = error.message;
      this.responseColor = "red";
      console.error("Erro:", error);
    }
  }
}
