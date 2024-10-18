import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'impureExample',
  standalone: true,
  pure: false
})
export class ImpureExamplePipe implements PipeTransform {

  transform(value: number) {
    console.log("pipe is called")
    return value + Math.random();
  }

}
