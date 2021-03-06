import React, {useContext, useEffect, useState} from 'react'
import { firebaseContext } from '../context/firebase'

export default function useAuthListener() {
    const [user, setUser] = useState(null)
    const {firebase} = useContext(firebaseContext)

    useEffect(() => {
    const listener = firebase.auth().onAuthStateChanged((authUser) => {
      if (authUser) {
        localStorage.setItem('authUser', JSON.stringify(authUser));
        setUser(authUser);
      } else {
        localStorage.removeItem('authUser');
        setUser(null);
      }
    });

    return () => listener();
  }, []);

  return { user };
}
