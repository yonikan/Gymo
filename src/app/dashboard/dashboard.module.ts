import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { ChartsModule } from 'ng2-charts';
import { DashboardRoutingModule } from './dashboard.routing';

import { DashboardStoreService } from './services/dashboardStore.service';
import { DashboardComponent } from './dashboard.component';
import { WidgetComponent } from './widget/widget.component';
import { SidebarDashboardComponent } from './sidebar-dashboard/sidebar-dashboard.component';
import { InvestigationComponent } from './investigation/investigation.component';

@NgModule({
  declarations: [
    DashboardComponent,
    WidgetComponent,
    SidebarDashboardComponent,
    InvestigationComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    DashboardRoutingModule,
    ChartsModule
  ],
  providers: [
    DashboardStoreService
  ]
})
export class DashboardModule { }
