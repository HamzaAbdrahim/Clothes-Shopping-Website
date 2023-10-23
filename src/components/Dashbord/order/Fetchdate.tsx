import { useEffect } from "react";
import { handremoveorder } from "../../shered/Deletitem";
import { useDispatch, useSelector } from "react-redux";
import {getorders} from "../../../store/useorderfatch"
import { order } from "../../types";
import { AppDispatch, RootState } from "../../../store/store";
import Loding from "../../shered/Loding";
import axios from "axios";

const Fetchdate = () => {
  const dispatch:AppDispatch = useDispatch();
  const orders = useSelector((state:RootState) => state.orders.data)
  const ordersloading = useSelector((state:RootState) => state.orders.loading)

    

  useEffect(() => {
    dispatch(getorders());
  }, []);

  const handelaccept = async (id:number) => {
    const url = `http://localhost:3000/order/${id}`;
    const changedItem = {
      orderstate: true,
    };
    const handleEdit = async () => {
      try {
      await axios.patch(url, changedItem);
      window.location.reload();
      alert('Item edited successfully');
      } catch (error) {
      console.error('Error editing item:', error);
      }
    };
    handleEdit()
  }

  if (ordersloading) return <Loding />

  

  return (
    <>
    {orders.length > 0 ? (
      <div className="order_container" >
        {orders.filter((order:order) => order.orderstate === false).map((order:order) => (
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
      <h1 className = "empty_titel">سلة الطلبيات</h1>
    )}
    </>
);
};

export default Fetchdate;

