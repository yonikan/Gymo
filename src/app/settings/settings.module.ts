import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { SettingsRoutingModule } from './settings.routing';

import { SettingsComponent } from './settings.component';
import { ProfileComponent } from './profile/profile.component';
import { GeneralComponent } from './general/general.component';
import { ChangePasswordComponent } from './change-password/change-password.component';

@NgModule({
  declarations: [
    SettingsComponent,
    ProfileComponent,
    GeneralComponent,
    ChangePasswordComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    SettingsRoutingModule
  ],
  providers: [

  ]
})
export class SettingsModule { }
