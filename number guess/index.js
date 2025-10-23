const min=0;
const max=100;
const rand=Math.floor(Math.random()*max+1);
let wrong=document.getElementById("warn");
let count=0;

function is(){
    count+=1;
    let guess = document.getElementById("write").value;
    guess=Number(guess)
    if(guess<0 || guess>100)
    {
        wrong.textContent="Guess a valid numbers nigga";
    }
    else if(isNaN(guess))
    {
        wrong.textContent="Enter numbers only nigga!"
    }
    else if(guess=="")
    {
        wrong.textContent="start the game nigga";
    }
    else{
        if(guess<rand){
            wrong.textContent="You too low!"
        }
        else if(guess>rand)
            wrong.textContent="You taking big shit";
        else {
            wrong.textContent=`You take ${count} fucking times to guess this ${rand} shit`;
        }
    }
    }
    

