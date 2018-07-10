import { SiteService } from './../site.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-site-register',
  templateUrl: './site-register.component.html',
  styleUrls: ['./site-register.component.css']
})
export class SiteRegisterComponent implements OnInit {

  site: any = {host:'', description:'', auth:false, type:''};
  types: string[] = ['Service', 'Equipment', 'Other'];

  constructor(private router: Router, private siteService: SiteService) { }

  ngOnInit() {
    this.site.type = this.types[0];
    this.site.host = "http://"
  }

  onBack() {
    this.router.navigate(['site']);
  }

  save() {
    this.siteService.create(this.site).subscribe(
      rtn => {
        console.log("Save Successfull", rtn);
        this.onBack();
      }
    )
  }

}
