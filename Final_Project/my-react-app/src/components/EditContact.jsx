import { useState, useEffect } from "react";
import styles from '../styles/AddContact.module.css'
import { useParams } from "react-router-dom";

function EditContact({ contacts, editContact }) {
    const { id } = useParams();
    const [form, setForm] = useState({
        name: "",
        phone: "",
        email: "",
        address: ""
    });


    function getIndex() {
        const index = contacts.findIndex(
            contact => contact.id === id);
        return index;
    }


    let index = getIndex();

    const contactToUpdate = contacts[index];

    useEffect(() => {
        if (contactToUpdate) {
            setForm({
                name: contactToUpdate.name ?? "",
                phone: contactToUpdate.phone ?? "",
                email: contactToUpdate.email ?? "",
                address: contactToUpdate.address ?? ""
            });
        }
    }, [contactToUpdate]);



    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm(prev => ({ ...prev, [name]: value }));
}


    const handleSubmit = (e) => {
        e.preventDefault();

        editContact({
            ...contactToUpdate,
            ...form
        });
    };


    return (
        <>
            <div style={{ width: "325px", color: "white", backgroundColor: "#1f6f45", marginLeft: "auto", marginRight: "auto", borderRadius: "16px", padding: "24px" }}>
            <form className={styles.inputform} onSubmit={handleSubmit}>
                    <h2>Edit {contacts[index].name}</h2>
                <label className={styles.field}>
                    Name:{"\u00A0\u00A0\u00A0\u00A0\u00A0"}
                    <input
                        className={styles.input}
                        type="text"
                        value={form.name}
                        name="name"
                        onChange={handleChange} />
                </label>
                <br />
                <label>
                    Phone:{"\u00A0\u00A0\u00A0\u00A0"}
                    <input
                        className={styles.input}
                        type="text"
                        value={form.phone}
                        name="phone"
                        onChange={handleChange} />
                </label>
                <br />
                <label>
                    E-mail:{"\u00A0\u00A0\u00A0\u00A0"}
                    <input
                        className={styles.input}
                         type="email"
                        value={form.email}
                        name="email"
                        onChange={handleChange} />
                </label>
                <br />
                <label>
                    Address:{"\u00A0"}
                    <input
                        className={styles.input}
                        type="text"
                        value={form.address}
                        name="address"
                        onChange={handleChange} />
                </label>
                <br />
                <button className={styles.abutton} type="submit" >Add</button>
            </form>
            </div>
        </>
    );

}

export default EditContact
