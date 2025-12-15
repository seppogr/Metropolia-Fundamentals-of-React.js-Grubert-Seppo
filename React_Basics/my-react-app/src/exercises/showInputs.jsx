import { useState } from "react";

function NameForm() {
    const [name, setName] = useState("")
    function readName(textInput) {
        setName(textInput.target.value)
    }

    function makeAlert() {
        alert(name)
    }

    return (
        <>
        <form>
            <label>Name:
                <input
                    type="text"
                    value = {name}
                    onChange={readName} />
                </label>
                <button
                    type="button" onClick={makeAlert}>
                    Alert name
                </button>
        </form>
        </>
    )
}

export default NameForm;
