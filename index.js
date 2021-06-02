var randomnumber1=Math.floor(Math.random()*6)+1;
var randomimage="dice"+randomnumber1+".png";
var randomimagelocation="images/"+randomimage ;
document.querySelectorAll("img")[0].setAttribute("src",randomimagelocation);
 
var randomnumber2=Math.floor(Math.random()*6)+1;
var randomimage="dice"+randomnumber2+".png";
var randomimagelocation="images/"+randomimage ;
document.querySelectorAll("img")[1].setAttribute("src",randomimagelocation);
 
var i;
if(randomnumber1>randomnumber2)
{
    document.querySelector("h1").textContent="PLAYER1 WINS";
}
else if(randomnumber1<randomnumber2)
{
    document.querySelector("h1").textContent="PLAYER2 WINS";
}
else
{
    document.querySelector("h1").textContent="IT'S A TIE";
}