import { useFormik } from 'formik';
import { adedproduct } from '../../../types';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../store/store';
import { catogray, colorNames } from '../Selectarray';
import { AddProduct } from '../../../../api/FirestoreAPI';
import { toast } from 'react-toastify';



const productvalidation = () => {
    const selecteditem = useSelector((state:RootState) => state.itemsSlice.items)
    
    const selectedcatogray =  selecteditem.filter((ele:string) => catogray.includes(ele));
    const selectedcolors = selecteditem.filter((ele:string) => colorNames.includes(ele));
    const selectedsizes = selecteditem.filter((ele:string) => !catogray.includes(ele) && !colorNames.includes(ele));

  const initialValues:adedproduct  = {
    Product_name: null,
    Product_price: 0,
    Product_img: undefined,
    Product_color: selectedcolors  ,
    Product_size: selectedsizes  ,
    Product_catogray: selectedcatogray ,
    Product_discount:0 ,
    Product_amount: 0,
    Product_afterdiscount: 0
  };
  const validation = useFormik({
    initialValues,
    onSubmit: async (values) => {
      if (!values.Product_color || !values.Product_catogray || !values.Product_size || !values.Product_img )
       {
        toast.warning("File Out The Form ");
      } else {
        AddProduct(values)
      }
    },
  });
  return {validation} ;
};

export default productvalidation;


