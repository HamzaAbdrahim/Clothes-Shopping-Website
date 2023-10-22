import { Link } from "react-router-dom";
import assest from "../../assets/imges";
import "../../scss/pages/_product.scss";
import { FC, useEffect, useState} from 'react';
import Loding from './Loding';
import { useDispatch, useSelector } from "react-redux";
import { getproduct } from "../../store/fetechproduct";
import { AppDispatch } from "../../store/store";
import { typeProduct } from "../types";


interface styling {
  none: string;
  w: string;
  p: string;
}

const Praduct: FC<styling> = (prop): JSX.Element => {
  const product = useSelector((state: any) => state.fetchedproduct.data);
  const [sliceproduct , setsliceproduct] = useState(4)
  const dispatch:AppDispatch = useDispatch();  
  

  useEffect(() => {
  dispatch(getproduct());
  }, []);  

if (product.length === 0) return <Loding />
  return (
    <>
      <div style={{ width: prop.w, padding: prop.p }} className="product">
        <h1 style={{ display: prop.none }} className="product_titel">جديد المنتجات</h1>
        <div className="producr_container">
          {
            product.slice(0,sliceproduct).map((ele:typeProduct) => (
              <div key={ele.id} className="product_cart" >
                <Link to={`/product/${ele.id}`}>
                  <img src={ele.img || assest.product_one} alt="product_one" className="product_img" />
                  <div className="cart_holder">
                    <div>
                      <p className="cart_price">{ele.price}{" "}د.ج  <span className="discount">{ele.price / 2}{" "}د.ج</span></p>
                      <h3 className="cart_titel">{ele.name}</h3>
                    </div>
                  </div>
                </Link>
                  <Link to={`/product/${ele.id}`}>
                    <button className="addtocart">رؤية المنتج</button>
                  </Link>
              </div>
            ))}
        </div>
        {product.length > 0 && product.length - 4 > sliceproduct ? (
          <Link style={{ display: prop.none }} onClick={() => setsliceproduct(prev => prev + 4)} className="see_more" to={""}>المزيد ...</Link>
        ) : (
          ""
        )}
      </div>
    </>
  )
}

export default Praduct;

