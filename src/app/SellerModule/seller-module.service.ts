import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SellerModuleService {


 public sellerid: number=0;
 public profile = true;
 public addProduct = false;


  constructor() { }
}
