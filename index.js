let buttons = document.querySelectorAll(".drum");
let musicButtons = [];

addEventListener("keydown", function (event) {
    let pressedKey = event.key;
    let musicButton = musicButtons[pressedKey];
    musicButton?.playSound();
});

for (let buttonId = 0; buttonId < buttons.length; buttonId++) {
    let button = buttons[buttonId];
    let musicButton = new MusicButton(button);
    musicButtons[musicButton.key] = musicButton;

    button.addEventListener("click", function () {
        musicButton.playSound();
    });
}


function MusicButton(button) {
    this.object = button;
    this.key = button.innerHTML;

    this.playSound = function () {
        playAudioByKey(this.key);
        playAnimation(this.object);
    };
}

function playAudioByKey(key) {
    let audio;

    switch (key) {
        case "w":
            audio = new Audio("sounds/tom-1.mp3");
            break;
        case "a":
            audio = new Audio("sounds/tom-2.mp3");
            break;
        case "s":
            audio = new Audio("sounds/tom-3.mp3");
            break;
        case "d":
            audio = new Audio("sounds/tom-4.mp3");
            break;
        case "j":
            audio = new Audio("sounds/snare.mp3");
            break;
        case "k":
            audio = new Audio("sounds/kick-bass.mp3");
            break;
        case "l":
            audio = new Audio("sounds/crash.mp3");
            break;
        default:
            console.log(`Wrong key ${this.key}`);
            return;
    }

    audio.play();
}

function playAnimation(button) {
    button?.classList.toggle("pressed");
    setTimeout(() => {
        button?.classList.toggle("pressed");
    }, 100);
}