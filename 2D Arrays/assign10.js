const inputArray = [
    [1, 2, 3, 4, 5],
    [4, 5, 6, 4, 5],
    [7, 8, 9, 5, 6]
  ];
  const numRows = inputArray.length;
  const midCol = Math.floor(inputArray[0].length / 2);
  for (let i = 0; i < numRows; i++) {
    console.log(inputArray[i][midCol]);
  }