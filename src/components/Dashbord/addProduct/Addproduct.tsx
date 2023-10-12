import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import "../../../scss/pages/dashbord/_addproduct.scss"
import Addform from "./Addform"
import { useState } from "react";
import Curddate from "./productadd/Curddate";
const Addproduct = () => {
const [show , setshow] = useState<boolean>(false)

const handelclick = () => {
  setshow((prev:Boolean) => (!prev))
}

  return (
    <div className="Addproduct">
        <h1 className="titel">إضافة المنتجات</h1>
        <div className="add_container">
          <FontAwesomeIcon icon={faCirclePlus} size="2x" onClick={handelclick}  spinPulse style={{color: "#000000",cursor:"pointer"}} />
          <p className="add_titel">إضافة منتج</p>
        </div>
        {show ? (
          <Addform  clickshowtap = {handelclick} />
        ) : ''}
        <Curddate />
    </div>
  )
}

export default Addproduct