function sortNumbers(arrayToSort) {
    let sortedNumbers = [];

    sortedNumbers.push(arrayToSort);

    for (let i = 0; i < arrayToSort.length - 1; i++) {

        
        for (let j = 0; j < arrayToSort.length - i - 1; j++){
            if (arrayToSort[j] > arrayToSort[j + 1]) {
                [arrayToSort[j], arrayToSort[j + 1]] = [arrayToSort[j + 1], arrayToSort[j]];
            }
        }
    }

    return sortedNumbers;
}

const unsortedNumbers = [100, -1, 25, 1002, 0, 3, 4, 78, 2];

console.log(sortNumbers(unsortedNumbers));





/*
const unsortedNumbers = [9, 2, 3, 4, 5, 0, 8, 7, 1, 6];


function sortNumbers() {
    let sortedNumbers = unsortedNumbers;

    sortedNumbers.sort(function(a, b){return a - b})

    return sortedNumbers;
}


console.log(sortNumbers(unsortedNumbers)); // this must print [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]


*/



