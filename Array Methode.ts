//cara untuk mengambil value dari array melalui index
const arr3 = ["jhonny", "dea"];
console.log(arr3[0]); 

 //example new array dengan limit panjang array
 let arr_names:number[] = new Array(10)  

 for(var i = 0;i<arr_names.length;i++) { 
    arr_names[i] = i % 2 
    console.log(`Nilai : ${arr_names[i]}`) 
 }

//Concat
let alpha:string[] = ["a", "b", "c"]; 
let numvar:string[] = ["1","2","3"];

let alphaNumeric = alpha.concat(numvar); 
console.log("alphaNumeric : " + alphaNumeric );

//function for bult in array methode
function isBigEnough(element:number, index:number, array:number[]) { 
    return (element >= 10); 
 } 

 //filter
 let passedfilter = [12, 5, 8, 130, 44].filter(isBigEnough); 
 console.log(`Test Array.filter Value: ${passedfilter}`);
 
 //every
let passedeveryfalse = [12, 5, 8, 130, 44].every(isBigEnough); 
 console.log("Test Array.Every False : " + passedeveryfalse );

let passedeverytrue = [12, 13, 14, 130, 44].every(isBigEnough); 
 console.log("Test Array.Every True : " + passedeverytrue );

 //forEach
alpha.forEach(function (value) {
  console.log(`Test Array.forEach ${value}`);
}); 


//indeof untuk mencari nilai index value di dalam sebuah array
var indexoftest = [12, 5, 8, 130, 44].indexOf(130); //disini kita mencari nilai index dari nilai 130 didalam sebuah array
console.log("Index of 130 is : " + indexoftest );


