import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-take-until-example',
  standalone: true,
  imports: [],
  templateUrl: './take-until-example.component.html',
  styleUrl: './take-until-example.component.css'
})
export class TakeUntilExampleComponent implements OnInit, OnDestroy {
  counter: number = 0;
  private stopSubject = new Subject<void>(); 
  private intervalId: any;

  ngOnInit() {}

  startCounter() {
   this.counter = 0;

    interval(1000)
      .pipe(takeUntil(this.stopSubject)) 
      .subscribe({
        next: () => {
          this.counter++;
        },
        complete: () => console.log('Counter stopped.'),
      });
  }

  stopCounter() {
    this.stopSubject.next(); 
    this.stopSubject.complete(); 
  }

  ngOnDestroy() {
    this.stopSubject.unsubscribe();//complete and unsubscribe both are same 
  }}
