export class Products{


    constructor(

    public  productId?: number,
    public  productName?: string,
    public  brandName?: string,
    public  price?:number,
    public  finalPrice?: number,
    public discount?:number,
    public  orderQuantity?: number,
    public  productQuantity?: number,
    public  discription?: string,
    public  userId?: number,
    public  sellerId?: number,
    public  productImage?: string,
    public  category?: string,
    public productSize?: string,
    public quantity?:number,
    public size?:string,
    public subTotal?: number,
    public totalPrice?: number


  ){}

}
