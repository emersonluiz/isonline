import { HomeService } from './home.service';
import { HomeComponent } from './home.component';
import { ToolbarModule } from './../toolbar/toolbar.module';
import { MaterialModule } from './../material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeDetailComponent } from './home-detail/home-detail.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    HomeRoutingModule,
    ToolbarModule
  ],
  declarations: [
    HomeComponent,
    HomeDetailComponent
  ],
  providers: [
    HomeService
  ]
})
export class HomeModule { }
