var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2    = Math.floor(Math.random() * 6) + 1;

var img1 = document.getElementsByTagName("img")[0];
var img2 = document.getElementsByTagName("img")[1];

var title = document.getElementsByTagName("h1")[0];

img1.src = "images/dice"+randomNumber1+".png";
img2.src = "images/dice"+randomNumber2+".png";



if (randomNumber1 > randomNumber2){
    title.innerHTML = '🚩Play 1 Wins!';
}else if(randomNumber2 > randomNumber1){
    title.innerHTML = 'Play 2 Wins!🚩';
}else{
    title.innerHTML = 'Draw!'
}