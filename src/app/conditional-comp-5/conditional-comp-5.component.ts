import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-conditional-comp-5',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './conditional-comp-5.component.html',
  styleUrl: './conditional-comp-5.component.css'
})
export class ConditionalComp5Component {
 
  isVisible : boolean = true ;

  onShow(){
    this.isVisible = !this.isVisible
  }
}
                                                                                                                                            