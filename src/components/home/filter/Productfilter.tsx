import { Link } from "react-router-dom"
import assest from "../../../assets/imges"
import {useSelector } from "react-redux";
import { Product } from "../../types";
import useCustomFetch from "../../../hooks/useCustomFetch";
import Loding from "../../shered/Loding";
import './../../../scss/pages/home/_Filterproduct.scss'

const Productfilter = () => {
    const price = useSelector((state: any) => state.publicstate.price);
    const size = useSelector((state: any) => state.publicstate.size);
    let category:string|null = localStorage.getItem('chosencatogray');

    let url =`http://localhost:3000/products?category=${category}`;
    console.log(url);
    
    const [product, loading, error] = useCustomFetch<Product[]>(`${url}`);
    
    if (loading) return <Loding />;
    if (error) return <Loding />;
    
  return (
    <div className="producr_container">
    {product && product.length > 0 ? 
    product.filter((item) => item.price > price && item.sizes.includes(size) )?.map((ele) => (
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
      )) : <h1 className="not_found">لا يوجد منتج بهذه الفيلتارات</h1>}
  </div>
  )
}

export default Productfilter