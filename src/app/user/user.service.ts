import { Injectable } from '@angular/core';

import { UserInfo } from './user.model';

@Injectable(
  // {
  // providedIn: 'root'
  // }
)
export class UserService {
  private isUserLoggedIn;
  public usserLogged:UserInfo;

  constructor() { 
  	this.isUserLoggedIn = false;
  }

  setUserLoggedIn(user:UserInfo) {
    this.isUserLoggedIn = true;
    this.usserLogged = user;
    localStorage.setItem('currentUser', JSON.stringify(user));
  
  }

  getUserLoggedIn() {
  	return JSON.parse(localStorage.getItem('currentUser'));
  }
}
