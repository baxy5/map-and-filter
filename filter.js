let someArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

let filteredArray = someArray.filter(number => {
    return number % 2 == 0;
});

// OR
/* let filteredArray = someArray.filter(number => number % 2 == 0); */

console.log(filteredArray);
