import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { catchError, Observable, of, throwError } from 'rxjs';

@Component({
  selector: 'app-catch-error',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './catch-error.component.html',
  styleUrl: './catch-error.component.css'
})
export class CatchErrorComponent {
  message: string = '';

  private faultyObservable(): Observable<string> {
    return throwError(() => new Error('Something went wrong!'));
  }

  handleErrorWithCatch() {
    this.faultyObservable()
      .pipe(
        catchError((error) => {
          console.error('Error caught in catchError:', error.message);
          return of('Fallback value from catchError');
        })
      )
      .subscribe((data) => {
        this.message = data; 
      });
  }

  handleErrorWithSubscribe() {
    this.faultyObservable().subscribe({
      next: (data) => {
        this.message = data; 
      },
      error: (error) => {
        console.error('Error handled in subscribe:', error.message);
        this.message = 'Error handled in subscribe: ' + error.message;        
      },
      complete: () => console.log('Observable completed.'),
    });
  }
 
}
