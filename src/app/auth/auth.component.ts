import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';
import { ANIMATE_ON_ROUTE_ENTER } from '../core/router.transition';

@Component({
  selector: 'gymo-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  animateOnRouteEnter = ANIMATE_ON_ROUTE_ENTER;
  
  isLogin: boolean = true;
  authPage: string = 'login';

  email: string;
  password: string;
  displayName: string;

  constructor(public authService: AuthService, private router: Router ) { }

  ngOnInit() {

  }
  
  signup() {
    this.authService.signup(this.email, this.password);
    // this.email = this.password = '';
    this.router.navigate(['/home']);
  }

  login() {
    this.authService.login(this.email, this.password);
    // this.email = this.password = '';
    this.router.navigate(['/home']); 
  }

  loginWithGoogle() {
    this.authService.loginWithGoogle();
    this.router.navigate(['/home']);     
  }

  logout() {
    this.authService.logout();
  }
}
