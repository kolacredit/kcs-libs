import { Document } from 'mongoose';
import { Pagination, QueryParser } from '../common';
import { MailOption } from './mail-option';
import { SmsOption } from './sms-option';

export interface ResponseOption {
  value: any | Document;
  code: number;
  queryParser?: QueryParser;
  pagination?: Pagination;
  hiddenFields?: string[];
  message?: string;
  count?: number;
  token?: string;
  sms?: SmsOption;
  email?: MailOption;
}
