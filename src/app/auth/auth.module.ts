import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgMaterialModule } from '../shared/ng-material.module';
import { RouterModule, Routes } from '@angular/router';

import { AuthComponent } from './auth.component';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './services/auth-guard.service';

const authRoutes: Routes = [
  { path: '', component: AuthComponent }
]; 

@NgModule({
  declarations: [
    AuthComponent
  ],
  imports: [
    RouterModule.forChild(authRoutes),
    CommonModule,
    NgMaterialModule,
    FormsModule
  ],
  providers: [
    AuthService,
    AuthGuard
  ],
  exports: [
    RouterModule
  ]
})
export class AuthModule { }
