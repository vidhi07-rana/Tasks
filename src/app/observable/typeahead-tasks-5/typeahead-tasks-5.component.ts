import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { debounceTime, switchMap } from 'rxjs';
import { CommonModule } from '@angular/common';
import { Posts } from '../user-posts/user-posts.component';



@Component({
  selector: 'app-typeahead-tasks-5',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './typeahead-tasks-5.component.html',
  styleUrl: './typeahead-tasks-5.component.css'
})
export class TypeaheadTasks5Component implements OnInit {
  searchControl = new FormControl('')
suggestions: Posts[]=[  ]

  constructor(private apiservice :ApiService){
  }

  ngOnInit(): void {
    this.searchControl.valueChanges.pipe(
      debounceTime(300),
      switchMap(item => this.apiservice.search(item))
    ).subscribe(result=>{
      this.suggestions=result;
    })
    
  }

  
}
