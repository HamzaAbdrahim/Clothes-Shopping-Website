import { useSelector } from "react-redux";
import { useNavigate  } from "react-router-dom";
import "../../../scss/pages/home/_checkout.scss"
import Formsubmit from "./Formsubmit";
import Notedelivry from "./Notedelivry";
import Accept from "../../Dashbord/order/Accept";

const Checkout = () => {
  const succes = useSelector((state: any) => state.loding.loading);
  const cart = useSelector((state: any) => state.cart);
  const navigate = useNavigate();
  console.log(succes);
  
  return (
    <>
    {succes && <Accept to="/" state={succes} />}
    {cart.length > 0 ? (
    <div className="Checkout_container">
    <Formsubmit />
    <Notedelivry />
    </div>
    )  : (
    navigate("/cart")
    )}
    </>
  )
}

export default Checkout;