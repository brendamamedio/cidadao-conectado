import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SidebarComponent } from './sidebar/sidebar.component';
import { LayoutComponent } from './layout/layout.component';
import { SuccessModalComponent } from './success-modal/success-modal.component';

@NgModule({
  declarations: [
    SidebarComponent,
    LayoutComponent,
    SuccessModalComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    SidebarComponent,
    LayoutComponent,
    SuccessModalComponent
  ],
})
export class ComponentsModule { }
