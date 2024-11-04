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
    else if (var02[index]>1){
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
        buff01[index2]=buff01[index2] + index1;
    }    
}

console.log(buff01[0]);
console.log(buff01[1]);