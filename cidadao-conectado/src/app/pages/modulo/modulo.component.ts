import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modulo',
  standalone: true,
  imports: [],
  templateUrl: './modulo.component.html',
  styleUrl: './modulo.component.css'
})
export class ModuloComponent {

  constructor(private router: Router) {}

      redirectTo(route: string): void {
        this.router.navigate([route]);
      }

}
