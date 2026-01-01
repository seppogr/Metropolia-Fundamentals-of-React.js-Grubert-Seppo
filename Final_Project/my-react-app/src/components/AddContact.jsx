import { useState } from "react";
import styles from '../styles/AddContact.module.css'


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
            <div style={{ width: "500px", color: "white", backgroundColor: "#1f6f45", marginLeft: "auto", marginRight: "auto", borderRadius: "16px", padding: "24px" }}>
            <form className={styles.inputform} onSubmit={handleSubmit}>
                <h2>Enter Your Contact's Details Here:</h2>
                <label className={styles.field}>
                        Name:{"\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0"}
                    <input
                        className={styles.input}
                        type="text"
                        value={contact.name}
                        name="name"
                        onChange={handleChange} />
                </label>
                <br />
                <label>
                        Phone:{"\u00A0\u00A0\u00A0\u00A0\u00A0"}
                    <input
                        className={styles.input}
                        type="text"
                        value={contact.phone}
                        name="phone"
                        onChange={handleChange} />
                </label>
                <br />
                <label>
                        E-mail:{"\u00A0\u00A0\u00A0\u00A0\u00A0"}
                    <input
                        className={styles.input}
                         type="email"
                        value={contact.email}
                        name="email"
                        onChange={handleChange} />
                </label>
                <br />
                <label>
                        Street:{"\u00A0\u00A0\u00A0\u00A0\u00A0"}
                    <input
                        className={styles.input}
                        type="text"
                        value={contact.address}
                        name="address"
                        onChange={handleChange} />
                </label>
                <br />
                <button className={styles.abutton} onClick={() => handleSubmit}>Add</button>
            </form>
            </div>
        </>
    );

}

export default AddContact
