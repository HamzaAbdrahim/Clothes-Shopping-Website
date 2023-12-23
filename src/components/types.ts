 export interface typeProduct {
    id: number;
    name: string;
    price: number;
    img: string;
    color: string;
    size: string;
    count:number;
    }
    export interface typeadedProduct {
    id?: number;
    name: string;
    price: number;
    img: string;
    color: string[];
    size: string[];
    catogray:string[]
    count:number;
    }
    export interface typecatgory {
    img:string,
    titel:string,
    width:string
    }
    export interface order {
    id: number,
    name:String,
    phonenumber:number,
    secondnumber:number,
    city:String,
    bladay:String,
    address:String,
    coustmernote:String,
    orderstate:boolean
    }
    export interface usertype {
    [x: string]: any;
    Name:string,
    email:string
    phone: string;
    id?:number|string,
    allwedtodashbord?:boolean
    }
    export interface editdate {
      name:string,
      email:string,
      password:string
    }
    export interface editusertype {
      name:string,
      email:string,
      password:string
  }
  export interface Product {
    category: boolean;
    id: number;
    name: string;
    price: number;
    img: string;
    sizes: string[];
  }

  export type CheckoutFormData = {
    name: string;
    phone: string;
    secondphone: string;
    bladay: string;
    note: string;
  };

export type adedproduct = {
Product_name:string|null
Product_price:number
Product_img:File|undefined
Product_color:string[]
Product_size:string[]
Product_catogray:string[]
Product_discount:number,
Product_amount:number,
Product_afterdiscount:number

  }