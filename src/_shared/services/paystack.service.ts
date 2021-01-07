import { HttpService, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PayStackBvn } from '../interfaces/paystack-bvn';

const PAYSTACK_API_BASE = 'https://api.paystack.co';

@Injectable()
export class PaystackService {
  constructor(
    private readonly config: ConfigService,
    private readonly http: HttpService,
  ) {}

  async resolveBvn(bvn: string): Promise<PayStackBvn> {
    const url = PAYSTACK_API_BASE + `/bank/resolve_bvn/${bvn}`;
    const config = {
      headers: {
        Authorization: `Bearer ${this.config.get('services.paystack.apiKey')}`,
        'Content-Type': 'application/json',
      },
    };
    const res = await this.http.get(url, config).toPromise();
    return res.data.data;
  }
}
