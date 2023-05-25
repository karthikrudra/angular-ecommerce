import { ProductRepository } from './../Model/product.repository';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { UserRepository } from '../Model/user.repository';
import { Products } from '../Model/Pruducts.model';
import { Orders } from '../Model/orders.model';
import { UserModuleService } from './user-module.service';
import { ModelService } from '../Model/model.service';
import { Router } from '@angular/router';
import swal from "sweetalert";
import Swal from 'sweetalert2';
import { AdminModuleService } from '../AdminModule/admin-module.service';

@Component({
  selector: 'user-orders',
  templateUrl: './bookedOrders.component.html',
  styleUrls: ['./bookedOrders.component.css']
})

export class bookedOrdersComponent implements OnDestroy {

     Search = '';
     order:Orders [] = [];


  constructor(public userRepository:UserRepository,
    public userService:UserModuleService,
    public productRepository:ProductRepository,
    public modelService:ModelService,
    public router:Router,
    public adminService:AdminModuleService
    ) {

     }

  get bookedOrders():Orders[]{
    this.userService.orderempty = false;
    this.userService.cartSize=this.userRepository.cartProducts.length;

      this.order = this.productRepository.findUserOrders();
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
        else if(this.order.length === 0){
             this.userService.orderempty = true;
        }
          return this.productRepository.findUserOrders();

      }

  ngOnDestroy(): void {
      return this.productRepository.unsubscribeUserOrder();
  }

  cancelOrder(orderid:any){

    Swal.fire({
      title: 'cancel order!',
      showDenyButton: true,
      confirmButtonText: 'Ok',
      denyButtonText: `cancel`,
    }).then((result) => {
      if (result.isConfirmed) {

        swal({
         text:"order deleted",
         icon: "success"
        })
        this.productRepository.cancelOrder(orderid);
      }
    });
 }
 logout(){
  if(window.confirm("are you sure want to log out!!")){
     this.modelService.userid = 0;
     this.userService.login = true;
     this.userService.buyNow = false;
     this.userService.cart = false;
     this.adminService.admin = true;
     this.adminService.seller = true;
     this.userService.myOrders = false;
     this.userRepository.cartProducts = [];
     this.router.navigateByUrl("/showProducts")
  }
}

}
