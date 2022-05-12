let tSofie = 0;
let tSarah = 0;
const cSofie = [9.4, 3.8, 2.7, 6.7,8.9];
for (let a=0; a<5; a++){
    tSofie = tSofie + cSofie[a];
}
const cSarah = [7.7, 7.6, 7.3, 5.8, 6.9];
for (let a=0; a<5; a++){
    tSarah = tSarah + cSarah[a]
}
let gSofie = tSofie / 5;
let gSarah = tSarah / 5;

console.log(gSofie);
console.log(gSarah);

if(gSofie > gSarah){
    console.log(" Sofie heeft het hoger cijfer.");
}else{
    console.log("Sarah heeft het hoger cijfer.");
}
if(gSofie > 7 || gSarah >7){
    console.log("Goed gedaan, hoger dan een 7!");
}