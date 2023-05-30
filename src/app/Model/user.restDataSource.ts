
import { Injectable } from "@angular/core";
import { Registration } from './user.model';

import { HttpClient } from "@angular/common/http";
import { Observable, map } from "rxjs";
import { Products } from "./Pruducts.model";
import { promises } from "dns";
import { Orders } from "./orders.model";
import { Seller } from "./seller.model";
import { Router } from "@angular/router";
import { environment } from "src/environments/environment";

@Injectable()
export class RestDataSource{


 userurl=environment.getApiUrl('user');
public  adminurl=environment.getApiUrl('admin');
public carturl=environment.getApiUrl('cart');
public sellerurl=environment.getApiUrl('seller')


public cartProducts:Products []=[];

  constructor(private http:HttpClient,public router:Router){

    //  this.userurl=environment.getApiUrl('user');
    // this.adminurl=`http://localhost:9054/`;
    // this.carturl=`http://localhost:9053/`;
    // this.sellerurl=`http://localhost:9052/`

  }





registerUser(registration:Registration): Observable<Registration>{

  return this.http.post<Registration>(this.userurl+`saveUser`,registration)
}

userLoginData(mail:any,password:any): Observable<number>{

  return  this.http.get<number>(this.userurl+`login?mailId=${mail}&password=${password}` )

}
addUserAddress(addAddress:Registration): Observable<number>{
  return  this.http.post<number>(this.userurl+`addAddress`,addAddress )

}
findUserOrders(userid:any): Observable<Orders[]>{
    return this.http.get<Orders[]>(this.carturl+`order/vieworders?userId=${userid}` )
}










registerSeller(registration:Registration): Observable<Registration>{

  return this.http.post<Registration>(this.sellerurl+`seller/saveSeller`,registration)
}
sellerLoginData(mail:any,password:any): Observable<number>{

  return  this.http.get<number>(this.sellerurl+`seller/login?mailId=${mail}&password=${password}` )

}
getSellerView(sellerid:any): Observable<Products[]>{

  return this.http.get<Products[]>(this.sellerurl+`product/findproductbysellerid?sellerId=${sellerid}` )
}
deleteSeller(sellerId:any): Observable<string>{
  return this.http.delete<string>(this.sellerurl+`seller/deleteseller?sellerId=${sellerId}`)
}
insertProducts(products:Products ,sellerid:any): Observable<string>{

  return this.http.post<string>(this.sellerurl+`product/saveProducts?sellerId=${sellerid}`,products)
}
editProducts(products:Products,sellerid:any): Observable<string>{

  return this.http.post<string>(this.sellerurl+`product/editproducts?sellerId=${sellerid}`,products)
}
getAllProducts(): Observable<Products[]> {
  return this.http.get<Products[]>(this.sellerurl+`product/findProducts`);
}
deleteProduct(productId:any): Observable<string>{

  return this.http.get<string>(this.sellerurl+`product/deleteProduct?productId=${productId}`)
}
addSellerAddress(addAddress:Registration): Observable<number>{
  return  this.http.post<number>(this.sellerurl+`seller/login`,addAddress )

}
getSellerOrders(sellerid:any): Observable<Orders[]>{

  return this.http.get<Orders[]>(this.carturl+`order/getAllSellerOrders?sellerId=${sellerid}` )
}










addToCart(productid:number,userid:number,quantity:any,size:any):Observable<string>{

  return this.http.post<string>(this.carturl+`cart/saveCart?productId=${productid}&userId=${userid}&quantity=${quantity}&size=${size}`,null)
}
getCart(userid:any): Observable<Products[]> {

  return this.http.get<Products[]>(this.carturl+`cart/cartproduct?userId=${userid}`);
}
removeFromCart(productid:any,userid:any,size:any): Observable<string>{

  return this.http.delete<string>(this.carturl+`cart/removefromcart?userId=${userid}&productId=${productid}&size=${size}`)

}

order(orders:Orders[],userid:any,deleteCart:any):Observable<string>{

  return this.http.post<string>(this.carturl+`order/saveOrder?userId=${userid}&deleteCart=${deleteCart}`,orders)
}
cancelOrder(orderid:any):Observable<string>{
  return this.http.delete<string>(this.carturl+`order/deleteOrder?orderId=${orderid}`)
}







adminLogin(mail:any,password:any): Observable<string>{

  return  this.http.get<string>(this.adminurl+`loginadmin?mailId=${mail}&password=${password}` )

}
getAllSellers(): Observable<Seller[]> {
  return this.http.get<Seller[]>(this.sellerurl+`seller/findallsellers`);
}
viewSellerProducts(sellerId:any): Observable<Products[]> {

  return this.http.get<Products[]>(this.sellerurl+`product/findproductbysellerid?sellerId=${sellerId}`);
}



payment():Observable<string>{
  return this.http.get<string>(this.carturl+`order/payment`);
}


getAllLocations():Observable<string[]>{
  return this.http.get<string[]>(this.sellerurl+`seller/getalllocations`)
}

getProductsByLocation(city:string):Observable<Products[]>
  {
    console.log(city)
    return this.http.get<Products[]>(this.sellerurl+`product/findproductsbycity?city=${city}`)
  }
}


