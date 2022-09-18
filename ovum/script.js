function init() {

    const arrowUp = 38;
    const arrowDown = 40;
    const arrowLeft = 37;
    const arrowRight = 39;
    const letterA = 65;
    const letterB = 66;

    const konamicode = [arrowUp, arrowUp, arrowDown, arrowDown, arrowLeft, arrowRight, arrowLeft, arrowRight, letterB, letterA];
    const konamicodeString = konamicode.join('');

    let pressedKeys = [];

    function keyPressHandler(event) {
        savePressedKey(event.keyCode);
        checkForKonamiCode();
    }

    function savePressedKey(keyCode) {
        pressedKeys.push(keyCode);
    }

    function checkForKonamiCode() {
        const pressedKeyString = pressedKeys.join('');
        if (pressedKeyString.includes(konamicodeString)) {
            hooray();
            pressedKeys = [];
        }
    }

    function hooray() {
        confetti({
            particleCount: 300,
            spread: 70,
            origin: { y: 1 }
        });
        var audio = new Audio('ff7_victory.mp3');
            audio.play('ff7_victory.mp3')
            
    }

    document.addEventListener('keydown', keyPressHandler);
}

document.addEventListener('DOMContentLoaded', init);