import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-typeahead',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './typeahead.component.html',
  styleUrl: './typeahead.component.css'
})
export class TypeaheadComponent implements OnInit {
  searchControl = new FormControl('')
  suggestions: string[]=[]

  private allItems: string[] = [ 
    'Apple',
    'Banana',
    'Cherry',
    'Date',
    'Grape',
    'Mango',
    'Orange',
    'Peach',
    'Pear',
    'Pineapple',
  ];
  ngOnInit(): void {
    this.searchControl.valueChanges.pipe(
      debounceTime(300), 
      distinctUntilChanged()
    ).subscribe(value => {
      this.suggestions = this.filterItem(value); 
    });
  }

  private filterItem(searchTerm: string | null):string[]{
    if(!searchTerm){
      return []
    }
    else{
      return this.allItems.filter(item => item.toLowerCase().includes(searchTerm.toLowerCase()));
    }

  }
   
}
