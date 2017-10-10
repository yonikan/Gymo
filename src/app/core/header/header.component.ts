import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/services/auth.service';

@Component({
  selector: 'gymo-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isLoggedin;  
  testArr: string[];

  constructor(public authService: AuthService) { }

  ngOnInit() {
    this.isLoggedin = this.authService.isLoggedin();    
    this.testArr = [
      'back',
      'add_widget',
      'save_dashboard'
    ];
  }

}
