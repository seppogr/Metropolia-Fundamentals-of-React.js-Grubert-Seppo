import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

function OnOff() {
    const {theme, toggleTheme} = useContext(ThemeContext);
    const switchTheme = () => {
        toggleTheme();
    }
    return <div className="OnOff">
        <button onClick={switchTheme}>
            Dark/Light
        </button>
    </div>
}

export default OnOff;
