/*
    Task 1:
    - Add a new property "breed" with the value "Poodle"

    Task 2: 
    - Implement a for-in to loop through the keys in "dog" object and print it with console.log()
*/

const dog = {
    petName:"Bobby"
}

// Task 1: Add code here
dog.breed = "Poddle";
// Task 2: Add code here
for(let key in dog) {
    console.log(dog[key]);
}