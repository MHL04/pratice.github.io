
//generator
const btn =document.querySelector('button');

let random=()=>{
    console.log(Math.round(Math.random()*10));
}


btn.addEventListener('click',random);

//liveTyping:
const input=document.querySelector('input');
const result=document.querySelector('.resultat');
let keyUp=()=>{
    result.innerHTML=input.value;
}
input.addEventListener('keyup',keyUp);