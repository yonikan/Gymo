import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AppRoutingModule } from './app.routing';

// import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { AuthModule } from './auth/auth.module';
import { SettingsModule } from './settings/settings.module';
import { DashboardModule } from './dashboard/dashboard.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FeaturesComponent } from './features/features.component';

import { SidebarComponent } from './core/sidebar/sidebar.component';
import { ContentComponent } from './core/content/content.component';
import { HeaderBottomComponent } from './core/header-bottom/header-bottom.component';
import { HeaderTopComponent } from './core/header-top/header-top.component';
import { FooterComponent } from './core/footer/footer.component';

import { CanvasComponent } from './core/canvas/canvas.component';
import { MonitorDialogComponent } from './core/header-top/monitor-dialog/monitor-dialog.component';
import { AddWidgetDialogComponent } from './core/header-bottom/add-widget-dialog/add-widget-dialog.component';

import { MembersComponent } from './members/members.component';
import { HeaderComponent } from './core/header/header.component';

@NgModule({
  declarations: [
    CanvasComponent,
    HeaderComponent,
    HeaderTopComponent,
    MonitorDialogComponent,
    AddWidgetDialogComponent,
    HeaderBottomComponent,
    FooterComponent,
    ContentComponent,
    SidebarComponent,
    AppComponent,
    HomeComponent,
    FeaturesComponent,
    MembersComponent,
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
    // CoreModule,    
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    SharedModule.forRoot(),
    AuthModule,
    SettingsModule,
    DashboardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
