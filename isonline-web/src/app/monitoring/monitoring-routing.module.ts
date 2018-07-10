import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MonitoringComponent } from './monitoring.component';
import { MonitoringDetailComponent } from './monitoring-detail/monitoring-detail.component';

const monitoringRoutes: Routes = [
    { path:'', component:  MonitoringComponent},
    { path:'detail/:id', component:  MonitoringDetailComponent}
]

@NgModule({
    imports: [RouterModule.forChild(monitoringRoutes)],
    exports: [RouterModule]
})
export class MonitoringRoutingModule {

}