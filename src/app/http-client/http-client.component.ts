import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { CommonModule } from '@angular/common';
import { User } from '../ng-if-ng-for/ng-if-ng-for.component';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-http-client',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './http-client.component.html',
  styleUrl: './http-client.component.css'
})
export class HttpClientComponent {

  // users$: Observable<User[]>;

  // constructor(private userService: UserService) {
  //   this.users$ = this.userService.getUser(); // Fetch users using the service
  // }
  users: User[] = []; 

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUser().subscribe(
      data => {
        this.users = data;
      },
      error => {
        console.error('Error fetching users:', error);
      }
    );
  }

}
