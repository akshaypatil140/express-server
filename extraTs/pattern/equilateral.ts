const printEquilateralPattern = (noOfRows) => {
  if (noOfRows >= 2 && noOfRows <= 9) {
    let patterns: string = '';
    // equilateral pyramid
    for (let i = 1; i <= noOfRows; i++) {
      // printing spaces
      for (let j = noOfRows; j > i; j--) {
        patterns += ' ';
      }
      // printing star
      for (let k = 0; k < i * 2 - 1; k++) {
        patterns += '*';
      }
      patterns += '\n';
    }
    console.log(patterns);
  }
  else
    console.log('No of rows should not be greater than 9 and smaller than 2');
};
export default printEquilateralPattern;