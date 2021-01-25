import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'moment',
})
export class MomentPipe implements PipeTransform {
  public transform(value: any, args?: any): any {
    return moment(value * 1000).format('MMMM Do YYYY, h:mm:ss a');
  }
}
