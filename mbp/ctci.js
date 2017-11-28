/* 1.1 Implement an algorithm to determine if a string has all unique characters. */
"use strict";
// function isUnique(str) {
//     var hash = {};
//     for (var i = 0; i < str.length; ++i) {
//         if (hash[str[i]] > 1) {
//             console.log(false);
//             return false;
//         }
//         hash[str[i]] = (++hash[str[i]] || 1);
//     }
//     return true;
// }

/* 1.1 What if you can not use additional data structures? */
function isUnique(str) {
    var sorted = str.toLowerCase().split('').sort();
    for (var i = 1; i < sorted.length; ++i) {
        if (sorted[i - 1] === sorted[i]) {
            return false;
        }
    }
    return true;
}

/* testing */
// var testTrue = isUnique("Tel");
// console.log(testTrue);
// var testFalse = isUnique("Tell me about unique characters");
// console.log(testFalse);


/* Write a method to decide if two strings are anagrams or not. */
function anagrams(str1, str2) { 
    // normalize & sort
    const n1 = str1.trim().toLowerCase().split('').sort().join('');
    const n2 = str2.trim().toLowerCase().split('').sort().join('');
    // test length
    if (n1.length !== n2.length) {
        return false;
    }
    //test values
    if (n1 !== n2) {
        return false;
    }
    return true;
}

/* testing */
// var isAnagram = anagrams("rail safety", "fairy tales");
// console.log(isAnagram); //true
// var notAnagram = anagrams("rail safey", "airy tales");
// console.log(notAnagram); //false

/* Write a method to replace all spaces in a string with ‘%20’ */
function replaceSpace(str) {
    //regex
    //replace method
    // return
    var re = new RegExp(/\s/ ,'g');
    return str.replace(re, '%20');
}

// var replaced = replaceSpace("Tell me about unique characters");
// console.log(replaced);


/* Write an algorithm such that if an element in an MxN matrix is 0, its entire row and
   column is set to 0 */

function rowZeroed(arr) {
    for (var row = 0; row < arr.length; ++row) {
        // let flag = false;
        for (let j = 0; j < arr[row].length; ++j) {
            if (arr[row][j] === 0) {
                // flag = true;
                arr[row].fill(0);
            }
        }
        // if (flag === true) {
            // arr[row].fill(0);
        // }
    }
    return arr;
}

let first = rowZeroed([
    [0, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]);
// console.log(first);

let none =  rowZeroed([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]);
// console.log(none);

let second = rowZeroed([
    [1, 2, 3],
    [0, 5, 6],
    [7, 8, 9]
]);
// console.log(second);

let third = rowZeroed([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 0]
]);
// console.log(third);

/* Given an image represented by an NxN matrix, where each pixel in the image is 4
   bytes, write a method to rotate the image by 90 degrees. 
   Can you do this in place? */

/*clockwise*/
// function rotateNinety(mat) {
//     mat = mat.reverse();
//     for (var row = 0; row < mat.length; ++row) {
//         for (var i = 0; i < mat[row].length; ++i) {
//             let temp = mat[row][i];
//             mat[row][i] = mat[i][row];
//             mat[i][row] = temp;
//         }
//     }
//     return mat;
// }
/*counter-clockwise*/

//todo: fix
function rotateNinety(m) {

    for (var row = 0; row < m.length; ++row) {

        
        for (var i = 0; i < m[row].length; ++i) {
            var tmp = m[row][i];
            m[row][i] = m[i][row];
            m[i][row] = tmp;
        }
        console.log(m[row]);
    }

    return m;
}

let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

let cw = [
    [7, 4, 1],
    [8, 5, 2],
    [9, 6, 3]
]

let ccw = [
    [3, 6, 9],
    [2, 5, 8],
    [1, 4, 7]
]

let sq = [
    [1,2],
    [3,4]
]

let sqr = [
    [3,1],
    [4,2]    
]

// let test1 = rotateNinety(sq);
// console.log(test1);
let test2 = rotateNinety(matrix);
console.log(test2);
