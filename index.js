var randomNumber1=Math.floor(Math.random()*6)+1;

var randomImage1="dice"+randomNumber1+".png";

var randomImageGenerator="images/"+randomImage1;

var image1=document.querySelectorAll("img")[0];

image1.setAttribute("src",randomImageGenerator);

//doing the same thing for the second image now//

var randomNumber2=Math.floor(Math.random()*6)+1;
var randomImage2="dice"+randomNumber2+".png";
var randomImageGenerator2="images/"+randomImage2;




var image2=document.querySelectorAll("img")[1];

image2.setAttribute("src",randomImageGenerator2);


//now the code for declaring the winner//

if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="Player 1 Wins 👑";
}else if(randomNumber2>randomNumber1){
    document.querySelector("h1").innerHTML="Player 2 Wins 👑";

}else{
    document.querySelector("h1").innerHTML="Draw! 😕";
}