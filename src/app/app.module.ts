import { NavBarComponent } from './UserModule/navBar.component';
import { UserModule } from './UserModule/user.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ModelModule } from './Model/model.module';
import { RouterModule } from '@angular/router';
import { SellerModule } from './SellerModule/seller.module';
import { UserRegistrationComponent } from './UserModule/user.component';
import { UserLoginComponent } from './UserModule/user.login';
import { userViewComponent } from './UserModule/userView.component';
import { sellerViewComponent } from './SellerModule/sellerView.component';
import { AddProductsComponent} from './SellerModule/addProducts.component';
import { SellerRegistrationComponent } from './SellerModule/sellerRegister.component';
import { bookedOrdersComponent } from './UserModule/bookedOrders.component';
import { FormsModule } from '@angular/forms';
import { SellerLoginComponent } from './SellerModule/sellerLogin.component';
import { AdminModule } from './AdminModule/admin.module';
import { AdminLoginComponent } from './AdminModule/admin.login';
import { GetAllSellerComponent } from './AdminModule/getAllSellers.component';
import { AdminSellerProductsComponent } from './AdminModule/sellerProducts.component';
import { EditProductComponent } from './SellerModule/editProduct.component';
import { CartComponent } from './UserModule/cart.component';
import { AboutComponent } from './UserModule/about.component';
import { SelectedComponent } from './UserModule/selectedProduct.component';
import { ContactComponent } from './UserModule/contactUs.component';
import { PaymentComponent } from './UserModule/payment.component';
import { SellerContactComponent } from './SellerModule/contactUs.component';
import { SellerOrdersComponent } from './SellerModule/orders.component';
import { AdminContactComponent } from './AdminModule/contactUs.component';
import { AdminSellerRegistrationComponent } from './AdminModule/sellerRegister.component';




@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    SellerModule,
    UserModule,
    ModelModule,
    AdminModule,


    RouterModule.forRoot([
           {
            path:"user-register", component:UserRegistrationComponent
           },
           {
            path:"user-login", component:UserLoginComponent
           },
           {
            path:"seller-register", component:SellerRegistrationComponent
           },
           {
            path:"adminseller-register", component:AdminSellerRegistrationComponent
           },
           {
            path:"seller-login", component:SellerLoginComponent
           },
           {
            path:"addProducts",component:AddProductsComponent
           },
           {
            path:"editProducts/:productid",component:EditProductComponent
           },
           {
            path:"showProducts",component:userViewComponent
           },
           {
            path:"sellerView",component:sellerViewComponent
           },
           {
            path:"user-cart",component:CartComponent
           },
           {
            path:"user-orders",component:bookedOrdersComponent
           },
           {
            path:"admin-login", component:AdminLoginComponent
           },
           {
            path:"getallsellers", component:GetAllSellerComponent
           },
           {
            path:"sellerproducts", component:AdminSellerProductsComponent
           },
           {
            path:"about", component:AboutComponent
           },
           {
            path:"selectedproduct/:productid",component:SelectedComponent
           },
           {
            path:"contactus",component:ContactComponent
           },
           {
            path:"admincontactus",component:AdminContactComponent
           },
           {
            path:"sellercontactus",component:SellerContactComponent
           },
           {
            path:"payments",component:PaymentComponent
           },
           {
            path:"navbar",component:NavBarComponent
           },
           {
            path:"sellerorders",component:SellerOrdersComponent
           },
           {
            path:"**", redirectTo: "/showProducts"
           }
    ])


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
























// RouterModule.forRoot([
    //   {
    //     path:"user-register", component:RegistrationComponent
    //    },
    //    {
    //     path:"user-login", component:LoginComponent
    //    },
    //    {
    //     path:"products",component:ProductsComponent
    //    },
    //    {
    //     path:"showProducts",component:userViewComponent
    //    },
    //    {
    //     path:"sellerView",component:sellerViewComponent
    //    },
    //    {
    //     path:"**", redirectTo: "/user-login"
    //    }
    // ])
