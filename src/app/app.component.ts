import { Component } from '@angular/core';

import { UserService } from './user/user.service';

import { UserInfo } from './user/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'my-login-app';
  
  public usserLogged:UserInfo;
  constructor(
    private userService: UserService
    ) { }

  ngOnInit() {
    // this.loginService.login('eve.holt@reqres.in', 'cityslicka').subscribe(
    //   res => {
    //     console.log(res);      
    // });
    this.usserLogged = this.userService.getUserLoggedIn();
  }
}
