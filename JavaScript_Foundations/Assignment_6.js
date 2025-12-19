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
