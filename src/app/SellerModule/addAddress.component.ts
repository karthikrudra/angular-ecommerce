import { UserRepository } from './../Model/user.repository';
import { Component, OnInit } from '@angular/core';
import { Registration } from '../Model/user.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'addAddress',
  templateUrl: './addAddress.component.html'
})

export class AddSellerAddressComponent  {

  addAddress:Registration=new Registration();

constructor(private userRepository:UserRepository){}

  addSellerAddress(ngform:NgForm){
      this.userRepository.addSellerAddress(this.addAddress);

  }
}
