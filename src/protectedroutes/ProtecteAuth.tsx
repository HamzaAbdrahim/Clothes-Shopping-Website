import { onAuthStateChanged } from 'firebase/auth';
import { useEffect, useState } from 'react'
import { auth } from '../config/firebase';
import { useNavigate } from 'react-router-dom';

const ProtecteAuth = ({ children }:{ children:any }) => {
    const [user, setUser] = useState<unknown | null>(null);
    const navigate = useNavigate()

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
          console.log(currentUser);
          setUser(currentUser);
        });
        return () => {
          unsubscribe();
        };
      }, []);

      if (user) {
        navigate('/')
    }
  return children

}

export default ProtecteAuth