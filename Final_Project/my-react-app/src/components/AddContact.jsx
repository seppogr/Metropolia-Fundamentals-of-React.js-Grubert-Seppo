import { useState } from "react";
import styles from '../styles/AddTask.module.css'


function AddContact({ addContact }) {
    const [contact, setContact] = useState({
        id: "",
        name: "",
        phone: "",
        email: "",
        address: ""
    });


    const handleChange = (e) => {
        const { name, value } = e.target;
        setContact(values => ({...values, [name] : value}))
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const contactToAdd = { ...contact, id: Date.now().toString()}
        addContact(contactToAdd);
        alert(`${contactToAdd.name} added to contacts list.`)

        setContact({
            id: "",
            name: "",
            phone: "",
            email: "",
            address: ""
        });
    }

    return (
        <>
            <form className={styles.inputform} onSubmit={handleSubmit}>
                {/* <label>
                     id:
                    <input type="text"
                        value={contact.id}
                        name="id"
                        onChange={handleChange} />
                </label> */}
                <label>
                     Name:
                    <input type="text"
                        value={contact.name}
                        name="name"
                        onChange={handleChange} />
                </label>
                <br />
                <label>
                    Phone:
                    <input type="text"
                        value={contact.phone}
                        name="phone"
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
