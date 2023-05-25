
import { Registration } from '../Model/user.model';
import { Component, OnInit } from '@angular/core';
import { UserRepository } from '../Model/user.repository';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { ProductRepository } from '../Model/product.repository';

@Component({
  selector: 'admin-login',
  templateUrl: './admin.login.html',
  styleUrls:['./admin.login.css']
})

export class AdminLoginComponent  {
  title = 'E-Commerce';
  submitted=false;
  register:Registration = new Registration();

  constructor(private repository:ProductRepository) { }

        loginAdmin(ngform:NgForm){
          this.submitted = true;
          if (this.userlogin.invalid) {
            console.log("invalid")
            return;
          }
                return this.repository.adminLogin(this.register.mailId,this.register.password);
        }

        userlogin=new FormGroup({
          usermail:new FormControl("",[Validators.required,Validators.email]),
          password:new FormControl("",[Validators.required,Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{9,16}$'),]),
         })

         get validate() {
          return this.userlogin.controls;
        }
         get usermail(){
          return this.userlogin.get('usermail');
         }

         get password(){
          return this.userlogin.get('password');
         }
}
