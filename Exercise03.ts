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
  let money: number = 1000;
console.log(
  new Intl.NumberFormat("id-ID", { currency: "IDR", style: "currency" }).format(
    money
  )
);




