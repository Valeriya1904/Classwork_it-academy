// function sum(number1, number2) {
//     alert = (number1 + number2);
// }
// sum(2, 10);

const { join } = require("path");

// function sum() {
//     for (let i=0; i < arguments.length; i++) {
//         console.log
//     }
// }

// function sum(...test) {
//     console.log(test);
// }

// sum(10, 20)

// const sum = function(a, b = 10) {
//     console.log(a, b);
// }

// sum(10, 1000)

// const sayHello = function(name) {
//     console.log('Hello' + name)
// }

// const processUserInput = function(callback) {
//     const name = prompt('Введи свое имя');
//     callback(name)
// }

// processUserInput(sayHello)

// callback - это функция, которая передана в качестве аргумента.

// Стрелочная функция не имеет своего arguments

// let sum = (number1, number2) => number1 + number2;
// console.log(sum(1, 5));



// const sum = (a, b) => {
//     const smt = 10 + 20 + 30;
//     return  smt + a + b;
// }
// const test = sum(10, 20)

// console.log(sum(10, 20));

// Если есть фигурные скобки, то надо указфыать return.

// const min = (a, b) => {
//     if (a > b) {
//         return b
//     } else {
//         return a
//     }
// };

// console.log(min(10, 20));

// const ragne = (start, min, number) => {
//     if (start < max && number < max) {
//         return true
//     } else {
//         return false 
//     }
// }

// const min = (left, right) => {
//     return left > right ? right : left;
// }

// const minIfElse = (left, right) => {
//     if(left > right) return right;

//     return left
// }

// console.log();

// const range = (start, end, number) => {
//     return number >= start && number <= end;
// }

// console.log(range(0, 5, 8));

// let - пеерменная
// [] внутрри элементы массива

// let user = {
//     name : "Lera";
// }

// name - ключ;

// const getName = (obj, name) => {
//     return obj[name];
// };

// const obj = {
//     name: "lera",
//     age: 20
// };

// console.log(getName(obj1, 'name'));

// const user = {
//     name: "John",
//     surname: "Smith",
// }

// user.name = 'Pete';
// delete user.name;

// console.log(user);

// let salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130
// }

// const returnTotalAmount = (salaries) => {
//     let result = 0;
//     for (let key in salaries) {
//         result += salaries[key]
//     }
//     return result;
// }

// console.log(returnTotalAmount(salaries));

// урокслед

// const arr = [
//     'Minsk',
//     'Moscow',
//     'Brest',
//     'Mogilev',
//     'Gomel'
// ];

// for(let i = 0; i < arr.length; i++) {
//     console.log(arr[i])
// }

// const result = [];
// for(let i = 0; i < arr.length; i++) {
//     result.push(arr[i] + ' smt')
// }

// console.log(result)


// const newarr = ['a', 'b', 'c'];
// const join = ( newarr , separator) => {
//     const res = '';
//     for(let i = 0; i < join.length; i++) {
//         let elem = newarr[i];
//         res =+ elem +
//     }
// }

// const join = (arr, separator) => {
//     let res = '';
//     for(let i = 0; i< arr.lenght; i++) {
//         const elem = arr[i];
//         res += elem + separator;
//     }
//     return res;
// };

// const array1 = [1, 2, 3];

// const reversed = array1.reverse();
// console.log(reversed);

// const reverse = (arr) => {
//     const result = [];
//     for (let i = 0; i< arr.lenght; i++) {
//         result.push(arr[arr.lenght - 1 - i]);
//     }
//     return result;
// }
// console.log(reverse([1, 2, 3]));


// const find = (arr, callback) => {
//     for(let i = 0; i < arr,length; i++) {
//         callback(arr[i]);
//         if(callback(arr[i])) {
//             return arr[i];
//         }
//     }
// };

// let users = [
//     {name: "User1", age: 18, id: 1 },
//     {name: "User2", age: 20, id: 2 },
//     {name: "User3", age: 30, id: 3 },
// ]

// const find = (arr, callback) => {
//     for(let i = 0; i < arr.lenght; i++) {
//         callback(arr[i]);
//         if (callback (arr[i])) {
//             return arr[i]
//         }
//     }
// };

// const user = users.find(item => {
//     return item.name === "User1"
// })
// console.log(user)


// lesson4















