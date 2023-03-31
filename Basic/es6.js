//var, let dan const

// let number = 10;
// number = 5;
// console.log(number);

// const pi = 3.14;
// // pi = 10;
// console.log(pi);

// 3 cara deklarasi function

// 1. function declaration

// hello();
// function hello() {
//   console.log('hello');
// }

// // 2/ function expression
// const helloExpresion = function () {
//   console.log('HEllo express');
// };
// helloExpresion();
// // 3. function Arrow
// const helloArrow = () => {
//   console.log('Helo guys');
// };
// helloArrow();

// //
// function cekganjilGenap(n) {
//   if (n % 2 === 0) {
//     return 'genap';
//   } else {
//     return 'ganjil';
//   }
// }
// //  es6
// const cekGenapGanjil = (n) => (n % 2 === 0 ? 'genap' : 'ganjil');
// console.log(cekGenapGanjil(9));

// // template literal
// let kata1 = 'saya';
// let kata2 = 'sedang';
// let kata3 = 'pusing';

// // es5
// console.log(kata1 + ' ' + kata2 + ' ' + kata3);

// // es6
// console.log(`${kata1} ${kata2} ${kata3}`);

//high order function (khusus array)

let score = [10, 3, 5, 7, 9, 2];

// .forEach()
// es5
for (var i = 0; i < score.length; i++) {
  //   console.log(score[i]);
}

// es6
score.forEach((score) => {
  //   console.log(score);
});

// .map()
// es5
let temp = [];
for (var i = 0; i < score.length; i++) {
  temp.push(score[i] ** 2);
}
// console.log(temp);

// es6
let scorepower2 = score.map((score) => score ** 2);
// console.log(scorepower2);

// .filter()

// es5
let tempFilter = [];
for (let i = 0; i < scorepower2.length; i++) {
  if (scorepower2[i] > 10) {
    tempFilter.push(scorepower2[i]);
  }
}
// console.log(tempFilter);

// es6
let filterScore = scorepower2.filter((score) => score > 10);
// console.log(filterScore);

// studi kasus
let stats = [10, 3, 5, 7, 9];
//   es5
function pangkat3(arr) {
  let temp = [];
  for (let i = 0; i < arr.length; i++) {
    temp.push(arr[i] ** 3);
  }
  return temp;
}
function filter100(arr) {
  let temp = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 100) {
      temp.push(arr[i]);
    }
  }
  return temp;
}
function printStats(arr) {
  let power3 = pangkat3(arr);
  let saring100 = filter100(power3);
  for (let i = 0; i < saring100.length; i++) {
    console.log(saring100[i]);
  }
}
printStats(stats);

// es6
stats
  .map((stat) => stat ** 3)
  .filter((stat) => stat > 100)
  .forEach((stat) => console.log(stat));

//   DEstructuring

let vehicles = ['civic 2023', 500, false];

// es5
// let name = vehicles[0];
// let cc = vehicles[1];
// let isSold = vehicles[2];

// es6
let [name, cc, isSold] = vehicles;

// dstructuring dalam object

let item = {
  type: 'laptop',
  price: 1000,
};

const { type, price } = item;

// rest dan spread operator
let n1 = [1, 2, 3];

//  es5
// let n2 = n1.slice();

// rest
// es6
let n2 = [...n1];
n1.push(4, 5);
console.log(n1);
console.log(n2);

// spread
const greet = (...params) => {
  console.log(params);
  const [name, gpa, isGraduated] = params;
  console.log(`${name}, GPA ${gpa}, Grad: ${isGraduated}`);
};

greet('dwi', 4, true);
