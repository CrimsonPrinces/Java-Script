let btn = document.querySelector(".Diceroll");
let die1 = document.querySelector(".die1")
const dicerolled = ["1", "2", "3", "4", "5", "6"]; 
btn.addEventListener('click', DoOneRoll)
let sides[
   "1.png"
]

let dobbels = new Array(5).fill("");
let vasthoud = new Array(5).fill("");

function getRandomInt(min, max) {
   min = Math.ceil(min);
   max = Math.floor(max);
   return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
 }

function DoOneRoll(){
   for(let i = 0; i < vasthoud.length; i++){
      if( vasthoud[i] === "" ){
         dobbels[i] = getRandomInt(1,6);
         console.log(dobbels)
      }
   }
}