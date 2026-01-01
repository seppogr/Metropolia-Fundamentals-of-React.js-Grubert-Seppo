import images from "../assets/images.jpg";
import { Link } from 'react-router-dom';
import styles from '../styles/AddContact.module.css'

function NotFound() {
    return (
        <>
            <div >
            <h2>Ooops.<br />The page you were looking for doesn't seem to exist.</h2>
                <img style={{ borderRadius: "16px" }} src={images} />
                <p>
                Fret not for our tech team is working on the issue.
                </p>
                <Link to="/">
                    <button className={styles.abutton}>Back Home</button>
                </Link>
            </div>

        </>
    )


}

export default NotFound