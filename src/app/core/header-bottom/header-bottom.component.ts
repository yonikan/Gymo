import { Component, OnInit, Input, SimpleChanges, OnChanges  } from '@angular/core';
import { MdDialog } from '@angular/material';
import { Router } from '@angular/router';
import { AuthService } from '../../auth/services/auth.service';
import { AddWidgetDialogComponent } from './add-widget-dialog/add-widget-dialog.component';

import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';


@Component({
  selector: 'gymo-header-bottom',
  templateUrl: './header-bottom.component.html',
  styleUrls: ['./header-bottom.component.scss'],
  providers: [Location, {provide: LocationStrategy, useClass: PathLocationStrategy}] // adds the URL location service  
})
export class HeaderBottomComponent implements OnInit {

    @Input() actionsList: any[];
    isLoggedin;
    currentPage;

    constructor(
        public dialog: MdDialog,
        private router: Router,
        public authService: AuthService,
        private location: Location
     ) { }
  
    
    ngOnInit() {
      this.isLoggedin = this.authService.isLoggedin();
    }

    ngOnChanges(changes: SimpleChanges) {
      // for (let property in changes) {
      //   if (property === 'title') {
      //     console.log('Previous:', changes[property].previousValue);
      //     console.log('Current:', changes[property].currentValue);
      //   }
      // }
    }

  
    // ngOnChanges() {
    //   this.currentPage = this.location.path();
    //   console.log(this.currentPage);  

    //   if (this.currentPage === '/dashboard') {

    //   } else if (this.currentPage === '/dashboard/investigation') {

    //   } else {

    //   }
    // }

    openCreateWidgetDialog() {
      this.dialog.open(AddWidgetDialogComponent);
    }

    goBack() {    
      this.location.back();      
    }
}
