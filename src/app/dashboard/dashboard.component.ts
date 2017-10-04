import { Component, OnInit } from '@angular/core';
import { ANIMATE_ON_ROUTE_ENTER } from '../shared/router.transition';

import { DashboardStoreService } from './services/dashboardStore.service';


@Component({
  selector: 'gymo-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  animateOnRouteEnter = ANIMATE_ON_ROUTE_ENTER; 
  widgetsData: any;

  constructor(private dashboardStoreService: DashboardStoreService ) { 

  }

  ngOnInit() {
    this.widgetsData = this.dashboardStoreService.getWidgetsData();
  }
}
