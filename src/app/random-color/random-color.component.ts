import { Component } from '@angular/core';
import { RandomColorDirective } from '../random-color.directive';

@Component({
  selector: 'app-random-color',
  standalone: true,
  imports: [RandomColorDirective],
  templateUrl: './random-color.component.html',
  styleUrl: './random-color.component.css'
})
export class RandomColorComponent {

}
