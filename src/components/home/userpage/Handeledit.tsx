import { useFormik } from 'formik';
import * as yup from 'yup';
import { usertype } from '../../types';
import { phoneRegex } from '../../../Regex/Regex';
import { useMemo, useState } from 'react';
import { getCurrentUser } from '../../../api/FirestoreAPI';



const Handeledit = () => {
    const [currentUser, setCurrentUser] = useState<usertype | null >(null);
    useMemo(() => {
    getCurrentUser(setCurrentUser);
    } , [currentUser])
    

  const validationSchema = yup.object({
    name: yup.string()
    .min(4, 'Name should be of minimum 4 characters length')
    .required('Name is required'),
    phone:yup.string()
    .required('Phone Number is required')
    .matches(phoneRegex , 'Enter a valid Phone Number'),
    email: yup.string().email('Enter a valid email').required('Email is required'),
  });

  const initialValues: usertype = {email:currentUser?.email as string ,Name:currentUser?.Name as string ,phone:currentUser?.phone as string };
  const User_edit = useFormik({
    initialValues,
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      console.log(values);
    },
  });



  return {User_edit} ;
};

export default Handeledit;

