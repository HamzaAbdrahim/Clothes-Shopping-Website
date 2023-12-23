import { useFormik } from 'formik';
import * as yup from 'yup';
import { Mysingup_types } from '../../Types';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from '../../../../config/firebase';
import { toast } from "react-toastify"
import { setDoc, doc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import { phoneRegex } from '../../../../Regex/Regex';



const Singuplogic = () => {
  const navigate = useNavigate()
  const validationSchema = yup.object({
    name: yup.string()
    .min(4, 'Name should be of minimum 4 characters length')
    .required('Name is required'),
    phone:yup.string()
    .required('Phone Number is required')
    .matches(phoneRegex , 'Enter a valid Phone Number'),
    email: yup.string().email('Enter a valid email').required('Email is required'),
    password: yup
    .string()
    .min(8, 'Password should be of minimum 8 characters length')
    .required('Password is required'),
  });

  const initialValues: Mysingup_types = { email: '', phone:'', password: '', name: '' };
  const formik_signup = useFormik({
    initialValues,
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      console.log(values);
      createUserWithEmailAndPassword(auth, values.email, values.password)
        .then(async (response) => {
          const userid = response.user.uid;
          setTimeout(() => {
          navigate(`/userapage`, { state: { user: values } });
          }, 3000);
          try {
            await setDoc(doc(db, "users", userid), {
              Name: values.name,
              email: values.email,
              phone:values.phone,
              allwedtodashbord:false

            });
            toast.success(`success auth: ${values.name}`)
          } catch (e) {
            toast.error(`Error adding document: ${e}`)
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
  });



  return {formik_signup} ;
};

export default Singuplogic;

