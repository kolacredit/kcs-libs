/**
 * Created by EdgeTech on 12/12/2016.
 */
import { WorkerQueue } from '../common';
import { Job } from './job';

export class ReportJob extends Job {
  private _bvn: string;
  private _user: string;
  private _reportType: string;

  constructor() {
    super(WorkerQueue.PROCESS_WORK);
  }

  get bvn() {
    return this._bvn;
  }

  get user() {
    return this._user;
  }

  get reportType() {
    return this._reportType;
  }

  public setBvn(user: string) {
    this._bvn = user;
    return this;
  }

  public setUser(user: string) {
    this._user = user;
    return this;
  }

  public setReportType(reportType: string) {
    this._reportType = reportType;
    return this;
  }
}
