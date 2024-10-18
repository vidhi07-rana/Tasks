import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-cookies',
  standalone: true,
  imports: [],
  templateUrl: './cookies.component.html',
  styleUrl: './cookies.component.css',
  providers: [CookieService, CommonModule]
})
export class CookiesComponent implements OnInit {
cookieValue! : string

  constructor(private cookieService: CookieService){}
  
  ngOnInit(): void {
    this.cookieService.set('TestCookie', 'Hello World', { expires: 1 })
    console.log("The Cookie is set")
  }
  getCookie(){
    this.cookieValue = this.cookieService.get('TestCookie');
    console.log('Retrieved cookie:', this.cookieValue);
    console.log(this.cookieValue)
  }

  deleteCookie(){
    this.cookieService.delete('TestCookie');
    console.log('Cookie deleted.');  }
}
