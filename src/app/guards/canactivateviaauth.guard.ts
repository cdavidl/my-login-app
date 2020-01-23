import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

import { UserService } from '../user/user.service';

@Injectable(
//   {
//   providedIn: 'root'
// }
)
export class CanactivateviaauthGuard implements CanActivate {

  constructor(
    private authService: UserService,
    private router: Router
    ) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
    )
    : Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree 
    {
      // If the user is not logged in we'll send them back to the home page
      if (!this.authService.isUserLoggedIn == true) {
        console.log('No estás logueado');
        this.router.navigate(['/login']);
        return false;
    }
    return true;
  }
  
}
