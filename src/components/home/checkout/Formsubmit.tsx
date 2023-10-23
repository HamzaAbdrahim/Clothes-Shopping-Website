import axios from 'axios';
import { useState } from 'react';
import { Form } from 'react-router-dom';
import { wilayas } from '../../../content';
import { useDispatch } from 'react-redux';
import { setLoading } from '../../../store/setloding';

type CheckoutFormData = {
  name: string;
  phone: string;
  secondphone: string;
  description: string;
  address: string;
  option: string;
  note: string;
};

const Formsubmit = () => {
  const [nameError, setNameError] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [optionError, setOptionError] = useState('');
  const [countryError, setCountryError] = useState('');
  const [addressError, setAddressError] = useState('');
  const dispatch = useDispatch();
  const url: string = 'http://localhost:3000/order';
  const nameRegex = /^[\p{L} .'-]+$/u;
  const phoneRegex = /^\d{10}$/;

  function checkoutForm(event: any) {
    event.preventDefault();
    const data = new FormData(event.target);

    const submission: CheckoutFormData = {
      name: data.get('name') as string,
      phone: data.get('phone') as string,
      secondphone: data.get('secondphone') as string,
      description: data.get('description') as string,
      address: data.get('address') as string,
      option: data.get('option') as string,
      note: data.get('note') as string,
    };

    const isNameValid =
      submission.name.length !== 0 &&
      submission.name.length >= 4 &&
      nameRegex.test(submission.name);
    const isPhoneValid = submission.phone.length !== 0 && phoneRegex.test(submission.phone);
    const isOptionValid = submission.option !== 'إختر الولاية';
    const isCountryValid = submission.description.length !== 0;
    const isAddressValid = submission.address.length !== 0;

    if (!isNameValid) {
    setNameError('يجب إدخال اسم صحيح (أكثر من 4 أحرف)');
    } else {
    setNameError('');
    }

    if (!isPhoneValid) {
  setPhoneError('الرجاء إدخال رقم هاتف صحيح (10 أرقام)');
    } else {
  setPhoneError('');
    }

    if (!isOptionValid) {
  setOptionError('يجب اختيار الولاية');
    } else {
  setOptionError('');
    }

    if (!isCountryValid) {
  setCountryError('خانة البلدية إجبارية');
    } else {
  setCountryError('');
    }

    if (!isAddressValid) {
      setAddressError('خانة العنوان إجبارية');
    } else {
      setAddressError('');
    }
    
    if (isNameValid && isPhoneValid && isOptionValid && isCountryValid && isAddressValid) {
    event.target.reset();
    postData(submission);
  }
}



const postData = async (submission: CheckoutFormData) => {
  if (submission) {
    try {
      const response = await axios.post(url, {
        name: submission.name,
        phonenumber: submission.phone,
        secondnumber: submission.secondphone,
        city: submission.option,
        bladay: submission.description,
        address: submission.address,
        coustmernote: submission.note,
        orderstate:false
      })
      dispatch(setLoading(true));
      console.log(response);
    } catch (error) {
      console.error('Error making POST request:', error);
    }
  }
  };

  return (
    <>
      <Form method="post" onSubmit={checkoutForm}>
        <br />
        <label className="titel" htmlFor="full_order">
          إستمارة الطلب
          <br />
          <div className="form_one">
            <label htmlFor="">
              <input type="text" name="name" placeholder="الإسم الكامل" />
              <br />
              {nameError}
            </label>
            <label htmlFor="">
              <input type="text" name="phone" placeholder="الهاتف" />
              <br />
              {phoneError}
            </label>
            <label htmlFor="">
              <input type="text" name="secondphone" placeholder="هاتف إضافي" />
              <br />
            </label>
          </div>
        </label>
        <label className="titel" htmlFor="track_order">
          توصيل الطلبية إلى
          <br />
          <div className="form_two">
            <label htmlFor="">
              <select name="option" id="litecheckout_state">
                <option>إختر الولاية</option>
                {wilayas.map((wilaya, index: number) => (
                  <option key={index} value={`0${index + 1} ${wilaya.value}`}>
                    {wilaya.value}
                  </option>
                ))}
              </select>
              <br />
              {optionError}
            </label>
            <label htmlFor="">
              <input type="text" name="description" placeholder="البلدية" />
              <br />
              {countryError}
            </label>
            <label htmlFor="">
              <input type="text" name="address" placeholder="العنوان" />
              <br />
              {addressError}
            </label>
          </div>
        </label>
        <label className="titel" htmlFor="costmer_note">
          ملاحظات الزبون
          <br />
          <textarea name="note" placeholder="ملاحظات الزبون"></textarea>
          <input type="submit" value="تأكيد و إرسال الطلب" />
        </label>
      </Form>
    </>
  );
};

export default Formsubmit;