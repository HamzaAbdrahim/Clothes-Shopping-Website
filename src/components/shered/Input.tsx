import { useState } from "react"
import assest from "../../assets/imges"
import "../../scss/components/_input.scss"

const Input = (prop:any):JSX.Element => {
  const [showpassword , setshowpassword] = useState<boolean>(false)
  return (
    <label style={{color:prop.dis}} className={`label_sherd ${prop.className}`}  htmlFor="">
    {prop.label}
    <br />
    {prop.type === "password" ? (
    <div style={{position:"relative"}}>
    <input style={{border:`2px solid ${prop.dis}`}} className={`input_sherd ${prop.className}`} type={showpassword ? "text" :  prop.type} name={prop.name} placeholder= {prop.placeholder} />
    <img onClick={() => setshowpassword(prev => (!prev))} src={showpassword ? assest.show : assest.hide} alt="" className="show_notshow_password" />
    </div>
    ) : (
    <input  defaultValue={prop.value} style={{border:`2px solid ${prop.dis}`}} className={`input_sherd ${prop.className}`} type={prop.type} name={prop.name} placeholder= {prop.placeholder} />
    ) }
    </label>  )
}

export default Input