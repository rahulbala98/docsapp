import React, { useEffect, useRef, useState } from 'react'
import ReactQuill from 'react-quill';
import { Route, useParams } from 'react-router-dom'
import 'react-quill/dist/quill.snow.css';

import { database } from '../firebaseConfig';
import {
    updateDoc,
    collection,
    doc,onSnapshot
} from 'firebase/firestore';
import { Link } from '@mui/material';

function DocsEdit({database}) {
    let params=useParams();
    console.log(params);
    const [docsDesc, setDocsDesc] = useState('');
    const getQuillData = (value) => {
        setDocsDesc(value)
    }
    <Route path='/docsEdit/:id' element={<DocsEdit database={database} />}></Route>
    const collectionRef = collection(database, 'docsData')
    useEffect(() => {
        const updateDocsData = setTimeout(() => {
            const document = doc(collectionRef, params.id)
            updateDoc(document, {
                docsDesc: docsDesc
            })
            .then(() => {
                // alert('Saved')
            })
            .catch(() => {
                // alert('Cannot Save')
            })
        }, 1000)
        return () => clearTimeout(updateDocsData)
    }, [docsDesc])
    const isMounted = useRef()
    const getData = () => {
        const document = doc(collectionRef, params.id)
        onSnapshot(document, (docs) => {
            setDocumentTitle(docs.data().title)
            setDocsDesc(docs.data().docsDesc);
        })
    }

    useEffect(() => {
        if(isMounted.current){
            return 
        }

        isMounted.current = true;
        getData()
    }, [])
    const [documentTitle,setDocumentTitle]=useState('')

    return (
        <div>
            <h1 className='ed'>Edit Your Document</h1>
          <h2 className='ed'> Title : {documentTitle}</h2>
            <ReactQuill
   value={docsDesc}
   onChange={getQuillData}
   
/>
        </div>
    )
}

export default DocsEdit