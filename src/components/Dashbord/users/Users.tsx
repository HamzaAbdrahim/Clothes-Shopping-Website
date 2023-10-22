import { useDispatch, useSelector } from "react-redux";
import "../../../scss/pages/dashbord/_users.scss"
import { useEffect} from "react";
import { getusers } from "../../../store/userslice";
import { AppDispatch, RootState } from "../../../store/store";
import { usertype } from "../../types";
import Loding from "../../shered/Loding";
import axios from "axios";
const Users = () => {
  const users = useSelector((state: RootState) => state.users.data);
  const loding = useSelector((state: RootState) => state.users.loading);

    const editUserPermission = async ({id , primition }:{id:number , primition:boolean}) => {
    const url = `http://localhost:3000/users/${id}`;
    const changedItem = {
      allwedtodashbord: primition,
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
  };

  const dispatch:AppDispatch = useDispatch();
  useEffect(() => {
  dispatch(getusers());
  }, []);
  

if (loding) return (<Loding />)

  return (
  <div className="Users">
  <h1 className="titel">المستخدمين</h1>
  <div className="user_container">
  {users.map((user:usertype) => (
  <div key={user.id} className="User_cart">
  <div className="user">
        <p>اسم الزبون: </p>
        <span>{user.name}</span>
  </div>
  <div className="user">
        <p>البريد الإكتروني</p>
        <span>{user.email}</span>
  </div>
  <div className="user">
        <p>كلمة السر</p>
        <span>{user.password}</span>
  </div>
  <div className="buttons">
  <button
  onClick={() => editUserPermission({ id: user.id, primition: true })}
  className={`Yes ${user.allwedtodashbord ? 'primition' : ''}`}
>
  مسوح له الدخول الي لوحة التحكم
</button>
  <button   onClick={() => editUserPermission({ id: user.id, primition: false })}
  className={`No ${user.allwedtodashbord ? '' : 'primition'}`}>غير مسموح له بالدخول للوحة التحكم</button>
  </div>
  </div>
  ))}
  </div>
  </div>
  )
}

export default Users