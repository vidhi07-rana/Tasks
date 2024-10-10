import { Component } from '@angular/core';
import { CounterComponent } from "../counter/counter.component";
import { CounterButtonComponent } from "../counter-button/counter-button.component";

@Component({
  selector: 'app-counter-output',
  standalone: true,
  imports: [CounterComponent, CounterButtonComponent],
  templateUrl: './counter-output.component.html',
  styleUrl: './counter-output.component.css'
})
export class CounterOutputComponent {
initialCount = 1


changeCounter(newCount:number){
  console.log(newCount)
}
}
