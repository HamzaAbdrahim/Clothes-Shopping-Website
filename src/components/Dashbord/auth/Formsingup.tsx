import { useState } from 'react'
import Input from '../../shered/Input'
import { Form, Link, useNavigate } from 'react-router-dom'
import Submit from '../../shered/Submit'
import {  emailRegex, passwordRegex , arabicNameRegex } from './Rgexs'
import Importimg from '../addProduct/Importimg'
import axios from 'axios'
import Loding from '../../shered/Loding'
import { singupformtypes } from '../Types'

const Formsingup = () => {
  const Navigate = useNavigate();
  const [formData, setFormData] = useState<singupformtypes>({
    email: "البريد الإكتروني",
    password: "كلمة السر",
    uniqimg:undefined,
    loadingState: false,
    imgState: false,
    name: 'الإسم',
    reWritePassword: 'اعد كلمة المرور'
  });


const checkoutForm = (event:any): void => {
    event.preventDefault();
    const data = new FormData(event.target);;
    const submission = {
    email: data.get('email') as string,
    password: data.get('password') as string,
    name:data.get('name') as string,
    re_write_password:data.get('re-write-password') as string
    };
    singupauth(submission)
}
const getimg = (image: string | undefined) => {
  setFormData(prevState => ({
    ...prevState,
    uniqimg: image
  }));
  localStorage.setItem('userimg' , image !== undefined? image : '' )
}
const singupauth = async (submission: { email: string, password: string , name:string ,re_write_password:string  }) => {
  const { email, password, name , re_write_password } = submission;

  if (name.length === 0) {
    setFormData(prevState => ({
      ...prevState,
      name: "يجب ملء هذه الخانة"
    }));
  } else if (name.length > 0 && !arabicNameRegex.test(name.toLowerCase())) {
    setFormData(prevState => ({
      ...prevState,
      name: "هذا الإسم غير موجود"
    }));
  } else {
    setFormData(prevState => ({
      ...prevState,
      name:'الإسم'
    }));
  }

  if (email.length === 0) {
    setFormData(prevState => ({
      ...prevState,
      email: "يجب ملء هذه الخانة"
    }));
  } else if (email.length > 0 && !emailRegex.test(email)) {
    setFormData(prevState => ({
      ...prevState,
      email: "البريد الإكتروني غير موجود"
    }));
  } else {
    setFormData(prevState => ({
      ...prevState,
      email: "البريد الإكتروني"
    }));
  }


  
  if (password.length === 0) {
    setFormData(prevState => ({
      ...prevState,
      password: "يجب ملء هذه الخانة"
    }));
  } else if (password.length > 1 && password.length < 6) {
    setFormData(prevState => ({
      ...prevState,
      password: "كلمة السر يجب أن تكون أكثر من 5 أحرف"
    }));
  } else if (!passwordRegex.test(password)) {
    setFormData(prevState => ({
      ...prevState,
      password: "كلمة السر"
    }));
  }
  if (re_write_password.length === 0) {
    setFormData(prevState => ({
      ...prevState,
      reWritePassword: "يجب ملء هذه الخانة"
    }));
  } else if (re_write_password.length > 1 && re_write_password.length < 6) {
    setFormData(prevState => ({
      ...prevState,
      reWritePassword: "كلمة السر يجب أن تكون أكثر من 5 أحرف"
    }));
  } else if (!passwordRegex.test(password) && re_write_password.toLowerCase() !== password.toLowerCase()) {
    setFormData(prevState => ({
      ...prevState,
      reWritePassword: "كلمة السر خاطئة "
    }));
  } else {
    setFormData(prevState => ({
      ...prevState,
      reWritePassword:'اعد كلمة المرور'
    }));
  }


  if (formData.uniqimg === undefined) {
    setFormData(prevState => ({
      ...prevState,
      imgState: true
    }));
  }

  console.log(formData.uniqimg);
  

  const sandDatecondition:boolean = formData.email === "البريد الإكتروني" 
  && formData.password === "كلمة السر" 
  && formData.name === 'الإسم'
  && formData.reWritePassword === 'اعد كلمة المرور' 
  && formData.uniqimg !== undefined;

  
  if (sandDatecondition) {
    setFormData(prevState => ({
      ...prevState,
      loadingState: true,
      imgState: false
    }));
    if (sandDatecondition)  {
    try {
      const response = await axios.get(`http://localhost:3000/users?email=${email.toLowerCase()}`);
      if (response.data.length > 0) {
        setFormData(prevState => ({
          ...prevState,
          loadingState: false,
          email: 'البريد الإلكتروني موجود بالفعل'
        }));
      } else {
        const postResponse = await axios.post('http://localhost:3000/users', {
          name:name.toLowerCase(),
          email: email.toLowerCase(),
          password: password.toLowerCase(),
          allwedtodashbord:false,
          userimg: formData.uniqimg
        });
        console.log(postResponse);
        alert('POST request successful');
        Navigate('login')
        setFormData(prevState => ({
          ...prevState,
          loadingState: false,
          email:"",
          password:'',
          reWritePassword:"",
        }));
      }
    } catch (error) {
      console.error('Error making POST request:', error);
    }
  }
  }
};
console.log(formData.uniqimg);

    return (
    <>
    {formData.loadingState && <Loding />}
    <Form method="post" className='form' onSubmit={checkoutForm}>
    <h1 className="form_titel">إنشاء حساب جديد</h1>
    <Importimg condition={formData.uniqimg} onImageSelect={getimg} imgstate={formData.imgState} />
    <Input dis ={formData.name !== "الإسم" ? "#FF3333" : "#000000"}   titel = "الإسم" className = "name" placeholder = "ادخل الإسم الخاص بك" label = {formData.name} name  = "name"  type = "text"/>
    <Input dis ={formData.email !== "البريد الإكتروني" ? "#FF3333" : "#000000"}   titel = "البريد الإكتروني" className = "email" placeholder = "ادخل البريد الإكتروني الخاص بك" label = {formData.email} name  = "email"  type = "text"/>
    <Input dis ={formData.password !== "كلمة السر" ? "#FF3333" : "#000000"} titel = " كلمة المرور" className = "password" placeholder = "ادخل كلمة المرور الخاصة بك" label = {formData.password} name  = "password"  type = "password"/>
    <Input dis ={formData.reWritePassword !== "اعد كلمة المرور" ? "#FF3333" : "#000000"} titel = " كلمة المرور" className = "re-write-password" placeholder = "اعد كتابة كلمة المرور" label = {formData.reWritePassword} name  = "re-write-password"  type = "password"/>
    <p className="to_login">هل لديك حساب بالفعل <Link to = "login">تسجيل دخول</Link></p>
    <Submit  value="تسجيل حساب جديد" click={() =>singupauth} />
    <img src={formData.uniqimg} alt="" />
    </Form>
    </>
  )
}

export default Formsingup