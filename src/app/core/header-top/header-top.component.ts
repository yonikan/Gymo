import { Component, OnInit } from '@angular/core';
import { MdDialog } from '@angular/material';
import { Router } from '@angular/router';

import { AuthService } from '../../auth/services/auth.service';
import { MonitorDialogComponent } from './monitor-dialog/monitor-dialog.component';

@Component({
  selector: 'gymo-header-top',
  templateUrl: './header-top.component.html',
  styleUrls: ['./header-top.component.scss']
})
export class HeaderTopComponent implements OnInit {

    username;
    isLoggedin;

    constructor(public dialog: MdDialog, public authService: AuthService, private router: Router ) {
  
    } 
  
    ngOnInit() {
      this.username = this.authService.user;
      // console.log(this.username);
      this.isLoggedin = this.authService.isLoggedin();
    }
  
    openMonitorDialog() {
      this.dialog.open(MonitorDialogComponent);
    }
  
    logout() {
      this.authService.logout();
      this.router.navigate(['/auth']);    
    }
}
