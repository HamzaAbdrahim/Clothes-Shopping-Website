import { useNavigate } from 'react-router-dom';
import assest from "../../../assets/imges"
import "../../../scss/pages/dashbord/order/_accept_tab.scss"
import Shadow from "../../shered/Shadow"

const Accept = ({state , to} :{state:boolean , to:string}) => {
    const navigate = useNavigate();
    return (
    <>
    {state && <Shadow />}
    <div className={`Accept_tap ${state ? "active" : ""}`} >
    <img  src={assest.Yes} alt="accept" className="accept" />
    <div className="content">
    <h1>تم طلب المنتج بنجاح</h1>
    <p>سيتم تحويل الطلب الي فرع الطلبات الي ان يتم وصول المنتج الي الزيون</p>
    </div>
    <img onClick={() => navigate(to)} src={assest.close_icon} alt="close_button" className="close" />
    </div>
    </>
    )
}

export default Accept