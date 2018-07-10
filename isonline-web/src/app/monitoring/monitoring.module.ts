import { MaterialModule } from './../material/material.module';
import { ToolbarModule } from './../toolbar/toolbar.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MonitoringRoutingModule } from './monitoring-routing.module';
import { MonitoringComponent } from './monitoring.component';
import { MonitoringService } from './monitoring.service';
import { MonitoringDetailComponent } from './monitoring-detail/monitoring-detail.component';

@NgModule({
  imports: [
    CommonModule,
    MonitoringRoutingModule,
    ToolbarModule,
    MaterialModule
  ],
  declarations: [
    MonitoringComponent,
    MonitoringDetailComponent
  ],
  providers: [
    MonitoringService
  ]
})
export class MonitoringModule { }
