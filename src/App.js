
import './App.css';
import Header from './Components/Header';
import AddContacts from './Components/AddContacts';
import ContactList from './Components/ContactList';
import { useEffect, useState } from 'react';
import uuid4 from 'uuid4';
function App() {
  const localStorageKey= "contact"
  const [contact, setContact] = useState(()=>{
   return  JSON.parse(localStorage.getItem(localStorageKey)) || []
  });
  useEffect(() => {
   localStorage.setItem(localStorageKey, JSON.stringify(contact))
  }, [contact])
  

  const addContact=(data)=>{
    setContact([...contact,{id:uuid4(), data} ])
    
  }

  const removeContact =(id)=>{
      const updatedList = contact.filter((val)=>{
        return val.id !== id;
      })
      setContact(updatedList);
  }
  return (
    <div >
      <Header/>
      <AddContacts addContact={addContact}/>
      <ContactList contact={contact} removeContact={removeContact}/>
    </div>
  );
}

export default App;
