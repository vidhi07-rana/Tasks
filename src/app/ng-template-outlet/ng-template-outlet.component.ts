import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-template-outlet',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ng-template-outlet.component.html',
  styleUrl: './ng-template-outlet.component.css'
})
export class NgTemplateOutletComponent {

  seletetedContent :string = 'firstTemplate'


                                                                                                                                              
  onSelect(content: string){
    this.seletetedContent = content

  }

}
