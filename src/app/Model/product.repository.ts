import Swal from 'sweetalert2';
import { ModelService } from './model.service';
import { Injectable } from '@angular/core';
import { RestDataSource } from './user.restDataSource';
import { Products } from './Pruducts.model';
import { UserRepository } from './user.repository';
import { Orders } from './orders.model';
import { Seller } from './seller.model';
import {  Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { UserModuleService } from '../UserModule/user-module.service';
import { AdminModuleService } from '../AdminModule/admin-module.service';
import { Registration } from './user.model';

@Injectable()
export class ProductRepository{

  public bookedOrders:Orders []=[];
 selcetProduct:Products |undefined;

   public products:Products []=[];
  public seller:Seller []=[];




  public userSubscription?: Subscription;
  public userOrders:Orders[]=[];
constructor(private dataSource:RestDataSource,
  public userService:UserModuleService,
  public userRepository:UserRepository,
  public modelService:ModelService,
  private router:Router,
  public adminService:AdminModuleService,){
                              this.dataSource.getAllProducts().subscribe(p =>{
                                     this.products=p;
                                            })

              this.dataSource.getAllSellers()
     .subscribe(allSellers =>
      {
        this.seller = allSellers;
      })

}
returnProducts(){
  return this.products
}

registerSeller(registration:Registration,registerNumber:any){
  // const totalSellers = this.seller.length;
  // const sellerid = this.seller[totalSellers].sellerId;
  // registration.sellerId = sellerid;

  Swal.fire("registered successfully")
  this.dataSource.registerSeller(registration)
  .subscribe(sellerResponse => {
    this.seller.push(sellerResponse);
    if(registerNumber === 1){

      this.router.navigateByUrl("/seller-login")

    }else{

      this.router.navigateByUrl("/getallsellers");
    }
  });

}

adminLogin(mail:any,password:any){
  this.dataSource.adminLogin(mail,password).subscribe(admin=>{

if(admin === "Admin found"){

  this.userService.container = false;
  this.adminService.admin = false;
  this.userService.login = false;

this.router.navigateByUrl("/getallsellers");

}else{
console.log("not found")
Swal.fire("invalid details")
this.router.navigateByUrl('/admin-login');
}
}  )
}



  getAllProducts(){
       return this.products
  }
  selectedProduct(productid:number): Products  | undefined{

    this.selcetProduct =this.products.find(select => select.productId == productid);
    this.selcetProduct!.productQuantity = 1 ;
    this.selcetProduct!.productSize = 'm';
     return this.selcetProduct;
  }


  productsBYLoc(city:string)
{
  if(city=="all" || city=="")
  {
     return this.dataSource.getAllProducts().subscribe(data=>{
      this.products=data;
    })
  }
  else
  {
   return this.dataSource.getProductsByLocation(city).subscribe(p=>{
    this.products=p
    });
  }
}

  getAllSellers():Seller[]{

    return this.seller
  }
  deleteSeller(sellerId:any){
    this.seller = this.seller.filter(deleteseller => deleteseller.sellerId != sellerId);
    this.dataSource.deleteSeller(sellerId).subscribe( deletebyid =>{
      this.router.navigateByUrl("/getallsellers")
    });
  }


  findUserOrders(){

    if(!this.userSubscription){
    this.userSubscription=this.dataSource.findUserOrders(this.modelService.userid)
    .subscribe(userOrders =>
      {
              this.userOrders = userOrders;
      }
      );
    }
      return this.userOrders;
  }
  unsubscribeUserOrder() {
    if (this.userSubscription) {
      this.userSubscription.unsubscribe();
      this.userSubscription = undefined;
      // this.userOrders = [];
    }
  }
  cancelOrder(orderid:any){

      this.userOrders = this.userOrders.filter( removeOrder => removeOrder.orderId !== orderid);
      this.userRepository.sellerOrders = this.userRepository.sellerOrders.filter( removeOrder => removeOrder.orderId !== orderid);

    this.dataSource.cancelOrder(orderid).subscribe(o => console.log(o));
  }
}



