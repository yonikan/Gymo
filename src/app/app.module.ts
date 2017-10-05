import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgMaterialModule } from './shared/ng-material.module';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AppRoutingModule } from './app.routing';

// import { CoreModule } from './core/core.module';
// import { SharedModule } from './shared/shared.module';
import { AuthModule } from './auth/auth.module';
import { DashboardModule } from './dashboard/dashboard.module';

import { AuthService } from './auth/services/auth.service';
import { AuthGuard } from './auth/services/auth-guard.service';
import { AppStoreService } from './shared/app-store.service';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FeaturesComponent } from './features/features.component';
import { SettingsComponent } from './settings/settings.component';

import { SidebarComponent } from './core/sidebar/sidebar.component';
import { ContentComponent } from './core/content/content.component';
import { HeaderBottomComponent } from './core/header-bottom/header-bottom.component';
import { HeaderTopComponent } from './core/header-top/header-top.component';
import { FooterComponent } from './core/footer/footer.component';

import { CanvasComponent } from './core/canvas/canvas.component';
import { MonitorDialogComponent } from './core/header-top/monitor-dialog/monitor-dialog.component';
import { AddWidgetDialogComponent } from './core/header-bottom/add-widget-dialog/add-widget-dialog.component';

import { ShowMenuDirective } from './shared/show-menu.directive';
import { NoDataComponent } from './shared/no-data/no-data.component';
import { MembersComponent } from './members/members.component';

@NgModule({
  declarations: [
    CanvasComponent,
    HeaderTopComponent,
    HeaderBottomComponent,
    FooterComponent,
    ContentComponent,
    SidebarComponent,
    AppComponent,
    HomeComponent,
    FeaturesComponent,
    SettingsComponent,
    MonitorDialogComponent,
    AddWidgetDialogComponent,
    NoDataComponent,
    ShowMenuDirective,
    MembersComponent
  ],
  entryComponents: [
    MonitorDialogComponent,
    AddWidgetDialogComponent   
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgMaterialModule,
    // CoreModule,
    // SharedModule,
    AuthModule,
    DashboardModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule
  ],
  providers: [
    AuthService,
    AuthGuard,
    AppStoreService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
