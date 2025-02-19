import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    ReactiveFormsModule,
  ],
  providers: [
    LoginService
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'] // Corrigido de 'styleUrl' para 'styleUrls'
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(
    private router: Router,
    private loginService: LoginService,
    private toastService: ToastrService
  ) {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)])
    });
  }

  submit() {
    if (this.loginForm.invalid) {
      this.toastService.error("Preencha os campos corretamente!");
      return;
    }

    this.loginService.login(
      this.loginForm.value.email,
      this.loginForm.value.password
    ).subscribe({
      next: () => this.toastService.success("Login feito com sucesso!"),
      error: () => this.toastService.error("Erro inesperado! Tente novamente mais tarde")
    });
  }

  redirectTo(route: string): void {
    this.router.navigate([route]);
  }
}
