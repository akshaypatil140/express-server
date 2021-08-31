

const printEquilateralPattern = (noOfRows) => {
    
   if (noOfRows >= 2 && noOfRows <= 9) {
     let string = "";
     // equilateral pyramid
     for (let i = 1; i <= noOfRows; i++) {
         // printing spaces
         for (let j = noOfRows; j > i; j--) {
           string += " ";
         }
         
         // printing star
         for (let k = 0; k < i * 2 - 1; k++) {
           string += "*";
         }
         string += "\n";
     }
     console.log(string);
   }else
   console.log("No of rows should not be greater than 9 and smaller than 2");
 }
 export default printEquilateralPattern;