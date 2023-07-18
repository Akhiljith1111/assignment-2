let input1 = "appy"
let input2 = "happy"

function checkAnagrams(string1, string2){
    let word1 = string1.split("")
    let word2 = string2.split("")

    if(word1.length !== word2.length) return false

    let obj1 = word1.reduce((acc, curValue) => {
        acc[curValue] = (acc[curValue] || 0) + 1;
        return acc
    }, {})
    let obj2 = word2.reduce((acc, curValue) => {
        acc[curValue] = (acc[curValue] || 0) + 1;
        return acc
    }, {})

    for (let key1 in obj1) {
        if(!word2.includes(key1)) return false
        if(!obj1[key1]== obj2[key1]) return false
        else return true
    }       
    
}

console.log(checkAnagrams(input1,input2))