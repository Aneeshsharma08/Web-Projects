var x=Math.floor(Math.random()*6)+1;
var d="dice" + x + ".png";
var t="images/" + d;

var a1=document.querySelectorAll("img")[0];
a1.setAttribute("src",t);

var y=Math.floor(Math.random()*6)+1;
var d2="images/dice" + y + ".png";
document.querySelectorAll("img")[1].setAttribute("src",d2);


if(x>y){
    document.querySelector("h1").innerHTML="player 1 wins";
}
else if(y>x){
    document.querySelector("h1").innerHTML="player 2 wins";
}
else{
    document.querySelector("h1").innerHTML="draw";
}