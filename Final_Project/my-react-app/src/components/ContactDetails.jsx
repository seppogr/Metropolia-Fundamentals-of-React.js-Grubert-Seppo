import { useParams } from "react-router-dom";
import NotFound from "../pages/NotFound";

function ContactDetails ({ contacts }) {


    const { id } = useParams();

    const con = contacts.find((contact) => contact.id === id);

    if(!con) {
        return <NotFound />
    }
    else {
        return <div style={{ width: "500px", color: "white", backgroundColor: "#1f6f45", marginLeft: "auto", marginRight: "auto", borderRadius: "16px", padding: "24px" }}>

            <h2>{con.name}'s Details:</h2>
            Name: {con.name}
            <br />
            Phone: {con.phone}
            <br />
            E-Mail: {con.email}
            <br />
            Street: {con.address}</div>
    }

}

export default ContactDetails
