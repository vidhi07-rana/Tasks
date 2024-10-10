import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CounterComponent } from "../counter/counter.component";

@Component({
  selector: 'app-counter-button',
  standalone: true,
  imports: [CounterComponent],
  templateUrl: './counter-button.component.html',
  styleUrl: './counter-button.component.css'
})
export class CounterButtonComponent {
  @Input() count! : number ;
  @Output() countChange = new EventEmitter<number>()

  onIncrement(){
  this.count++
  this.countChange.emit(this.count)
  }

  onDecrement(){
this.count--
this.countChange.emit(this.count)
  }
  onReset(){
    this.count=0;
    this.countChange.emit(this.count)
  }
}
