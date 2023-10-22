import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../../../store/store";
import { getusers } from "../../../store/userslice";
import { usertype } from "../../types";

const Publicuser = () => {
    const users = useSelector((state: RootState) => state.users.data);

    const email:string|null = localStorage.getItem('authTokenLogin')

    const useracount = users.filter((user:usertype) => user.email === email );

    const dispatch:AppDispatch = useDispatch();
    useEffect(() => {
    dispatch(getusers());
    }, []);
    
  return [useracount]
}

export default Publicuser