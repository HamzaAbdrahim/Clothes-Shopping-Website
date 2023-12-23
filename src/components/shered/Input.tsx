import { ChangeEvent, useState } from "react"
import assest from "../../assets/imges"
import "../../scss/components/_input.scss"
type inputprop = {
  type: 'text' | 'number' | 'email' | 'password'
  label:string ,
  name:string , 
  value?:string|number| null,
  placeholder:string,
  error: string,
  className?:string ,
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void
  disabled?: boolean,
}
const Input = (prop:inputprop):JSX.Element => {
  const [showpassword , setshowpassword] = useState<boolean>(false);
  
  return (
    <label  className={`${prop.error.length > 0 ? 'label_Err' : ''} label_sherd  ${prop.className ? prop.className : ''}`}  htmlFor={prop.name}>
    {prop.error.length > 0 ? prop.error : prop.label}
    <br />
    {prop.type === "password" ? (
    <div style={{position:"relative"}}>
    <input onChange={prop.onChange} value={prop.value as string} style={{border:`2px solid ${prop.error ? '#FF3333' :"#ccc"}`}} className={`input_sherd ${prop.className}`} type={showpassword ? "text" :  prop.type} name={prop.name} placeholder= {prop.placeholder} />
    <img onClick={() => setshowpassword(prev => (!prev))} src={showpassword ? assest.show : assest.hide} alt="" className="show_notshow_password" />
    </div>
    ) : (
    <input onChange={prop.onChange} value={prop.value as string}   style={{border:`2px solid ${prop.error ? '#FF3333' :"#ccc"}`}} className={`input_sherd ${prop.className}`} type={prop.type} name={prop.name} placeholder= {prop.placeholder} />
    ) }
    </label>  )
}

export default Input