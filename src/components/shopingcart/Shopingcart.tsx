import "../../scss/pages/_shopingcart.scss"
import Cart from "./Cart"
import Cotinue from "./Cotinue"
const Shopingcart = () => {
  return (
    <div className="Shopingcart">
        <h1 className="shoping_titel">محتويات سلّة التسوق</h1>
        <Cotinue />
        <Cart />
    </div>
  )
}

export default Shopingcart