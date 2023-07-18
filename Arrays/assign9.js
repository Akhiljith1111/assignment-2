let input = ['react','html','edstm']
const str = 'edstem';
let isEdstemPresent = false;

for (let i = 0; i < input.length; i++) {
  if (input[i] === str) {
    isEdstemPresent = true;
  }
}

console.log(isEdstemPresent ? true : 'false ')