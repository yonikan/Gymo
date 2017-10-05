import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { NgMaterialModule } from '../shared/ng-material.module';

import { ChartsModule } from 'ng2-charts';
import { DashboardStoreService } from './services/dashboardStore.service';

import { DashboardComponent } from './dashboard.component';
import { WidgetComponent } from './widget/widget.component';
import { SidebarDashboardComponent } from './sidebar-dashboard/sidebar-dashboard.component';
import { InvestigationComponent } from './investigation/investigation.component';
import { DashboardRoutingModule } from './dashboard.routing';

@NgModule({
  declarations: [
    DashboardComponent,
    WidgetComponent,
    SidebarDashboardComponent,
    InvestigationComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,    
    HttpModule,
    NgMaterialModule,
    ChartsModule
  ],
  providers: [
    DashboardStoreService
  ]
})
export class DashboardModule { }
