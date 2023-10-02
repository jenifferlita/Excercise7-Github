// // // //Destructuring (Array & Object)

// // // Destructuring Array
// // let car = ["Tesla", "BMW", "Toyota"];
// // let car1 = car[0];
// // let car2 = car[1];
// // let car3 = car[2];

// // console.log(car1); // Outputa Tesla
// // console.log(car2); // Outputa BMW
// // console.log(car3); // Outputa Toyota

// // // const vehicles = ["mustang", "f-150", "expedition"];

// // // // Destructuring array dengan mengambil sebagian item
// // // const [car, ...otherVehicles] = vehicles;
// // // console.log(car);
// // // console.log(otherVehicles);

// // const user = {
// //   name: "John Doe",
// //   age: 30,
// //   city: "Jakarta",
// // };

// // // Destructuring objek dengan mengambil sebagian item
// // const { name, ...otherProperties } = user;

// // // Output
// // console.log(name); // 'John Doe'
// // console.log(otherProperties); // { age: 30, city: 'Jakarta' }

// // // Array Destructuring dengan Default Value
// // const colors = ["ungu", "kuning"];

// // // Mengekstrak nilai dari array dengan default value
// // const [warna1, warna2, warna3 = "hijau"] = colors;

// // console.log(warna1); // Output: "ungu"
// // console.log(warna2); // Output: "kuning"
// // console.log(warna3); // Output: "hijau" (default value)

// // Object Destructuring dengan Default Value
// const user = {
//     nama: "John",
//     umur: 30
//  };

//   // Mengekstrak properti dari objek dengan default value
//   const {nama, umur, pekerjaan = "Tidak Ada Pekerjaan"} = user;

//   console.log(nama); // Output: "John"
//   console.log(umur); // Output: 30
// //   console.log(pekerjaan); // Output: "Tidak Ada Pekerjaan" (default value)

// //Array Destructuring dengan Rest Operator:
// const [first, ...rest] = [1, 2, 3, 4, 5];

// console.log(first); // Output: 1
// console.log(rest); // Output: [2, 3, 4, 5]

//   console.log(pekerjaan); // Output: "Tidak Ada Pekerjaan" (default value)

// //Array Destructuring dengan Rest Operator:
// const [first, ...rest] = [1, 2, 3, 4, 5];

// console.log(first); // Output: 1
// console.log(rest); // Output: [2, 3, 4, 5]

// //Object Destructuring dengan Rest Operator:
// const person = {
//   firstName: "John",
//   lastName: "Doe",
//   age: 30,
//   email: "johndoe@example.com",
// };

// const { firstName, lastName, ...details } = person;

// console.log(firstName); // Output: 'John'
// console.log(lastName); // Output: 'Doe'
// console.log(details); // Output: { age: 30, email: 'johndoe@example.com' }

//Destructuring Object
let car = ["Tesla", "BMW", "Toyota"];
let [car1, car2, car3] = car;

console.log(car);
