import { useState } from "react";


function welcome(isLoggedIn) {
    return isLoggedIn ? "Welcome back!" : "Please log in."
}

function ReadState() {

    const [buttonText, setButtonText] = useState("Log in button.");
        const [loginStatus, setLoginStatus] = useState(false);
        return (
            <div>
                <button
                    type="submit"
                    onClick={() => {
                        {
                            let btext = welcome(loginStatus)
                            setButtonText(btext);
                            setLoginStatus(!loginStatus)
                        };
                    }}
                >
                    {buttonText}
                </button>
            </div>
    );

}

export default ReadState
