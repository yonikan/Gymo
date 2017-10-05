import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'gymo-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

    noDataText = 'You havant added any data yet.';

    constructor(private router: Router) {}
  
    ngOnInit() {
      
    }
  
    directToInvestigation (widgetId: number) {
      this.router.navigate(['/investigation']);
    }
}
