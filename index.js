var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++) {

    document.querySelectorAll(".drum")[i].addEventListener("click", function () {

        var buttonInnerHTML = this.innerHTML;

        makeSound(buttonInnerHTML);

        buttonAnimation(buttonInnerHTML);

    });

}

document.addEventListener("keypress", function (event) {

    makeSound(event.key);

    buttonAnimation(event.key);

});


function makeSound(key) {

    switch (key) {
        case "a":
            var leftCrash = new Audio("sounds/leftCrash.mp3");
            leftCrash.play();
            break;

        case "s":
            var tom1 = new Audio("sounds/tom1.mp3");
            tom1.play();
            break;

        case "d":
            var snare = new Audio('sounds/snare.mp3');
            snare.play();
            break;

        case "g":
            var kickbass = new Audio('sounds/kickbass.mp3');
            kickbass.play();
            break;

        case "j":
            var tom2 = new Audio('sounds/tom2.mp3');
            tom2.play();
            break;

        case "k":
            var tom3 = new Audio('sounds/tom3.mp3');
            tom3.play();
            break;

        case "l":
            var rightCrash = new Audio('sounds/rightCrash.mp3');
            rightCrash.play();
            break;

        default: console.log(key);

    }
}


function buttonAnimation(currentKey) {

    var activeButton = document.querySelector("." + currentKey);

    activeButton.classList.add("pressed");

    setTimeout(function () {
        activeButton.classList.remove("pressed");
    }, 100);

}