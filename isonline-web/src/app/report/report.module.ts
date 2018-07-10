import { FormsModule } from '@angular/forms';
import { ToolbarModule } from './../toolbar/toolbar.module';
import { MaterialModule } from './../material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportRoutingModule } from './report-routing.module';
import { ReportComponent } from './report.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReportRoutingModule,
    MaterialModule,
    ToolbarModule
  ],
  declarations: [
    ReportComponent
  ]
})
export class ReportModule { }
