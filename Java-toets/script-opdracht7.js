let btn = document.querySelector(".button");
let container = document.querySelector(".container");
let a = 1;

/* btn.addEventListener("click", addElement) dit is voor opdracht 6*/
btn.addEventListener("click",instant)
function instant(){
    for(let i = 1; i<50; i++){
        addElement(i);
    }
}
function addElement(){
    if(a<50){
        const node = document.createElement('Div');
        const textNode = document.createTextNode(a);
        node.className += "container__item";
        node.appendChild(textNode);
        node.style.padding = "25px";
        node.style.paddingLeft ="50px"
        container.appendChild(node);
        a++;
    }
}

