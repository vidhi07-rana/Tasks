import { Component } from '@angular/core';
import { HomeComponent } from "../home/home.component";
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-dyrouting',
  standalone: true,
  imports: [HomeComponent,RouterModule],
  templateUrl: './dyrouting.component.html',
  styleUrl: './dyrouting.component.css'
})
export class DyroutingComponent {

}
