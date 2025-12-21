import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import styles from '../styles/Pages.module.css'

function Home() {
    return (
        <div className={styles.home}>
            <h2>Home</h2>
            <p>Welcome to Seppo Grubert's homepage!</p>
        </div>
    );
}

function About() {
    return (
        <div className={styles.about}>
            <h2>About Me</h2>
            <p>I am a student of programming from Tampere, with special interests in team sports such as handball and floorball.</p>
        </div>
    );
}

function Contact() {
    return (
        <div className={styles.contact}>
            <h2>Contact</h2>
            <p>Email: me@mydomain.com</p>
            <p>Address: Tohlopinranta 31 <br />PL 347<br /> 33101 Tampere 10</p>
            <p>Phone: +358 44 1 12 123 34</p>
        </div>
    );
}

// Navbar
function Navbar() {
    return (
        <nav className={styles.navbar}>
            <Link to="/" style={{ color: 'white', margin: '10px' }}>Home</Link>
            <Link to="/about" style={{ color: 'white', margin: '10px' }}>About</Link>
            <Link to="/contact" style={{ color: 'white', margin: '10px' }}>Contact</Link>
        </nav>
    );
}

// Main App
function MpApp() {
    return (
        <Router>

            <div>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </div>
        </Router>
    );
}

export default MpApp;