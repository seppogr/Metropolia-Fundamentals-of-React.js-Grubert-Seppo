import {useState, createContext} from 'react';

const ThemeContext = createContext('dark');

function ThemeProvider (props) {
    const [theme, changeTheme] = useState(false);
    const toggleTheme = () => {
        changeTheme(!theme)
    };
    return (
        <>
            <ThemeContext.Provider value={{theme, toggleTheme}}>
                {props.children}
            </ThemeContext.Provider>
        </>
    )

};

export {ThemeContext, ThemeProvider};
