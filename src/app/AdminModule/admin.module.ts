import { NgModule } from '@angular/core';
import { AdminLoginComponent } from './admin.login';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminSellerProductsComponent } from './sellerProducts.component';
import { GetAllSellerComponent } from './getAllSellers.component';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ModelModule } from '../Model/model.module';
import { AdminContactComponent } from './contactUs.component';
import { AdminSellerRegistrationComponent } from './sellerRegister.component';

@NgModule({
  imports: [FormsModule,BrowserModule,RouterModule, ModelModule, ReactiveFormsModule],
  exports: [AdminLoginComponent,AdminSellerProductsComponent,GetAllSellerComponent,AdminContactComponent,AdminSellerRegistrationComponent],
  declarations: [AdminLoginComponent,AdminSellerProductsComponent,GetAllSellerComponent,AdminContactComponent,AdminSellerRegistrationComponent],
  providers: [],
})
export class AdminModule {

  constructor(){}
}
