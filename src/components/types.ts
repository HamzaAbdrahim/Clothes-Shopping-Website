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
    id: number;
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
    }
    export interface usertype {
    id:number,
    name:string,
    email:string
    password:string,
    img:string
    allwedtodashbord:boolean
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