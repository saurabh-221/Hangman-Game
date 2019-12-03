const chalk = require('chalk');
var readlineSync = require('readline-sync');
var words = [
    "saurabh",
    "sarfaraz",
    "sumit",
    "vaibhav",
    "prakhar",
    "manjunath",
    "rahul",
    "aviral",
    "sneha",
    "simran",
    "shreya",
    "riya",
    "tanisha"
];
var welcome = function () {
    console.log(`
                                  WELCOME TO
    ██╗  ██╗  █████╗  ███╗   ██╗  ██████╗  ███╗   ███╗  █████╗  ███╗   ██╗
    ██║  ██║ ██╔══██╗ ████╗  ██║ ██╔════╝  ████╗ ████║ ██╔══██╗ ████╗  ██║
    ███████║ ███████║ ██╔██╗ ██║ ██║  ███╗ ██╔████╔██║ ███████║ ██╔██╗ ██║
    ██╔══██║ ██╔══██║ ██║╚██╗██║ ██║   ██║ ██║╚██╔╝██║ ██╔══██║ ██║╚██╗██║
    ██║  ██║ ██║  ██║ ██║ ╚████║ ╚██████╔╝ ██║ ╚═╝ ██║ ██║  ██║ ██║ ╚████║
    ╚═╝  ╚═╝ ╚═╝  ╚═╝ ╚═╝  ╚═══╝  ╚═════╝  ╚═╝     ╚═╝ ╚═╝  ╚═╝ ╚═╝  ╚═══╝
                             MADE BY SAURABH JAIN                          \n`);

}
welcome()

// Pick a random word
var word = words[Math.floor(Math.random() * words.length)];
// answer array
var answerArray = [];
for (var i = 0; i < word.length; i++) {
    answerArray[i] = "_";
}
var remainingLetters = word.length;
let guessLeft = 8
// The game
while (remainingLetters > 0 && guessLeft > 0) {
    // Show the player their progress
    // console.log(answerArray.join(" "));
    if (guessLeft === 8) {
        console.log("                          -")
        console.log("                        -  -")
        console.log("                      -      -")
        console.log("                    -          -")
        console.log("                     -        -")
        console.log("                       -    -")
        console.log("                         -")
        console.log("                    ------------")
        console.log("                         -")
        console.log("                     -   -   -")
        console.log("                      -  -  -")
        console.log("                       - - -")
        console.log("                        ---")
        console.log("                         -")
        console.log("                         -")
        console.log("                         -")
        console.log("                         -")
        console.log("                         -")
        console.log("                        - -")
        console.log("                       -   -")
        console.log("                      -     -")
        console.log("                     -       -")
        console.log("\n")
    }
    else if (guessLeft === 7) {
        console.log("                    ------------")
        console.log("                         -")
        console.log("                     -   -   -")
        console.log("                      -  -  -")
        console.log("                       - - -")
        console.log("                        ---")
        console.log("                         -")
        console.log("                         -")
        console.log("                         -")
        console.log("                         -")
        console.log("                         -")
        console.log("                        - -")
        console.log("                       -   -")
        console.log("                      -     -")
        console.log("                     -       -")
        console.log("\n")
    }
    else if (guessLeft === 6) {
        console.log("                         -")
        console.log("                     -   -   -")
        console.log("                      -  -  -")
        console.log("                       - - -")
        console.log("                        ---")
        console.log("                         -")
        console.log("                         -")
        console.log("                         -")
        console.log("                         -")
        console.log("                         -")
        console.log("                        - -")
        console.log("                       -   -")
        console.log("                      -     -")
        console.log("                     -       -")
        console.log("\n")
    }
    else if (guessLeft === 5) {
        console.log("                         -")
        console.log("                         -   -")
        console.log("                         -  -")
        console.log("                         - -")
        console.log("                         --")
        console.log("                         -")
        console.log("                         -")
        console.log("                         -")
        console.log("                         -")
        console.log("                         -")
        console.log("                        - -")
        console.log("                       -   -")
        console.log("                      -     -")
        console.log("                     -       -")
        console.log("\n")
    }
    else if (guessLeft === 4) {
        console.log("                         -")
        console.log("                         -    ")
        console.log("                         -   ")
        console.log("                         -  ")
        console.log("                         - ")
        console.log("                         -")
        console.log("                         -")
        console.log("                         -")
        console.log("                         -")
        console.log("                         -")
        console.log("                        - -")
        console.log("                       -   -")
        console.log("                      -     -")
        console.log("                     -       -")
        console.log("\n")
    }
    else if (guessLeft === 3) {
        console.log("                         -")
        console.log("                         -")
        console.log("                         -")
        console.log("                         -")
        console.log("                         -")
        console.log("                        - -")
        console.log("                       -   -")
        console.log("                      -     -")
        console.log("                     -       -")
        console.log("\n")
    }
    else if (guessLeft === 2) {
        console.log("                         -")
        console.log("                        - -")
        console.log("                       -   -")
        console.log("                      -     -")
        console.log("                     -       -")
        console.log("\n")
    }
    else if (guessLeft === 1) {
        console.log("                         -")
        console.log("                          -")
        console.log("                           -")
        console.log("                            -")
        console.log("                             -")
        console.log("\n")
    }
    else if (guessLeft === 0) {
        console.log("                    Better luck next time")
    }
    var userName = readlineSync.question('                    Guess your word ? ');
    // Get a guess from the player
    if (userName === null) {
        // Exit the game loop
        break;
    }
    else if (userName.length !== 1) {
        console.log("                    " + chalk.bgMagenta(chalk.white.bold("Please enter a single letter.")));
    }
    else {
        var flag = false
        // Update the game state with the guess
        for (var j = 0; j < word.length; j++) {
            if (word[j] === userName) {
                flag = true
                answerArray[j] = userName;
                remainingLetters--;
            }
        }
        if (flag === false) {
            guessLeft--
        }
        // guessLeft--
        console.log("                    " + chalk.bgMagenta(chalk.white.bold("Remaining guessLeft are :- ")) + guessLeft)
        console.log("                    " + chalk.bgYellow(chalk.red.bold(answerArray.join(" "))))
        console.log("\n")
    }
}
// The end of the game loop}
let realAnswer = answerArray.join("")
// Show the answer and congratulate the player
if (realAnswer === word) {
    console.log("                    " + chalk.bgYellow(chalk.red.bold("Good job! You won the game ")));
}
else {
    console.log("                    " + chalk.bgYellow(chalk.red.bold("Oops ! better luck next time ")));

    console.log("                    " + chalk.bgYellow(chalk.red.bold("The currect word is " + word)))
}
