import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserModuleService {

 public show = false;
 public cart = false;
 public profile = true;
 public login = true;
 public buyNow = false;
 public category = false;
 public select = '';
 public menu = false;
 public myOrders = false;
 public sort = false;
 public div = true;
 public container = true;
 public products = true;
 public searchQuery?: any;
 public td = true;
 public empty = false;
 public ordertd = true;
 public orderempty = false;
 public cartSize = 0;
 public corousel = true;
 public city:string="";
 public instant=false;
 }
