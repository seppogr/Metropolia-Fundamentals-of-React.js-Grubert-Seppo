// I wan't sure which way was desired, so here are both solutions I came up with
function Greeting() {
  const greeting = <h1>"Welcome to React Basics Course!"</h1>;
  return greeting;
}

function App() {
  const greeting = <h1>"Another Welcome to React Basics Course!"</h1>;
  return (
    <div>
        <Greeting />
        { greeting }
    </div>
  )
}

export default App
