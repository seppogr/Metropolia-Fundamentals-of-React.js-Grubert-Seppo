
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ContactList from './components/ContactList';
import AddContact from './components/AddContact';
import EditContact from './components/EditContact';
import './App.css'
import { useState } from 'react';
import InitialContacts from './data/initialContacts';
import ContactDetails from './components/ContactDetails';
import NotFound from './pages/NotFound';



function App() {
  const [contacts, setContacts] = useState(InitialContacts);

  const addContact = (contact) => {
    setContacts((prev) =>
    [...prev, contact]
    );
  };

  const editContact = (updatedContact) => {
    setContacts(contacts =>
      contacts.map(contact =>
        contact.id === updatedContact.id ? updatedContact : contact));
  };

  const deleteContact = (contactToDelete) => {
    setContacts(contacts => contacts.filter(contact => contact.id !== contactToDelete.id));
  };

      return (
        <>
          <Router>
            <Navbar />
            <div style={{ padding: '20px' }}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/addContact" element={<AddContact addContact={addContact} />} />
                <Route path="/contactList" element={<ContactList contacts={contacts} deleteContact={deleteContact}/>} />
                <Route path="/contacts/:id" element={<ContactDetails contacts={contacts} />} />
                <Route path="/edit/:id" element={<EditContact contacts={contacts} editContact={editContact} />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </div>
          </Router>
        </>

      );



}

export default App
