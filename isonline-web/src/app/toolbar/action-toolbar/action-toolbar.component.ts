import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-action-toolbar',
  templateUrl: './action-toolbar.component.html',
  styleUrls: ['./action-toolbar.component.css']
})
export class ActionToolbarComponent implements OnInit {

  @Input() title;
  @Output() onBack: EventEmitter<any> = new EventEmitter();

  constructor(private route: Router) { }

  ngOnInit() {
  }

  onClickBack() {
    this.onBack.emit();
  }
}
