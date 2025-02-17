import { Routes } from '@angular/router';
import { SignupComponent } from './pages/signup/signup.component';
import { CheckListComponent } from './pages/check-list/check-list.component';
import { LayoutComponent } from './components/layout/layout.component';
import { LoginComponent } from './pages/login/login.component';

export const routes: Routes = [
  {
    path: '', component: LayoutComponent, children: [
      { path: 'check-list', component: CheckListComponent },
      { path: '', redirectTo: '/check-list', pathMatch: 'full' }
    ]
  },
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },

];
