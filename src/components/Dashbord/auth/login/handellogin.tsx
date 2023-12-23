import { useFormik } from 'formik';
import * as yup from 'yup';
import {Login_types} from '../../Types';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../../../config/firebase';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';



const handellogin = () => {
  const validationSchema = yup.object({
    email: yup.string().email('Enter a valid email').required('Email is required'),
    password: yup
      .string()
      .min(8, 'Password should be of minimum 8 characters length')
      .required('Password is required'),
  });

  const initialValues: Login_types  = { email: '', password: ''};
  const [Err, setErr] = useState<string>('')
  const navigate = useNavigate();

  const formik_login = useFormik({
    initialValues,
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      alert(JSON.stringify(values, null, 2));
      try {
        await signInWithEmailAndPassword(auth,values.email, values.password);
        navigate("/")
      } catch (err) {
        setErr(err as string)
       console.error(err)
      }
    },
  });

  return {Err , formik_login };
};

export default handellogin;