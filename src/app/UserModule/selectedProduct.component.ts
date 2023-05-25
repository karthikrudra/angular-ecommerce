import { UserRepository } from './../Model/user.repository';
import { Component, OnInit } from '@angular/core';
import { Products } from '../Model/Pruducts.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductRepository } from '../Model/product.repository';
import swal from "sweetalert";
import Swal from "sweetalert2";
import { UserModuleService } from './user-module.service';
import { ModelService } from '../Model/model.service';
import { AdminModuleService } from '../AdminModule/admin-module.service';

@Component({
  selector: 'selector-name',
  templateUrl: './selectedProduct.component.html'
})

export class SelectedComponent {
  orderProduct:Products [] = [];
    products:Products = new Products ;

  constructor(route:ActivatedRoute,repository:ProductRepository,
    private userRepository:UserRepository,
    public userService:UserModuleService,
    public modelService:ModelService,
    public adminService:AdminModuleService,
    public router:Router

    ) {

     Object.assign(this.products,repository.selectedProduct(route.snapshot.params["productid"]))
     this.userService.myOrders = true;
     this.userService.cart = false;
  }

get selectedProduct(){

  return this.products;
}
addToCart(productid:any,qty:any,size:any){
  this.userService.cart = false;
  this.userService.empty = false;
  this.userService.td = true;

    if(this.modelService.userid == 0){
      this.router.navigateByUrl("/showProducts")
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

    else{

     this.userRepository.addToCart(productid,qty,size,this.products);
}
}



order(quantity:any,size:any){
  if(this.modelService.userid == 0){
    this.router.navigateByUrl("/showProducts")
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
  else{
  this.products.totalPrice = this.products.finalPrice;
  this.products.orderQuantity = quantity;
  this.products.productSize = size;
    this.orderProduct.push(this.products);
  this.userRepository.order(this.orderProduct,1);
  this.router.navigateByUrl("/payments")
  }
}

logout(){
  if(window.confirm("are you sure want to log out!!")){
     this.modelService.userid = 0;
     this.userService.login = true;
     this.userService.buyNow = false;
     this.userService.cart = false;
     this.adminService.admin = true;
     this.adminService.seller = true;
     this.userRepository.cartProducts = [];

  }
}
}
