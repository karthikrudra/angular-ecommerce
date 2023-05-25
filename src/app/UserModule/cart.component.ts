
import { Products } from './../Model/Pruducts.model';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ProductRepository } from '../Model/product.repository';
import { UserRepository } from '../Model/user.repository';
import { UserModuleService } from './user-module.service';
import { ModelService } from '../Model/model.service';
import { Router } from '@angular/router';
import swal from 'sweetalert';
import Swal from 'sweetalert2';
import { AdminModuleService } from '../AdminModule/admin-module.service';

@Component({
  selector: 'user-cart',
  templateUrl: 'cart.component.html',
  styleUrls:['./cart.component.css']
})

export class CartComponent implements OnDestroy{

  total: number = 0;
  product:Products [] = [];

  Search = '';

  constructor(private productRepository:ProductRepository,
    private userRepository:UserRepository,
    public userService:UserModuleService,
    public modelService:ModelService,
    public router:Router,
    public adminService:AdminModuleService

    ) {
      this.userService.myOrders = true;
      // this.userService.cart = false;
    }

  show = false;

  login() {

    this.show = true;
  }
  logout(){
    if(window.confirm("are you sure want to log out!!")){
      this.userRepository.cartProducts = [];
       this.modelService.userid = 0;
       this.userService.login = true;
       this.userService.buyNow = false;
      //  this.userService.cart = false;
       this.adminService.admin = true;
       this.adminService.seller = true;
       this.userService.myOrders = false;

              this.router.navigateByUrl("/showProducts")
    }
  }
  close() {
    this.show = false;
  }

 get getCart():Products[]{

  this.product = this.userRepository.getCart();
  this.total = 0;
  this.userRepository.getCart().forEach(subtotal =>{

    this.total += subtotal.totalPrice && subtotal.orderQuantity ? subtotal.totalPrice * subtotal.orderQuantity : 0
  })
  if(this.modelService.userid == 0){
    this.router.navigateByUrl("/showproducts");
    Swal.fire({
      title: 'Please Login!',
      showDenyButton: true,
      confirmButtonText: 'Login',
      denyButtonText: `Cancel`,
    }).then((result) => {
      if (result.isConfirmed) {
        this.router.navigateByUrl("/user-login");
      }
    })
  }
  else if( this.userRepository.cartProducts.length == 0){
     this.userService.td = false;
    }

  return this.product
  }



  updateCartTotal(item:any,quantity:any,size:any) {
   if(quantity == 1 && size == 'q'){
      swal("quantity changed")
   }else{
      swal("size is changed")
   }

    const subTotal = item.totalPrice * item.orderQuantity;
    this.product.forEach((p) =>{
    if(item.productId === p.productId){
                p.subTotal = subTotal
                this.total = 0;
               this.product.forEach(subtotal =>{
                          this.total += subtotal.subTotal ?? 0
              })
    }
    });
  }

  removeFromCart(productid:any,size:any){
       if(window.confirm("are you sure you want to remove from cart")){
               this.userRepository.removeFromCart(productid,size);
       }
      // this.getCart;
  }

  order(){
    this.userRepository.order(this.product,2);
}

ngOnDestroy(): void {
    return this.userRepository.unsubscribeCart();
}
onShow(event:any){
console.log(event.target.value);
}





showMenu() {
  this.userService.menu = true;
}
hideMenu() {
  this.userService.menu = false;
}
}
