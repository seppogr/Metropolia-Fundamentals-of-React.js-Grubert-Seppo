import { useState } from "react";

const ToggleButton = () => {
    const [toggleState, setToggle] = useState("on")
    if (toggleState == "on") {
        return <button
            type="button" onClick={() => setToggle("off")}>
            {toggleState}
        </button>
    } else {
        return    <button
            type="button" onClick={() => setToggle("on")}>
            {toggleState}
        </button>
    }

};

export default ToggleButton;
