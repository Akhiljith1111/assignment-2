const arrayOfStrings = ["assignment", "problem", "media", "upload"];

const filteredArray = arrayOfStrings.filter((str) => {
  const firstChar = str.charAt(0);
  const lastChar = str.charAt(str.length - 1);
  return firstChar === 'a' || lastChar === 'a';
});

console.log(filteredArray)
