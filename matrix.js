function hasMatrixSequence(matrix) {
  var count = 0;
  for (var i = 0; i < matrix.length; i++) {
    for (var j = 0; j < matrix[i].length; j++) {
      if ((matrix[i][j]===matrix[i][j+1] && matrix[i][j] ===matrix[i][j+2] && matrix[i][j] ===matrix[i][j+3])
      || (matrix[i][j]===matrix[i+1][j] && matrix[i][j] ===matrix[i+2][j] && matrix[i][j] ===matrix[i+3][j])
      || (matrix[i][j]===matrix[i+1][j+1] && matrix[i][j] === matrix[i+2][j+2] && matrix[i][j]===matrix[i+3][j+3])) {
        return true;
      }
      else {
        {return false;}
      }
    }
  }
}
