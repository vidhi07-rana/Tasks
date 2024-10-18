import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-personal',
  standalone: true,
  imports: [],
  templateUrl: './personal.component.html',
  styleUrl: './personal.component.css'
})
export class PersonalComponent {

constructor(private router : Router, private route: ActivatedRoute){}


}
