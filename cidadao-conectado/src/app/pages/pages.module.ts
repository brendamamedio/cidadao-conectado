import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TableModule } from 'primeng/table';
import { ComponentsModule } from '../components/components.module';
import { InputTextareaModule } from 'primeng/inputtextarea';

import { SignupComponent } from './signup/signup.component';
import { CheckListComponent } from './check-list/check-list.component';
import { AppComponent } from '../app.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SchedulesComponent } from './schedules/schedules.component';
import { SchedulingComponent } from './scheduling/scheduling.component';


console.log("✅ PagesModule foi carregado!");

@NgModule({
  declarations: [
    SignupComponent,
    CheckListComponent,
    SchedulesComponent,
    SchedulingComponent,
  ],
  imports: [
    FormsModule,
    CommonModule,
    ComponentsModule,
    ReactiveFormsModule,
    HttpClientModule,
    TableModule,
    InputTextareaModule

  ],
  exports: [
    SignupComponent,
    CheckListComponent
  ]

})
export class PagesModule { }
