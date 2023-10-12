import { useDispatch } from "react-redux"
import { catograys } from "../../content"
import "../../scss/pages/_catgory.scss"
import { savecatogray } from "../../store/setloding";
const Catogray = () => {
  const dispatch = useDispatch();
  return (
    <div className="Catogray">
        <h1 className="titel">إكتشف المفلابس علي اصلها</h1>
        <div className="catogray_container" >
            {catograys.map((catogray , index) => (
            <div onClick={() => dispatch(savecatogray(catogray.titel))} style={{width:catogray.width}} key={index} className="catogray_cart">
                <img style={{height:'25rem'}} src={catogray.img} alt="" className="Catogray_img" />
                <h1 className="catogray_titel">{catogray.titel}</h1>
            </div>
            ))}
        </div>
    </div>
  )
}

export default Catogray