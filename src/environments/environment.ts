// import { environment } from './environment.prod';
export const environment = {

  production: false,
  userurl:'http://localhost:9051/',//for user service
  adminurl:'http://localhost:9054/', //for admin service
  carturl:'http://locaalhost:9053/',
  sellerurl:'http://localhost:9052/',

  produserurl:'http://34.122.139.85:9051', //for inventory,
  prodadminurl:'http://34.122.139.85:9054', //for authentication service
  prodcarturl:'http://34.122.139.85:9053',
  prodsellerurl:'http://34.122.139.85:9052',



  getApiUrl(data:string) {

    if(environment.production){
      if(data==='user'){
        return environment.produserurl;
      }
      else if(data=='admin'){
        return environment.prodadminurl;
      }
      else if(data=='cart'){
        return environment.prodcarturl;
      }
      else if(data==='seller'){
        return environment.sellerurl;
      }
      else{
        return;
      }
    }
    else{

      if(data==='user'){
        return environment.userurl;
      }
      else if(data==='admin'){
        return environment.adminurl;
      }
      else if(data==='cart'){
        return environment.carturl;
      }
      else if(data==='seller'){
        console.log("hitting url");
        return environment.sellerurl;
      }
      else{
        return;
      }
    }
  }

};
