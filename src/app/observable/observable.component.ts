import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { HomePageComponent } from "./home-page/home-page.component";
import { LoginComponent } from "./login/login.component";
import { OperatorPipeMapComponent } from "./operator-pipe-map/operator-pipe-map.component";
import { TypeaheadComponent } from "./typeahead/typeahead.component";
import { UserPostsComponent } from "./user-posts/user-posts.component";
import { TypeaheadTasks5Component } from "./typeahead-tasks-5/typeahead-tasks-5.component";
import { CombineLatestComponent } from "./combine-latest/combine-latest.component";
import { OperatorTakeFirstComponent } from "./operator-take-first/operator-take-first.component";
import { CatchErrorComponent } from "./catch-error/catch-error.component";
import { AsyncAwaitComponent } from "./async-await/async-await.component";
import { TakeUntilExampleComponent } from "./take-until-example/take-until-example.component";

@Component({
  selector: 'app-observable',
  standalone: true,
  imports: [RouterOutlet,
    RouterModule,
    HomePageComponent,
    LoginComponent,
    OperatorPipeMapComponent,
    TypeaheadComponent,
    UserPostsComponent,
    TypeaheadTasks5Component, 
    CombineLatestComponent, 
    OperatorTakeFirstComponent, 
    CatchErrorComponent, 
    AsyncAwaitComponent, 
    TakeUntilExampleComponent
  ],
  templateUrl: './observable.component.html',
  styleUrl: './observable.component.css'
})
export class ObservableComponent {


}
