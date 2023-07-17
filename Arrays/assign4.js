 
const numbers = [5, 9, 8, 12, 22, 18];


const resultArray = numbers.map((num) => (num % 3 === 0 ? 'multiple' : num));


console.log(resultArray);