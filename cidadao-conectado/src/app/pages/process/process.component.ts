import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SuccessModalComponent } from '../../components/success-modal/success-modal.component';
import { NgForm } from '@angular/forms'; // Importe o NgForm

@Component({
  selector: 'app-process',
  templateUrl: './process.component.html',
  styleUrl: './process.component.css'
})
export class ProcessComponent {

  constructor(private dialog: MatDialog) {}

  // Método para enviar a solicitação
  submitRequest(form: NgForm): void {
    if (form.invalid) {
      console.log('Formulário inválido. Preencha todos os campos obrigatórios.');
      return;
    }

    // Aqui você pode adicionar a lógica para enviar o formulário
    console.log('Solicitação enviada com sucesso!', form.value);

    // Exibe o modal de sucesso
    this.showSuccessMessage();

    // Reseta o formulário após o envio (opcional)
    form.resetForm();
  }

  // Método para exibir o modal de sucesso
  showSuccessMessage(): void {
    this.dialog.open(SuccessModalComponent, {
      width: '450px',
      disableClose: true,
      panelClass: 'success-modal'
    });
  }
}
