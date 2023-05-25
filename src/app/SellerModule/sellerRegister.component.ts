import { ProductRepository } from './../Model/product.repository';

import { UserRepository } from '../Model/user.repository';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Registration } from '../Model/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'seller-register',
  templateUrl: './sellerRegister.component.html'
})

export class SellerRegistrationComponent  {
  submitted=false;
  // registrationForm!:FormGroup;
  registration:Registration=new Registration();

constructor(private userRepository:UserRepository,public productRepository:ProductRepository,public router:Router,private formBuilder:FormBuilder){}

// get validate() {
//   return this.registrationForm.controls;
// }


  registerSeller(ngform: NgForm){
    console.warn(this.registrationForm.value);
    console.log(this.registration);
    this.submitted = true;
    if (this.registrationForm.invalid) {
       console.log('invalid');
         return;

    }else{

      return this.productRepository.registerSeller(this.registration,1) ;

    }

  }


//   registrationForm=new FormGroup({
//     name:new FormControl('',[Validators.required,Validators.minLength(5)]),
//     email:new FormControl('',[Validators.required,Validators.email]),
//     password:new FormControl('',[Validators.required,Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{9,16}$'),]),
//     number: new FormControl('', [
//       Validators.required,
//       Validators.pattern('(?=.*[1-9]).{10,}'),

//     ]),
//   location:new FormControl('',[Validators.required]),
//   pincode: new FormControl('', [
//   Validators.required,
//   Validators.pattern('(?=.*[1-9]).{6,}'),

//     ]),
//   city:new FormControl('',[Validators.required]),
//   landmark:new FormControl('',[Validators.required]),
//   })



//   registrationForm=new FormGroup({
//     name:new FormControl('',[Validators.required,Validators.minLength(5)]),
//     email:new FormControl('',[Validators.required,Validators.email]),
//     password:new FormControl('',[Validators.required,Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{9,16}$'),]),
//     number: new FormControl('', [
//       Validators.required,
//       Validators.pattern('(?=.*[1-9]).{10,}'),

//     ]),
//   location:new FormControl('',[Validators.required]),
//   pincode: new FormControl('', [
//   Validators.required,
//   Validators.pattern('(?=.*[1-9]).{6,}'),

//     ]),
//   city:new FormControl('',[Validators.required]),
//   landmark:new FormControl('',[Validators.required]),
//   })





  // get name(){
  //   return this.registrationForm.get('name');
  // }
  // get email(){
  //   return this.registrationForm.get('email');
  // }
  // get password(){
  //   return this.registrationForm.get('password');
  // }
  // get number(){
  //   return this.registrationForm.get('number');
  // }
  // get location(){
  //   return this.registrationForm.get('location');
  // }
  // get pincode(){
  //   return this.registrationForm.get('pincode');
  // }
  // get city(){
  //   return this.registrationForm.get('city');
  // }
  // get landmark(){
  //   return this.registrationForm.get('landmark');
  // }

  registrationForm=new FormGroup({
    name:new FormControl('',[Validators.required,Validators.minLength(5)]),
    email:new FormControl('',[Validators.required,Validators.email]),
    password:new FormControl('',[Validators.required,Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{9,16}$'),]),
    number: new FormControl('', [
      Validators.required,
      Validators.pattern('(?=.*[1-9]).{10,}'),

    ]),
  location:new FormControl('',[Validators.required]),
  pincode: new FormControl('', [
  Validators.required,
  Validators.pattern('(?=.*[1-9]).{6,}'),

    ]),
  city:new FormControl('',[Validators.required]),
  landmark:new FormControl('',[Validators.required]),
  })

  get validate() {
    return this.registrationForm.controls;
  }
  get name(){
    return this.registrationForm.get('name');
  }
  get email(){
    return this.registrationForm.get('email');
  }
  get password(){
    return this.registrationForm.get('password');
  }
  get number(){
    return this.registrationForm.get('number');
  }
  get location(){
    return this.registrationForm.get('location');
  }
  get pincode(){
    return this.registrationForm.get('pincode');
  }
  get city(){
    return this.registrationForm.get('city');
  }
  get landmark(){
    return this.registrationForm.get('landmark');
  }

}

