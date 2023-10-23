import { Link } from "react-router-dom";
import assest from "../../../assets/imges";
import { useSelector , useDispatch } from "react-redux";
import { deletedfromcart } from "../../../store/cartSlice";
import {typeProduct} from "../../types"
const Cart = () => {
  const cart = useSelector((state: any) => state.cart);
   const dispatch = useDispatch();

  return (
    <div>
      {cart.length > 0 ? (
        cart.map((product: typeProduct) => (
          <div key={product.id} className="Cart">
            <img src={assest.product_one} alt="" className="Cart_img" />
            <div className="cart_content">
              <div>
                <h1 className="Cart_titel">{product.name}</h1>
                <p className="Cart_discrption">
                  Standard Petit ({product.size} )
                </p>
              </div>
              <div className="price">
                <h1>سعر الوحدة</h1>
                <p>{product.price}</p>
              </div>
              <div className="amount">
                <h1>الكمية</h1>
                <p>{product.count}</p>
              </div>
              <div className="total">
                <h1>إجمالي السعر</h1>
                <p>{product.price * product.count}</p>
              </div>
              <div className="chosen_color">
                <h1>لون</h1>
              <p className="color" style={{backgroundColor:product.color.toString()}}></p>
              </div>
            </div>
            <div className="cart_links">
              <Link onClick={() => dispatch(deletedfromcart(product))} className="clear" to={""}>
                حذف المنتج
              </Link>
              <Link className="back_shop" to={"/"}>
                العودة للتسوق
              </Link>
            </div>
          </div>
        ))
      ) : (
      <h1 className = "empty_titel">سلّة التسوق فارغة </h1>
      )}
    </div>
  );
};

export default Cart;