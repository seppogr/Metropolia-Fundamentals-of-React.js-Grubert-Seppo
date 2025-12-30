import styles from '../styles/AddContact.module.css'
import { Link } from 'react-router-dom';



function ContactList( {contacts} ) {

    return (
        <>
        <div className={styles.contactslist}>
            <div className={styles.listheading}><h2>Your List of Contacts:</h2></div>

            <ul>
                {contacts.map((singleContact) => (
                    <li className={styles.table} key={singleContact.id}>

                    <Link to={`/contacts/${singleContact.id}`} >

                           {singleContact.name} <br />Phone: {singleContact.phone}

                    </Link>
                        <Link to={`/edit/${singleContact.id}`}>
                            <button className={styles.abutton}>Edit</button>
                    </Link>
                    <Link to={"/"}>
                            <button className={styles.abutton}>Delete</button>
                    </Link>


                    </li>


                ))}

            </ul>
        </div>
        </>
    )
}

export default ContactList
