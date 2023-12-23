import { useEffect } from 'react';
import { addDoc, collection, getDocs, onSnapshot,
   query, QuerySnapshot, serverTimestamp } from 'firebase/firestore';
import { auth, db, storage } from '../config/firebase';
import { adedproduct, usertype } from '../components/types';
import { onAuthStateChanged,  User } from 'firebase/auth';
import { FirebaseStorage, getDownloadURL,
   getStorage, uploadBytes, uploadBytesResumable } from 'firebase/storage';
import { ref, Reference } from 'yup';
import { toast } from 'react-toastify';



export const getAllUsers = (setAllUsers: (users: usertype[]) => void) => {
  useEffect(() => {
    const unsubscribe = onSnapshot(query(collection(db, 'users')), (querySnapshot: QuerySnapshot) => {
      const usersArr: usertype[] = [];
      querySnapshot.forEach((doc) => {
        const data = doc.data();
        const { id } = doc;
        const { email = '', Name = '',  phone = '' , allwedtodashbord=false } = data;
        usersArr.push({ ...data, id, email, Name,  phone , allwedtodashbord });
      });
      setAllUsers(usersArr);
    });

    return () => unsubscribe();
  }, []);
};

export const getCurrentUser = (setCurrentUser:(users: usertype | null ) => void) => {
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser:User | null) => {
      setCurrentUser(currentUser as usertype | null);
    });
    return () => {
      unsubscribe();
    };
  }, [])
};


export const AddProduct = async (prop: adedproduct) => {;
  try {
    await addDoc(collection(db, "Product"), {
name: prop.Product_name,
price: prop.Product_price ,
img:prop.Product_img,
color:prop.Product_color,
size:prop.Product_size,
catogray:prop.Product_catogray ,
discount:prop.Product_discount,
amount:prop.Product_amount,
afterdiscount:prop.Product_afterdiscount,
      timeStamp: serverTimestamp(),
    });
    toast.success('hamza is the best')
  } catch (err) {
    console.log(err);
  }
} 
export const getAllProducts = (setAllProducts: (products: adedproduct[]) => void) => {
  useEffect(() => {
    const fetchData = async () => {
      let AllProducts:adedproduct[] = [];
      try {
        const querySnapshot = await getDocs(collection(db, "Product"));
        querySnapshot.forEach((doc) => AllProducts.push({ id: doc.id, ...doc.data() }));
        setAllProducts(AllProducts);
        console.log(AllProducts);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

};



 


