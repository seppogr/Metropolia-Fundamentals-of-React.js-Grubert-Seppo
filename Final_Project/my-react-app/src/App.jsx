
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ContactList from './components/ContactList';
import AddContact from './components/AddContact';
import './App.css'
import { useState } from 'react';
import InitialContacts from './data/initialContacts';



function App() {
  const [contacts, setContacts] = useState(InitialContacts);




  const addContact = (contact) => {
    setContacts((prev) =>
    [...prev, contact]
    );
  }


      return (

        <>

          <Router>
            <Navbar />
            <div style={{ padding: '20px' }}>
              <Routes>
                <Route path="/" element={<Home  />} />
                <Route path="/addContact" element={<AddContact addContact={addContact} />} />
                <Route path="/contactList" element={<ContactList contacts={contacts} />} />

              </Routes>
            </div>
          </Router>
        </>

      );



}

export default App
