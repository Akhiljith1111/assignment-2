var str="This is for testing purpose.";
var a=[];
var b= '';
   for(let i=0; i<str.length; i++){
     b=b+str[i];
     if(str[i]==' ' || str[i]=='.') {
        a.push(b);
        b='';
     } 
   }
    
console.log(a);
