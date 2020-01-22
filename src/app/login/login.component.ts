import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { LoginService } from './login.service';
import { UserService } from '../user/user.service';

import { UserInfo } from '../user/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
  
  usserLogged;
  constructor(
    private router: Router,
    private loginService: LoginService,
    private userService: UserService
    ) { }

  ngOnInit() {
    // this.loginService.login('eve.holt@reqres.in', 'cityslicka').subscribe(
    //   res => {
    //     console.log(res);      
    // });
    // this.usserLogged = this.userService.getUserLoggedIn();
  }

  logIn(username: string, password: string, event: Event) {
    event.preventDefault(); // Avoid default action for the submit button of the login form

    // Calls service to login user to the api rest
    this.loginService.login(username, password).subscribe(

      res => {
      //  console.log(res);
        let u: UserInfo = {username: username};        
        this.userService.setUserLoggedIn(u);

      },
      error => {
        console.error(error);
        
      },

      () => this.navigate()
    );

  }

  navigate() {
    this.router.navigateByUrl('');
  }
}
