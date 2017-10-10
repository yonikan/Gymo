import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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
  results;
  
  constructor(private http: HttpClient, private dashboardStoreService: DashboardStoreService ) { 

  }

  ngOnInit() {
    this.widgetsData = this.dashboardStoreService.getWidgetsData();

    // this.getWidgetsData(); 
    // this.widgetsData = this.getWidgetsData();    
    // console.log(this.widgetsData);
  }

  // getWidgetsData(){
  //   return this.http.get('assets/json/widgets.json').subscribe(data => {
  //     console.log(data['results']);
  //     this.widgetsData = data['results'];
  //   });
  // }
}
