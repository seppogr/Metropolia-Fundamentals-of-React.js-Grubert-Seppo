import { useLocation } from "react-router-dom";

function ContactDetails () {

    const {state} = useLocation();
    const con = state.contact;

    return <div>

        <br />
    {con.name}
    <br />
    {con.phone}
    <br />
    {con.email}
        <br />
    {con.address}</div>
}

export default ContactDetails
