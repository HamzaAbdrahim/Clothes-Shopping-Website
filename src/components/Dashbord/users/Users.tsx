import "../../../scss/pages/dashbord/_users.scss"
import { Suspense, useState } from "react";
import { usertype } from "../../types";
import { getAllUsers } from "../../../api/FirestoreAPI";
import Loding from "../../shered/Loding";
const Users = () => {
  const [allUsers, setAllUsers] = useState<usertype[]>([]);

     getAllUsers(setAllUsers);

     console.log(allUsers);
     
  


  return (
  <div className="Users">
  <h1 className="titel">المستخدمين</h1>
  <Suspense fallback={<Loding />}>
  <div className="user_container">
  {allUsers.length > 0 && allUsers.map((user:usertype) => (
  <div key={user.id} className="User_cart">
{user.Name &&  <div className="user">
        <p>اسم الزبون: </p>
        <span>{user.Name}</span>
  </div>}
{ user.email && <div className="user">
        <p>البريد الإكتروني</p>
        <span>{user.email}</span>
  </div>}
  {user.phone && <div className="user">
        <p>رقم هاتف الزبون</p>
        <span>{user.phone}</span>
  </div>}
  <div className="buttons">
  <button
  
  className={`Yes ${user.allwedtodashbord ? 'primition' : ''}`}
>
  مسوح له الدخول الي لوحة التحكم
</button>
  <button  
  className={`No ${user.allwedtodashbord ? '' : 'primition'}`}>غير مسموح له بالدخول للوحة التحكم</button>
  </div>
  </div>
  ))}
  </div>
  </Suspense>
  </div>
  )
}

export default Users