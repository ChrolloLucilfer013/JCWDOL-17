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
        console.log(numbers.sort((a, b) => a - b)[1]);
  
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
    const sumNumber = (mixed: any[]) =>
        console.log(
            mixed.reduce(
            (sum, element) => (typeof element == "number" ? sum + element : sum),0
      )
    );
  
    sumNumber(["3", 1, "string", null, false, undefined, 2]);
      

