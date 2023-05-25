import { ProductRepository } from './../Model/product.repository';


import { Products } from './../Model/Pruducts.model';
import { UserRepository } from '../Model/user.repository';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { SellerModuleService } from './seller-module.service';
import { UserModuleService } from '../UserModule/user-module.service';
import * as JSON from 'json3';
import Swal from "sweetalert2"


@Component({
  selector: 'sellerView',
  templateUrl: './sellerView.component.html',
  styleUrls: ['./sellerView.component.css']
})

export class sellerViewComponent implements OnDestroy {
  public reply: string='';
  // product:Products [] = [];
products:Products=new Products();
  constructor(private userRepository:UserRepository,
    private router:Router,
    private sellerModuleService:SellerModuleService,
    public userService:UserModuleService,
    public productRepository:ProductRepository) { }

   public product:Products [] = [new Products()];

  // get sellerProducts():Products[]{
  //     return this.userRepository.sellerView();
  // }

  select = '';

  get getAllProducts():Products[]{

this.userService.div = true;
this.userService.container = false;

    if(this.select === ''){
     return this.userRepository.getSellerView()
    }else{

     return this.userRepository.getSellerView().filter(product => product.category=== this.select);
    }
  }

  ngOnDestroy(): void {
      return this.userRepository.unsubscribeSellerView();
  }

  deleteProduct(productId: any){
    Swal.fire({
      title: 'are you sure, you want to delete!!',
      showDenyButton: true,
      confirmButtonText: 'Ok',
      denyButtonText: `cancel`,
    }).then((result) => {
      if (result.isConfirmed) {
        this.productRepository.products=this.productRepository.products.filter(remove => remove.productId !== productId)
      this.userRepository.deleteProduct(productId);
      }
    })


    // if(window.confirm("are you sure want to delete!!")){
    //   this.productRepository.products=this.productRepository.products.filter(remove => remove.productId !== productId)
    //   this.userRepository.deleteProduct(productId);
    // }

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
      this.userRepository.sellerid = 0;
      this.router.navigateByUrl("/showProducts")

      }
    })

    // if(window.confirm("are you sure want to log out!!")){
    //   this.userService.login = true;
    //   this.userRepository.sellerid = 0;
    //   this.router.navigateByUrl("/showProducts")
    // }

  }
  showMenu() {
    this.userService.menu = true;
  }
  hideMenu() {
    this.userService.menu = false;
  }
  showView() {
    this.userService.category = false;
  }
  View() {
    this.userService.category = true;
  }
  hideView() {
    this.userService.category = true;
  }
}
