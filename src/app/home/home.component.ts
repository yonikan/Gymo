import { Component, OnInit } from '@angular/core';
import { ANIMATE_ON_ROUTE_ENTER } from '../shared/router.transition';
import { AuthService } from '../auth/services/auth.service';

@Component({
  selector: 'gymo-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  animateOnRouteEnter = ANIMATE_ON_ROUTE_ENTER;
  
  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authService.isLoggedin();
  }

}
