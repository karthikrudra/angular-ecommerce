import { ModelService } from './../Model/model.service';
import { Component, OnInit } from '@angular/core';
import { UserModuleService } from '../UserModule/user-module.service';
import { UserRepository } from '../Model/user.repository';
import { AdminModuleService } from '../AdminModule/admin-module.service';

@Component({
  selector: 'admincontactus',
  templateUrl: './contactUs.component.html',
  styleUrls: ['./contactUs.component.css']
})

export class AdminContactComponent {
  constructor(public userService:UserModuleService,public modelService:ModelService,public userRepository:UserRepository,public adminService:AdminModuleService) {

    if(modelService.userid !== 0 || userRepository.sellerid !== 0 ){
      userService.login = false;
    }
    this.userService.myOrders = true;
    this.userService.cart = true;
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
