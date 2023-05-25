import { Component, OnInit } from '@angular/core';
import { Registration } from '../Model/user.model';
import { NgForm } from '@angular/forms';
import { UserRepository } from '../Model/user.repository';
import { UserModuleService } from './user-module.service';

@Component({
  selector: 'addAddress',
  templateUrl: './addAddress.component.html'
})

export class AddAddressComponent  {

  addAddress:Registration=new Registration();

constructor(private userrepository:UserRepository,userService:UserModuleService) {
  userService.myOrders = true;
  userService.cart = true;
}

  addUserAddress(ngform:NgForm){

   this.userrepository.addUserAddress(this.addAddress);

  }
}
