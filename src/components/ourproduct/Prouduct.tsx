import { Link } from "react-router-dom";
import assest from "../../assets/imges";
import "../../scss/pages/_product.scss";
import { FC, useEffect} from 'react';
import Loding from './Loding';
import { useDispatch, useSelector } from "react-redux";
import { getproduct } from "../../store/fetechproduct";


interface Product {
  id: number;
  name: string;
  price: number;
  img: string;
  sizes: string[];
}

interface styling {
  none: string;
  w: string;
  p: string;
}

const Praduct: FC<styling> = (prop): JSX.Element => {
  const price = useSelector((state: any) => state.publicstate.price);
  const size = useSelector((state: any) => state.publicstate.size);
  const catogray = useSelector((state: any) => state.loding.catogray);
  const product = useSelector((state: any) => state.fetchedproduct.data);
  const dispatch = useDispatch();  
  console.log(price);
  console.log(catogray);
  console.log(product);
  console.log(size);
  
  
  

  useEffect(() => {
  dispatch(getproduct());
  filterProducts()
  }, []);  

  const filterProducts = () => {
    if (size !== undefined ) {
      return  product?.filter((product:Product) => product.sizes.includes(size));
    } 
  };

  return (
    <>
      <div style={{ width: prop.w, padding: prop.p }} className="product">
        <h1 style={{ display: prop.none }} className="product_titel">جديد المنتجات</h1>
        <div className="producr_container">
          {product.length > 0 ? (
            product.map((ele:Product) => (
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
            ))
          ) : (
            <Loding />
          )}
        </div>
        {product.length > 0 ? (
          <Link style={{ display: prop.none }} className="see_more" to={""}>المزيد ...</Link>
        ) : (
          ""
        )}
      </div>
    </>
  )
}

export default Praduct;