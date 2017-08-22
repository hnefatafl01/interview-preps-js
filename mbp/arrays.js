function mean(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum / array.length;
}

function median(array) {
    const sorted = array.sort((a, b) => {
        return a - b;
    });
    if (array.length % 2 === 0) {
        const mean = (sorted[(sorted.length / 2) - 1] + sorted[sorted.length / 2]) / 2;
        return mean;
    } else {
        return sorted[Math.floor(sorted.length / 2)];
    }
}

function mode(array) {
    let mode;
    const numMap = {};
    let greatest = 0;
    array.forEach((num) => {
        numMap[num] = (numMap[num] || 0) + 1;
        if (numMap[num] > greatest) {
            greatest = numMap[num];
            mode = num;
        }
    });
    return +mode;
}

let test1 = [1,2,3,4,5,6];
let test2 = [1,2,3,4,5,6,6,7,9];

console.log('mean test1: ', mean(test1), '\n_________________________\n');
console.log('mean test2: ', mean(test2), '\n_________________________\n');
console.log('median test1: ', median(test1), '\n_________________________\n');
console.log('median test2: ', median(test2), '\n_________________________\n');
console.log('mode test1: ', mode(test1), '\n_________________________\n');
console.log('mode test2: \n', mode(test2), '\n_________________________\n');
