import { useState } from "react";

function Parenting () {
    const [count, setCount] = useState(0);

    return (
        <>
        <IncrementButton setCount={setCount}/>
        <Display count={count}/>

        </>
    )
    function Display({count}) {
        return <p>Count: {count} </p>
    }
    function IncrementButton({setCount}) {
        return <button onClick={()=> setCount(count => count + 1)}>Increment</button>
    }
}

export default Parenting