import { useState } from "react";
import styles from '../styles/AddContact.module.css'
import { Link, useParams, useNavigate } from "react-router-dom";
import NotFound from "../pages/NotFound";


function EditContact({ contacts, editContact }) {
    const { id } = useParams();
    const contactToUpdate = contacts.find((contact) => contact.id === id);
    const navigate = useNavigate();


// view the original values on screen
    const [updatedContact, setUpdatedContact] = useState({
        name: contactToUpdate.name,
        phone: contactToUpdate.phone,
        email: contactToUpdate.email,
        address: contactToUpdate.address
    });

// read the changed values and set them as updated contact
    const handleChange = (e) => {
        const { name, value } = e.target;
        setUpdatedContact(prev => ({ ...prev, [name]: value }));
}

// send a merged object to editContact function in app.jsx

    const handleSubmit = (e) => {
        e.preventDefault();
        editContact({
            ...contactToUpdate,
            ...updatedContact
        });
        navigate("/contactList")
    };
    if(!contactToUpdate) {
        return <NotFound />
    }

    return (
        <>
            <div style={{ width: "500px", color: "white", backgroundColor: "#1f6f45", marginLeft: "auto", marginRight: "auto", borderRadius: "16px", padding: "24px" }}>
            <form className={styles.inputform} onSubmit={handleSubmit}>
                    <h2>Edit {contactToUpdate.name}</h2>
                <label className={styles.field}>
                    Name:{"\u00A0\u00A0\u00A0\u00A0\u00A0"}
                    <input
                        className={styles.input}
                        type="text"
                        value={updatedContact.name}
                        name="name"
                        onChange={handleChange} />
                </label>
                <br />
                <label>
                    Phone:{"\u00A0\u00A0\u00A0\u00A0"}
                    <input
                        className={styles.input}
                        type="text"
                        value={updatedContact.phone}
                        name="phone"
                        onChange={handleChange} />
                </label>
                <br />
                <label>
                    E-mail:{"\u00A0\u00A0\u00A0\u00A0"}
                    <input
                        className={styles.input}
                         type="email"
                        value={updatedContact.email}
                        name="email"
                        onChange={handleChange} />
                </label>
                <br />
                <label>
                    Address:{"\u00A0"}
                    <input
                        className={styles.input}
                        type="text"
                        value={updatedContact.address}
                        name="address"
                        onChange={handleChange} />
                </label>
                <br />
                    <button className={styles.abutton} type="submit" >Save</button>
                <Link className={styles.abutton} to="/contactList">
                        Exit
                </Link>

            </form>
            </div>
        </>
    );

}

export default EditContact
