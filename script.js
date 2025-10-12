
const button=document.getElementById("button");
const myh1=document.getElementById("myh1");
const max=100;
let getnumber;

button.onclick  = function(){
    getnumber=Math.floor(Math.random()*max)+1;
    myh1.textContent=getnumber;
}

