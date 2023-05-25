import { NgModule } from '@angular/core';
import { UserRepository } from './user.repository';

import { HttpClientModule } from '@angular/common/http';
import { RestDataSource } from './user.restDataSource';
import { RouterModule } from '@angular/router';
import { ProductRepository } from './product.repository';



@NgModule({
  imports: [HttpClientModule,RouterModule],
  exports: [],
  declarations:[],
  providers: [UserRepository,RestDataSource,ProductRepository],
})
export class ModelModule {

}

