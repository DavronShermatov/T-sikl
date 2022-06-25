// Takrorlanuvchi sikl 
// while
let startnum = 1;
while (startNum<20){
    console.log(startnum);
    startNum++;
};

// Do while
let startNum = 1;
do{
    console.log(startNum);
    startNum++;
}while(startNum<=20);


// for operatori

for(i=1; i<=20; i++){
    if(i===9){
        break;
    }
    if(i===5){
        continue;
    }
    console.log(i);
};
