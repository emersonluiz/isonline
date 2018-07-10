import { ReportService } from './report.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {

  startDate: Date;
  finishDate: Date;

  constructor(private reportService: ReportService) { }

  ngOnInit() {
  }

  generate() {
    let start = this.startDate;
    start.setHours(0);
    start.setMinutes(0);
    start.setSeconds(0);

    let finish = this.finishDate;
    finish.setHours(23);
    finish.setMinutes(59);
    finish.setSeconds(59);

    this.reportService.getReport(start, finish).subscribe(
      rtn => {
        let blob = new Blob([rtn.blob()], { type: 'application/vnd.ms-excel' });
        let link = document.createElement("a");
        link.href = URL.createObjectURL(blob);
        link.download = 'report.xlsx';
        
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        console.log("Report generated successfully.");
      }
    )
  }
}
