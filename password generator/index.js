const lowerCase= "abcdefghijklmnopqrstuvwxyz"
const upeerCase="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const symbols="!@#$%^&*()_-+=~`"
const num="0123456789"
const length=12
let total=lowerCase+upeerCase+symbols+num;
let password="";
for(let i=0;i<length;i++)
{
    const index=Math.floor(Math.random()*total.length);
    password+=total[index]
}
const pass=document.getElementById("pass").textContent=password;


