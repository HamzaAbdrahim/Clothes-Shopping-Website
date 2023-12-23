import Input from "../../shered/Input"
import Shadow from "../../shered/Shadow";
import Closetap from "./Closetap";
import Importimg from "./Importimg";
import Submit from "../../shered/Submit";
import { colorNames, sizesArray } from "./Selectarray";
import useClickOutside from "../../../hooks/useclickoutside";
import Custom_Selecte from "../../home/checkout/Custom_Selecte";
import productvalidation from "./validation/productvalidation";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../store/store";
import { plusItem } from "../../../store/setadedarray";

const Addform = ({clickshowtap } : {clickshowtap:() => void}) => {
  const dispatch:AppDispatch = useDispatch()
  const Selectcatogra = (value: string) => {
    dispatch(plusItem(value))
  };
  const Selectsize = (value: string) => {
    dispatch(plusItem(value))
  };
  const Selectcolor = (value: string) => {
    dispatch(plusItem(value))
  };
  
  

  const tapRef = useClickOutside(clickshowtap)
    const {validation} = productvalidation()

    
  return (
    <>
    <Shadow  />
    <div ref={tapRef} className="Addform">
    <Closetap close = {clickshowtap} />
    <form onSubmit={validation.handleSubmit}  method="post"> 
    <div className="price_titel">
    <Input className="product_name"
            placeholder="ادخل اسم المنتج" label="ادخل اسم المنتج" name="product_name" type="text"
            onChange={validation.handleChange}
            error={validation.errors.Product_name ?
              validation.errors.Product_name : ''} />
    <Input className="product_page"
            placeholder="سعر المنتج" label="ادخل سعر المنتج" name="product_price" type="text"
            onChange={validation.handleChange}
            error={validation.errors.Product_price ?
              validation.errors.Product_price : ''}  />
    </div>
    <div className="discount_part">
    <Input className="product_page"
            placeholder="الخصم" label="ادخل الخمصم(إختياري)" name="product_discount" type="text"
            onChange={validation.handleChange}
            error={validation.errors.Product_discount ?
              validation.errors.Product_discount : ''} />
    <Input className="product_page"
            placeholder="سعر المنتج بعد الخصم" label="إختياري" name="after_discount" type="text"
            onChange={validation.handleChange}
            error={ 
              validation.errors.Product_afterdiscount ? validation.errors.Product_afterdiscount : ''} />
    <Input className="product_page"
            placeholder="الكمية الموجودة من المنتج" label="اضع الكمية" name="product_amount" type="text"
            onChange={validation.handleChange}
            error={ 
              validation.errors.Product_amount ? validation.errors.Product_amount : ''} />
    </div>
    <Importimg Errmassage={validation.touched.Product_img && validation.errors.Product_img  ?
     validation.errors.Product_img  : ''} file={validation.values.Product_img as File}  onChange={(event) => {
    validation.setFieldValue("Product_img", event.currentTarget.files?.[0]);
  }}/>
    <Custom_Selecte onSelect={Selectcatogra} children={["الحجابات" , "الخيمارات"]}  defaultValue="الأنواع" 
    Errmassage={validation.touched.Product_catogray && 
    validation.errors.Product_catogray? validation.errors.Product_catogray as string : ''} />
    <Custom_Selecte onSelect={Selectsize} children={sizesArray} defaultValue="الأحجام" 
    Errmassage={validation.touched.Product_size && 
    validation.errors.Product_size ? validation.errors.Product_size as string : ''} />
    <Custom_Selecte onSelect={Selectcolor} children={colorNames} defaultValue="الألوان" 
    Errmassage={validation.touched.Product_color && 
    validation.errors.Product_color ? validation.errors.Product_color as string : ''} />
    <div style={{margin:'3rem 2rem'}}>
      <Submit type={"submit"} isLoading={false} processing={false} >
       إضافة المنتج
      </Submit>
</div>
    </form>
   
    </div>
    </>
  )
}

export default Addform

