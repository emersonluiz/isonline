import { Routes, RouterModule } from '@angular/router';

import { NgModule } from '@angular/core';
/*
import { AuthComponent } from './auth/auth.component';
import { AuthGuard } from './auth/auth.guard';
*/
const routes: Routes = [
  
  {
    path: '',
    loadChildren: 'src/app/home/home.module#HomeModule'
    //pathMatch: 'prefix', //default
    //redirectTo: 'monitoring'
  },
  {
    path: 'site',
    loadChildren: 'src/app/site/site.module#SiteModule'
    //canActivate: [AuthGuard]
  },
  {
    path: 'monitoring',
    loadChildren: 'src/app/monitoring/monitoring.module#MonitoringModule'
    //canActivate: [AuthGuard]
  },
  {
    path: 'report',
    loadChildren: 'src/app/report/report.module#ReportModule'
    //canActivate: [AuthGuard]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
