import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { typeProduct } from "../types";
import { useNavigate } from "react-router-dom";
import "../../scss/pages/_suggetsearch.scss";
import { useEffect, useRef, useState } from "react";
const Suggetsearch = (changestate:any) => {
  const searchvalue = useSelector((state: RootState) => state.shearchvalue);
  const [showseggest , setshowseggest] = useState(true)
  const seggestref = useRef<HTMLDivElement >(null);
  const selectCharteredData = useSelector((state: RootState) =>
  state.fetchedproduct.data.filter((item: typeProduct) =>
  item.name.toLowerCase().includes(searchvalue.toLowerCase())
  )
  );
  const Navigate = useNavigate();



  useEffect(() => {
    const handler = (e:MouseEvent)=>{
    if(seggestref.current && !seggestref.current.contains(e.target as Node)){
      setshowseggest(false)
    }      
    };
    document.addEventListener("mousedown", handler);
    return() =>{
    document.removeEventListener("mousedown", handler);
    }
  });


  const handelNavigate = (id:number) => {
    Navigate(`product/${id}`);
    changestate()
  }
  return (
    searchvalue.length > 0 && showseggest && selectCharteredData.length > 0 && (
      <div ref={seggestref} className="search_bar">
        {selectCharteredData.map((item: typeProduct) => (
          <span key={item.id} onClick={() => handelNavigate(item.id)}>
            {item.name}
          </span>
        ))}
      </div>
    )
  );
};

export default Suggetsearch;