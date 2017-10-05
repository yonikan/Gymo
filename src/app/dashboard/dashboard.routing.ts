import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InvestigationComponent } from './investigation/investigation.component';
import { DashboardComponent } from './dashboard.component';

const dashboardRoutes: Routes = [
    { path: '', component: DashboardComponent },
    {
      path: 'investigation',
      component: InvestigationComponent,
      children: [
         { 
           path: ':id',
           component: InvestigationComponent,
           data: { routerName: 'investigation' }         
         }
      ]
    }
  ]; 

@NgModule({
  imports: [
    RouterModule.forChild(dashboardRoutes)    
  ],
  exports: [RouterModule]
})
export class DashboardRoutingModule {}
