import { useDispatch, useSelector } from "react-redux";
import assest from "../../../assets/imges"
import Daynamicknote from "../../shered/Daynamicknote"
import { AppDispatch, RootState } from "../../../store/store";
import { usertype } from "../../types";
import { useEffect, useState } from "react";
import { getusers } from "../../../store/userslice";
import axios from "axios";

const Usersetting = () => {
    const users = useSelector((state: RootState) => state.users.data);
    const [orderid, setorderid] = useState<number[]>();
    const dispatch:AppDispatch = useDispatch();
    const email:any = localStorage.getItem('authTokenLogin')
    const chosenemail = users.filter((user:usertype) => user.email === email );

    console.log(chosenemail);

    useEffect(() => {
    dispatch(getusers());
    }, [1]);

    const getordersId = async () => {
        try {
          const response = await axios.get(`http://localhost:3000/orderId`);
          const orderIds = response.data.map((order:any) => order.orderId);
          const uniqueOrderIds = orderIds.filter((value: string, index: number, self: string | any[]) => {
          return self.indexOf(value) === index;
          });
          setorderid(uniqueOrderIds);
          console.log('GET request successful');
        } catch (error) {
          console.error('Error making GET request:', error);
        }
      }
      useEffect(() => {
        getordersId();
      } , [0])
    
    
    return (
    <div className="Usersetting">
    <h1 className="titel">لوحة التحكم</h1>
    <div className="user_info">
    <div>
    <Daynamicknote path={"orders"} img={assest.notification} arraylength={orderid?.length}   />
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