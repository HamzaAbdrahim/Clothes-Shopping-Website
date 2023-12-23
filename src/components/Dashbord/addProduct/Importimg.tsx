import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileCirclePlus } from '@fortawesome/free-solid-svg-icons';
import "../../../scss/components/_importimg.scss"
import { ChangeEvent } from 'react';


const Importimg = ({ Errmassage , file , onChange}:{Errmassage:string , file:Blob | Uint8Array | ArrayBuffer | null , onChange: (e: ChangeEvent<HTMLInputElement>) => void}) => {
return (
    <>
    <div className="importimg" style={Errmassage.length > 0 ? {border: file ? '1px solid #4CE13F' : '1px solid #FF3333'} : {}}>
    <label htmlFor="file-upload"  className="file-input-label">
    <FontAwesomeIcon size='1x' icon={faFileCirclePlus} className="icon_Wrapper" />
    <input  type="file" id="file-upload" className="file-input" onChange={onChange} />
    </label>
    </div>
  <p style={{color: Errmassage.length > 0 ? '#FF3333' : (file ? '#4CE13F' : '#000')}} className="discript_img">
  {Errmassage.length > 0 ? 'خانة الصورة إجبارية' : (file ? 'تم تحميل الصورة بنجاح' : 'حمل صورتك الشخصية')}
</p>
    </>
  );
};

export default Importimg;
