import React, { useRef, useState } from 'react';

function useRefForm() {
    const inputRef = useRef(null);
    const [output, setOutput] = useState('');

    const handleClick = () => {
        const value = inputRef.current.value;
        if (value) {
            setOutput(`You wrote: ${value}`);
        } else {
            setOutput('Nothing to display');
        }
    };

    return (
        <div>
            <h2>Uncontrolled Form Using useRef</h2>
            <input ref={inputRef} type="text" placeholder="" />
            <button onClick={handleClick}>Show value</button>
            <p>{output}</p>
        </div>
    );
}

export default useRefForm;
