import { Link } from "react-router-dom"
import Input from "../../../shered/Input"
import Submit from "../../../shered/Submit"
import Singuplogic from "./Singuplogic";

const Formsingup = () => {
  const {formik_signup} = Singuplogic();

  return (
    <form method="post" onSubmit={formik_signup.handleSubmit} className='form'>
    <h1 className="form_titel">إنشاء حساب جديد</h1>
    <Input onChange={formik_signup.handleChange} label="الإسم" className="name" 
    placeholder="محمد" name="name" type="text" error={formik_signup.touched.name && formik_signup.errors.name ? formik_signup.errors.name : ''} value={formik_signup.values.name}/>
    <Input onChange={formik_signup.handleChange} label="البريد الإكتروني" className="email"
     placeholder="john.doe@gmail.com" name="email" type="text" error={formik_signup.touched.email && formik_signup.errors.email ? formik_signup.errors.email : ''} value={formik_signup.values.email}/>
    <Input onChange={formik_signup.handleChange} label=" كلمة المرور" className="password" 
    placeholder="********" name="password" type="password" error={formik_signup.touched.password && formik_signup.errors.password ? formik_signup.errors.password : ''} value={formik_signup.values.password}/>
    <Input onChange={formik_signup.handleChange} label="الهاتف"  
    placeholder="0668621987" name="phone" type="text" error={formik_signup.touched.phone && 
    formik_signup.errors.phone ? formik_signup.errors.phone : ''} value={formik_signup.values.phone} />
    <p className="to_login">هل لديك حساب بالفعل <Link to = "login">تسجيل دخول</Link></p>
    <Submit type={"submit"}  isLoading={false} processing={false}>
    تسجيل حساب جديد
    </Submit>
    </form>
  )
}

export default Formsingup






    {/* <Importimg handleImageSelect= {(event:any) => {
    const file = event.currentTarget.files && event.currentTarget.files[0];
    formik_signup.setFieldValue('file', file || null);
  }}  
  file={formik_signup.values.file}
  Errmassage = {formik_signup.touched.file && formik_signup.errors.file ? formik_signup.errors.file : ''} /> */}