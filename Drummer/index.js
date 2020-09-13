
for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        var temp_key = this.innerHTML;
        PlaySound(temp_key);
    });
}

document.addEventListener("keypress", function(event) {
    PlaySound(event.key);
});

function animate(cur)  {
    var current = document.querySelector("." + cur);
    current.classList.add("pressed");
    
    setTimeout(function() {
        current.classList.remove("pressed");
    }, 100);
}

function PlaySound(temp_key) {
    switch (temp_key) {
        case "w":
            var audio = new Audio('sounds/T1.mp3');
            break;
        case "a":
            var audio = new Audio('sounds/T3.mp3');
            break;
        case "s":
            var audio = new Audio('sounds/snare.mp3');
            break;
        case "d":
            var audio = new Audio('sounds/crash.mp3');
            break;
        case "j":
            var audio = new Audio('sounds/bass.mp3');
            break;
        case "k":
            var audio = new Audio('sounds/T4.mp3');
            break;
        default:
            var audio = new Audio('sounds/T2.mp3');
            break;
    }
    animate(temp_key);
    audio.play();
}




