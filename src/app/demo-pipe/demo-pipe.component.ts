import { CurrencyPipe, DatePipe, JsonPipe, LowerCasePipe, PercentPipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { DemopipePipe } from '../demopipe.pipe';

@Component({
  selector: 'app-demo-pipe',
  standalone: true,
  imports: [DatePipe, UpperCasePipe,LowerCasePipe,CurrencyPipe, TitleCasePipe,JsonPipe, PercentPipe,DemopipePipe],
  templateUrl: './demo-pipe.component.html',
  styleUrl: './demo-pipe.component.css'
})
export class DemoPipeComponent {
date= new Date()
amount=10;
company='Triodec solution'
user={
  id:'u21',
   birthYear: '2003' 
      }
}
