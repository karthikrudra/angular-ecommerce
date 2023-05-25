
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { userViewComponent } from './userView.component';
import { UserRegistrationComponent } from './user.component';
import { UserLoginComponent } from './user.login';
import { AddAddressComponent } from './addAddress.component';
import { bookedOrdersComponent } from './bookedOrders.component';
import { CartComponent } from './cart.component';
import { AboutComponent } from './about.component';
import { SelectedComponent } from './selectedProduct.component';
import { ContactComponent } from './contactUs.component';
import { PaymentComponent } from './payment.component';
import { NavBarComponent } from './navBar.component';



@NgModule({
  imports: [FormsModule,RouterModule,BrowserModule,ReactiveFormsModule],
  exports: [
    UserRegistrationComponent,
    UserLoginComponent,
    userViewComponent,
    AddAddressComponent,
    bookedOrdersComponent,
    CartComponent,
    AboutComponent,
    SelectedComponent,
    ContactComponent,
    PaymentComponent,
    NavBarComponent

  ],
  declarations: [
    UserRegistrationComponent,
    UserLoginComponent,
    userViewComponent,
    AddAddressComponent,
    bookedOrdersComponent,
    CartComponent,
    AboutComponent,
    SelectedComponent,
    ContactComponent,
    PaymentComponent,
    NavBarComponent
  ],
  providers: [],
})
export class UserModule { }


