import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'age',
})
export class AgePipe implements PipeTransform {
  transform(birthDate?: Date): string {
    if (!birthDate) {
      return '';
    }

    return moment().diff(birthDate, 'y').toString();
  }
}
