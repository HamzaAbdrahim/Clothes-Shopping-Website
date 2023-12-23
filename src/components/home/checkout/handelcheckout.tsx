import { useFormik } from 'formik';
import * as yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { CheckoutFormData } from '../../types';
import { phoneRegex } from '../../../Regex/Regex';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../../../config/firebase';
import { RootState } from '../../../store/store';
import { useSelector } from 'react-redux';
import { toast } from "react-toastify";


const handelcheckout = () => {
    const validationSchema = yup.object({
    name: yup.string().required('Name is required').matches(/^[^0-9]+$/, "Only non-numeric characters allowed")    
    .min(2, 'Too Short!')
    .max(50, 'Too Long!'),
    phone:yup.string()
    .required('Phone Number is required')
    .matches(phoneRegex , 'Enter a valid Phone Number'),
    secondphone:yup.string().matches(/^[0-9]+$/, "Only number allowed")
    .matches(phoneRegex , 'Enter a valid Phone Number')
    .min(4, 'Name should be of minimum 4 characters length'),
    note: yup.string()
    .min(8, "Description must be at least 8 characters")
    .max(100, "Description cannot be more than 100 characters"),
      });
    
      const initialValues:CheckoutFormData = 
      {bladay: '', name: '', note: '', phone: '', secondphone: '' };
      const [Err, setErr] = useState<string>('')
      const [IsLoding, setIsLoding] = useState<false|true>(false)
      const selected_walay = useSelector((state:RootState) => state.selectedOption.selected_walay);
      const selected_city = useSelector((state:RootState) => state.selectedOption.selected_city);
      

      const navigate = useNavigate();
      const checkoutValidation = useFormik({
        initialValues,
        validationSchema: validationSchema,
        onSubmit: async (values) => {
          if (selected_walay !== "" && selected_city !== "" ) {
            setIsLoding(true)
            await addDoc(collection(db , 'contactform') , 
      {
        name:values.name,
        phone:values.phone,
        secondphone:values.secondphone,
        walay:selected_walay,
        bladay:selected_city,
        note:values.note,
      }).then(() => {
        setIsLoding(false);
        toast.success("Your message has been submitted👍");
          navigate('/')
        })
        .catch((error) => {
          toast.error('catch problem in the server')
          alert(error.message);
          setErr(error)
          setIsLoding(false);
        });
          } 
        },
      });
    
      return {IsLoding , Err , checkoutValidation };
}

export default handelcheckout