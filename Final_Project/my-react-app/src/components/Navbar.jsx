import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav style={{ background: '#333', padding: '10px' }}>
            <Link to="/" style={{ color: 'white', margin: '10px' }}>Home</Link>
            <Link to="/addContact" style={{ color: 'white', margin: '10px' }}>Add Contact</Link>
            <Link to="/contactList" style={{ color: 'white', margin: '10px' }}>Contact List</Link>
        </nav>
    );
}

export default Navbar