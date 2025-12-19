// I wan't sure which way was desired, so here are both solutions I came up with
// function Greeting() {
//   const greeting = <h1>"Welcome to React Basics Course!"</h1>;
//   return greeting;
// }

function App() {
  // const greeting = <h1>"Another Welcome to React Basics Course!"</h1>;
  // const movie = { title: "Inception", year: 2010, director: "Nolan" };
  // const {title, year} = movie;
  // const names = ['alice', 'bob', 'carol'];

  // const capitalized = names.map(name => name.charAt(0).toUpperCase() + name.slice(1));

  // console.log(capitalized);

  // const calculate = (a, b) => {
  //   let divide;
  //   const add = `${a}+${b} = ${a + b} `;
  //   const substract = `${a}-${b} = ${a - b} `;
  //   const multiply = `${a}*${b} = ${a * b} `;
  //   if (b != 0) {
  //     divide = `${a}/${b} = ${a/b} `;
  //   } else {
  //     divide = <h3>Cannot divide by zero.</h3>
  //   }
  //   return [add, substract, multiply, divide];
  //   }

  // const [add, substract, multiply, divide] = calculate(6, 8);
  // const users = [

  //   { name: 'Anna', active: true },

  //   { name: 'Tom', active: false },

  //   { name: 'Luna', active: true }

  // ];

  // //  Return only users who are active

  // const activeUsers = users.filter(user => user.active === true);

  // console.log(activeUsers);
  const animals = ['dog', 'cat', 'dog', 'bird', 'cat', 'dog'];

  // Count how many times each animal appears

  const count = animals.reduce((acc, animal) => {
    if (acc[animal] == undefined) {
      acc[animal] = 1;
    } else {
      acc[animal] += 1;
    }
    return acc;
  }, {});

  console.log(count); // The answer should display - { dog: 3, cat: 2, bird: 1 }

  return (
    <div>
         {/* <Greeting /> */}
        {/* { greeting } */}
      {/* The movie {title} was released in {year}. */}
      {/* <p>{add}</p>
      <p>{substract}</p>
      <p>{multiply}</p>
      <p>{divide}</p> */}
    </div>
  )
}

export default App
