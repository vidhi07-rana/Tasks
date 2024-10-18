import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { PureExamplePipe } from '../pure-example.pipe';
import { ImpureExamplePipe } from "../impure-example.pipe";
import { Observable } from 'rxjs';
import { UserService } from '../user.service';
import { User } from '../ng-if-ng-for/ng-if-ng-for.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pipes',
  standalone: true,
  imports: [PureExamplePipe, ImpureExamplePipe,CommonModule],
  templateUrl: './pipes.component.html',
  styleUrl: './pipes.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class PipesComponent implements OnInit   {
  users$!: Observable<User[]>;
  value = 12;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.users$ = this.userService.getUser();
  }

          
}
