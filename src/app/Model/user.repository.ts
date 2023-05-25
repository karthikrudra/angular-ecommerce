import { ProductRepository } from './product.repository';
import  Swal  from 'sweetalert2';
import { ModelService } from './model.service';
import { UserModuleService } from './../UserModule/user-module.service';
import { Injectable, OnDestroy } from '@angular/core';
import { RestDataSource } from './user.restDataSource';
import { Registration } from './user.model';
import { Products } from './Pruducts.model';
import { Router } from '@angular/router';
import { Orders } from './orders.model';
import { Subscription } from 'rxjs';
import { SellerModuleService } from '../SellerModule/seller-module.service';
import { AdminModuleService } from '../AdminModule/admin-module.service';
import { HttpClient } from '@angular/common/http';
import swal from "sweetalert";






@Injectable()
export class UserRepository {
  public products:Products []=[];

  public sellerViewSubscription?: Subscription;
  public sellerProducts:Products []=[];

  public adminSellerProductsSubscription?:Subscription;
  public adminSellerProducts:Products []=[];

  public cartSubscription?: Subscription;
  public cartProducts:Products []=[];

  public orders:Orders [] =[];
  public locations:string[]=[];

  public sellerOrderSubscrption?: Subscription;
  public sellerOrders:Orders [] =[];
  // public userid: number=0;
  public sellerid: number=0;

  public deleteCart = 0;

  // public paymentResult:string="";

 constructor(private dataSource:RestDataSource,
  private router:Router,
  public userService:UserModuleService,
  public sellerService:SellerModuleService,
  public modelSrvice:ModelService,
  public adminService:AdminModuleService,
  private http:HttpClient,


  ){
    dataSource.getAllLocations().subscribe(l=>this.locations=l);
 }

 viewSellerProducts(sellerId:any){
  if(!this.adminSellerProductsSubscription){
     this.dataSource.viewSellerProducts(sellerId)
     .subscribe(Products =>
        {
            this.sellerProducts =Products;
        })
      }
        return this.getViewSellerProducts()
}
unsubscribesellerProducts() {
  if (this.adminSellerProductsSubscription) {
    this.adminSellerProductsSubscription.unsubscribe();
    this.adminSellerProductsSubscription = undefined;
    this.adminSellerProducts = [];
  }
}

getSellerOrders(){
  if(!this.sellerOrderSubscrption){
     this.sellerOrderSubscrption=this.dataSource.getSellerOrders(this.sellerid).subscribe(sellerorders =>{
      // console.log(sellerorders)
    this.sellerOrders = sellerorders;
  })
}
  return this.sellerOrders
}
unsubscribesellerSellerOrders() {
  if (this.sellerOrderSubscrption) {
    this.sellerOrderSubscrption.unsubscribe();
    this.sellerOrderSubscrption = undefined;
    // this.sellerOrders = [];
  }
}

getViewSellerProducts(){
      return this.sellerProducts;
}

  registerUser(registration:Registration){
    Swal.fire("registered successfully")
    this.dataSource.registerUser(registration)
    .subscribe(response => {


    });
  }
  userLoginData(mail:any,password:any){
       return this.dataSource.userLoginData(mail,password).subscribe(user=>{

        this.modelSrvice.userid = user;
               if(this.modelSrvice.userid > 0){

                this.userService.cart = true;
                this.userService.login = false;
                this.userService.buyNow = true;
                this.userService.myOrders = true;
                this.userService.show= true ;
                this.adminService.admin = false;
                this.adminService.seller = false;
                // this.userService.div = true;
              this.router.navigateByUrl("/showProducts");
              this.getCart();
               }else{

                 Swal.fire("invalid details")
                this.router.navigateByUrl('/user-login');
               }
                }  )

  }




addUserAddress(addAddress:Registration){
  this.dataSource.addUserAddress(addAddress);
}
sellerLoginData(mail:any,password:any){
  return this.dataSource.sellerLoginData(mail,password).subscribe(seller=>{

               this.sellerid = seller;

          if(seller > 0){
            // this.sellerService.addProduct = true;
            this.userService.login = false;

         this.router.navigateByUrl("/sellerView");

          }else{
           Swal.fire("invalid details")
           this.router.navigateByUrl('/seller-login');
          }
           }  )
}


 product:Products[]=[];



 //
getSellerView(): Products[]{
  if(!this.sellerViewSubscription){
          this.sellerViewSubscription=this.dataSource.getSellerView(this.sellerid).subscribe(products =>
    {

            this.sellerProducts=products;

    })

  }
  return this.sellerProducts;
}

unsubscribeSellerView() {
  if (this.sellerViewSubscription) {
    this.sellerViewSubscription.unsubscribe();
    this.sellerViewSubscription = undefined;
    // this.sellerProducts = [];
  }
}
//

getProductEdit(id:number){

  return this.sellerProducts.find(p => p.productId == id);
}



insertProducts(products:Products ){
          this.sellerProducts.push(products);
  return this.dataSource.insertProducts(products,this.sellerid)
  .subscribe(p=> {
    swal({
      text:"product added",
      icon:"success"
    })
   this.router.navigateByUrl("/sellerView")
});

}

editProducts(products:Products){

  return this.dataSource.editProducts(products,this.sellerid)
  .subscribe(p=> {
    console.log(p),
    swal({
      text:"product edited",
      icon:"success"
    })
    this.router.navigateByUrl("/sellerView")
});
}
deleteProduct(productId: any){
  this.sellerProducts = this.sellerProducts.filter(deleteProduct => deleteProduct.productId !== productId)


  return this.dataSource.deleteProduct(productId)
  .subscribe(d=>console.log(d))
  ;
}
addToCart(productid:number,quantity:any,size:any,product:Products){
  var count =0;
      for(var i =0;i<this.cartProducts.length;i++) {

        if((this.cartProducts[i].productId == productid && this.cartProducts[i].productSize == size)) {
               count++;
        }

      }
      if(count == 0){
        swal({
          text:"added to cart!... you can add more",
          icon:"success"
        });
        this.cartProducts.push(product);
      }
      else{
        swal("Oops!", "already in cart", "error");
      }
      this.userService.cartSize = this.cartProducts.length;

  this.dataSource.addToCart(productid,this.modelSrvice.userid,quantity,size).subscribe(p=>
        this.router.navigateByUrl("/showProducts")
    );
}

//
getCart(): Products[] {

  if (!this.cartSubscription) {
    this.cartSubscription = this.dataSource.getCart(this.modelSrvice.userid).subscribe(
      (cartProducts) => {

        this.cartProducts = cartProducts;

      }
    );
  }

  return this.cartProducts || [];
}
unsubscribeCart() {
  if (this.cartSubscription) {
    this.cartSubscription.unsubscribe();
    this.cartSubscription = undefined;
  }
}

removeFromCart(productid:any,size:any){
  this.cartProducts=this.cartProducts.filter(f => {
    return ((f.productId == productid && f.productSize !=size) || f.productId != productid)

  })
  this.userService.cartSize = this.cartProducts.length;
          this.dataSource.removeFromCart(productid,this.modelSrvice.userid,size).subscribe(p => {
        this.router.navigateByUrl("/user-cart")
          });

        }


order(orders:Orders[],deleteCart:any){
  this.deleteCart = deleteCart
  this.orders = orders

}
confirmOrder(){

  this.userService.cartSize = this.cartProducts.length;
  return this.dataSource.order(this.orders,this.modelSrvice.userid,this.deleteCart)

   .subscribe( booked => {
    console.log(booked)
     if(booked === "Payment Successful")
    {
     swal({
      title: "Thank You!",
      text: `Your Order is placed succesfully!`,
      icon: "success",

    }).then((success)=>{
      if(success)
      {
        if(this.deleteCart == 2){
          this.cartProducts = [];
       }
        this.router.navigateByUrl("/showProducts")
      }
    })
  }

  else if(booked === "Payment is in progress"){

    swal({

      title: "sorry!",
      text: "Our Bank is facing some server issue, so plaese try again later",
      icon: "error",

    }).then((error)=>{
      if(error)
      {
        this.router.navigateByUrl("/payments")
      }
    })

  }

  else if(booked === "Payment Cancelled")
  {

    swal({
      title: "sorry!",
      text: "Your payment is failed! ",
      icon: "error",

    }).then((success)=>{
      if(success)
      {
        this.router.navigateByUrl("/payments")
      }
    })

  }

});
   }

addSellerAddress(addAddress:Registration){
   this.dataSource.addSellerAddress(addAddress);
}


getLocations()
{
  return this.locations;
}


}
