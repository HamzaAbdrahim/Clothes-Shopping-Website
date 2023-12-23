import selec_content from '../../../lib/selec_content';
import Input from '../../shered/Input';
import Submit from '../../shered/Submit';
import handelcheckout from './handelcheckout';
import Custom_Selecte from './Custom_Selecte';
import { RootState } from '../../../store/store';
import { useSelector } from 'react-redux';

const Formsubmit = () => {
  const {IsLoding , Err , checkoutValidation} = handelcheckout();
  const {walayisOfAlgeria , cityOfSelectedWilaya} = selec_content();
  const selected_walay = useSelector((state:RootState) => state.selectedOption.selected_walay);
  const selected_city = useSelector((state:RootState) => state.selectedOption.selected_city);
  
  

  return (
    <>
    {Err ?<p>{Err}</p> : false}
      <form method="post" className='form' onSubmit={checkoutValidation.handleSubmit} >
        <br />
        <label htmlFor="full_order">
          <h1 className="titel">
          إستمارة الطلب
          </h1>
          <br />
          <div className="form_one">
    <Input disabled={IsLoding} onChange={checkoutValidation.handleChange} label="الإسم"  
    placeholder="محمد" name="name" type="text" error={checkoutValidation.touched.name && 
    checkoutValidation.errors.name ? checkoutValidation.errors.name : ''} 
    value={checkoutValidation.values.name} />
    <Input disabled={IsLoding} onChange={checkoutValidation.handleChange} label="الهاتف"  
    placeholder="0668621987" name="phone" type="text" error={checkoutValidation.touched.phone && 
    checkoutValidation.errors.phone ? checkoutValidation.errors.phone : ''} value={checkoutValidation.values.phone} />
    <Input disabled={IsLoding} onChange={checkoutValidation.handleChange} label="هاتف إضافي"  
    placeholder="0778742569" name="secondphone" type="text" error={checkoutValidation.touched.secondphone && 
    checkoutValidation.errors.secondphone ? checkoutValidation.errors.secondphone : ''} value={checkoutValidation.values.secondphone} />
          </div>
        </label>
        <label htmlFor="track_order">
          <h1 className="titel">
          توصيل الطلبية إلى
          </h1>
          <br />
          <div className="form_two">
    <Custom_Selecte  defaultValue='اختر الولاية'  children = {walayisOfAlgeria}  Errmassage={selected_walay.length == 0 ? 'this option is required' : '' }  />
    <Custom_Selecte  defaultValue='اختر البلدية' children = {cityOfSelectedWilaya} Errmassage={selected_city.length == 0 ? 'this option is required' : '' }  />
          </div>
        </label>
        <label htmlFor="costmer_note">
          <h1 className="titel">
          ملاحظات الزبون
          </h1>
          <br />
          <textarea onChange={checkoutValidation.handleChange} value={checkoutValidation.values.note}  name="note" placeholder="ملاحظات الزبون"></textarea>
          <Submit type={'submit'} isLoading={IsLoding} processing={IsLoding} >
           تأكيد و إرسال الطلب
          </Submit>
        </label>
      </form>
    </>
  );
};

export default Formsubmit;