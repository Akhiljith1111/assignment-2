const arrayOfStrings = ["edstem", "tech"];

const snakeCaseString = arrayOfStrings.reduce((acc, str) => acc + '_' + str);

console.log(snakeCaseString);
