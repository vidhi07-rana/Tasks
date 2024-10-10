import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'Age',
  standalone: true
})
export class DemopipePipe implements PipeTransform {

  transform(value: string){
    
    let currentYear : any  = new Date().getFullYear()
    let birthYear : any= new Date(value).getFullYear()
    let currentAge = currentYear - birthYear
    return currentAge ;

  }

}
