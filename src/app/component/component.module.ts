import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { MaterialModule } from '../material.module';
import { FormsModule } from '@angular/forms';
import { DashboardModule } from '../dashboard/dashboard.module';



@NgModule({
  declarations: [
    SidebarComponent,
    HeaderComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    DashboardModule
  ],
  exports:[HeaderComponent,SidebarComponent]
})
export class ComponentModule { }
