import { useDispatch, useSelector } from "react-redux";
import assest from "../../../assets/imges"
import Daynamicknote from "../../shered/Daynamicknote"
import { AppDispatch, RootState } from "../../../store/store";
import { order, usertype } from "../../types";
import { useEffect } from "react";
import { getusers } from "../../../store/userslice";

const Usersetting = () => {
    const users = useSelector((state: RootState) => state.users.data);
    const dispatch:AppDispatch = useDispatch();
    const email:any = localStorage.getItem('authTokenLogin')
    const chosenemail = users.filter((user:usertype) => user.email === email );
    const orders = useSelector((state:RootState) => state.orders.data)


    console.log(chosenemail);

    useEffect(() => {
    dispatch(getusers());
    }, []);

    
    
    return (
    <div className="Usersetting">
    <h1 className="titel">لوحة التحكم</h1>
    <div className="user_info">
    <div>
    <Daynamicknote path={"orders"} img={assest.notification} arraylength={orders.filter((order:order) => order.orderstate === false)?.length}   />
    </div>
    {chosenemail.map((user:usertype) => (
        <>
        <p>{user.name ||'Ahsan Iqbal'}<span>{user.email||'user'}</span></p>
        <img src={(localStorage.getItem('userimg')!)} alt="profil_img"  className="profil_img" />
        </>
    ))}
    </div>
    </div>
    )
}

export default Usersetting