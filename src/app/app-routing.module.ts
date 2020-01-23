import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { ShopComponent } from './shop/shop.component';

import { CanactivateviaauthGuard } from './guards/canactivateviaauth.guard';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'shop', component: ShopComponent,  canActivate: [CanactivateviaauthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
