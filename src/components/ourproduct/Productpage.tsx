import { useEffect, useState } from "react";
 import "../../scss/pages/_productpage.scss";
 import axios from "axios";
import { Link, useParams } from "react-router-dom";
import Loding from "./Loding";
import assest from "../../assets/imges";
import { useDispatch, useSelector } from "react-redux";
import { clearcount, decrement, increment } from "../../store/createSlice";
import { addItem } from "../../store/cartSlice";
import {setDefultColor , setDefultSize} from "../../store/publicstate"
interface Product {
  colors: any;
  id: number;
  name: string;
  price: number;
  img: string;
  sizes: string[];
}

const Productpage = () => {
  const [received, setReceived] = useState<Product[] | null>(null);
  const { id } = useParams<{ id: string }>();
  const counter = useSelector((state:any) => state.counter);
const defultcolor:string[] = useSelector((state:any) => state.publicstate.defultcolor);
const defultsize:string[] = useSelector((state:any) => state.publicstate.defultsize);
  const dispatch =useDispatch()

  const handleClearCount = () => {
    dispatch(clearcount(counter));
  };

  useEffect(() => {
    fetchProducts();
  },[]);
  
  useEffect(() => {
    if (received && received.length > 0) {
      dispatch(setDefultColor(received[0].colors[0]));
      dispatch(setDefultSize(received[0].sizes[0]));
    }
  }, [received]);

  
  const fetchProducts = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3000/products/${id}`
        );
        setReceived([response.data]);
      } catch (error) {
        console.error("Error fetching data:", error);
  }
};

const handleSizeClick = (size:any) => {
  dispatch(setDefultSize(size));
};
const handlecolorClick = (color:any) => {
  dispatch(setDefultColor(color));
  };


  return (
    <div>
      {received ? (
    received.map?.((product) => (
          <div key={product.id} className="Productpage">
            <img src={assest.product_one} alt="product_img" />
            <div className="Productpage_content">
              <h1 className="Productpage_title">{product.name}</h1>
              <div className="price_container">
                <p className="price">{product.price} د.ج</p>
                <p className="price_discount">{product.price / 2} د.ج</p>
                <p className="discount_percent">30%</p>
              </div>
              <div className="color_section">
                <h3 className="color_title">الألوان المتوفرة</h3>
                <ul className="list_colors">
                {product.colors.map((color:string) =>
                  (
                    <li 
                    onClick = {() => handlecolorClick(color)}
                    key={color} 
                    className={`color ${defultcolor.includes(color) ? "active" : ""}`}
                    style={{backgroundColor:color}}
                    >
                    </li>
                  )
                  )} 
                </ul>
              </div>
              <div className="size_section">
                <h3 className="size_title">الأحجام</h3>
                <ul className="list_sizes">
                {product.sizes.map((size) => (
                    <li 
                    onClick={() => handleSizeClick(size)} 
                    key={size} 
                    className={`size ${defultsize.includes(size) ? "active" : ""}`}
                    >
                      {size}
                    </li>
                  ))} 
                </ul>
              </div>
              <div className="tocart">
              <Link className="addtocart" onClick={() => {
  handleClearCount();
  dispatch(addItem({
    id: product.id,
    name: product.name,
    price: product.price,
    img: product.img,
    color: defultcolor,
    size: defultsize,
    count: counter,
    catogray: []
  }));
}} to="/cart">
  اضافة للسلة
</Link>
    <div className="counter" >
    <p onClick={() => dispatch(increment())}>+</p>
    <p className="number">{counter}</p>
    <p onClick={() => dispatch(decrement())}>-</p>
  </div>
</div>
            </div>
          </div>
        ))
      ) : (
        <Loding />
      )}
    </div>
  );
};

export default Productpage;