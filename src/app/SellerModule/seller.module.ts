import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import {AddProductsComponent } from './addProducts.component';
import { sellerViewComponent } from './sellerView.component';

import { SellerRegistrationComponent } from './sellerRegister.component';
import { AddSellerAddressComponent } from './addAddress.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SellerLoginComponent } from './sellerLogin.component';
import { EditProductComponent } from './editProduct.component';
import { SellerNavBarComponent } from './navBar.component';
import { SellerContactComponent } from './contactUs.component';
import { SellerOrdersComponent } from './orders.component';


@NgModule({
  imports: [FormsModule,RouterModule,BrowserModule,ReactiveFormsModule],
  exports: [AddProductsComponent,
    sellerViewComponent,
    SellerLoginComponent,
    SellerRegistrationComponent,
    AddSellerAddressComponent,
    EditProductComponent,
    SellerNavBarComponent,
    SellerContactComponent,
    SellerOrdersComponent,
    
  ],
  declarations: [AddProductsComponent,
    sellerViewComponent,
    SellerLoginComponent,
    SellerRegistrationComponent,
    AddSellerAddressComponent,
    EditProductComponent,
    SellerNavBarComponent,
    SellerContactComponent,
    SellerOrdersComponent

  ],
  providers: [],
})
export class SellerModule { }


