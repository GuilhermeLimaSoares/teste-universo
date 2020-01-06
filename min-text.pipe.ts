import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'minText'})
export class MinTextPipe implements PipeTransform {
  transform(value: string): string {
      if (value.length > 54) {
        return `${value.substring(0, 125)}...`;
      } else {
        return value;
      }
  }
}