const matrix = [[1, 2, 3], [4, 5, 6],[7,8,9]];

var rows = matrix.length;
var cols = 0
if (rows > 0){
    cols = matrix[0].length;
}

console.log(cols,rows)
