import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { setDoc, doc } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { auth, storage, db } from "../../../../config/firebase";
import { useNavigate } from "react-router-dom";
import { Mysingup_types } from "../../Types";

const sanddatetofirebase = async ({email , password , name ,file }:Mysingup_types) => {
  console.log(email , password , name ,file);
  
    const navigate = useNavigate();
    try {
        //Create user
        const res = await createUserWithEmailAndPassword(auth, email, password);
  
        //Create a unique image name
        const date = new Date().getTime();
        const storageRef = ref(storage, `${name as string + date}`);
  
        await uploadBytesResumable(storageRef, file as Blob).then(() => {
          getDownloadURL(storageRef).then(async (downloadURL) => {
            try {
              //Update profile
              await updateProfile(res.user, {
                displayName:name,
                photoURL: downloadURL,
              });
              //create user on firestore
              await setDoc(doc(db, "users", res.user.uid), {
                uid: res.user.uid,
                displayName: name,
                email,
                photoURL: downloadURL,
              });
  
              //create empty user chats on firestore
              await setDoc(doc(db, "userChats", res.user.uid), {});
              navigate("/");
            } catch (err) {
              alert(err)
              console.log(err);
            }
          });
        });
      } catch (err) {
        alert(err)
      }
}

export default sanddatetofirebase