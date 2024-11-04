//initiallize Variable
//Input
let lengthvar: number = 5;
let widthvar: number = 3;
let radvar: number = 5;
const phi: number = 3.1459;

const daytotal01: number = 400;
const daytotal02: number = 366;
//Output
let sqarea01,sqperimeter01,diameter01,circum01,cirarea01;
let year01:number;
let month01:number;
let week01:number;
let day01:number;
let year02:number;
let month02:number;
let week02:number;
let day02:number;
let areaunit:string = ' m2';
let perimeterunit:string = ' m';

//Exercise No.1
sqarea01 = lengthvar * widthvar;
console.log(sqarea01+areaunit);

//Exercise No.2
sqperimeter01 = (lengthvar*2) + (widthvar*2);
console.log(sqperimeter01+perimeterunit);

//Exercise No.3
circum01 = (2*phi*radvar);
cirarea01 = (phi* (radvar**(2)));

console.log(circum01.toFixed(4));
console.log(cirarea01.toFixed(4));

//Execersi No.4
year01 = Math.floor(daytotal01/365);
month01 = Math.floor((daytotal01%365)/30);
day01 = Math.floor((daytotal01%365)%30)

let unityear01: string = (year01 == 1? " year, ":" years, ");
let unitmonth01: string = (month01 == 1? " month, ":" months, ");
let unitday01: string = (day01 == 1? " day, ":" days, ");

 console.log(`${year01}${unityear01}${month01}${unitmonth01}${day01}${unitday01}`);

 //Execersi No.5
year02 = Math.floor(daytotal02/365);
month02 = Math.floor((daytotal02%365)/30);
day02 = Math.floor((daytotal02%365)%30)

let unityear02: string = (year02 <= 1? " year, ":" years, ");
let unitmonth02: string = (month02 <= 1? " month, ":" months, ");
let unitday02: string = (day02 <= 1? " day, ":" days, ");

 console.log(`${year02}${unityear02}${month02}${unitmonth02}${day02}${unitday02}`);








