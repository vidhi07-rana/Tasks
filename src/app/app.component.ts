import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TwoWayBindingComponent } from "./two-way-binding/two-way-binding.component";
import { ReactiveFormComponent } from "./reactive-form/reactive-form.component";
import { DemoPipeComponent } from "./demo-pipe/demo-pipe.component";
import { CounterOutputComponent } from "./counter/counter-output/counter-output.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TwoWayBindingComponent, ReactiveFormComponent, DemoPipeComponent, CounterOutputComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular-Exercise';
}
