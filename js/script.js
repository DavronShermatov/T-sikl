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

// AMALIYOT

for( let i=0; i<2; i++){
    const b = +prompt("Oxirgi marta qaysi serialni ko'rdingiz","");
    console.log(b);
    if(b != null && b!="" ){
        console.log("done");
    }else{
        console.log("error");
        i--;
    };
};






const b = +prompt("nechta serial ko'rgansiz","");

if(b<5){
    console.log("kam serial ko'rgan ekansiz");
}else if(b>5 && b<10){
    console.log("Siz classik odam ekansiz");
}else {
    console.log("siz kini ko'rish bo'yicha zvezda ekansiz");
};