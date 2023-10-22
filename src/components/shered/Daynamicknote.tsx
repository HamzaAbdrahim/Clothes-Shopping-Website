import {useNavigate} from "react-router-dom"
import "../../scss/components/_natifction.scss"
const Daynamicknote = ({path , img , arraylength}:{path:string , img:string , arraylength:number|undefined}) => {
    const Navigate =  useNavigate()
  return (
<div onClick={() => Navigate(path) } className={`bag_container `}>
<img src={img} alt="bag" className='bag' />
{arraylength && arraylength > 0 ? (
  <span className={`bg-counter ${path !== "orders" ? "order_note" : "cart_note"}`}>{arraylength}</span>
  ) : ""}
</div >
  )
}

export default Daynamicknote