let btn = document.querySelector(".button");
let container = document.querySelector(".container");
let a = 1;
let random = [];
let c = 0;
btn.addEventListener("click", addElement)
function addElement(){
    if(a<50){
        let b = Math.floor(Math.random() * 900) + 100;
        random[random.length] = b;
        const node = document.createElement('Div');
        const textNode = document.createTextNode(random[c]);
        c++;
        node.className += "container__item";
        node.appendChild(textNode);
        node.style.padding = "25px";
        node.style.paddingLeft ="50px"
        container.appendChild(node);
        a++;
    }
}
console.log(random)