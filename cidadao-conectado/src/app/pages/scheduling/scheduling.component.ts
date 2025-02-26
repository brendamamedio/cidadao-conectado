import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SuccessModalComponent } from '../../components/success-modal/success-modal.component';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-agendamentos',
  templateUrl: './scheduling.component.html',
  styleUrl: './scheduling.component.css'
})
export class SchedulingComponent {

  constructor(private dialog: MatDialog) {}


  submitAgendamento(form: NgForm): void {
    if (form.invalid) {
      console.log('Formulário inválido. Preencha todos os campos obrigatórios.');
      return;
    }


    console.log('Agendamento enviado com sucesso!', form.value);


    this.showSuccessMessage();


    form.resetForm();
  }

  
  showSuccessMessage(): void {
    this.dialog.open(SuccessModalComponent, {
      width: '450px',
      disableClose: true,
      panelClass: 'success-modal'
    });
  }
}
