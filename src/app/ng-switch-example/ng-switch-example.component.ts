import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-switch-example',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ng-switch-example.component.html',
  styleUrl: './ng-switch-example.component.css'
})
export class NgSwitchExampleComponent {
selectOption! : string 

onselectOption(option:string){
this.selectOption = option


}
  
}
