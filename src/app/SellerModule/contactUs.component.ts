import { ModelService } from './../Model/model.service';
import { Component, OnInit } from '@angular/core';
import { UserModuleService } from './../UserModule/user-module.service';
import { UserRepository } from '../Model/user.repository';
import { AdminModuleService } from '../AdminModule/admin-module.service';

@Component({
  selector: 'contactus',
  templateUrl: './contactUs.component.html'
})

export class SellerContactComponent {
  constructor(public userService:UserModuleService,public modelService:ModelService,public userRepository:UserRepository,public adminService:AdminModuleService) {
    if(modelService.userid !== 0 || userRepository.sellerid !== 0 ){
      userService.login = false;
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

    }
  }
}
