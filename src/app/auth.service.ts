import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
isAuthenticated : boolean = false;
  constructor() { }

  isLogin(){
    this.isAuthenticated= true;
  }

  isLogout(){
    this.isAuthenticated = false;

  }

  isLoogedIn(){
    return this.isAuthenticated;
  }
}
