function Home() {

    return (
        <div style={{ width: "500px", color: "white", backgroundColor: "#1f6f45", marginLeft: "auto", marginRight: "auto", borderRadius: "16px", padding: "24px" }}>
            <h2>Home</h2>
            <p>Welcome to Seppo Grubert's homepage!<br /> This is an assignment on how to build a three-page web page using React.</p>
            <h3>List of Views</h3>
            <ul>
                <li>
                    1) <span style={{fontWeight :"bold"}}>Home:</span> In this page a home view is rendered. No state or props are used here, and React has very minimal presence here.
                </li>
                <br />
                <li>
                    2) <span style={{ fontWeight: "bold" }}>Add new Contact:</span> Includes a form with name, phone, email and street input fields. Id is added later when the form is submmitted.
                    Implemented with the use of useState. The contact state is updated and the added to the contacts list. After that the single contact is emptied so the form can be filled with
                    details again.
                </li>
                <br />
                <li>
                    3) <span style={{ fontWeight: "bold" }}>My Contacts:</span> Shows a list of your current contacts. At the app reload two contacts from initialContacts.jsx are loaded, and the everey new contact is
                    added to the list. The contacts list uses useState which it gets from its parent (App.jsx). The list is made of links to individual
                    contact pages, as well as "edit" and delete" buttons which are created when the list entry is created.
                </li>
                <br />
                <li>
                    4) <span style={{ fontWeight: "bold" }}>Single Contact Details:</span> Uses the contact.id as a parameter to direct to individual contact page.
                    In the page the id searched from contacts list with array.prototype.find() method, and the matching contact is shown on view. Id is defined variable with the help of useParams().
                </li>
                <br />
                <li>
                    5) <span style={{ fontWeight: "bold" }}>Edit Contact:</span> The edit form is almost an exact copy of the add form, only the necessary fields were changed.
                    The right contatc is found by using the id from useParams() in combination with array.prototype.find().
                </li>
                <br />
                <li>
                    6) <span style={{ fontWeight: "bold" }}>Not Found:</span> Default page when no matching id or a page address is not found. Basic html only. I added a .jpg image
                    just to see that it works similarly in React than in vanilla html.
                </li>
            </ul>
            <h3>Other Components/ Functionalities</h3>
            <ul>
                <li>
                    7) <span style={{ fontWeight: "bold" }}>Delete Contact:</span> Uses array.prototype.filter() to create array of all contacts except the one that is to be deleted.
                    This new array of objects is set as contacts in app.jsx.
                </li>
                <br />
                <li>
                    8) <span style={{ fontWeight: "bold" }}>NavBar:</span> Is an element that is rendered in app.jsx. Contains internal site navigation links.
                </li>
            </ul>


        </div>
    );
}

export default Home
