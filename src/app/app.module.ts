import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

import { LoginService } from './login/login.service';
import { UserService } from './user/user.service';

import { CanactivateviaauthGuard } from './guards/canactivateviaauth.guard';
import { ShopComponent } from './shop/shop.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ShopComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    LoginService,
    UserService,
    CanactivateviaauthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
