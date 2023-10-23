import { useEffect, useState } from "react";
import assest from "../../../assets/imges"
import { catograys, sizes } from "../../../content";
import { useDispatch } from "react-redux";
import { setSize , setPrice as publicstate } from "../../../store/publicstate";


const Filterbar = (prop:any) => {
  const [price, setPrice] = useState(1000);
  const [selectedSize, setSelectedSize] = useState<string>('Large');
  const [selectedcatogray, setselectedcatogray] = useState<string | null>(localStorage.getItem('chosencatogray'));
  const [showprice , setshowprice] = useState<boolean>(false)
  const [showsizes , setshowsizes] = useState<boolean>(false)
  const [showcatogray , setshowcatogray] = useState<boolean>(false)

  const [isMobile, setIsMobile] = useState(false);
  const dispatch = useDispatch();

  const handleTogglesize = () => {
    setshowsizes(prev => (!prev)) 
  };
  const handlecatograytoogl = () => {
    setshowcatogray(prev => (!prev)) 
  };
  const handelshowprice = () => {
    setshowprice(prev => (!prev)) 
  }

  
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Check initial window size

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handlePriceChange = (event:any) => {
    const newPrice = parseInt(event.target.value);
    setPrice(newPrice);
  };

  const handleSizeClick = (size:any) => {
    setSelectedSize(size);
  };

  const handleFilter = () => {
    dispatch(setSize(selectedSize));
    dispatch(publicstate(price));
    
    isMobile ? prop.changestate() : false
  };

  return (
    <div className={`Filterbar ${prop.state ? "show" : ""}`}>
      <div className="filter_titel">
        <h1>تصفيت</h1>
        <img src={assest.filter_icon} alt="filter_icon" />
      </div>
      <ul className="list_of_type">
        <li>
          <p>حجابات</p>
          <img src={assest.arrwo} alt="arrwo" />
        </li>
      </ul>
      <div className="filter-price">
        <div className="filter_first">
        <h1>المبلغ</h1>
        <img src={assest.dark_arrwo} onClick={handelshowprice} alt="dark_arrwo" className={`dark_arrwo ${showprice ? "active" : ""}`}/>
        </div>
        {!showprice ? false : (
        <>
        <input
            type="range"
            name="price"
            id="price"
            min="1000"
            max="5000"
            value={price}
            onChange={handlePriceChange} /><p className="price_range">{price}د.ج{" "}</p></>
        )}
      </div>
      <div className="filterby_colors">
      <div className="filter_first">
        <h1>الأحجام</h1>
        <img src={assest.dark_arrwo} onClick={handleTogglesize} className={`dark_arrwo ${showsizes ? "active" : ""}`} alt="dark_arrwo" />
        </div>
          <ul className={`list_size ${showsizes ? "show_size" : ""}`}>
          {sizes.map((ele , index:number) => (
            <li 
            onClick={() => handleSizeClick(ele.size)}
            key={index} 
            className={`size ${ele.size === selectedSize ? "active" : ""}`}>{ele.size}</li>
            ))}
        </ul>
      </div>
      <div className="filterby_colors">
      <div className="filter_first">
        <h1>الأنواع</h1>
        <img src={assest.dark_arrwo} onClick={handlecatograytoogl} className={`dark_arrwo ${showcatogray ? "active" : ""}`} alt="dark_arrwo" />
        </div>
          <ul className={`list_catogra ${showcatogray ? "show_catogra" : ""}`}>
          {catograys.map((catogray , index:number) => (
            <li 
            onClick={() => {setselectedcatogray(catogray.titel) , localStorage.setItem('chosencatogray' , catogray.titel)}}
            key={index} 
            className={`catogra ${catogray.titel === selectedcatogray ? "active" : ""}`}>{catogray.titel}</li>
            ))}
        </ul>
      </div>
      <button className="Apply_filter" onClick={handleFilter}>تطبيق الفلتر</button>
    </div>
  )
}

export default Filterbar
