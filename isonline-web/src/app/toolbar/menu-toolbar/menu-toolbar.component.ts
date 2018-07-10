import { Component, OnInit, Input } from '@angular/core';
import { Routes, Router } from '@angular/router';

@Component({
  selector: 'app-menu-toolbar',
  templateUrl: './menu-toolbar.component.html',
  styleUrls: ['./menu-toolbar.component.css']
})
export class MenuToolbarComponent implements OnInit {

  @Input() active: string;

  constructor(private route: Router) { }

  ngOnInit() {
  }

  onSite() {
    this.route.navigate(['site']);
  }

  onMonitoring() {
    this.route.navigate(['monitoring']);
  }

  onHome() {
    this.route.navigate(['']);
  }

  onReport() {
    this.route.navigate(['report']);
  }
}
