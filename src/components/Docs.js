import React, { useEffect, useRef, useState, } from 'react'
import Modal from './Modal';
import { collection,addDoc,onSnapshot, doc, deleteDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import { Container } from '@mui/material';

// import Modal from '@mui/material/Modal';
export default function Docs({
  database
}) {
  const collectionRef = collection(database, 'docsData')
  const addData=()=>{
    addDoc(collectionRef, {
      title: title
  })
  .then(() => {
      alert('Data Added')
  })
  .catch(() => {
      alert('Cannot add data')
  })
  }
  const getData = () => {
    onSnapshot(collectionRef, (data) => {
       setDocsData(data.docs.map((doc) => {
            return {...doc.data(), id: doc.id}
        }))
    })
}
// to delete
function deleteDocm(id){
  const docRef=doc(database,'docsData',id)
  deleteDoc(docRef)
  // .then(()=>{
  //   alert('Data Deleted')
  //   handClose()
  // })
  // .catch(()=>{
  //   alert('cannot delete')
  // })
}
// 
const isMounted = useRef()
useEffect(() => {
  if(isMounted.current){
      return 
  }

  isMounted.current = true;
  getData()
}, [])
const [docsData, setDocsData] = useState([]);
const getId=(id)=>{
navigate(`/docsEdit/${id}`)
}
let navigate=useNavigate();
  const [title, setTitle] = useState('')
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    
  return (
    <div className='d'>
        <h1  >DOCS APP</h1>
        <button onClick={handleOpen} className='ad'> + Add your Document here</button>
        <div className='gm' >
                {docsData.map((doc) => {
                    return (
                        <div className='gc' >
                          <button onClick={()=>getId(doc.id)}><i className='fa-solid fa-edit'></i></button>
                          <button className='border-none' onClick={()=>deleteDocm(doc.id)}> <i className='fa-solid fa-trash'></i></button>
                       <br />   <br /><b><u>{doc.title}</u></b>
                          
                            
                           
                            {/* {doc.docsDesc} */}
                            <div dangerouslySetInnerHTML={{__html: doc.docsDesc}} />

                        </div>
                    )
                })}
            </div>  
                    
         <Modal
                open={open}
                setOpen={setOpen}
                title={title}
                setTitle={setTitle}
                addData={addData}
            /> 
    </div>
  )
}