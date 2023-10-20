/* 1. Define a function, as a function declaration, maxOfTwoNumbersthat takes two numbers as arguments and returns
the largest of them. If they are the same, return that number. Use the if-else construct or a ternary expression -
the Math.max method is not allowed. */

// function maxOfTwoNumbers(x, y) {
//     return  x > y ? x + ` greater than ${y}.`
//     : y > x ? y + ` greater than ${x}.`
//     : `Both numbers are equal (${x}).`
//   }
 
// console.log(maxOfTwoNumbers(Math.floor(Math.random() * 100), Math.floor(Math.random() * 100)))

/* 2. Define a function, as a function expression, maxOfThreethat takes three numbers as arguments and returns the
largest of them. Again, the Math.max method is not allowed. */

// const maxOfThreeNumbers = (a, b, c) => {
//     return a > b && a > c ? a + ' is greater than ' + b + ' and ' + c
//     : b > a && b > c ? b + ' is greater than ' + a + ' and ' + c
//     : c > a && c > b ? c + ' is greater than ' + a + ' and ' + b
//     : a === b && b === c ? `All three numbers (${a}) are equal`
//     : a === b && a > c ? a + ' is greater than ' + c
//     : a === c && a > b ? a + ' is greater than ' + b
//     : b === c && b > a ? b + ' is greater than ' + a
//     : `That's weird. I didn't see this coming.`
// }

// console.log(maxOfThreeNumbers(Math.floor(Math.random() * 100),Math.floor(Math.random() * 100),Math.floor(Math.random() * 100)))

/* 3. Define a function, as a function declaration, 
isCharAVowel that takes a character as an argument and returns
true if it is a vowel, false otherwise. */

// function isCharAVowel(x) {
//     if (typeof x === 'string' && x.length === 1) {
//         if (x === 'a' || x === 'e' || x === 'i' || x === 'o' || x === 'u') {
//             return true
//         } else
//             return false
//     } else
//     return 'Enter a valid character.'
// }

// console.log(isCharAVowel ('aeiu'))

/* 4. Define a function, as a function expression, sumArray that 
takes an array of numbers and returns the sum
of those numbers. For example, sumArray([2, 4, 5]);would return 11. */

const sumArray = (arrayX) => {
    let sum = 0
    return Array.isArray(arrayX) ? arrayX.forEach((element) => {
        sum += element
        return sum
    })
    : 'Enter a valid numeric array'
}

console.log(sumArray([34, 98, 54, 87, 89, 44, 66, 42]))

/* 5. Define a function, as a function declaration, multiplyArray that 
takes an array of numbers and returns the
product those numbers. For example, multiplyArray([2, 4, 5]);would return 
40. */

// function multiplyArray(arrayX) {
//     let product = 1
//     if (Array.isArray(arrayX)) {
//         arrayX.forEach((element) => {
//             product *= element
//             return product
//         })
//     } else
//     return 'Enter valid array input'
// }

// console.log(multiplyArray([34, 98, 54, 87, 89, 44, 66, 42]))

/* 6. Define a function, as a function expression, numArgs that returns the number of arguments
passed to the function when called. */



/* 7. Define a function, as a function declaration, reverseString that takes a string, reverses the
characters, and returns it. For example, reverseString('rockstar');would return the string "ratskcor". */



/* 8. Define a function, as a function expression, longestStringInArray that takes an array of strings
as an argument and returns the length of the longest string. */



/* 9. Define a function, as a function declaration, stringsLongerThan that takes an array of strings
and a number as arguments; and returns an array of the strings that are longer than the number
passed in. For example, stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3);would
return ["hello", "morning"]. */

// function stringsLongerThan (arrayX, x) {
//     let newArrayResult
//     for (let element of arrayX) {
//         if (arrayX[element].length > x)
//             newArrayResult.unshift(element)
//     }
//     return newArrayResult
// }

// console.log(stringsLongerThan(['function', 'declaration', 'and', 'function', 'expression', 'are', 'really', 'stretching', 'my', 'brain'], 6))