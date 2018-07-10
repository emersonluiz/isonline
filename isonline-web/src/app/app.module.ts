import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { HttpService } from './http/http.service';
import { HttpModule } from '@angular/http';
import { CookieService } from './cookie/cookie.service';
import { AppConfigService } from './app-config.service';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpModule,
    ServiceWorkerModule.register('/geo/ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [
    HttpService,
    AppConfigService,
    CookieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
