import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import { typeProduct } from "../../types";
import { useNavigate } from "react-router-dom";
import "../../../scss/pages/home/_suggetsearch.scss";
import { useState } from "react";
import useClickOutside from "../../../hooks/useclickoutside";
const Suggetsearch = (changestate:any) => {
  const searchvalue = useSelector((state: RootState) => state.shearchvalue);
  const [showseggest , setshowseggest] = useState(true)
  const selectCharteredData = useSelector((state: RootState) =>
  state.fetchedproduct.data.filter((item: typeProduct) =>
  item.name.toLowerCase().includes(searchvalue.toLowerCase())
  )
  );
  const Navigate = useNavigate();


  const handeltoggol = () => {
    setshowseggest(false)
  }

  const Ref = useClickOutside(handeltoggol)
  

  const handelNavigate = (id:number) => {
    Navigate(`product/${id}`);
    changestate()
  }
  return (
    searchvalue.length > 0 && showseggest && selectCharteredData.length > 0 && (
      <div ref={Ref} className="search_bar">
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