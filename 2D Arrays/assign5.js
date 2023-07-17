const inputArray = ["assignment", "problem", "media", "upload"];
const outputArray = [];

for (let i = 0; i < inputArray.length; i++) {
  const str = inputArray[i];
  if (str[0].toLowerCase() === 'a' || str[str.length - 1].toLowerCase() === 'a') {
    outputArray.push(str);
  }
}

console.log(outputArray);