
import { Products } from './../Model/Pruducts.model';
import { Component, OnInit } from '@angular/core';
import swal from "sweetalert";
import { SellerModuleService } from './seller-module.service';
import { UserRepository } from '../Model/user.repository';
import { UserModuleService } from '../UserModule/user-module.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'addProducts',
  templateUrl: './addProducts.component.html'
})

export class AddProductsComponent  {

  products:Products =new Products();
  public empty = '';
  registrationForm!:FormGroup
  submitted=false;
  constructor(private repository:UserRepository,
    public sellerModuleService:SellerModuleService,
    public userService:UserModuleService,
    public router:Router,
    private formByilder:FormBuilder

    ) {


   }

   get validate(){
    return this.registrationForm.controls;
   }
   ngOnInit(){
    this.registrationForm=this.formByilder.group({
      user:['',Validators.required],
    })
   }
  insertProducts(ngform:NgForm){

    if(this.products.productName != null && this.products.price != 0 &&this.products.productImage !=null){

       this.repository.insertProducts(this.products);
      swal("added successfully")


    }
    else{
       this.empty = 'required fields are empty';
    }
  }
  logout(){
    if(window.confirm("are you sure want to log out!!")){
      this.userService.login = true;
      this.repository.sellerid = 0;

      this.router.navigateByUrl("/showProducts")
    }
  }


}
