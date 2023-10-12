import { useSelector } from "react-redux";
import { useNavigate  } from "react-router-dom";
import "../../scss/pages/_checkout.scss"
import Formsubmit from "./Formsubmit";
import Notedelivry from "./Notedelivry";
import Accept from "../Dashbord/order/Accept";
import { useEffect } from "react";

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
    useEffect(() => {
    navigate("/cart")
    },[])
    )}
    </>
  )
}

export default Checkout;