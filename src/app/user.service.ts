import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './ng-if-ng-for/ng-if-ng-for.component'; // Adjust path if necessary
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url = 'assets/users.json';

  constructor(private http: HttpClient) { }

  getUser(): Observable<User[]> {
    return this.http.get<User[]>(this.url);
  }
}
