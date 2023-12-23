import Input from "../../../shered/Input"
import handellogin from "./handellogin";
import Submit from "../../../shered/Submit";

const Login = () => {
  const {Err , formik_login} = handellogin();
  return (
    <>
    <form method="post" onSubmit={formik_login.handleSubmit} className="form">
    <h1 className="form_titel">تسجيل دخول</h1>
    <Input onChange={formik_login.handleChange} label="البريد الإكتروني" className="email"
     placeholder="ادخل البريد الإكتروني الخاص بك" name="email" type="text" error={formik_login.touched.email && 
     formik_login.errors.email ? formik_login.errors.email : ''} value={formik_login.values.email}/>
    <Input onChange={formik_login.handleChange} label=" كلمة المرور" className="password" 
    placeholder="ادخل كلمة المرور الخاصة بك" name="password" type="password" error={formik_login.touched.password && 
    formik_login.errors.password ? formik_login.errors.password : ''} value={formik_login.values.password}/>
    {Err.length > 0 && 
    <div role="alert" className="err_masseg" >
    {Err}
    </div>
      }
    <Submit type={"submit"}  isLoading={false} processing={false}>
    تسجيل الدخول
    </Submit>
    </form>
    </>
  )
}

export default Login