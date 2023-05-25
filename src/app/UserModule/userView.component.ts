
import { ProductRepository } from './../Model/product.repository';
import { UserModuleService } from './user-module.service';
import { UserRepository } from '../Model/user.repository';
import { Products } from '../Model/Pruducts.model';
import { Component, OnInit } from '@angular/core';
import { Orders } from '../Model/orders.model';
import { FormControl } from '@angular/forms';
import { AdminModuleService } from '../AdminModule/admin-module.service';
import { SellerModuleService } from '../SellerModule/seller-module.service';
import { Router, RouterOutlet } from '@angular/router';
import { ModelService } from '../Model/model.service';
import swal from "sweetalert";
import Swal from "sweetalert2"


@Component({
  selector: 'showProducts',
  templateUrl: './userView.component.html',
  styleUrls: ['./userView.component.css']
})

export class userViewComponent  {

SearchQuery = '';
menu = false;


locations:string[]=[];

products:Products=new Products();
order:Orders=new Orders();
percentage = 0;

  constructor(private repository:ProductRepository,
    private userRepository:UserRepository,
    public userService:UserModuleService,
    private productRepository:ProductRepository,
    public adminService:AdminModuleService,
    public modelService:ModelService,
    public sellerService:SellerModuleService,
    public router:Router
    ) {

     }


  get getAllProducts():Products[]{

    this.userService.cart = true;
    this.userService.myOrders = true;

  if(this.SearchQuery !== ''){
    this.userService.corousel = false;
    return this.repository.getAllProducts().filter(p => p.productName?.toLowerCase().match( this.SearchQuery.toLowerCase()))
  }
else{
         if(this.userService.select === ''){
          this.userService.corousel = true;
          this.userService.cartSize = this.userRepository.cartProducts.length;
          return this.repository.getAllProducts()
         }else{
          return this.repository.getAllProducts().filter(product => product.category?.toLowerCase() === this.userService.select.toLowerCase());
         }
   }

  }

  onShow(event: any) {
    console.log(event.target.value);
  }



  get getProductSortByPrice(){
    this.userService.sort = true;

    return this.repository.getAllProducts()
                    .sort((a,b) =>
                         {
                            const priceA = a.price ?? 0;
                            const priceB = b.price ?? 0;

                           return priceA - priceB

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
        this.userRepository.cartProducts = [];
    this.modelService.userid = 0;
    this.userService.login = true;
    this.userService.buyNow = false;
    this.userService.cart = false;
    this.adminService.admin = true;
    this.adminService.seller = true;
      }
    })


//  if(window.confirm("are you sure want to log out!!")){
//     this.userRepository.cartProducts = [];
//     this.modelService.userid = 0;
//     this.userService.login = true;
//     this.userService.buyNow = false;
//     this.userService.cart = false;
//     this.adminService.admin = true;
//     this.adminService.seller = true;

//  }

  }
  getSellerView(){
         return this.userRepository.getSellerView();
  }









  ViewInstant() {
    this.userService.instant = false;
  }
  showViewInstant() {
    this.userService.instant=true;}



  showMenu() {

    this.menu = true;7
  }
  hideMenu() {
    this.menu = false;
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


getTotalLocations()
  {

    this.locations= this.userRepository.getLocations();
  }


  getProductsInLoc()
  {
    this.productRepository.productsBYLoc(this.userService.city);
  }
// <input type="text" [formControl]="searchQuery" placeholder="Search products">

}
