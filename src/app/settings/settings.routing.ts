import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SettingsComponent } from './settings.component';
import { ProfileComponent } from './profile/profile.component';
import { GeneralComponent } from './general/general.component';
import { ChangePasswordComponent } from './change-password/change-password.component';

const settingsRoutes: Routes = [
    { path: '', redirectTo: '/profile', pathMatch: 'full' },  
    { path: 'settings', component: SettingsComponent },
    { path: '',
      component: SettingsComponent,
      children: [
        { path: 'profile', component: ProfileComponent },
        { path: 'general', component: GeneralComponent },
        { path: 'change_password', component: ChangePasswordComponent }
     ]
    }
  ]; 

@NgModule({
  imports: [
    RouterModule.forChild(settingsRoutes)    
  ],
  exports: [RouterModule]
})
export class SettingsRoutingModule {}