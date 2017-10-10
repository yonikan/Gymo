import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/services/auth.service';
import { ANIMATE_ON_ROUTE_ENTER } from '../core/router.transition';

@Component({
  selector: 'gymo-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  animateOnRouteEnter = ANIMATE_ON_ROUTE_ENTER;
  
  constructor(public authService: AuthService) { }

  ngOnInit() {
    this.authService.isLoggedin();
  }
}
