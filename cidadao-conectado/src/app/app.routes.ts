import { Routes } from '@angular/router';
import { SignupComponent } from './pages/signup/signup.component';
import { CheckListComponent } from './pages/check-list/check-list.component';
import { LayoutComponent } from './components/layout/layout.component';

export const routes: Routes = [
  {
    path: '', component: LayoutComponent, children: [
      { path: 'signup', component: SignupComponent },
      { path: 'check-list', component: CheckListComponent },
      { path: '', redirectTo: '/home', pathMatch: 'full' }
    ]
  }
];
