import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../store/store";
import { editdate, usertype } from "../../types";
import Input from "../../shered/Input";
import { Suspense, useEffect, useState } from "react";
import { getusers } from "../../../store/userslice";
import "../../../scss/pages/home/_userpage.scss"
import { Form, useNavigate } from "react-router-dom";
import { arabicNameRegex, emailRegex, passwordRegex } from "../../Dashbord/auth/Rgexs";
import axios from "axios";
import Loding from "../ourproduct/Loding";

const Userpage = () => {

    const users = useSelector((state: RootState) => state.users.data);
    const [loding  , setloding] = useState<boolean>(false)
    const email:string|null = localStorage.getItem('authTokenLogin')
    const Navigate = useNavigate()
    const useracount = users.filter((user:usertype) => user.email === email );
    const [formdate, setformdate] = useState<editdate>({
      name: "الإسم" ,
      email: "البريد الإكتروني",
      password:"كلمة السر"
    })
    
    const dispatch:AppDispatch = useDispatch();

    useEffect(() => {
    dispatch(getusers());
    }, []);

    const handelsubmit = (e: React.FormEvent<HTMLFormElement>) => {
    
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const validDate: editdate = {
    name: data.get('name') as string,
    email: data.get('email') as string,
    password: data.get('password') as string,
    };

    if (validDate.name.length === 0) {
      setformdate(prevState => ({
      ...prevState,
      name: "يجب ملء هذه الخانة"
      }));
      } else if (!arabicNameRegex.test(validDate.name.toLowerCase())) {
      setformdate(prevState => ({
      ...prevState,
      name: "هذا الإسم غير موجود"
      }));
      } else {
      setformdate(prevState => ({
      ...prevState,
      name: 'الإسم'
      }));
      }
    
      if (validDate.email.length === 0) {
      setformdate(prevState => ({
      ...prevState,
      email: "يجب ملء هذه الخانة"
      }));
      } else if (!emailRegex.test(validDate.email)) {
      setformdate(prevState => ({
      ...prevState,
      email: "البريد الإكتروني غير موجود"
      }));
      } else {
      setformdate(prevState => ({
      ...prevState,
      email: "البريد الإكتروني"
      }));
      }
    
      if (validDate.password.length === 0) {
      setformdate(prevState => ({
      ...prevState,
      password: "يجب ملء هذه الخانة"
      }));
      } else if (validDate.password.length < 6) {
      setformdate(prevState => ({
      ...prevState,
      password: "كلمة السر يجب أن تكون أكثر من 5 أحرف"
      }));
      } else if (!passwordRegex.test(validDate.password)) {
      setformdate(prevState => ({
      ...prevState,
      password: "كلمة السر"
      }));
  }
  const handleEditProduct = async () => {
    setloding(true)
    try {
      const response = await axios.patch(`http://localhost:3000/users/${useracount.map((item) => item.id)}`, {name:validDate.name , email:validDate.email, password:validDate.password});
      console.log('Element updated:', response.data);
      setloding(false)
      window.location.reload()
    } catch (error) {
      console.error('Error updating element:', error);
    }
  };
  handleEditProduct(); 

  };
  const Logout = () => {
    localStorage.removeItem('authTokenLogin')
    Navigate("/auth")
    }
  
  return (
  <>
  {loding && <Loding  />}
  <section className="user_page">
  <h1 className="user_titel">الملف الشخصي</h1>
  {useracount.map((user:usertype) => (
  <Suspense fallback = {<Loding />}>
  <div aria-hidden="true" key={user.id} data-testid="image-wrapper" className="img_wrapper">
  <img src={(localStorage.getItem('userimg')!)} alt="img" />
  </div>
  <Form method="PUT" onSubmit={handelsubmit} className="inputs">
  <Input dis ={formdate?.name !== "الإسم" ? "#FF3333" : "#000000"} name = "name" value= {user.name}  label = {formdate?.name}type = "text"/>
  <br />
  <Input dis ={formdate?.email !== "البريد الإكتروني" ? "#FF3333" : "#000000"} name = "email" value= {user.email}  label = {formdate?.email} type = "text"/>
  <br />
  <Input dis ={formdate?.password !== "كلمة السر" ? "#FF3333" : "#000000"} name = "password" value = {user.password} label= {formdate?.password} type = "text" />
  <div className="buttons">
  <input type="submit" value="حفظ التعديلات"  />
  {useracount.map((item) => 
  <input type="submit" onClick={() => Navigate(item.allwedtodashbord === true ? '/dashbord' :'/')} value={
    item.allwedtodashbord === true ? "الذهاب الي لوحة التحكم" :'الذهاب الي الصفحة الرئسية'}
  />
  )}
  <button className="Logout" onClick={Logout}>تسجيل الخروج</button>
  </div>
  
  </Form>
  </Suspense>
  ))}
  </section>
  </>
  )
}

export default Userpage