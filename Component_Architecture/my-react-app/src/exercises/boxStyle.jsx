import { useState } from 'react';
import styles from './Box.module.css';

const boxStyle = { color: 'red' };



function StyledBox() {

        const [count, setCount] = useState(0);

        return (
            <>
                <IncrementButton setCount={setCount} />
                <Display count={count} />
            </>
        )
        function Display({ count }) {
            return <div className={styles.box} style={boxStyle}>Styled count: {count} </div>
        }
        function IncrementButton({ setCount }) {
            return <button className={styles.box} style={boxStyle} onClick={() => setCount(count => count + 1)}>Styled box increment</button>
        }
}

export default StyledBox
