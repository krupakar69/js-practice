let saveEl=document.getElementById("save-el");
let count=0;
function increment(){
    count=count+1;
    document.getElementById("count-el").textContent=count;
}
function save(){
    let saver=count+" - ";
    saveEl.textContent+=saver;
    count=0;
    document.getElementById("count-el").textContent=count;
}




