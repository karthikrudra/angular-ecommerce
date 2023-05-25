import { Products } from './../Model/Pruducts.model';
import { Component} from '@angular/core';
import { UserRepository } from '../Model/user.repository';
import { SellerModuleService } from './seller-module.service';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserModuleService } from '../UserModule/user-module.service';

@Component({
  selector: 'editproducts',
  templateUrl: './editProduct.component.html'
})

export class EditProductComponent  {
  products:Products=new Products();

  constructor(private repository:UserRepository,
    public sellerModuleService:SellerModuleService,
    private route:ActivatedRoute,
    public userService:UserModuleService,
    public router:Router

    ) {

     Object.assign(this.products,this.repository.getProductEdit(route.snapshot.params["productid"]));
  }


  editProducts(ngform:NgForm){
    
  return this.repository.editProducts(this.products)
  }

  logout(){
    if(window.confirm("are you sure want to log out!!")){
      this.userService.login = true;
      this.repository.sellerid = 0;

      this.router.navigateByUrl("/showProducts")
    }
  }
}
