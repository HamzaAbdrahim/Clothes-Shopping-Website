import { useState } from 'react';
import "../../scss/pages/_filtering.scss";
import Filterbar from "./Filterbar";
import Product from "../ourproduct/Prouduct";
import assest from "../../assets/imges";
interface proptype {
size : string
price :number
}
const Filtering:React.FC<proptype> = () => {
  const [showComponent, setShowComponent] = useState<boolean>(false);
  const handleIconClick = () => {
    setShowComponent(prev => (!prev));
  };
console.log(showComponent);

  return (
    <div className="Filtering_page">
      <Filterbar state = {showComponent} changestate = {handleIconClick} />
      {showComponent ? false : 
      <img
      src={assest.filter_icon}
        alt="filter_icon"
        className="icon"
        onClick={handleIconClick}
        />
      }
      <Product  none="none" w="100%" p="2rem"  />
    </div>
  );
};

export default Filtering;