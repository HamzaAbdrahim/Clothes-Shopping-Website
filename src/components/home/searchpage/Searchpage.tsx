import { Link } from "react-router-dom";
import "../../../scss/pages/home/_searchpage.scss"
import { useSelector } from "react-redux"
import assest from "../../../assets/imges";
import { typeProduct } from "../../types";

const Searchpage = () => {
  const searchvalue = useSelector((state:any) => state.shearchvalue);
  const product = useSelector((state: any) => state.fetchedproduct.data);
  console.log(product.length);
  
  return (
  <div className="Searchpage">
  <h1 className="Searchpage_titel">{`عن البحث نتائج ( ${searchvalue} )`}</h1>
  <div className="producr_container">
          { product.length > 0 ? (
            product.filter((product:typeProduct) => product.name.toLowerCase().startsWith(searchvalue.toLowerCase())).map((ele:typeProduct) => (
    <div key={ele.id} className="product_cart" >
      <Link to={`/product/${ele.id}`}>
        <img src={assest.product_one} alt="product_one" className="product_img" />
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
            <h1 className="not_found">لا يوجد منتج بإسم هذا</h1>
          )}
  </div>
  </div>
  )
}

export default Searchpage