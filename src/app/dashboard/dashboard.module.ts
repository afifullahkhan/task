import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { ComponentModule } from '../component/component.module';
import { MaterialModule } from '../material.module';
import { FormsModule } from '@angular/forms';
import { MatPaginatorModule } from '@angular/material/paginator';
import { DashboardService } from './dashboard.service';
import { HttpClientModule } from '@angular/common/http';
import { RightSidebarComponent } from './right-sidebar/right-sidebar.component';



@NgModule({
  declarations: [
    DashboardComponent,
    RightSidebarComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    HttpClientModule,
    
  ],exports:[DashboardComponent],
  providers:[DashboardService]
})
export class DashboardModule { }
