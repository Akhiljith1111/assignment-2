function square(num) {
    return num * num;
  }
  
  const numbers = [2, 3, 5, 7, 9];
  
  numbers.forEach((num) => {
    console.log(square(num));
  });