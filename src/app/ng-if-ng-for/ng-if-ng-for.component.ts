import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

export interface User{
id: number,
name: string,
deparment: string
}


@Component({
  selector: 'app-ng-if-ng-for',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ng-if-ng-for.component.html',
  styleUrl: './ng-if-ng-for.component.css'
})
export class NgIfNgForComponent {
users : User[]= [
  {id: 1,name:'Emily',deparment:'computer'},
  {id: 2,name:'John',deparment:'It'},
]
}
