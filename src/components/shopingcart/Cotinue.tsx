import { useDispatch , useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { clear } from "../../store/cartSlice";


Link
const Cotinue = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state:any) => state.cart);

  return (
    <>
    <div className="Cotinue_container">
        <Link className="back" to="/">متابعة التسوق</Link>
        <Link className="bay" to="/checkout">التقدم لإكمال الشراء</Link>
    </div>
    <button onClick={() => dispatch(clear(cart))} className = "clearProduct">حذف كل المنتجات</button>
    </>

  )
}

export default Cotinue