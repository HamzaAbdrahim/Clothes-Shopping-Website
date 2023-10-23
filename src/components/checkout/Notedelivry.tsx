import { useSelector } from "react-redux";
import assest from "../../assets/imges"
import Loding from "../ourproduct/Loding";
import {typeProduct} from "../types"
import { Suspense } from "react";



const Notedelivry = () => {
  const cart = useSelector((state: any) => state.cart);
  let total:number =  0 ;
  for (let index = 0; index < cart.length; index++) {
        total += cart[index].price  * cart[index].count 
        }

  
  return (
    <div className="Notedelivry_container">
    <h1 className="Notedelivry_titel">المنتجات في طلبك</h1>
    <div className="product_container">
    <Suspense fallback={<Loding />}>
        {cart.map((product:typeProduct) => (
        <div key={product.id} className="product_discrption">
        <img src={assest.product_one} alt="product_page" />
        <div className="product_content">
            <h1 className="product_titel">{product.name}</h1>
            <p className="product_size_color">• المقاس ( {product.size} )</p>
            <p className="color" style={{backgroundColor:product.color}}></p>
            <p className="product_price">{product.count}  3750 x د.ج</p>
        </div>
        </div>
        ))}
    </Suspense>
        <h1 className="summery_order">ملخص الطلب</h1>
        <p className="product_amount">{cart.length}{" "}وحدة متوفرة<span>{total} د.ج</span></p>
        <p className="product_total">إجمالي المستحق<span>{total} د.ج</span></p>
        <h1 className="payment_way">طريقة الدفع</h1>
        <div className="cart">
            <h3 className="cart_way">الدفع عند الإستلام</h3>
            <p className="cart_discrption">الدفع عند الإستلام{" "}(تخلص كي توصلك الطلبية)</p>
        </div>
        <p className="discrption">الدفع سيكون مباشرة بعد إستلام السلعة ووصولها لمنزلك أو مقر العمل حسب العنوان الذي وضعته في الإستمارة، يرجى إبقاء هاتفك مفتوح حتى يتمكن العون المكلف بالتوصيل بالإتصال بك عندما يكون قريب من العنوان.</p>
    </div>
    </div>
  )
}

export default Notedelivry