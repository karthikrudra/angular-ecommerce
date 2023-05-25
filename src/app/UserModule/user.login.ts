import { UserModuleService } from './user-module.service';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Registration } from './../Model/user.model';
import { Component, OnInit } from '@angular/core';
import { UserRepository } from '../Model/user.repository';

@Component({
  selector: 'user-login',
  templateUrl: './user.login.html',
  styleUrls:['./user.login.css']
})

export class UserLoginComponent  {
  title = 'E-Commerce';
  register:Registration = new Registration();
  submitted=false;

  constructor(private repository:UserRepository,public userService:UserModuleService) { }

        loginUser(ngform:NgForm){
          this.submitted = true;
          if (this.login.invalid) {
            console.log("invalid")
            return;
          }

                return this.repository.userLoginData(this.register.mailId,this.register.password);
        }
        registerPage(){
          this.userService.div = false;
        }
login=new FormGroup({
  usermail:new FormControl("",[Validators.required,Validators.email]),
  password:new FormControl("",[Validators.required,Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{9,16}$'),]),
 })

 get usermail(){
  return this.login.get('usermail');
 }

 get password(){
  return this.login.get('password');
 }
 get validate() {
  return this.login.controls;
}

}

