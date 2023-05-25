import { ProductRepository } from './../Model/product.repository';
import { Component, OnInit } from '@angular/core';
import { UserRepository } from '../Model/user.repository';
import swal from "sweetalert";
import { UserModuleService } from '../UserModule/user-module.service';

@Component({
  selector: 'sellerorders',
  templateUrl: './order.component.html'
})

export class SellerOrdersComponent {
  constructor(public userRepository:UserRepository,public productRepository:ProductRepository,public userService:UserModuleService) { }


  get orders(){
    return this.userRepository.getSellerOrders();
  }

  cancelOrder(orderid:any){
    if(window.confirm("are you sure you want to cancel the order")){
     this.productRepository.cancelOrder(orderid);
     swal("successufully order deleted")
    }
 }
 ngOnDestroy(): void {
  return this.userRepository.unsubscribesellerSellerOrders();
}
}
