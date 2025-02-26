import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-check-list',
  templateUrl: './check-list.component.html',
  styleUrl: './check-list.component.css'
})
export class CheckListComponent {

  constructor(private router: Router) {}

  redirectTo(route: string): void {
    this.router.navigate([route]);
  }
}
