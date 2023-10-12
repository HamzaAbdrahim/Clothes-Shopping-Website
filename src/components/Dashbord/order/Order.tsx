import "../../../scss/pages/dashbord/_order.scss"
import Fetchdate from "./Fetchdate";

const Order = () => {
  return (
    <div className="Order">
        <h1 className="titel">الطلبيات</h1>
        <Fetchdate />
    </div>
  )
}

export default Order