import { Routes } from '@angular/router';
import { SignupComponent } from './pages/signup/signup.component';
import { CheckListComponent } from './pages/check-list/check-list.component';
import { LayoutComponent } from './components/layout/layout.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { ModuloComponent } from './pages/modulo/modulo.component';
import { SchedulingComponent } from './pages/scheduling/scheduling.component';
import { ProcessComponent } from './pages/process/process.component';
import { SchedulesComponent } from './pages/schedules/schedules.component';

export const routes: Routes = [
  {
    path: '', component: LayoutComponent, children: [
      { path: 'check-list', component: CheckListComponent },
      { path: 'home', component: HomeComponent },
      { path: 'modulo', component: ModuloComponent },
      { path: 'scheduling', component: SchedulingComponent },
      { path: 'process', component: ProcessComponent },
      { path: 'schedules', component: SchedulesComponent },
      { path: '', redirectTo: '/home', pathMatch: 'full' }
    ]
  },
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },

];
