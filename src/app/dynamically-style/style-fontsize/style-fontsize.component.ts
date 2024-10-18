import { Component } from '@angular/core';

@Component({
  selector: 'app-style-fontsize',
  standalone: true,
  imports: [],
  templateUrl: './style-fontsize.component.html',
  styleUrl: './style-fontsize.component.css'
})
export class StyleFontsizeComponent {
  fontSize = '16px'

  doubleSize(){
    this.fontSize = (parseInt(this.fontSize) + 2) + 'px'; // Increase font size by 2px
  }
}
