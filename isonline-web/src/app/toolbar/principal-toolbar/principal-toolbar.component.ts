import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-principal-toolbar',
  templateUrl: './principal-toolbar.component.html',
  styleUrls: ['./principal-toolbar.component.css']
})
export class PrincipalToolbarComponent implements OnInit {

  @Input() title;

  constructor() { }

  ngOnInit() {
  }

}
