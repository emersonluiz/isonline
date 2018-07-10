import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SiteComponent } from './site.component';
import { SiteRegisterComponent } from './site-register/site-register.component';

const siteRoutes: Routes = [
    { path:'', component: SiteComponent },
    { path:'new', component: SiteRegisterComponent }
]

@NgModule({
    imports: [RouterModule.forChild(siteRoutes)],
    exports: [RouterModule]
})
export class SiteRoutingModule {

}