import React, { useState } from 'react'
import '../App.css'

import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
function AddContacts({addContact}) {

    const [contactData, setContactData] = useState({name:"", email:""})

    const handleChange=(e)=>{
        if(e.target.name === "name"){
            setContactData({...contactData,name: e.target.value})
        }
        else{
            setContactData({...contactData,email: e.target.value})
        }
    }

    const handleAdd =()=>{
            if(contactData.name === '' || contactData.email === ''){
                // alert("Please fill all the details");
                toast.error("Please fill all the details!");
                return
            }
            addContact(contactData)
            setContactData({name:"", email:""})
            
            
    }
    

  return (
    <div className='formHeader'>
      <div className='add-contact'>Add Contact</div>
      <form action="" className='form'>
        <label >Name:</label><br/>
        <input type="text" placeholder='Enter Name' name='name' value={contactData.name} onChange={handleChange}/>


        <label >Email:</label><br/>
        <input type="email" placeholder='Enter Email' name='Email' value={contactData.email} onChange={handleChange} />
      </form>

      <button className='btn' onClick={handleAdd}>Add Contact</button>
      <ToastContainer
      position="top-right"
      autoClose={4000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="dark"
      
      />
    </div>

    
  )
}

export default AddContacts
