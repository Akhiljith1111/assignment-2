var a=[[1,2,3],[4,5,6],[7,8,5]];
var b=0;
var c=0;
var j
for(let i=0;i<a.length;i++){
        b=b+a[i][i];   
    }
for(let j=0;j<a.length;j++) {
        k=(a[j].length-j-1);
        c=c+a[j][k];
    }
console.log('First diagonal:', b);
console.log('Second diagonal:',c);
console.log('Difference :', b-c);