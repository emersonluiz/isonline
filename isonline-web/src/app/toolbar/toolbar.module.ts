import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { PrincipalToolbarComponent } from './principal-toolbar/principal-toolbar.component';
import { MenuToolbarComponent } from './menu-toolbar/menu-toolbar.component';
import { ActionToolbarComponent } from './action-toolbar/action-toolbar.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
  declarations: [
    PrincipalToolbarComponent,
    MenuToolbarComponent,
    ActionToolbarComponent
  ],
  exports: [
    PrincipalToolbarComponent,
    MenuToolbarComponent,
    ActionToolbarComponent
  ]
})
export class ToolbarModule { }
