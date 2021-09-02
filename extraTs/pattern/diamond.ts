
const printDiamondPattern = (noOfRows) => {
   if (noOfRows >= 2 && noOfRows <= 9) {
     let patterns = '';
     for (let i = 1; i <= noOfRows; i++) {
         for (let j = noOfRows; j > i; j--) {
           patterns += '';
         }
         for (let k = 0; k < i * 2 - 1; k++) {
           patterns += '*';
         }
         patterns += '\n';
     }
     for (let i = 1; i <= noOfRows - 1; i++) {

         for (let j = 0; j < i; j++) {
           patterns += '';
         }
         for (let k = (noOfRows - i) * 2 - 1; k > 0; k--) {
           patterns += '*';
         }
         patterns += '\n';
     }
     console.log(patterns);
   }
   else
   console.log('No of rows should not be greater than 9 and smaller than 2');
 };
export default printDiamondPattern;