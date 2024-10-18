import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';
import { forkJoin } from 'rxjs';

export interface User{
  name: string;
  email: string;
}

export interface Posts{
  title: string ;
  body: string
}

@Component({
  selector: 'app-user-posts',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-posts.component.html',
  styleUrl: './user-posts.component.css'
})
export class UserPostsComponent implements OnInit {
  users: User[]=[]
  posts: Posts[]=[]

  constructor(private apiService : ApiService){
  }

  ngOnInit(): void {
    forkJoin({
      users: this.apiService.getUsers(),
      posts: this.apiService.getPosts()
    }).subscribe({
      next: (result) => {
        this.users = result.users;
        this.posts = result.posts;
      },
      error: (err) => {
        console.error('Error fetching data:', err);
      }
        }); 
  }


}
