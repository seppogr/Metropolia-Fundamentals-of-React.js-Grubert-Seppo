import { useState } from "react";
import styles from '../styles/AddTask.module.css'


function AddContact({ addContact }) {
    const [contact, setContact] = useState({});


    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setContact(values => ({...values, [name] : value}))

    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addContact(contact);
        setContact({
            name: "",
            phone: "",
            email: "",
            address: ""
        });
    }

    return (
        <>
            <form className={styles.inputform} onSubmit={handleSubmit}>
                <label>
                     Name:
                    <input type="text"
                        value={contact.name}
                        name="firstName"
                        onChange={handleChange} />
                </label>
                <br />
                <label>
                    Phone:
                    <input type="text"
                        value={contact.phone}
                        name="phoneNumber"
                        onChange={handleChange} />
                </label>
                <br />
                <label>
                    E-mail:
                    <input type="email"
                        value={contact.email}
                        name="email"
                        onChange={handleChange} />
                </label>
                <br />
                <label>
                    Address:
                    <input type="text"
                        value={contact.address}
                        name="address"
                        onChange={handleChange} />
                </label>
                <br />
                <button className={styles.abutton} onClick={() => handleSubmit}>Add contact</button>
            </form>
        </>


    );

}

export default AddContact
