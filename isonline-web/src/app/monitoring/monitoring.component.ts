import { Router } from '@angular/router';
import { SiteService } from './../site/site.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { MonitoringService } from './monitoring.service';

@Component({
  selector: 'app-monitoring',
  templateUrl: './monitoring.component.html',
  styleUrls: ['./monitoring.component.css']
})
export class MonitoringComponent implements OnInit, OnDestroy {

  list: any = [];
  inter: any;

  constructor(private monitoringService: MonitoringService,
              private siteService: SiteService,
              private router: Router) { }

  ngOnInit() {
    this.generateList();
  
    this.inter = setInterval(
      () => {
      console.log("Last Update Verified")
      this.generateList();
    }, 10000);

  }

  ngOnDestroy() {
    clearInterval(this.inter);
  }

  generateList() {
    this.monitoringService.listAll().subscribe(
      rt => {
        this.siteService.listAll().subscribe(
          rtn => {
            if(rtn.length === rt.length) {
              this.list = rt;
            }
          }
        )
      }
    )
  }

  onDetail(id: string) {
    clearInterval(this.inter);
    this.router.navigate(['monitoring', 'detail', id]);
  }

}
