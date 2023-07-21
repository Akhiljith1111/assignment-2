const arrayOfStrings = ["edstem", "tech"];

const snakeCaseString = arrayOfStrings.reduce((acc, e) => acc + '_' + e);

console.log(snakeCaseString);
