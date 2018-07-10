import { HttpService } from './../http/http.service';
import { AppConfigService } from './../app-config.service';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  private url: string

  constructor(private httpService: HttpService, private appService: AppConfigService) {
    this.url = this.appService.baseUrl + this.appService.apiUrl
  }

  getReport(startDate, finishDate) {
    return this.httpService.getFile(this.url + this.appService.reportUrl + "?startDate=" + startDate + "&finishDate=" + finishDate)
            .map(res => res)
            .catch(error => this.httpService.handleError(error))
  }

}
