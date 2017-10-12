import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './auth.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { ForgotPassComponent } from './forgot-pass/forgot-pass.component';

const authRoutes: Routes = [
    { path: '', redirectTo: '/signin', pathMatch: 'full' },  
    // { path: 'auth', component: AuthComponent },
    { path: '',
      component: AuthComponent,
      children: [
        { path: 'signin', component: SigninComponent },
        { path: 'signup', component: SignupComponent },
        { path: 'forgot-pass', component: ForgotPassComponent }        
     ]
    }
]; 

@NgModule({
  imports: [
    RouterModule.forChild(authRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AuthRoutingModule {}
