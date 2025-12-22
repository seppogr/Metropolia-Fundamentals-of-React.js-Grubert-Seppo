import styles from '../styles/AddTask.module.css'
import { BrowserRouter as Link } from 'react-router-dom';


function ContactList( {contacts} ) {

    return (
        <div className={styles.tasklist}>
            <p className={styles.listheading}>Your current list of names:</p>

            <ul>
                {contacts.map((singleContact) => (
                    <li className={styles.table} key={singleContact.id}>

                    <Link to={`/contacts/${singleContact.id}`} state={{ contact: singleContact}}>

                           {singleContact.name} {singleContact.phone}

                    </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ContactList
