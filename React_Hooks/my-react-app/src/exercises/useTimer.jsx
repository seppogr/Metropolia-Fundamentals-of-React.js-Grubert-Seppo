import { useState, useEffect } from 'react';

const useTimer = () => {
    const [time, setTime] = useState(Date().toLocaleString());

    useEffect(() => {

        const timer = setInterval(() => setTime(Date().toLocaleString()), 1000);
        return () => clearInterval(timer);
    }, []);
    return (time);
}

export default useTimer;
