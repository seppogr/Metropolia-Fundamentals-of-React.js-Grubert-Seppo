import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import styles from '../styles/Pages.module.css'

function Home() {
    return (
        <div className={styles.home}>
            <h2>Home</h2>
            <p>Welcome to Seppo Grubert's homepage!<br /> This is an assignment on how to build a three-page web page using React.</p>
        </div>
    );
}

function About() {
    return (
        <div className={styles.about}>
            <h2>About This Assignment</h2>
            <p>I started by first following the steps in the course material to create a simple three-page web site. <br />The course
                material provided very clear instructions on how to do this so I did not need to use additional sources.<br />  What
                I struggled with a bit was the css because I guess was in a dort of coding mindset which meant I was really happy
                to be able to get all the routing and such to work.<br /> Designing styling is not really my strong suit so I settled
                with some basic css.
            </p>
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
