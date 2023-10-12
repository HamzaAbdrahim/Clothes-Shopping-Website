import Input from "../../shered/Input"
import { Form } from 'react-router-dom'
import Shadow from "../../shered/Shadow";
import Closetap from "./Closetap";
import { useEffect, useRef, useState } from "react";
import Chosecatogray from "./Chosecatogray";
import Importimg from "./Importimg";
import Submit from "../../shered/Submit";
import { sizes } from "../../../content";
import { adedproduct } from "../Types";
import assest from "../../../assets/imges";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { catogray, colorNames, sizesArray } from "./Selectarray";
import Loding from "../../shered/Loding";
import { clearItem } from "../../../store/setadedarray";


const Addform = ({clickshowtap } : {clickshowtap:() => void}) => {
  const [loding , setloding] = useState<Boolean>(false)
  const tapRef = useRef<HTMLDivElement >(null);
  const [show , setshow] = useState<Boolean>(false)
  const [uniqimg ,  setuniqimg] = useState<string>();
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
  const dispatch = useDispatch();
  const [err , seterr] = useState<string>("")
  const selecteditem = useSelector((state:any) => state.itemsSlice)
  const lodingstate = useSelector((state:{loding:boolean}) => state.loding)
  const dinarPriceRegex = /^\d+(?:\.\d{1,2})?$/;
  const selectedcatogray =  selecteditem.filter((ele:string) => catogray.includes(ele));
  const selectedcolors = selecteditem.filter((ele:string) => colorNames.includes(ele));
  const selectedsizes = selecteditem.filter((ele:string) => !catogray.includes(ele) && !colorNames.includes(ele));
  const conditionpushform:boolean = err !== "" && selectedcatogray.length > 0 && selectedcolors.length > 0 && selectedsizes .length > 0 ;
  
  
  console.log(lodingstate);
  console.log(selecteditem);
  


  useEffect(() => {
    const handler = (e:MouseEvent)=>{
      if(tapRef.current && !tapRef.current.contains(e.target as Node)){
        clickshowtap()
        console.log(tapRef.current);
      }      
    };
    document.addEventListener("mousedown", handler);
    return() =>{
      document.removeEventListener("mousedown", handler);
    }
  });

const extrasizes = () => {
  sizes.map((size) => {
    setSelectedSizes((prevSizes) => [...prevSizes, size.size])
  })
  }
  const handelclick = () => {
  setshow((prev:Boolean) => (!prev));
  extrasizes();
  } 
  const getimg = (image:string) => {
    setuniqimg(image)
    }
  const handelform =  (e:any) => {
  e.preventDefault(); 
  const data = new FormData(e.target);
  const subdate:adedproduct = {
  product_name: data.get('product_name') as string,
  product_price:data.get('product_price') as string,
  product_discount:data.get('product_discount') as string,
  after_discount:data.get('after_discount') as string,
  product_amount:data.get('product_amount') as string,
  };
  if (subdate.product_name === "") {
  seterr("يجب كتابة اسم المنتج");
  } else if (subdate.product_price === "") {
  seterr("خانة السعر إجبارية");
  } else if (subdate.product_name.length > 0 && subdate.product_name.length < 5) {
  seterr("اسم المنتج غير موجود");
  } else if (!dinarPriceRegex.test(subdate.product_price)) {
  seterr('ضع السعر الحقيقي للمنتوج');
  } else if (subdate.product_discount.length < 1 && subdate.product_discount.length > 3) {
  seterr('رقم الخصم يتكون من رقمين');
  } else if (uniqimg === null) {
  seterr('خانة الصورة إجبارية');
  } else if (!conditionpushform) {
  seterr('تأكد من ملئ خانة الألوان  و الأحجام و النوع')
} else {
  seterr('')
  e.target.reset()
  dispatch(clearItem())
  }
  handelsadedate(subdate)
}



const handelsadedate = async (subdate:adedproduct) => {
    const url:string = "http://localhost:3000/products";
    if (conditionpushform) {
    setloding(true)
    try {
    const response = await axios.post(url, {
    name:subdate.product_name,
    price:subdate.product_price,
    catogray:selectedcatogray,
    colors:selectedcolors ,
    sizes:selectedsizes,
    img:uniqimg
    });
    console.log('POST request successful');
    setloding(false)    
    window.location.reload();
    console.log(response.data);
  } catch (error) {
    console.error('Error making POST request:', error);
  } 
    }
  
}

  return (
    <>
    {loding && <Loding />}
    <Shadow  />
    <div ref={tapRef} onClick={handelclick} className="Addform">
    {err.length > 0 ? (
    <div className="err_tab">
    <img src={assest.close} alt="close" />
    <p>
  {err}
  </p>
    </div>
      ) : (false)}
    <Closetap close = {clickshowtap} />
    <Form  method="post" onSubmit={handelform}> 
    <div className="price_titel">
    <Input dis = {err?.length > 3 ? "#FF3A41" : ""} className = "product_name" placeholder = "ادخل اسم المنتج" label = "ادخل اسم المنتج" name  = "product_name"  type = "text"/>
    <Input dis = {err?.length > 3 ? "#FF3A41" : ""} className = "product_page" placeholder = "سعر المنتج" label = "ادخل سعر المنتج" name  = "product_price"  type = "text"/>
    </div>
    <div className="discount_part">
    <Input dis = {err?.length > 3 ? "#FF3A41" : ""} className = "product_page" placeholder = "الخصم" label = "ادخل الخمصم(إختياري)" name  = "product_discount"  type = "text"/>
    <Input dis = {err?.length > 3 ? "#FF3A41" : ""} className = "product_page" placeholder = "سعر المنتج بعد الخصم" label = "إختياري" name  = "after_discount"  type = "text"/>
    <Input dis = {err?.length > 3 ? "#FF3A41" : ""} className = "product_page" placeholder ="الكمية الموجودة من المنتج" label = "اضع الكمية" name  = "product_amount"  type = "text"/>
    </div>
    <Importimg condition = {uniqimg} onImageSelect = {getimg} />
    <Chosecatogray  name = "الأنواع"  dataarray = {["الحجابات" , "الخيمارات"]} />
    <Chosecatogray  name = "الأحجام"  dataarray = {sizesArray} />
    <Chosecatogray  name = "الألوان"  dataarray = {colorNames} />
<div style={{margin:'1rem auto'}}>
    <Submit click = {() => handelclick} value = "إضافة المنتج" />
    <img src={uniqimg} alt="" />
</div>
    </Form>
    </div>
    </>
  )
}

export default Addform

