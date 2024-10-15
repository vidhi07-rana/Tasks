import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { first, interval, last, Observable, take } from 'rxjs';

@Component({
  selector: 'app-operator-take-first',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './operator-take-first.component.html',
  styleUrl: './operator-take-first.component.css'
})
export class OperatorTakeFirstComponent implements OnInit {
numbers : number[]= [];
firstNumber : number | undefined;
lastNumber: number | undefined;

ngOnInit(): void {
  const numberStream$ : Observable<number>= interval(500).pipe(take(10))

  numberStream$.pipe(take(3)).subscribe(value=>{
    this.numbers.push(value);
  })

  numberStream$.pipe(first()).subscribe(value=>{
    this.firstNumber=value
  })

  numberStream$.pipe(last()).subscribe(value=>{
    this.lastNumber= value
  })
}
}
