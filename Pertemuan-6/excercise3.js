//Array
const people = ["Greg", "Mary", "Devon", "James"];
// for (let i = 0; i < people.length; i++) {
//   console.log(people[i]);
// }
// let people = ["Greg", "Mary", "Devon", "James"];
// people.forEach(function (people) {
//   console.log(people);
// });
// people.shift();
// console.log(people);
// people.pop();
// console.log(people);
// people.unshift("Matt");
// console.log(people);
// people.push("Jeniffer Tasidjawa");
// console.log(people);
// for (let i = 0; i < people.length; i++) {
//   console.log(people[i]);
//   if (people[i] === "Mary") {
//     break;
//   }
// }
// let copy = people.slice(0, 3);
// people.splice(2, 1, "Elizabeth", "Artie");
// let withBob = people.concat("Bob");
// console.log(withBob);

// //Object
const programming = {
  languages: ["JavaScript", "Python", "Ruby"],
  isChallenging: true,
  isRewarding: true,
  difficulty: 8,
  jokes:
    "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke",
};
// programming.languages.push("Go");
// console.log(programming);
// programming.difficulty = 7;
// delete programming.jokes;
programming.isFun = true;
programming.languages.map(function (lang, index) {
  console.log(`${index} - ${lang}`);
});
console.log(programming);
