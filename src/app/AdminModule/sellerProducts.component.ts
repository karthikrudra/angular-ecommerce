import { UserRepository } from './../Model/user.repository';
import { Products } from '../Model/Pruducts.model';
import { ProductRepository } from './../Model/product.repository';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { UserModuleService } from '../UserModule/user-module.service';
import { Router } from '@angular/router';
import { AdminModuleService } from './admin-module.service';
import Swal from "sweetalert2"

@Component({
  selector: 'sellerproducts',
  templateUrl: './sellerProducts.component.html',
  styleUrls: ['./sellerProducts.component.css']
})

export class AdminSellerProductsComponent  implements OnDestroy{
  constructor(private productRepository:ProductRepository,
    private userRepository:UserRepository,
    public userService:UserModuleService,
    public router:Router,
    public adminService:AdminModuleService
    ) { }

  get getViewSellerProducts(): Products[]{
    return  this.userRepository.getViewSellerProducts();

}

deleteProduct(productId: any){

  Swal.fire({
    title: 'Are you sure, you want to logout!',
    showDenyButton: true,
    confirmButtonText: 'Ok',
    denyButtonText: `cancel`,
  }).then((result) => {
    if (result.isConfirmed) {
      this.userRepository.deleteProduct(productId);
    }
  })



  // this.userRepository.deleteProduct(productId);
  // this.router.navigateByUrl("/sellerView")
}

ngOnDestroy(): void {
    return this.userRepository.unsubscribesellerProducts();
}

logout(){
  if(window.confirm("are you sure you want to logout")){
    this.userService.login = true;
    this.adminService.admin = true;
    this.router.navigateByUrl("/showProducts")
     }

}
}
