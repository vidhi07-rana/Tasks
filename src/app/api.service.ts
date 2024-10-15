import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Posts, User } from './observable/user-posts/user-posts.component';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {}

  search(term: string | null): Observable<any[]> {
    return this.http.get<string[]>(`https://jsonplaceholder.typicode.com/posts?title_like=${term}`);
  }

  getUsers(): Observable<any> {
    return this.http.get<User[]>('https://jsonplaceholder.typicode.com/users');
  }

  getPosts(): Observable<any> {
    return this.http.get<Posts[]>('https://jsonplaceholder.typicode.com/posts');
  }}
