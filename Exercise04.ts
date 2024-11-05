//Exercise No.1
console.log("Exercise No.1:");
const triangle = (h: number) => {
  let counter = 1;
  for (let i = 0; i < h; i++) {
    let result = "";
    for (let j = 0; j <= i; j++) {
      result += counter > 9 ? counter : "0" + counter + " ";
      counter++;
    }
    console.log(result);
  }
};
triangle(4);

//Exercise No.2
console.log("Exercise No.2:");
const fb = (n: number) => {
  let result: string = ""; //1 2 fizz 4 buzz fizz 7 8 fizz buzz fizzbuzz
  for (let i = 1; i <= n; i++) {
    //i = 15
    if (i % 3 == 0 && i % 5 == 0) result += "fizzBuzz";
    else if (i % 3 == 0) result += "fizz ";
    else if (i % 5 == 0) result += "buzz ";
    else result += i + " ";
  }
  console.log(result);
};
fb(15);


//Exercise No.3
console.log("Exercise No.3:");
const calculateBMI = (w: number, h: number) => {
  let bmi = w / h ** 2;
  let result = "";
  if (bmi < 18.5) result = "less weight";
  else if (bmi >= 18.5 && bmi <= 24.9) result = "ideal";
  else if (bmi >= 25 && bmi <= 29.9) result = "overweight";
  else if (bmi >= 30.0 && bmi <= 39.9) result = "very overweight";
  else result = "obesity";
  console.log(result);
};
calculateBMI(72, 1.76);

//Exercise No.4
console.log("Exercise No.4:");
const removeOdd = (numbers: number[]) =>
  console.log(numbers.filter((n) => n % 2 == 0));
removeOdd([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

//Exercise No.5
console.log("Exercise No.5:");
const split = (s: string) => console.log(s.split(" "));

split("Hello World");