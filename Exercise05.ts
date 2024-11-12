//Exercise No.1
console.log("Exercise No.1:");
    const Sha = (numbers: number[]) => //Function Sha to find Minimal, Maximum & Average between array number value
        console.log(
            "Min " + Math.min(...numbers),
            "Max " + Math.max(...numbers),
            "Avg " + (numbers.reduce((sum, n) => sum + n, 0) / numbers.length).toFixed(4)
    );

    Sha([12,5,23,18,4,45,32]);


//Exercise No.2
console.log("Exercise No.2:");
    const concatenating = (arrtext: string[]) =>
        console.log(
            arrtext.map((str, i) => (i == arrtext.length - 1 ? " and " + str : str)).toString()
        );
      
    concatenating(["apple", "banana", "cherry", "date"]);

//Exercise No.3
console.log("Exercise No.3:");
    const smallest = (numbers: number[]) =>
        console.log("second smallest number is "+numbers.sort((a, b) => a - b)[1]);
  
    smallest([5, 3, 1, 7, 2, 6]); 

//Exercise No.4
console.log("Exercise No.4:");
    const sumSamePos = (numbers1: number[], numbers2: number[]) =>
        console.log(numbers1.map((n, i) => n + numbers2[i]));
  
    sumSamePos([1, 2, 3], [3, 2, 1]);

//Exercise No.5
console.log("Exercise No.5:");
    const addElement = (numbers: number[], element: number) =>
        console.log(numbers.indexOf(element) == -1 ? [...numbers, element] : numbers);
      
      addElement([1, 2, 3, 4], 4);
      addElement([1, 2, 3, 4], 7);

//Exercise No.6
console.log("Exercise No.6:");
    const sumvar = (mixed: any[]) =>            //create a function
        console.log(
            mixed.reduce((x1, x2) => (typeof x1 == "number" ? x1 + x2 : x2),0)
    );
  
    sumvar([4, 1, "string", null, false, undefined, 2,3,2]);

//Exercise No.7
console.log("Exercise No.7:");
const insertNumbers = (max: number, ...numbers: number[]) =>    //create a function
    console.log([...new Array(max)].map((n, i) => numbers[i]));
  
  insertNumbers(5, 5, 10, 24, 3, 6, 7, 8);

//Exercise No.8
console.log("Exercise No.8:");
const combine = (arr1: number[], arr2: number[]) =>     //create a function
    console.log(arr1.concat(arr2));
  
  combine([1, 2, 3], [4, 5, 6]);
    

