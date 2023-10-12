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
