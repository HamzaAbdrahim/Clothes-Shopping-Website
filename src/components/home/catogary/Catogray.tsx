import { useNavigate } from "react-router-dom";
import { catograys } from "../../../content"
import "../../../scss/pages/home/_catgory.scss"

const Catogray = () => {
  const Navigate = useNavigate();
  
  return (
    <div className="Catogray">
        <h1 className="titel">إكتشف المفلابس علي اصلها</h1>
        <div className="catogray_container" >
            {catograys.map((catogray , index) => (
            <div onClick={() => {localStorage.setItem('chosencatogray' , catogray.titel) , Navigate('filter')}} style={{width:catogray.width}} key={index} className="catogray_cart">
                <img style={{height:'25rem'}} src={catogray.img} alt="" className="Catogray_img" />
                <h1 className="catogray_titel">{catogray.titel}</h1>
            </div>
            ))}
        </div>
    </div>
  )
}

export default Catogray