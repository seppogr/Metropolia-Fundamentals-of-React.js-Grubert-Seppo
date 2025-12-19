
import OnOff from './OnOff.jsx';
import { ThemeContext, ThemeProvider } from './ThemeContext.jsx'
import DisplayTheme from './ThemeDisplay';


function App() {
    return (
        <ThemeProvider>
            <DisplayTheme />
        </ThemeProvider>

    );
}

export default App;
