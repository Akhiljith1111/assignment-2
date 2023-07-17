var a = [100, 20, 31, 150, 39, 72];
var b = a[0];
var c = a[0];
for (let i = 0; i<a.length; i++){
if(b>a[i])
b=a[i];
if(c<a[i])
c=a[i];
}
console.log('a',b);
console.log('b',c);

