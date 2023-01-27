const { default: test } = require("node:test");
const { join } = require("path");
const { describe } = require("yargs");

const sum = (a, b) => a + b;

module.exports = {
    sum,
};

describe('Concat', () => {
    test('Should concat values', () => {
        const data = [];
        const result = [];
        expect(concat(data, ))
    })
})


// const concat = (arr, ...rest) => {
//     return [...arr, ...rest];
//     const result = [];
//     for(let i = 0; i < arr.length; i++) {
//         result.push(arr[i])
//     }
//     for(let i = 0; i < rest.length; i++) {
//         arr[ arr.length + i] = rest
//     }

//     return result
// };

// join - принимает 2 аргумента массив и сепаратор.



