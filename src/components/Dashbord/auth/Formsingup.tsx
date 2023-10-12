import { useState } from 'react'
import Input from '../../shered/Input'
import { Form, Link } from 'react-router-dom'
import Submit from '../../shered/Submit'
import { emailRegex, passwordRegex } from './Rgexs'
import Importimg from '../addProduct/Importimg'
import axios from 'axios'
import Loding from '../../shered/Loding'

const Formsingup = () => {
    const [email , setemail] = useState<string>("")
    const [password , setpassword] = useState<string>("")
    const [uniqimg ,  setuniqimg] = useState<string>();
    const [lodingstate , setlodingstate] = useState<boolean>(false);
    const [imgstate , setimgstate] = useState<boolean>(false);
    const sandDatecondition:boolean = email === "" && password === "" && uniqimg !== undefined;

const getimg = (image: string) => {
    setuniqimg(image)
}

const checkoutForm = (event:any): void => {
    event.preventDefault();
    const data = new FormData(event.target);;
    const submission = {
      email: data.get('email') as string,
      password: data.get('password') as string,
    };
    singupauth(submission)
    if(sandDatecondition) {
      event.reset()
    }
}

const singupauth = async (submission:{email:string , password:string}) => {

    if (submission.email.length === 0) {
    setemail("يجب ملاء هذه الخانة")
    } 
    else if (submission.email.length > 0 && !emailRegex.test(submission.email)) {
    setemail("البريد الإكتروني غير موجود")
    } else {
    setemail("")
    }
    
    if (submission.password.length === 0) {
    setpassword("يجب ملاء هذه الخانة")
    } 
    else if (submission.password.length > 1 && submission.password.length < 6) {
    setpassword("كلمة السر يجب ان تكون اكثر من 5 احرف")
    } else if (!passwordRegex.test(submission.password)) {
    setpassword("")
    }
    if (uniqimg === undefined) {
      setimgstate(true)
    }

    if (sandDatecondition) {
      setlodingstate(true);
      setimgstate(false);
      try {
        const response = await axios.get(`http://localhost:3000/users?email=${submission.email.toLowerCase()}`);
        if (response.data.length > 0) {
          setlodingstate(false);
          setemail('البريد الإلكتروني موجود بالفعل ');
        } else {
          const postResponse = await axios.post('http://localhost:3000/users', {
            email: submission.email.toLowerCase(),
            password: submission.password.toLowerCase(),
            userimg: uniqimg
          });
          console.log(postResponse);
          alert('POST request successful');
          setlodingstate(false);
          setuniqimg(undefined);
        }
      } catch (error) {
        console.error('Error making POST request:', error);
      }
    }
}

    return (
    <>
    {lodingstate && <Loding />}
    <Form method="post" className='form' onSubmit={checkoutForm}>
    <h1 className="form_titel">إنشاء حساب جديد</h1>
    <Importimg onImageSelect={getimg} condition={uniqimg} imgstate = {imgstate} />
    <Input dis ={email !== "" ? "#FF3333" : "#000000"}   titel = "البريد الإكتروني" className = "email" placeholder = "ادخل البريد الإكتروني الخاص بك" label = {email} name  = "email"  type = "text"/>
    <Input dis ={password !== "" ? "#FF3333" : "#000000"} titel = " كلمة المرور" className = "password" placeholder = "ادخل كلمة المرور الخاصة بك" label = {password} name  = "password"  type = "password"/>
    <p className="to_login">هل لديك حساب بالفعل <Link to = "login">تسجيل دخول</Link></p>
    <Submit  value="تسجيل حساب جديد" click={singupauth} />
    </Form>
    </>
  )
}

export default Formsingup