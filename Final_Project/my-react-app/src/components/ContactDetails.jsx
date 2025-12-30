import { useParams } from "react-router-dom";

function ContactDetails ({ contacts }) {


    const { id } = useParams();

    const con = contacts.find((contact) => String(contact.id) === String(id));

    return <div style={{ width: "325px", color: "white", backgroundColor: "#1f6f45", marginLeft: "auto", marginRight: "auto", borderRadius: "16px", padding: "24px"}}>
        <h2>{con.name}</h2>
    Phone: {con.phone}
    <br />
    E-Mail: {con.email}
        <br />
    Address: {con.address}</div>
}

export default ContactDetails
