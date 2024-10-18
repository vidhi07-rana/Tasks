import { Component } from '@angular/core';
import { NgStyleComponent } from "./ng-style/ng-style.component";
import { NgClassComponent } from "./ng-class/ng-class.component";
import { StyleFontsizeComponent } from "./style-fontsize/style-fontsize.component";

@Component({
  selector: 'app-dynamically-style',
  standalone: true,
  imports: [NgStyleComponent, NgClassComponent, StyleFontsizeComponent],
  templateUrl: './dynamically-style.component.html',
  styleUrl: './dynamically-style.component.css'
})
export class DynamicallyStyleComponent {


}
