import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)
function focus() {
  document.getElementById("focus").focus()
}

  return (
    <>
      <h1> +- counter </h1>
      <div>
        <p>
          <button>
            {count}
          </button>
        </p>
        <button onClick={() => setCount((count) => count + 1)}>
           + Increase
        </button>
        <button onClick={() => setCount((count) => count - 1)}>
           - Decrease
        </button>
        <p>
        <label for="inputField">Input field: </label>
        <input type="text" id ="focus" name="name">
        </input>
        <button onClick={() => focus()}>
          Focus
        </button>
        </p>

      </div>

    </>
  )
}

export default App



