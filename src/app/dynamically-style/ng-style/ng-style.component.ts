import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ng-style.component.html',
  styleUrl: './ng-style.component.css'
})
export class NgStyleComponent {
  isHighlighted = false

  ontogggle(){
    this.isHighlighted = !this.isHighlighted
  }
  
  getStyle(){
    return{
      'color': this.isHighlighted ? 'blue': 'black',
      'font-color': this.isHighlighted ? 'bold': 'normal'
    }
  }
}
