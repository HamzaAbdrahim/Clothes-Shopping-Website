import { useEffect, useRef, useState } from "react";
import assest from "../../../assets/imges";
import Sugget from "./Sugget";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";

const Chosecatogray = ({name , dataarray} : {name:string , dataarray:string[] }) => {
  const [show , setshow] = useState<Boolean>(false)
  const nameref = useRef<HTMLDivElement >(null);
  const items = useSelector((state:RootState) => state.itemsSlice.items)
  const selectedelement = dataarray.filter((ele) => items.includes(ele));

  
  useEffect(() => {
  const handler = (e:MouseEvent)=>{
  if(nameref.current && !nameref.current.contains(e.target as Node)){
  setshow(false)
  }      
  };
  document.addEventListener("mousedown", handler);
  return() =>{
  document.removeEventListener("mousedown", handler);
  }
  });
  

  
  const handelclick = () => {
  setshow((prev:Boolean) => (!prev))
  } 

  return (
  <div ref={nameref} onClick={handelclick} className="select_option">
  {selectedelement.length > 0 ?  false :  <p className="must_filed">هذه الخانة إجبارية</p>}
  <img  src={assest.dark_arrwo}  alt="dark_arrwo" className={`dark_arrwo ${show ? 'active':""}  `} />
  <ul className="size_list">
  {selectedelement.length > 0  ? (
  selectedelement.map((ele:string, index:number) => (
  <li data-aria={ele} className="size" key={index}>{ele}</li>
  ))
) : (
  <p className="size_defult">{name}</p>
)}
</ul>
  {show ?(<Sugget array = {dataarray} />) : ""}
  </div>
  )
}

export default Chosecatogray