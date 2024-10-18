import { Component, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { combineLatest, startWith } from 'rxjs';

@Component({
  selector: 'app-combine-latest',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './combine-latest.component.html',
  styleUrl: './combine-latest.component.css'
})
export class CombineLatestComponent implements OnInit {
nameControl = new FormControl('');
ageControl = new FormControl();
combinedResult: string = '';


ngOnInit(): void {
  combineLatest([
    this.nameControl.valueChanges.pipe(startWith('')),
    this.ageControl.valueChanges.pipe(startWith(''))
  ]).subscribe(([name, age])=>{
    this.combinedResult= `Name: ${name},  Age: ${age}`
  }  
  )
}

}
