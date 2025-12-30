


function InitialContacts() {

    const initials = [{
        id: Date.now().toString(),
        name: "Kaapro Makkonen",
        phone: "222-243434",
        email: "s@e.fi",
        address: "Kuja 2, Suomi"
    },
        {
        id: Date.now().toString() + 1,
        name: "Heppu Superila",
        phone: "888-643434",
        email: "h@k.com",
        address: "Tievie 6, Kukkala"
        }
]

    return initials;
}

export default InitialContacts
