/*Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.
Example 1:
Input: nums = [2,2,1]
Output: 1
Example 2:
Input: nums = [4,1,2,1,2]
Output: 4
Example 3:
Input: nums = [1]
Output: 1*/
//Excercise Tambahan
//4 types triangle
/*
****
***
**
*
*
**
***
****
****
 ***
  **
   *
   * 
  **
 ***
****
*/

function FourTriangle (h:number): void {
    //Triangle 1
    for (let i = h; i > 0; i--) {
        console.log('*'.repeat(i));
    }
    //Triangle 2
    for (let i = 1; i <= h; i++) {
        console.log('*'.repeat(i));
    }
    //Triangle 3
    for (let i = h; i > 0; i--) {
        console.log(`${' '.repeat(h-i)}${'*'.repeat(i)}`);
    }
    //Triangle 4
    for (let i = 1; i <= h; i++) {
        console.log(`${' '.repeat(h-i)}${'*'.repeat(i)}`);
    }
  
}

FourTriangle(4); 

//Excercise 01
//Create a function to convert Excel sheet column title to its corresponding column number.
function ConvertExcel(str:string): number {
    let col = 0;
    let coloumNum = 0;

    for (let index = 0; index < str.length; index++) {
        const codeAt0 = str.charCodeAt(index);
        col = codeAt0 - 64;
        coloumNum = (coloumNum * 26) + col; 
        
    
    }
    return coloumNum;
}
const strxexample = "AA"; 
console.log(strxexample); //Output 27


