import { useSelector } from "react-redux";
import { useNavigate  } from "react-router-dom";
import "../../../scss/pages/home/_checkout.scss"
import Formsubmit from "./Formsubmit";
import Notedelivry from "./Notedelivry";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Checkout = () => {
  const succes = useSelector((state: any) => state.loding.loading);
  const cart = useSelector((state: any) => state.cart);
  const navigate = useNavigate();
  console.log(succes);
  
  return (
    <>
    <div className="Checkout_container">
    <Formsubmit />
    <Notedelivry />
    <ToastContainer position="bottom-right" />
    </div>
    </>
  )
}

export default Checkout;