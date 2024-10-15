import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { map, Observable, of } from 'rxjs';

@Component({
  selector: 'app-operator-pipe-map',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './operator-pipe-map.component.html',
  styleUrl: './operator-pipe-map.component.css'
})
export class OperatorPipeMapComponent implements OnInit {
numbers: number[]=[]

ngOnInit() {
  const number$ = of([1,2,3,4,5]);

  number$.pipe(
    map(nums => nums.map(num => num * 2)) 
  ).subscribe((data)=>{
    this.numbers = data;
    console.log('Tranform Data',data)
  }
  
  )

}

}
