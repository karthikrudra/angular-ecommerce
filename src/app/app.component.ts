import { Component } from '@angular/core';
import { Orders } from './Model/orders.model';
import { Products } from './Model/Pruducts.model';
import { ProductRepository } from './Model/product.repository';
import { UserRepository } from './Model/user.repository';
import { UserModuleService } from './UserModule/user-module.service';
import { FormControl } from '@angular/forms';
import { ModelService } from './Model/model.service';
import { AdminModuleService } from './AdminModule/admin-module.service';
import { SellerModuleService } from './SellerModule/seller-module.service';


@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>',



})
export class AppComponent {
  title = 'E-Commerce';



products:Products=new Products();
order:Orders=new Orders();
  constructor(private repository:ProductRepository,
    private userRepository:UserRepository,
    public userService:UserModuleService ,
    public modelService:ModelService,
    public adminService:AdminModuleService,
    public sellerService:SellerModuleService,
    private productRepository:ProductRepository) { }



    get getAllProducts():Products[]{

      this.userService.div = true;
      this.userService.products = true;
           if(this.userService.select === ''){
            return this.repository.getAllProducts()
           }else{

            return this.repository.getAllProducts().filter(product => product.category=== this.userService.select);
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




    // get searchBasedOnInput(){
    //   this.userService.searchQuery = new FormControl('');
    //   const query = this.userService.searchQuery.value.toLowerCase();
    //   return this.repository.getAllProducts()
    //   .filter(products => products.category?.toLowerCase().includes(query));
    // }

    logout(){
      this.userService.login = true;
      window.confirm("are you sure want to log out!!");
    }
    // stopNav(){
    //   this.userService.div = false;
    // }

    getSellerView(){
           return this.userRepository.getSellerView();
    }

    // addToCart(productid:any){

    //      this.userRepository.addToCart(productid);
    // }
    // buyNow(productid:any,finalPrice:any,orderQuantity:any,productSize:any){

    //   return this.userRepository.order(productid,finalPrice,orderQuantity,productSize);
    // }

















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
  // <input type="text" [formControl]="searchQuery" placeholder="Search products">


}
