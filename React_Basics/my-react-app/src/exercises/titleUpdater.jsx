import { useState, useEffect } from "react";

const TitleUpdater = () => {

    const [count, setCount] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCount(prevCount => prevCount + 1);
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        document.title = `Counter: ${count}`;
    }, [count]);

    return <div>Counter value: {count}</div>;
};

export default TitleUpdater;