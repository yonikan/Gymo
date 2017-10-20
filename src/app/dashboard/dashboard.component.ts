import { Component, OnInit } from '@angular/core';
import { DashboardStoreService } from './services/dashboardStore.service';
import { ANIMATE_ON_ROUTE_ENTER } from '../core/router.transition';

@Component({
  selector: 'gymo-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  animateOnRouteEnter = ANIMATE_ON_ROUTE_ENTER; 
  widgetsData;
  
  constructor(private dashboardStoreService: DashboardStoreService ) {}

  ngOnInit() {
    this.widgetsData = this.dashboardStoreService.getWidgetsData();
    // this.dashboardStoreService.test().subscribe( data => { 
    //   this.widgetsData = data.results;
    // });
  }
}
