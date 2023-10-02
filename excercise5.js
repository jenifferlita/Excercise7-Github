// // 1. Destructuring (Array & Object)
// //Array
// // let fruits = ["apple", "banana", "cherry"];
// // let [fruit1, fruit2, fruit3] = fruits;

// // console.log(fruit1); // apple
// // console.log(fruit2); // banana
// // console.log(fruit3); // cherry

// //Object
// // let person = {
// //     name: "John",
// //     age: 30,
// //     city: "New York"
// // };

// // let {name, age, city} = person;

// // console.log(name); // John
// // console.log(age);  // 30
// // console.log(city); // New York

// // 2. Destructuring dengan mengambil sebagian item (Array & Object)
// //Array
// // let animals = ["cat", "dog", "fish"];
// // let [pet1, , pet3] = animals;

// // console.log(pet1); // cat
// // console.log(pet3); // fish

// //Object
// // let student = {
// //     firstName: "Jane",
// //     lastName: "Doe",
// //     grade: "A"
// // };

// // let {firstName, grade} = student;

// // console.log(firstName); // Jane
// // console.log(grade);     // A

// // 3. Destructuring dengan menggunakan default value (Array & Object)
// // Array
// // let numbers = [1, 2];
// // let [num1, num2, num3 = 3] = numbers;

// // console.log(num1); // 1
// // console.log(num2); // 2
// // console.log(num3); // 3

// // Object
// // let vehicle = {
// //     type: "car",
// //     wheels: 4
// // };

// // let {type, color = "blue", wheels} = vehicle;

// // console.log(type);   // car
// // console.log(color);  // blue
// // console.log(wheels); // 4

// 4. Destructuring dengan menggunakan rest operator (Array & Object)
// Array
// let colors = ["red", "green", "blue", "yellow", "purple"];
// let [color1, ...restColors] = colors;

// console.log(color1);      // red
// console.log(restColors);  // ["green", "blue", "yellow", "purple"]

// Object
// let product = {
//     id: 101,
//     name: "Laptop",
//     brand: "Dell",
//     price: 1000
// };

// let {id, ...restDetails} = product;

// console.log(id);           // 101
// console.log(restDetails);  // {name: "Laptop", brand: "Dell", price: 1000}
