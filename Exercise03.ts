//Exercise No.1
console.log("Exercise No.1:");

let counter: number = 10;
for (let i = 1; i <= counter; i++) {
  let NumVar01: number = 9;
  console.log(NumVar01, "x", i);
}

//Exercise No.2
console.log("Exercise No.2:");
let str01: string = "madam";
let reverse01: string = "";

for (let i = str01.length - 1; i >= 0; i--) {
    reverse01 += str01.charAt(i);
  }
  console.log(str01, ">>>", str01 == reverse01 ? "palindrome" : "not palindrome");

  //Exercise No.3
  console.log("Exercise No.3:");
  let VarCm: number = 100000; //cm
  console.log(VarCm*0.00001 + " km"); //km

  //Exercise No.4
  console.log("Exercise No.4:");
  let money: number = 1000;
console.log(
  new Intl.NumberFormat("id-ID", { currency: "IDR", style: "currency" }).format(
    money
  )
);

//Exercise No.5
console.log("Exercise No.5:");
str01 = "Hello world";
console.log(str01.replace("ell", ""));

//Exercise No.6
console.log("Exercise No.6:");
str01 = "hello world";
let capitalize: string = "";
for (let i = 0; i < str01.length; i++) {
  if (i == 0 || str01.charAt(i - 1) == " ")
    capitalize += str01.charAt(i).toUpperCase(); 
  else capitalize += str01.charAt(i).toLowerCase(); 
}
console.log(capitalize);

//Exercise No.7
console.log("Exercise No.7:");
str01 = "The QuiCk BrOwN Fox";
let swap: string = "";
for (let i = 0; i < str01.length; i++) {
  if (str01.charAt(i).toUpperCase() == str01.charAt(i))
    swap += str01.charAt(i).toLowerCase();
  else swap += str01.charAt(i).toUpperCase();
}
console.log(swap);

//Exercise No.8
console.log("Exercise No.8:");
let num1: number = 42;
let num2: number = 27;
let num3: number = 18;
console.log(num1 > num2 ? num1 : num2);

//Exercise No.9
console.log("Exercise No.9:");
let result: string = `num1 = ${num1}, num2 = ${num2}, num3 = ${num3} →`;
if (num1 > num2) [num1, num2] = [num2, num1]; //reassign
if (num1 > num3) [num1, num3] = [num3, num1];
if (num2 > num3) [num2, num3] = [num3, num2];

console.log(result, num1, num2, num3);

//Exercise No.10
console.log("Exercise No.10:");
str01 = "hello";
if (typeof str01 == "string") console.log(1);
else if (typeof str01 == "number") console.log(2);
else console.log(3);

//Exercise No.11
console.log("Exercise No.11:");
str01 = "An apple a day keeps the doctor away";
console.log(str01.replace(/a/gi, "*"));
//g = global
//i = in case sensitve

