export enum QueueTasks {
  UPLOAD_PHOTO = 'task.upload.photo',
  SEND_SMS = 'task.send.sms',
  SEND_EMAIL = 'task.send.email',
  CRC_GENERATE_REPORT = 'task.crc.generate.report',
  CRC_REPORT_DISPUTE = 'task.crc.report.dispute',
  CRC_GENERATE_REPORT_BATCH = 'task.crc.generate.report.batch',
}

export enum WorkerQueue {
  PROCESS_WORK = 'wevied.jobs.process.work',
}

export enum AppStatus {
  CONFIGURATION_ERROR = 1000,
  UNKNOWN_DOCUMENTS,
  INVALID_PASSWORD,
  INVALID_TOKEN,
  DATABASE_ERROR,
  USER_EXIST,
  OPERATION_NOT_ALLOWED,
  ACCOUNT_PENDING,
  ACCOUNT_SUSPENDED,
  ACCOUNT_TERMINATED,
  WORKER_ERROR,
  BVN_REQUIRES_PHONE_CHALLENGE,
  CRC_REPORT_GENERATION_PENDING,
  CRC_REPORT_GENERATION_FAILED,
  CRC_REPORT_NOT_FOUND,
  CRC_REPORT_CHALLENGE_NOT_FOUND,
  CRC_REPORT_CHALLENGE_FAILED,
  PAYMENT_TRANSACTION_FAILED,
}

export const DEFAULT_TIMEZONE = 'Africa/Lagos';
