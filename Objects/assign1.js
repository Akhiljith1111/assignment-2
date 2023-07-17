const input = ['radhe', 22, 'M'];
const obj = {
  name: input[0],
  age: input[1],
  gender: input[2]
}

for (let key in obj) {
  console.log(key + " - "+obj[key]);
}