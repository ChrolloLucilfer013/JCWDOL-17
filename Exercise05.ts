//Exercise No.1
const Sha = (numbers: number[]) =>
    console.log("Min " + Math.min(...numbers),"Max " + Math.max(...numbers),"Avg " + (numbers.reduce((sum, n) => sum + n, 0) / numbers.length).toFixed(4));

    Sha([12,5,23,18,4,45,32]);