import { Component, OnInit, Input } from '@angular/core';
import { MdDialog } from '@angular/material';
import { Router } from '@angular/router';
import { AuthService } from '../../auth/services/auth.service';
import { AddWidgetDialogComponent } from './add-widget-dialog/add-widget-dialog.component';


@Component({
  selector: 'gymo-header-bottom',
  templateUrl: './header-bottom.component.html',
  styleUrls: ['./header-bottom.component.scss']
})
export class HeaderBottomComponent implements OnInit {

    @Input() actionsList: any[];
  
    constructor(public dialog: MdDialog, private router: Router, public authService: AuthService ) { }
  
    ngOnInit() {

    }
  
    openCreateWidgetDialog() {
      this.dialog.open(AddWidgetDialogComponent);
    }

    goBack() {
      this.router.navigate(['/dashboard']);      
    }
}
