// app.component.ts
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ComponentsModule } from './components/components.module';
import { PagesModule } from './pages/pages.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ComponentsModule, PagesModule],
  template: '<router-outlet></router-outlet>',
})
export class AppComponent { }
