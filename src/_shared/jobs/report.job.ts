/**
 * Created by EdgeTech on 12/12/2016.
 */
import { WorkerQueue } from '../common';
import { Job } from './job';

export class ReportJob extends Job {
  private bvn: string;
  private user: string;
  private reportType: string;

  constructor() {
    super(WorkerQueue.PROCESS_WORK);
  }

  public getBvn() {
    return this.bvn;
  }

  public getUser() {
    return this.user;
  }

  public getReportType() {
    return this.reportType;
  }

  public setBvn(user: string) {
    this.bvn = user;
    return this;
  }

  public setUser(user: string) {
    this.user = user;
    return this;
  }

  public setReportType(reportType: string) {
    this.reportType = reportType;
    return this;
  }
}
