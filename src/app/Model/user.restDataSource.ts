
import { Injectable } from "@angular/core";
import { Registration } from './user.model';

import { HttpClient } from "@angular/common/http";
import { Observable, map } from "rxjs";
import { Products } from "./Pruducts.model";
import { promises } from "dns";
import { Orders } from "./orders.model";
import { Seller } from "./seller.model";
import { Router } from "@angular/router";

@Injectable()
export class RestDataSource{

public cartProducts:Products []=[];

  constructor(private http:HttpClient,public router:Router){}






registerUser(registration:Registration): Observable<Registration>{

  return this.http.post<Registration>(`http://localhost:9010/saveUser`,registration)
}

userLoginData(mail:any,password:any): Observable<number>{

  return  this.http.get<number>(`http://localhost:9010/login?mailId=${mail}&password=${password}` )

}
addUserAddress(addAddress:Registration): Observable<number>{
  return  this.http.post<number>(`http://localhost:9010/seller/login`,addAddress )

}
findUserOrders(userid:any): Observable<Orders[]>{
    return this.http.get<Orders[]>(`http://localhost:9094/order/vieworders?userId=${userid}` )
}










registerSeller(registration:Registration): Observable<Registration>{

  return this.http.post<Registration>(`http://localhost:9050/seller/saveSeller`,registration)
}
sellerLoginData(mail:any,password:any): Observable<number>{

  return  this.http.get<number>(`http://localhost:9050/seller/login?mailId=${mail}&password=${password}` )

}
getSellerView(sellerid:any): Observable<Products[]>{

  return this.http.get<Products[]>(`http://localhost:9050/product/findproductbysellerid?sellerId=${sellerid}` )
}
deleteSeller(sellerId:any): Observable<string>{
  return this.http.delete<string>(`http://localhost:9050/seller/deleteseller?sellerId=${sellerId}`)
}
insertProducts(products:Products ,sellerid:any): Observable<string>{

  return this.http.post<string>(`http://localhost:9050/product/saveProducts?sellerId=${sellerid}`,products)
}
editProducts(products:Products,sellerid:any): Observable<string>{

  return this.http.post<string>(`http://localhost:9050/product/editproducts?sellerId=${sellerid}`,products)
}
getAllProducts(): Observable<Products[]> {
  return this.http.get<Products[]>(`http://localhost:9050/product/findProducts`);
}
deleteProduct(productId:any): Observable<string>{

  return this.http.get<string>(`http://localhost:9050/product/deleteProduct?productId=${productId}`)
}
addSellerAddress(addAddress:Registration): Observable<number>{
  return  this.http.post<number>(`http://localhost:9050/seller/login`,addAddress )

}
getSellerOrders(sellerid:any): Observable<Orders[]>{

  return this.http.get<Orders[]>(`http://localhost:9094/order/getAllSellerOrders?sellerId=${sellerid}` )
}










addToCart(productid:number,userid:number,quantity:any,size:any):Observable<string>{

  return this.http.post<string>(`http://localhost:9094/cart/saveCart?productId=${productid}&userId=${userid}&quantity=${quantity}&size=${size}`,null)
}
getCart(userid:any): Observable<Products[]> {

  return this.http.get<Products[]>(`http://localhost:9094/cart/cartproduct?userId=${userid}`);
}
removeFromCart(productid:any,userid:any,size:any): Observable<string>{

  return this.http.delete<string>(`http://localhost:9094/cart/removefromcart?userId=${userid}&productId=${productid}&size=${size}`)

}

order(orders:Orders[],userid:any,deleteCart:any):Observable<string>{

  return this.http.post<string>(`http://localhost:9094/order/saveOrder?userId=${userid}&deleteCart=${deleteCart}`,orders)
}
cancelOrder(orderid:any):Observable<string>{
  return this.http.delete<string>(`http://localhost:9094/order/deleteOrder?orderId=${orderid}`)
}







adminLogin(mail:any,password:any): Observable<string>{

  return  this.http.get<string>(`http://localhost:9099/loginadmin?mailId=${mail}&password=${password}` )

}
getAllSellers(): Observable<Seller[]> {
  return this.http.get<Seller[]>(`http://localhost:9050/seller/findallsellers`);
}
viewSellerProducts(sellerId:any): Observable<Products[]> {

  return this.http.get<Products[]>(`http://localhost:9050/product/findproductbysellerid?sellerId=${sellerId}`);
}



payment():Observable<string>{
  return this.http.get<string>(`http://localhost:9094/order/payment`);
}


getAllLocations():Observable<string[]>{
  return this.http.get<string[]>(`http://localhost:9050/seller/getalllocations`)
}

getProductsByLocation(city:string):Observable<Products[]>
  {
    console.log(city)
    return this.http.get<Products[]>(`http://localhost:9050/product/findproductsbycity?city=${city}`)
  }
}


