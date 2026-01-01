import { Link } from 'react-router-dom';
import styles from '../styles/NavBar.module.css'

function Navbar() {
    return (
        <div className={styles.navbar}>
        <nav>
            <Link to="/" style={{ color: 'white', margin: '10px' }}>Home</Link>
            <Link to="/addContact" style={{ color: 'white', margin: '10px' }}>Add New Contact</Link>
            <Link to="/contactList" style={{ color: 'white', margin: '10px' }}>My Contacts</Link>
        </nav>
        </div>
    );
}

export default Navbar

