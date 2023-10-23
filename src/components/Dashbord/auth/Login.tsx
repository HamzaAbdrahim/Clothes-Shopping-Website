import { Form, Link, useLocation, useNavigate } from "react-router-dom"
import Input from "../../shered/Input"
import Submit from "../../shered/Submit"
import { useState } from "react";
import axios from "axios";
import { emailRegex, passwordRegex } from "./Rgexs";
import Loding from "../../shered/Loding";
interface resposetype {
  email:string , 
  password:string
}
const Login = () => {
  const location = useLocation();
  const [email , setemail] = useState<string>("البريد الإكتروني")
  const [lodingstate , setlodingstate] = useState<boolean>(false);
  const [password , setpassword] = useState<string>("كلمة السر")
  const sandDatecondition:boolean = email === "البريد الإكتروني" || password === "كلمة السر";
  console.log(sandDatecondition);
  const Navigate = useNavigate();
  

  const checkoutForm = (event:any): void => {
    event.preventDefault();
    const data = new FormData(event.target);
    const submission = {
    email: data.get('email') as string,
    password: data.get('password') as string,
    };
    checkemailpasswordvaldition(submission)
  }

  const checkemailpasswordvaldition = async (submission: { email: string; password: string }) => {
    if (submission.email.length === 0) {
      setemail("يجب ملاء هذه الخانة")
      } 
      else if (submission.email.length > 0 && !emailRegex.test(submission.email)) {
      setemail("البريد الإكتروني غير موجود")
      } else {
      setemail("البريد الإكتروني")
      }
      
      if (submission.password.length === 0) {
      setpassword("يجب ملاء هذه الخانة")
      } 
      else if (submission.password.length > 1 && submission.password.length < 6) {
      setpassword("كلمة السر يجب ان تكون اكثر من 5 احرف")
      } else if (!passwordRegex.test(submission.password)) {
      setpassword("كلمة السر")
      }
      console.log(sandDatecondition);
      
      if (sandDatecondition)  {
        setlodingstate(true)
        try {
          const response = await axios.get('http://localhost:3000/users');
          setlodingstate(false)
          console.log('Response:', response.data);
          if (!response.data.some((userinfo: resposetype) => userinfo.email.toLowerCase() === submission.email.toLowerCase())) {
            setemail('البريد الإلكتروني غير موجود، حاول إنشاء حساب جديد');
          } else if (!response.data.some((userinfo: resposetype) => userinfo.password.toLowerCase() === submission.password.toLowerCase())) {
            setpassword('كلمة السر غير موجودة، حاول إنشاء حساب جديد');
          } else if (response.data.some((userinfo: resposetype) => userinfo.email.toLowerCase() === submission.email.toLowerCase() && userinfo.password.toLowerCase() === submission.password.toLowerCase())) {
          Navigate('/')
          localStorage.setItem('authTokenLogin' , submission.email);
          }
        } catch (error) {
          console.error('Error making GET request:', error);
        }
  }
  };

  return (
    <>
    {lodingstate && <Loding />}
    <div className="form">
    <h1 className="form_titel">تسجيل دخول</h1>
    <Form className={`${location.pathname === '/auth/login' ? 'gaps' : ''}`}  onSubmit={checkoutForm}>
    <Input dis ={email !== "البريد الإكتروني" ? "#FF3333" : "#000000"}  titel = "البريد الإكتروني" className = "email" placeholder = "ادخل البريد الإكتروني الخاص بك" label = {email} name  = "email"  type = "text"/>
    <Input dis ={password !== "كلمة السر" ? "#FF3333" : "#000000"}  titel = " كلمة المرور" className = "password" placeholder = "ادخل كلمة المرور الخاصة بك" label = {password} name  = "password"  type = "password"/>
    <p className="to_login">ليس لديك حساب<Link to = "/auth">انشاء حساب جديد</Link></p>
    <Submit value="تسجيل الدخول"
    click={() => checkemailpasswordvaldition} />
    </Form>
    </div>
    </>
  )
}

export default Login