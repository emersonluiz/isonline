import { element } from 'protractor';
import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';

import { Chart } from "chart.js";
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, AfterViewInit {

  canvas: any;
  ctx: any;
  list = [];
  month: number;
  year: number;
  lineChart:any;
  selected: any[] = [];

  dataOnline = [];
  dataOffline = [];
  label = [];

  monthDescription = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  constructor(private homeService: HomeService) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.loadLastMonth();
  }

  setChart() {
    this.dataOnline = [];
    this.dataOffline = [];
    this.label = [];

    this.list.forEach(element => {
      this.dataOnline.push(element.totalOnline);
      this.dataOffline.push(element.totalOffline);
      this.label.push(element.day);
    });

    this.canvas = document.getElementById('homeChart');
    this.ctx = this.canvas.getContext('2d');
    this.drawChart();
  }

  drawChart() {
    this.lineChart = new Chart(this.ctx, {
      type: 'line',
      data: {
          datasets: [
            {
              label: 'Online',
              data: this.dataOnline,
              backgroundColor: 'rgb(54, 162, 235)',
              borderColor: 'rgb(54, 162, 235)',
              fill: false
            },
            {
              label: 'Offline',
              data: this.dataOffline,
              backgroundColor: 'rgb(255, 99, 132)',
              borderColor: 'rgb(255, 99, 132)',
              fill: false
            }
          ],
          labels: this.label
      },
      options: {
        responsive: true,
        title: {
          display: true,
          text: 'Monitoring of the ' + this.monthDescription[new Date().getMonth()]
        },
        tooltips: {
          mode: 'index',
          intersect: false,
        },
        hover: {
          mode: 'nearest',
          intersect: true
        },
        scales: {
          xAxes: [{
            display: true,
            scaleLabel: {
              display: true,
              labelString: 'Day'
            }
          }],
          yAxes: [{
            display: true,
            scaleLabel: {
              display: true,
              labelString: 'Value'
            }
          }]
        },
        onClick: (event, a) => {
          if(a.length > 0) {
            this.selectItem((a[0]["_index"]+1));
          }
        }
      }
    
    });
  }

  loadLastMonth() {
    this.homeService.listLastMonth().subscribe(
      rtn => {
        this.setListMonth();

        rtn.forEach(element => {
          let date = new Date(element.date);

          this.list.forEach(item => {
            if(date.getDate() === item.day) {
              if(element.status) {
                item.totalOnline+=1;
                item.elements.push(element);
              } else {
                item.totalOffline+=1;
                item.elements.push(element);
              }
              
            }
          })
          
        });

        this.setChart();
      }
    )
  }

  setListMonth() {
    let d = new Date();
    let date = new Date(d.getFullYear(), d.getMonth() + 1, 0);

    this.month = date.getMonth();
    this.year = date.getUTCFullYear();

    let day = date.getDate();

    for(let i=1; i<=day; i++) {
      this.list.push({day:i, totalOnline:0, totalOffline:0, elements:[]});
    }
  }

  selectItem(day) {
    this.list.forEach(element => {
      if(day === element.day) {
        this.selected = element.elements;
      }
    });
  }

  onBack() {
    this.selected = [];
  }

}
