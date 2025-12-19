import { useState } from 'react'
import './App.css'
import ReadState from './exercises/loginMessage';

function App() {
    return (
      <>
        <ReadState />
        <Parent />
      </>

  );
}

function Parent() {
  const [name, setName] = useState('');
  const [subName, setSubName] = useState('');

  function handleChange(e) {
    setName(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSubName(name);
  }

  return (
        <div>
          parent asks username:

            <form onSubmit={handleSubmit}>
              <label>
                <input value={name} onChange={handleChange} />
              </label>
              <button type="submit">submit</button>
              <Child giveName={subName} />
            </form>

        </div>
  );
}

function Child(props) {
    return (
      <div>
        child gives username:
        <p>{props.giveName}</p>
      </div>
    );
  }


export default App
