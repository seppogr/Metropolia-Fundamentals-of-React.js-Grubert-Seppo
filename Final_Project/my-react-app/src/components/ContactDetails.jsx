import { Link, useParams } from "react-router-dom";
import NotFound from "../pages/NotFound";
import styles from '../styles/AddContact.module.css'

function ContactDetails ({ contacts }) {


    const { id } = useParams();

    const singleContact = contacts.find((contact) => contact.id === id);

    if(!singleContact) {
        return <NotFound />
    }
    else {
        return <div style={{ width: "500px", color: "white", backgroundColor: "#1f6f45", marginLeft: "auto", marginRight: "auto", borderRadius: "16px", padding: "24px" }}>

            <h2>{singleContact.name}'s Details:</h2>
            Name: {singleContact.name}
            <br />
            Phone: {singleContact.phone}
            <br />
            E-Mail: {singleContact.email}
            <br />
            Street: {singleContact.address}
            <br />
            <br />
            <Link className={styles.abutton} to="/contactList">
                Exit
            </Link>

            </div>


    }

}

export default ContactDetails
