import assest from "../../../assets/imges"
import "../../../scss/pages/dashbord/_users.scss"
const Users = () => {
  return (
    <div className="Users">
        <h1 className="titel">المستخدمين</h1>
        <div className="user_container">
        <div className="User_cart">
        <img src={assest.User} alt="frind_img" className="frind_img" />
        <h1 className="frind_name">حمزة عبد الرحيم</h1>
        <p className="frind_role">ادمن</p>
        </div>
        <div className="User_cart">
        <img src={assest.User} alt="frind_img" className="frind_img" />
        <h1 className="frind_name">حمزة عبد الرحيم</h1>
        <p className="frind_role">ادمن</p>
        </div>
        <div className="User_cart">
        <img src={assest.User} alt="frind_img" className="frind_img" />
        <h1 className="frind_name">حمزة عبد الرحيم</h1>
        <p className="frind_role">ادمن</p>
        </div>

        <div className="User_cart">
        <img src={assest.User} alt="frind_img" className="frind_img" />
        <h1 className="frind_name">حمزة عبد الرحيم</h1>
        <p className="frind_role">ادمن</p>
        </div>
        <div className="User_cart">
        <img src={assest.User} alt="frind_img" className="frind_img" />
        <h1 className="frind_name">حمزة عبد الرحيم</h1>
        <p className="frind_role">ادمن</p>
        </div>
        </div>
    </div>
  )
}

export default Users