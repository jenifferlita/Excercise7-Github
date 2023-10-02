// // buat dalam bentuk IIFE dan Callback Function
// // IIFE (Immediately Invoked Function Expression)
// (function(){
//     let num1 = 15
//     let num2 = 8
//     if (num1 > num2)
//         console.log(num1)
//     else
//         console.log(num2)
// })();

//Callback Function
function num(num1, num2, callback) {
  if (num1 > num2) callback(num1);
  else callback(num2);
}
num(15, 8, function (results) {
  console.log(results);
});

// function
// if
// (num1 > num2)
// results (num1)
// else
