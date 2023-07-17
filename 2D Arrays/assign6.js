const inputArray = ["edstem", "tech","pvt"];
let snakeCase = "";

for (let i = 0; i < inputArray.length; i++) {
  snakeCase += inputArray[i];
  if (i < inputArray.length - 1) {
    snakeCase += "_";
  }
}

console.log(snakeCase);