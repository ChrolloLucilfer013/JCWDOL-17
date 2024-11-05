//Exercise N0.1
const var01 = [25,2];

for (let i = 0; i < 2; i++) {
    if (var01[i]%2){
        console.log(`${var01[i]} Even Value`); // for even value
    
    } else {
        console.log(`${var01[i]} Odd Value`); // for odd value
    }
    
}

//Exercise No.2
const var02 = [6,7];
let primestatus:boolean = true;
//Number = 1
for (let index = 0; index < 2; index++) {
    if (var02[index]==1){ 
        console.log("1 is not prime number")
    }
    else if (var02[index]>1){                           // Check Non prime number
        for (let y = 2; y <= var02[index]/2 ; y++) {
            if (var02[index]%y == 0){
                primestatus=false;

                break;
            } else {
                primestatus=true;
            }

        }
        
    }
if (primestatus){
    console.log(`${var02[index]} is prime number`)
} else {
    console.log(`${var02[index]} is not prime number`)
}

    
}

//Exercise No.3
const var03 =[3,5];
let buff01 =[0,0];

for (let index2 = 0; index2 < 2; index2++) {
    for (let index1 = 1; index1 <= var03[index2]; index1++) {
        buff01[index2]=buff01[index2] + index1;         //sum value save on the buffer data
    }    
}

console.log(buff01[0]);
console.log(buff01[1]);

//Exercose No.4
let var04 = [4,6]
let Result04: number[] = [];
let BuffResult:number = 0;

for (let m = 0; m < 2; m++) {
        for (let n = var04[m]-1; n >=1 ; n--) {
            var04[m] = var04[m] * n ;
              
            }
            Result04.push(var04[m]);  
        }

console.log(`Result is ${Result04[0]}`);
console.log(`Result is ${Result04[1]}`);



