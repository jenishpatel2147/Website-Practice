var rand1 = Math.floor(Math.random() * 6) + 1;
var rand2 = Math.floor(Math.random() * 6) + 1;

var img1 = document.querySelectorAll("img")[0]; 
img1.setAttribute("src", "images/dice" + rand1 + ".png");

var img2 = document.querySelectorAll("img")[1]; 
img2.setAttribute("src", "images/dice" + rand2 + ".png");

if (rand1 > rand2) {        // Player 1 wins!
    document.querySelector("h1").innerHTML = "Player 1 wins!";
} else if (rand2 > rand1) { // Player 2 wins!
    document.querySelector("h1").innerHTML = "Player 2 wins!";
} else {                    // Tie Game!
    document.querySelector("h1").innerHTML = "Draw";
}
