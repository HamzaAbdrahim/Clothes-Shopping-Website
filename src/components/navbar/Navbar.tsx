import  { useEffect, useRef, useState , KeyboardEvent  } from 'react';
import assest from '../../assets/imges';
import '../../scss/pages/_navbar.scss';
import Bar from './Bar';
import Dropmenu from './Dropmenu';
import { useDispatch, useSelector } from 'react-redux';
import {Link,useNavigate} from 'react-router-dom';
import Shadow from '../shered/Shadow';
import { setshearchvalue } from '../../store/shearchvalue';

 const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [sheachclick , setsheachclick] = useState<boolean>(false);
  const dispatch = useDispatch();
  const shearchref = useRef<HTMLDivElement >(null);
  const cart = useSelector((state:any) => state.cart);
  const searchvalue = useSelector((state:any) => state.shearchvalue)  
  const Navigate =  useNavigate();
  

  const handleBurgerClick = () =>  {
    setIsMenuOpen(!isMenuOpen);
  };

  const handelclickshearch = () => {
    setsheachclick(prev => (!prev))
  }

    useEffect(() => {
    const handler = (e:MouseEvent)=>{
    if(shearchref.current && !shearchref.current.contains(e.target as Node)){
      setsheachclick(false)
    console.log(shearchref.current);
    }      
    };
    document.addEventListener("mousedown", handler);
    return() =>{
    document.removeEventListener("mousedown", handler);
    }
  });

  const handelpresenter = (e:KeyboardEvent) => {
    if (e.key === 'Enter') {
      console.log('hamza');
      
      if (sheachclick && searchvalue.length > 3) {
        handelclickshearch()
        Navigate('shearch')
      }
    }
  }


  return (
    <>
    {sheachclick && <Shadow />}
      <Bar />
      <div className="navbar">
        <div className="logo_container">
          <div>
            <img
              src={assest.burger}
              alt="burger"
              className="burger"
              style={{ cursor: 'pointer' }}
              onClick={handleBurgerClick}
            />
            {isMenuOpen && <Dropmenu onclick = {handleBurgerClick} />}
          </div>
          <Link to={"/"}>
          <img src={assest.logo} alt="logo" className="logo" />
          </Link>
        </div>
        <div ref={shearchref} onClick={handelclickshearch} onKeyDown={(e) => handelpresenter(e)} className={`search_product ${sheachclick ? "shearch_active" : ""}`}>
          <input onChange={(e) => dispatch(setshearchvalue(e.target.value)) } type="search" name="search_product" id="search" placeholder="ابحث عن المنتجات..." />
          <img src={assest.shearch} alt="shearch" />
        </div>
        <div className="icons">
          <img src={assest.shearch_black} alt="shearch" className="shearch" />
          <div className='bag_container'>
            <Link to="/cart">
          <img src={assest.bag} alt="bag" className='bag' />
            </Link>
          <span className='bag-counter'>{cart.length}</span>
        </div >
          <img src={assest.user} alt="user" />
        </div>
      </div>
    </>
  );
};

export default Navbar;