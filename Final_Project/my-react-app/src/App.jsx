
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ContactList from './components/ContactList';
import AddContact from './components/AddContact';
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
  }

      return (
        <>
          <Router>
            <Navbar />
            <div style={{ padding: '20px' }}>
              <Routes>

                <Route exact path="/" element={<Home  />} />
                <Route exact path="/addContact" element={<AddContact addContact={addContact} />} />
                <Route exact path="/contactList" element={<ContactList contacts={contacts} />} />
                <Route exact path="/contacts/:id" element={<ContactDetails />} />
                <Route exact path="*" element={<NotFound />} />



              </Routes>
            </div>
          </Router>
        </>

      );



}

export default App
