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