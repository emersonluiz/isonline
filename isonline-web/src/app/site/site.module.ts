import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { SiteRoutingModule } from './site-routing.module';
import { ToolbarModule } from '../toolbar/toolbar.module';
import { SiteService } from './site.service';
import { SiteComponent } from './site.component';
import { SiteRegisterComponent } from './site-register/site-register.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    SiteRoutingModule,
    ToolbarModule
  ],
  declarations: [
    SiteComponent,
    SiteRegisterComponent
  ],
  providers: [
    SiteService
  ]
})
export class SiteModule { }
