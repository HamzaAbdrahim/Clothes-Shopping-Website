import { order, typeProduct } from "../types";

export interface spechillist {
    icon:string
    titel:string,
    path:string,
}
export interface adedproduct 
{ 
product_name: string;
product_price: string;
product_discount: string;
after_discount: string;
product_amount: string; 
}

 interface initialStateordertypes {
    loading: boolean,
    data:order[]
  }
  export const initialState: initialStateordertypes = {
    loading: false,
    data: []
  }

  export interface initialStateproducttypes {
    loading: boolean,
    data:typeProduct[]
  }
  export interface orderIds {
    orderId: number,
    id: number
  } 