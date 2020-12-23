import { PhoneNumber, PhoneNumberFormat, PhoneNumberUtil } from 'google-libphonenumber';
import { BadRequestException } from '@nestjs/common';

/**
 * Helper  class to make working  with google-libphonenumber easier
 * https://github.com/ruimarinho/google-libphonenumber
 */
export class PhoneUtils {
  static phoneUtil = PhoneNumberUtil.getInstance();

  static comparePhone(localFormat: string, internationalFormat: string) {
    return (
      this.isValidNumber(localFormat, 'NG') &&
      this.format(localFormat, 'NG') === internationalFormat
    );
  }

  static isValidNumber(phone: string, countryCode = '') {
    let number: PhoneNumber;
    try {
      number = this.phoneUtil.parse(phone, countryCode);
    } catch (e) {}
    return number && this.phoneUtil.isValidNumber(number);
  }

  static format(
    phone: string,
    countryCode = '',
    format = PhoneNumberFormat.E164,
  ) {
    try {
      const number = this.phoneUtil.parse(phone, countryCode);
      return this.phoneUtil.format(number, format);
    } catch (e) {
      throw new BadRequestException('Phone number must be valid');
    }
  }
}
