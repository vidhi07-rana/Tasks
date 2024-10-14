import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { TwoWayBindingComponent } from "./two-way-binding/two-way-binding.component";
import { ReactiveFormComponent } from "./reactive-form/reactive-form.component";
import { DemoPipeComponent } from "./demo-pipe/demo-pipe.component";
import { CounterOutputComponent } from "./counter/counter-output/counter-output.component";
import { NgSwitchExampleComponent } from "./ng-switch-example/ng-switch-example.component";
import { DyroutingComponent } from "./dynamic-routing/dyrouting/dyrouting.component";
import { ConditionalComp5Component } from "./conditional-comp-5/conditional-comp-5.component";
import { NgTemplateOutletComponent } from "./ng-template-outlet/ng-template-outlet.component";
import { RandomColorComponent } from './random-color/random-color.component';
import { ParentComponent } from "./ng-projection/parent/parent.component";
import { NgIfNgForComponent } from "./ng-if-ng-for/ng-if-ng-for.component";
import { HttpClientComponent } from "./http-client/http-client.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    RouterModule,
    TwoWayBindingComponent,
    ReactiveFormComponent,
    DemoPipeComponent,
    CounterOutputComponent,
    NgSwitchExampleComponent,
    DyroutingComponent,
    ConditionalComp5Component,
    NgTemplateOutletComponent,
    RandomColorComponent, ParentComponent, NgIfNgForComponent, HttpClientComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular-Exercise';
}
