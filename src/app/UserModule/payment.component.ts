
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { UserRepository } from '../Model/user.repository';
import { ProductRepository } from '../Model/product.repository';
import { UserModuleService } from './user-module.service';
import { ModelService } from '../Model/model.service';
import { AdminModuleService } from '../AdminModule/admin-module.service';



@Component({
  selector: 'app-payments',
  templateUrl: './payment.component.html'
  // styleUrls: ['./payment.component.css']

})
export class PaymentComponent {

  // public products:Products[]=[];
  public bank:boolean = false;
  public upi:boolean = false;
  public cards:boolean = false;
  constructor(public router:Router,
    public userRepository:UserRepository,
    repository:ProductRepository,
    public userService:UserModuleService,
    public modelService:ModelService,
    public adminService:AdminModuleService

    ) {
      this.userService.myOrders = true;
      this.userService.cart = true;
     }



  changeBank(){
    this.bank = true;
    this.upi= false;
    this.cards= false;

  }
  changeCards(){
    this.bank = false;
    this.upi= false;
    this.cards= true;
  }
  changeUpi(){
    this.bank = false;
    this.upi= true;
    this.cards= false;
  }
  payed(){

    Swal.fire({
      title: 'confirm order!',
      showDenyButton: true,
      confirmButtonText: 'Ok',
      denyButtonText: `cancel`,
    }).then((result) => {
      if (result.isConfirmed) {
        // this.router.navigateByUrl("/showProducts")
      this.userRepository.confirmOrder();
      }
    })
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
