import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule instead of BrowserModule
import { RouterModule } from '@angular/router';

import { ComponentsModule } from '../components/components.module';
import { SignupComponent } from './signup/signup.component';
import { CheckListComponent } from './check-list/check-list.component';
import { AppComponent } from '../app.component'; // Import AppComponent

@NgModule({
  declarations: [
    SignupComponent,
    CheckListComponent,
  ],
  imports: [
    CommonModule, // Use CommonModule here
    ComponentsModule,
    // RouterModule
  ],
  // bootstrap: [AppComponent], // Bootstrap AppComponent (if this is the root module)
})
export class PagesModule { }
