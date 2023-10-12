import { order } from "../../types";
import axios from "axios";
import { useState, useEffect } from "react";
import {orderIds} from "../Types"

const Lastesorder = () => {
  const [orderdate, setOrderdate] = useState([]);
  const [ids, setids] = useState([]);

  console.log(orderdate);
  
  const getordersId = async () => {
  try {
    const response = await axios.get(`http://localhost:3000/orderId`);
    const orderIds = response.data.map((order: orderIds) => order.orderId);
    const uniqueOrderIds = orderIds.filter((value: string, index: number, self: string | any[]) => {
    self.indexOf(value) === index;
  });
  setids(uniqueOrderIds)
    console.log('GET request successful');
  } catch (error) {
    console.error('Error making GET request:', error);
  }
}

const getorders = async () => {
  try {
    const response = await axios.get(`http://localhost:3000/order/${ids.join(',')}`);
    console.log('GET request successful');
    setOrderdate(response.data);
  } catch (error) {
    console.error('Error making GET request:', error);
  }
};

useEffect(() => {
  getordersId()
  getorders()
} , [])

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
          {orderdate.map((latestOrder: order, index: number) => (
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