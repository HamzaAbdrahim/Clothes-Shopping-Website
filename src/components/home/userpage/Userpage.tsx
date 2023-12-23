import { Suspense } from "react";
import "../../../scss/pages/home/_userpage.scss"
import Input from "../../shered/Input";
import Submit from "../../shered/Submit";
import Handeledit from "./Handeledit";
import Loding from "../../shered/Loding";
import { onLogout } from "../../../api/AuthAPI";
import ProtecteAuth from "../../../protectedroutes/ProtecteAuth";
const Userpage = () => {
  const {User_edit} = Handeledit()

  console.log(User_edit.values);
  
  return (
  <ProtecteAuth>
  <section className="user_page">
  <h1 className="user_titel">الملف الشخصي</h1>
<Suspense fallback={<Loding />}>
  <form onSubmit={User_edit.handleSubmit} method="post">
      {User_edit.values.Name && <Input onChange={User_edit.handleChange} label="الإسم" className="name" 
        placeholder="محمد" name="name" type="text" error={User_edit.touched.Name &&
         User_edit.errors.Name ? User_edit.errors.Name : ''} value={User_edit.values.Name}/>}
       {User_edit.values.email && <Input onChange={User_edit.handleChange} label="البريد الإكتروني" className="email"
         placeholder="john.doe@gmail.com" name="email" type="text" error={User_edit.touched.email &&
        User_edit.errors.email ? User_edit.errors.email : ''} value={User_edit.values.email}/>}
        { User_edit.values.phone && <Input onChange={User_edit.handleChange} label="الهاتف"  
        placeholder="0668621987" name="phone" type="text" error={User_edit.touched.phone && 
    
        User_edit.errors.phone ? User_edit.errors.phone : ''} value={User_edit.values.phone} />}
        <div className="button_container">
    <Submit type={"submit"}  isLoading={false} processing={false}>
    تسجيل حساب جديد
    </Submit>
    <Submit onClick={onLogout} type={"button"}  isLoading={false} processing={false}>
    تسجيل الخروج
    </Submit>
        </div>
  </form>
</Suspense>

  </section>
  </ProtecteAuth>
  )
}

export default Userpage
