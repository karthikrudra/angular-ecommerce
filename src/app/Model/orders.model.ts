export class Orders{
  constructor(
    public  orderId?: number,
    public  productSize?: string,
    public  orderQuantity?: number,
    public  totalPrice?: number,
    public  orderDate?: any,
    public  productId?: number,
    public  userId?: number,

    public  productName?: string,
    public  price?:number,
    public  finalPrice?: number,

    public  discription?: string,
    public  sellerId?: number,
    public  productImage?: string,
    public  category?: string,
    public subTotal?: number,
    

  ){}
}
