//Given a string print "YES" if it is a palindrome and print "NO" if it is not 

var str = "madam";
const len = str.length;
var flag=0;
for (let i = 0; i < len / 2; i++) {    
    if (str[i] !== str[len - 1 - i]) 
      flag = 1;
}
if (flag==1)  
   console.log("NO")
    else
    console.log("yes")
