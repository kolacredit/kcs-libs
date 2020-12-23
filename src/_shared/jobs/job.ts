import { WorkerQueue } from '../common';
import { QueueableData } from '../interfaces';
import { Utils } from '../utils';

export abstract class Job implements QueueableData {
  public queueName: string;
  protected id: string;

  constructor(queueName: WorkerQueue) {
    this.queueName = queueName;
    this.id = Utils.generateRandomID(16);
  }

  public getId() {
    return this.id;
  }
}
