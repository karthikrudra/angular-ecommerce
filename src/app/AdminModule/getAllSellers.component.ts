import { AdminModuleService } from './admin-module.service';
import { Component, OnInit } from '@angular/core';
import { ProductRepository } from '../Model/product.repository';
import { Seller } from '../Model/seller.model';
import { Products } from '../Model/Pruducts.model';
import { UserModuleService } from '../UserModule/user-module.service';
import { Router } from '@angular/router';
import swal from "sweetalert";
import { UserRepository } from '../Model/user.repository';
import Swal from 'sweetalert2';
import { ModelService } from '../Model/model.service';

@Component({
  selector: 'getallsellers',
  templateUrl: './getAllSellers.component.html'
})

export class GetAllSellerComponent  {
  constructor(private productRepository:ProductRepository,
    public userRepository:UserRepository,
    public userService:UserModuleService,
    public router:Router,
    public modelService:ModelService,
    public adminService:AdminModuleService

    ) { }

  get getAllSellers(): Seller[]{
    return this.productRepository.getAllSellers();
  }
  viewSellerProducts(sellerId:any){
       this.userRepository.viewSellerProducts(sellerId);
  }
  deleteSeller(sellerId:any){
    Swal.fire({
      title: 'confirm delete!',
      showDenyButton: true,
      confirmButtonText: 'ok',
      denyButtonText: `cancel`,
    }).then((result) => {
      if (result.isConfirmed) {
        this.router.navigateByUrl("/getallsellers")
        this.productRepository.deleteSeller(sellerId);
      }
    })

}
  logout(){

    Swal.fire({
      title: 'Are you sure, you want to logout!',
      showDenyButton: true,
      confirmButtonText: 'Ok',
      denyButtonText: `cancel`,
    }).then((result) => {
      if (result.isConfirmed) {
        this.userService.login = true;
        this.adminService.admin = true;
        this.router.navigateByUrl("/showProducts")
      }
    })



    // if(window.confirm("are you sure you want to logout")){
    //   this.userService.login = true;
    //   this.adminService.admin = true;
    //   this.router.navigateByUrl("/showProducts")
    //    }

  }

}
