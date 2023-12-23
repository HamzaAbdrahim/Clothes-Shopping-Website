import { signOut } from "firebase/auth";
import { toast } from "react-toastify";
import { auth } from "../config/firebase";

  
  export const onLogout = () => {
    try {
      signOut(auth);
      toast.success('Sign Out successful')
    } catch (err) {
      toast.error('Sign Out Went wrong')
      return err;
    }
  };