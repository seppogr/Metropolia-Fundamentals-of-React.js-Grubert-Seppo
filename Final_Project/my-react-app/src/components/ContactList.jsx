import styles from '../styles/AddTask.module.css'


function ContactList( {contacts} ) {

    return (
        <div className={styles.tasklist}>
            <p className={styles.listheading}>Your current list of names:</p>
            <ul>
                {contacts.map((singleContactName, index) => (
                    <div className={styles.table} key={index}>
                        <li>
                            {singleContactName.name} {singleContactName.phone}
                        </li>
                    </div>
                ))}
            </ul>
        </div>
    )
}

export default ContactList
