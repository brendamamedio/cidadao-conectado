import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-success-modal',
  template: `
    <div class="modal-content">
      <h2>Sucesso!</h2>
      <p>Os dados foram enviados com sucesso.</p>
      <button mat-button (click)="closeModal()">Fechar</button>
    </div>
  `,
  styleUrls: ['./success-modal.component.css']
})
export class SuccessModalComponent {
  constructor(private dialogRef: MatDialogRef<SuccessModalComponent>) {}

  closeModal(): void {
    this.dialogRef.close();
  }
}
