import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DashboardStoreService } from '../services/dashboardStore.service';

@Component({
  selector: 'gymo-investigation',
  templateUrl: './investigation.component.html',
  styleUrls: ['./investigation.component.scss']
})
export class InvestigationComponent implements OnInit {

  routerName = this.route.snapshot.data['routerName']; 
  investigationData;

  constructor(
     private route: ActivatedRoute,
     private router: Router, 
     private dashboardStoreService: DashboardStoreService
  ) { }

  ngOnInit() {
    console.log(this.routerName);

    // this.investigationData = this.dashboardStoreService.getWidgetData(1);
    
  }

}
