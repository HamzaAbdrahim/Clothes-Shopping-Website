import { useDispatch } from 'react-redux';
import useOnClickOutside from '../../../hooks/useOnClickOutside';
import '../../../scss/pages/home/checkout/_select.scss'
import { FC, useRef, useState } from "react";
import { set_selected_walay, set_selected_city } from '../../../store/selectedOption';
import { AppDispatch } from '../../../store/store';
interface CustomSelectProps {
  onSelect: (value: string) => void;
  children: string[];
  defaultValue?: string;
  placeholder?: string;
  Errmassage: string;
}

const Custom_Selecte:FC<CustomSelectProps> = ({Errmassage ,  children , defaultValue }) => {
  const [isActive, setIsActive] = useState<false|true>(false);
  const [selectedOption, setSelectedOption] = useState('');
  const toggleSelect = () => setIsActive(!isActive);
  const selectContainerRef = useRef<HTMLDivElement>(null)
  
  const dispatch:AppDispatch = useDispatch();

  const updateSelectedOption  = (optionText:string) => {
    if (defaultValue === 'اختر الولاية') {
      dispatch(set_selected_walay(optionText))
    } else {
      dispatch(set_selected_city(optionText))
    }
    setSelectedOption(optionText)
    setIsActive(false);
  };



  const handleOptionKeyUp = (e:React.KeyboardEvent<HTMLLIElement>, optionText:string) => {
    if (e.key === 'Enter') {
      setSelectedOption(optionText);
      setIsActive(false);
    }
  };
  
  const clickOutsideHandler = () => setIsActive(false);

  useOnClickOutside(selectContainerRef, clickOutsideHandler);
   
  return (

  <div ref={selectContainerRef}  className={`custom-select ${isActive ? 'active' : ''}`}>
  {Errmassage.length > 0 &&
  <p className="err_msg">
  {Errmassage}
  </p>}
  <button

    className={`select-button ${Errmassage.length > 0 ? 'err' : ''}`}
    onClick={toggleSelect}
    role="combobox"
    aria-labelledby="select button"
    aria-haspopup="listbox"
    aria-expanded={isActive ? 'true' : 'false'}
    aria-controls="select-dropdown"
  >
    <span className="selected-value">{selectedOption ? selectedOption :  defaultValue}</span>
    <span className="arrow"></span>
  </button>
  <ul  className="select-dropdown" role="listbox" id="select-dropdown">
      {children ?
      children.map((item:string, index: number) => (
        <li
         role="option"
        className={`select-button ${item === selectedOption ? 'activ_selected' : ''}`}
        key={index} 
        onClick={() => {updateSelectedOption(item) , localStorage.setItem('wilaya' , item)}}
        onKeyUp={(e) => handleOptionKeyUp(e, item)}
        tabIndex={0}
        value={`${item}`}>
          {item}
        </li>
        ))
        :
        <p>not found</p>
        }
  </ul>
</div>

  )
}

export default Custom_Selecte