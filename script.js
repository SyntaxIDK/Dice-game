var randomNumber1 = (Math.floor((Math.random() * 6)+ 1));
var randomNumber2 = (Math.floor((Math.random() * 6)+ 1));
var diceImage1 = "dice" + randomNumber1 + ".png";
var diceImage2 = "dice" + randomNumber2 + ".png";
var diceImageSrc1 = "images/" + diceImage1;
var diceImageSrc2 = "images/" + diceImage2;
var img1 = document.querySelectorAll('img')[0];
var img2 = document.querySelectorAll('img')[1];

img1.setAttribute('src', diceImageSrc1);
img2.setAttribute('src', diceImageSrc2);

if(randomNumber1 > randomNumber2){
    document.querySelector('h1').innerHTML = 'PLAYER 1 WINS';
}
else if(randomNumber2 > randomNumber1) {
    document.querySelector('h1').innerHTML = 'PLAYER 2 WINS';
}
else {
    document.querySelector('h1').innerHTML = 'DRAW';
}

