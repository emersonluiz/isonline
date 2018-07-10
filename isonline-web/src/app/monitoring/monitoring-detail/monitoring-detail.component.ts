import { MonitoringService } from './../monitoring.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-monitoring-detail',
  templateUrl: './monitoring-detail.component.html',
  styleUrls: ['./monitoring-detail.component.css']
})
export class MonitoringDetailComponent implements OnInit {

  id: string = "";
  monitoring: any = {}

  constructor(private router: Router,
              private route: ActivatedRoute,
              private monitoringService: MonitoringService) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: any) => {
        this.id = params["id"];
        this.monitoringService.findOne(this.id).subscribe(
          rtn => {
            console.log(rtn)
            this.monitoring = rtn;
          }
        )
      }
    )
  }

  onBack() {
    this.router.navigate(['monitoring']);
  }
}
