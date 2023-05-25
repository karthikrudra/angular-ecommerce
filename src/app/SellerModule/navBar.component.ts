import { Component, OnInit } from '@angular/core';
import { UserModuleService } from './../UserModule/user-module.service';
import { ModelService } from '../Model/model.service';
import { AdminModuleService } from '../AdminModule/admin-module.service';
import { Router } from '@angular/router';

@Component({
  selector: 'sellernavbar',
  templateUrl: './navBar.component.html',
  styleUrls: ['./navBar.component.css']
})

export class SellerNavBarComponent  {
  constructor(public userService:UserModuleService,
    public modelService:ModelService,
    public adminService:AdminModuleService,
    public router:Router) { }



  logout(){
    if(window.confirm("are you sure want to log out!!")){
       this.modelService.userid = 0;
       this.userService.login = true;
       this.userService.buyNow = false;
       this.userService.cart = false;
       this.adminService.admin = true;
       this.adminService.seller = true;
       this.userService.myOrders = false;
              this.router.navigateByUrl("/showProducts")
    }
  }
}
