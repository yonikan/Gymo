import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsModule } from 'ng2-charts';

import { NgMaterialModule } from '../shared/ng-material.module';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { DashboardStoreService } from './services/dashboardStore.service';

import { DashboardComponent } from './dashboard.component';
import { WidgetComponent } from './widget/widget.component';
import { SidebarDashboardComponent } from './sidebar-dashboard/sidebar-dashboard.component';
import { InvestigationComponent } from './investigation/investigation.component';


const dashboardRoutes: Routes = [
  { path: '', component: DashboardComponent },
  {
    path: 'investigation',
    component: InvestigationComponent,
    data: { routerName: 'investigation' },
    children: [
       { path: ':id', component: InvestigationComponent }
    ]
  }
]; 

@NgModule({
  declarations: [
    DashboardComponent,
    WidgetComponent,
    SidebarDashboardComponent,
    InvestigationComponent
  ],
  imports: [
    RouterModule.forChild(dashboardRoutes),
    CommonModule,
    HttpModule,
    NgMaterialModule,
    ChartsModule
  ],
  providers: [
    DashboardStoreService
  ],
  exports: [
    RouterModule
  ]
})
export class DashboardModule { }
