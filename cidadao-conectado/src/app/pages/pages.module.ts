import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; // Import CommonModule instead of BrowserModule
import { RouterModule } from '@angular/router';

import { ComponentsModule } from '../components/components.module';
import { SignupComponent } from './signup/signup.component';
import { CheckListComponent } from './check-list/check-list.component';
import { AppComponent } from '../app.component'; // Import AppComponent
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    SignupComponent,
    CheckListComponent
  ],
  imports: [
    FormsModule,
    CommonModule, // Use CommonModule here
    ComponentsModule,
    ReactiveFormsModule
    // RouterModule
  ],
  exports: [ // Exportar componentes se forem usados em outros módulos
    SignupComponent,
    CheckListComponent
  ]
  // bootstrap: [AppComponent], // Bootstrap AppComponent (if this is the root module)
})
export class PagesModule { }
