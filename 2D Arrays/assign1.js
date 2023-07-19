const inputArray =  ["HTML", "CSS", "JAVA", "JS", "ANDROID"]
var character = 0 ;
for(let i=0; i<inputArray.length; i++){
    character += inputArray[i].length;
}
console.log(character)