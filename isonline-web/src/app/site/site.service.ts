import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';
import { AppConfigService } from '../app-config.service';

@Injectable({
  providedIn: 'root'
})
export class SiteService {

  private url: string;

  constructor(private httpService: HttpService, private appService: AppConfigService) {
    this.url = this.appService.baseUrl + this.appService.apiUrl
  }

  listAll() {
    return this.httpService.get(this.url + this.appService.siteUrl)
            .map(res => this.httpService.extractData(res))
            .catch(error => this.httpService.handleError(error))
  }

  create(data: any) {
    return this.httpService.post(this.url + this.appService.siteUrl, data)
            .map(res => this.httpService.extractData(res))
            .catch(error => this.httpService.handleError(error))
  }

  remove(id: string) {
    return this.httpService.delete(this.url + this.appService.siteUrl + "/" + id)
            .map(res => this.httpService.extractData(res))
            .catch(error => this.httpService.handleError(error))
  }
}
