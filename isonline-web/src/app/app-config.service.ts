import { Injectable } from '@angular/core';

@Injectable()
export class AppConfigService {

  constructor() { }

  private privateBaseUrl: string = 'http://localhost';
  private privateApiUrl: string = ':3001';
  private privateSiteUrl: string = '/sites';
  private privateMonitoringUrl: string = '/checks';
  private privateMonitoringLastMonthUrl: string = '/last/month';
  private privateReportUrl: string = '/reports';

  public get baseUrl(): string {
    return this.privateBaseUrl
  }

  public get apiUrl(): string {
      return this.privateApiUrl
  }

  public get siteUrl() {
    return this.privateSiteUrl;
  }

  public get monitoringUrl() {
    return this.privateMonitoringUrl;
  }

  public get monitoringLastMonthUrl() {
    return this.privateMonitoringUrl + this.privateMonitoringLastMonthUrl;
  }

  public get reportUrl() {
    return this.privateReportUrl;
  }
}
