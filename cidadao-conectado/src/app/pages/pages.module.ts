import { ProcessComponent } from './process/process.component';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // Importe FormsModule e ReactiveFormsModule
import { CommonModule } from '@angular/common'; // Importe o CommonModule
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog'; // Importe o MatDialogModule

import { ComponentsModule } from '../components/components.module';
import { SignupComponent } from './signup/signup.component';
import { CheckListComponent } from './check-list/check-list.component';
import { SchedulingComponent } from './scheduling/scheduling.component'; // Importe o SchedulingComponent
import { LoginComponent } from './login/login.component'; // Importe o LoginComponent
import { HomeComponent } from './home/home.component';
import { ModuloComponent } from './modulo/modulo.component';
import { ComplaintComponent } from './complaint/complaint.component';

@NgModule({
  declarations: [
    SignupComponent,
    CheckListComponent,
    SchedulingComponent, // Adicione o SchedulingComponent aqui
    LoginComponent, // Adicione o LoginComponent aqui
    HomeComponent,
    ProcessComponent,
    ModuloComponent,
    ComplaintComponent
  ],
  imports: [
    CommonModule, // Use CommonModule aqui (apenas uma vez)
    FormsModule, // Adicione o FormsModule
    ReactiveFormsModule, // Adicione o ReactiveFormsModule
    HttpClientModule, // Adicione o HttpClientModule
    MatSnackBarModule, // Adicione o MatSnackBarModule
    MatDialogModule, // Adicione o MatDialogModule
    RouterModule, // Adicione o RouterModule, se necessário
    ComponentsModule // Adicione o ComponentsModule
  ],
  exports: [ // Exportar componentes se forem usados em outros módulos
    SignupComponent,
    CheckListComponent,
    SchedulingComponent, // Exporte o SchedulingComponent se necessário
    ProcessComponent,
    LoginComponent // Exporte o LoginComponent se necessário
  ]
})
export class PagesModule { }
