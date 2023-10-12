import { useEffect, useState } from "react";
import { handremoveorder } from "../../shered/Deletitem";
import Accept from "./Accept";
import { useDispatch, useSelector } from "react-redux";
import {getorders} from "../../../store/useorderfatch"
import axios from "axios";
import { order } from "../../types";
import { orderIds } from "../Types";

const Fetchdate = () => {

  const [show, setshow] = useState<boolean>(false);

  const [orderid, setorderid] = useState<number[]>();

  const orders = useSelector((state: any) => state.orders.data);
    
  const dispatch = useDispatch();

console.log(orderid);

  useEffect(() => {
    dispatch(getorders());
    getordersId()
  }, []);

  const handelaccept = async (id:number) => {
    try {
    const respose:number[] = await axios.post(`http://localhost:3000/orderId` , {
    orderId:id,
    })
    console.log(respose);
    console.log('POST request successful');} catch (error) 
    {
    console.error('Error making POST request:', error);
    } 
    setshow((prev:boolean) => (!prev))
  }
  const getordersId = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/orderId`);
      const orderIds = response.data.map((order: orderIds) => order.orderId);
      const uniqueOrderIds = orderIds.filter((value: string, index: number, self: string | any[]) => {
        return self.indexOf(value) === index;
      });
      setorderid(uniqueOrderIds);
      console.log('GET request successful');
    } catch (error) {
      console.error('Error making GET request:', error);
    }
    setshow(prev => !prev);
  }
  return (
    <>
    <Accept to = "../" state = {show}  />
    {orders.length > 0 ? (
      <div className="order_container" >
        {orders.filter((order:order) => !orderid?.includes(order.id)).map((order:order) => (
          <div className="order_cart" key={order.id}>
        <h2  className="order-titel">معلومات عن الطلب</h2>
        <p className="order_id">Order ID: {order.id}</p>
        <div className="order">
        <p>اسم الزبون: </p>
        <span>{order.name}</span>
        </div>
        <div className="order">
        <p>رقم الهاتف: </p>
        <span>{order.phonenumber}</span>
        </div>
        <div className="order">
        <p>رقم الهاتف (الإضافي): </p>
        <span>{order.secondnumber}</span>
        </div>
        <div className="order">
        <p>ولاية: </p>
        <span>{order.city}</span>
        </div>
        <div className="order">
        <p>بلدية: </p>
        <span>{order.bladay}</span>
        </div>
        <div className="order">
        <p>عنوان: </p>
        <span>{order.address}</span>
        </div>
        ( <p className="coustmer_note">ملاحظة الزبون: <span>{order.coustmernote ? order.coustmernote : "لا شيء" }</span></p>):
          <button onClick={() => handremoveorder({ id: order.id, url: "http://localhost:3000/order" })} className="No">رفض الطلب</button>
          <button onClick={() => handelaccept(order.id)} className="Yes">قبول الطلب</button>
        </div>
        ))}
        </div>
    ) : (
        <div>Loading...</div>
    )}
    </>
);
};

export default Fetchdate;

