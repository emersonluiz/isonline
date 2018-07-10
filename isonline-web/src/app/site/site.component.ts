import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SiteService } from './site.service';

@Component({
  selector: 'app-site',
  templateUrl: './site.component.html',
  styleUrls: ['./site.component.css']
})
export class SiteComponent implements OnInit {

  list: any = [];

  constructor(private router: Router, private siteService: SiteService) { }

  ngOnInit() {
    this.listAll();
  }

  onAdd() {
    this.router.navigate(['site', 'new']);
  }

  onDelete(id) {
    this.siteService.remove(id).subscribe(
      rtn => {
        this.listAll();
      }
    )
  }

  listAll() {
    this.siteService.listAll().subscribe(
      rtn => {
        console.log(rtn)
        this.list = rtn;
      }
    )
  }

}
