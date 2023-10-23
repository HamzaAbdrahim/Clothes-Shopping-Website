import { order } from "../../types";
import {useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import { getorders } from "../../../store/useorderfatch";
import Loding from "../../ourproduct/Loding";

const Lastesorder = () => {
  const orders = useSelector((state:RootState) => state.orders.data)
  const ordersloading = useSelector((state:RootState) => state.orders.loading)



useEffect(() => {
  getorders()
} , [])

  if (ordersloading) return <Loding />


  return (
    <div className="table-container">
      <table className="Lastesorder">
        <caption>اخر الطلبات</caption>
        <thead>
          <tr>
            <th>اسم الزبون</th>
            <th>رقم الزبون</th>
            <th>الولاية</th>
            <th>البلدية</th>
            <th>Id</th>
          </tr>
        </thead>
        <tbody>
          {orders.filter((order:order) => order.orderstate === true).map((latestOrder: order, index: number) => (
            <tr key={index}>
              <td>{latestOrder.name}</td>
              <td className="state">{latestOrder.phonenumber}</td>
              <th scope="row">{latestOrder.city}</th>
              <td>{latestOrder.bladay}</td>
              <td className="amount">{latestOrder.id}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Lastesorder;