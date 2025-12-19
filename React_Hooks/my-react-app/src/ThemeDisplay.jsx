import { useContext } from 'react';
import { ThemeContext, ThemeProvider } from './ThemeContext.jsx'
import OnOff from './OnOff.jsx';
import FocusInput from './exercises/focusInput.jsx';
import useTimer from './exercises/useTimer.jsx';

function getTheme(theme) {
    if (theme == true) {
        return "light";
    } else {
        return "dark";
    }
}
function Timer() {
    return <p>Time: {useTimer()} seconds</p>

};
function DisplayTheme() {
    const theme = useContext(ThemeContext);
    let cname = getTheme(theme.theme)
    return <div className={cname}>
        <OnOff />
        <FocusInput />
        <Timer />
    </div>
}

export default DisplayTheme;
