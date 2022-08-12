function play() {
    let randomNum = Math.floor(Math.random() * 10) + 1;
    console.log(randomNum);
    let attemps = 1;
    let guess = Number(prompt('Guess a number between 1 and 10'));

    while (guess !== randomNum && attemps < 3) {
        attemps +=1;
        guess = Number(prompt('Wrong! Try again'));
    }

    if (guess === randomNum) {
        alert(`Great! The number was ${randomNum}. Attempts: ${attemps}`);

    } else {
        alert(`Sorry, you failed to guess the number in 3 attemps. The number was ${randomNum}`);
    }
}

play();