const age = 18;
const brithYear = 1988;
switch(true){
    case getResult(age, brithYear):
        console.log("Great!");
        break;
    default:
        console.log("vos!");
}
function getResult(age, brithYear){
    return age >=18 && String(brithYear).includes("88");
}
/* het resultaat is Great!, dit is omdat de statement van de functie waar is*/