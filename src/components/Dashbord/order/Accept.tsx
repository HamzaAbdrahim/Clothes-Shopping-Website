import { useLocation, useNavigate } from 'react-router-dom';
import assest from "../../../assets/imges"
import "../../../scss/pages/dashbord/order/_accept_tab.scss"
import Shadow from "../../shered/Shadow"
import { setLoading } from '../../../store/setloding';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../../store/store';
import { clear } from '../../../store/cartSlice';

const Accept = ({state , to} :{state:boolean , to:string}) => {
    const {pathname} = useLocation()
    console.log(pathname);
    
    const cart = useSelector((state:RootState) => state.cart);
    const dispatch:AppDispatch = useDispatch();
    const navigate = useNavigate();
    const handelimgclick = () => {
    navigate(to)
    dispatch(setLoading(false));
    if (pathname === "/checkout") {
    dispatch(clear(cart))
    }
}
    return (
    <>
    {state && <Shadow />}
    <div className={`Accept_tap ${state ? "active_tab" : ""}`} >
    <img  src={assest.Yes} alt="accept" className="accept" />
    <div className="content">
    <h1>تم طلب المنتج بنجاح</h1>
    <p>سيتم تحويل الطلب الي فرع الطلبات الي ان يتم وصول المنتج الي الزيون</p>
    </div>
    <img onClick={handelimgclick} src={assest.close_icon} alt="close_button" className="close" />
    </div>
    </>
    )
}

export default Accept