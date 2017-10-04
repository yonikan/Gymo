import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router';

import { MdDialog } from '@angular/material';
import { ANIMATE_ON_ROUTE_ENTER } from '../shared/router.transition';


@Component({
  selector: 'gymo-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss']
})
export class FeaturesComponent implements OnInit {

  // @Input() widgetType: any[];
  // @Input() widgetData: any[];

  animateOnRouteEnter = ANIMATE_ON_ROUTE_ENTER;
  isLoading: boolean = true; 
  isListViewMode: boolean = false; 

  constructor(private router: Router, public dialog: MdDialog ) { }

  ngOnInit() {
    setTimeout(() => {
      this.isLoading = false;
   }, 2000)

  }

  addToFavorites() {
    
  }

  toggleListView() {
    this.isListViewMode = !this.isListViewMode;     
  }

  directToInvestigation(widgetId: number) {
    this.router.navigate([`/dashboard/investigation/${widgetId}`]);
  }

  editWidget() {
    // this.dialog.open(AddWidgetDialogComponent);    
  }

  deleteWidget() {

  }
}
