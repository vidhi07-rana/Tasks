import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pureExample',
  standalone: true,
  pure: true,

})
export class PureExamplePipe implements PipeTransform {

  transform(value:number) {
    return value * 2;
  }

}
