
import { Registration } from '../Model/user.model';
import { Component, OnInit } from '@angular/core';
import { UserRepository } from '../Model/user.repository';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'seller-login',
  templateUrl: './sellerLogin.component.html'
})

export class SellerLoginComponent  {
  title = 'E-Commerce';
  submitted=false;

  register:Registration=new Registration();

  // registration: Registration =new Registration();

  constructor(private repository:UserRepository) { }

  sellerLoginData(ngform:NgForm){
    this.submitted = true;
    if (this.login.invalid) {
      console.log("invalid")
      return;
    }
                return this.repository.sellerLoginData(this.register.mailId,this.register.password);
        }

        login=new FormGroup({
          usermail:new FormControl("",[Validators.required,Validators.email]),
          password:new FormControl("",[Validators.required,Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{9,16}$'),]),
         })

         get validate() {
          return this.login.controls;
        }

         get usermail(){
          return this.login.get('usermail');
         }

         get password(){
          return this.login.get('password');
         }
}
