const inputString = 'edstem';
const charCounts = {};
for (let char of inputString) {
  charCounts[char] = (charCounts[char] || 0) + 1;
}
for (let char in charCounts) {
  console.log(`${char} - ${charCounts[char]}`);
}