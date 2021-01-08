export enum QueueTasks {
  UPLOAD_PHOTO = 'kc.task.upload.photo',
  SEND_SMS = 'kc.task.send.sms',
  SEND_EMAIL = 'kc.task.send.email',
  PING = 'kc.task.send.ping',
}

export enum WorkerQueue {
  PROCESS_WORK = 'kc.wevied.jobs.process.work',
}

export enum AppStatus {
  WORKER_ERROR = 1000
}
