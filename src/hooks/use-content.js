import React, {useState, useContext, useEffect } from 'react'
import { firebaseContext } from '../context/firebase'

export default function useContent(target) {
    const [content, setContent] = useState(null)
    const { firebase } = useContext(firebaseContext)

    useEffect(() => {
        firebase
            .firestore()
            .collection(target)
            .get()
            .then((snapshot)=>{
                const allContent = snapshot.doc.map((contentObj) => ({
                        ...contentObj.data(),
                        docId : contentObj.id
                    }))
                setContent(allContent);
            })
            .catch((error) => {
                console.log(error.message);
              });
    }, [])
    return { [target]: content };
}
