import { Component, OnInit } from '@angular/core';

import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
router;
  constructor(private loginService: LoginService) { }

  ngOnInit() {
    this.loginService.login('eve.holt@reqres.in', 'cityslicka').subscribe(
      res => {
        console.log(res);      
    });
  }

  logIn(username: string, password: string, event: Event) {
    event.preventDefault(); // Avoid default action for the submit button of the login form

    // Calls service to login user to the api rest
    this.loginService.login(username, password).subscribe(

      res => {
       console.log(res);

      },
      error => {
        console.error(error);
        
      },

      // () => this.navigate()
    );

  }

  // navigate() {
  //   this.router.navigateByUrl('/home');
  // }
}
