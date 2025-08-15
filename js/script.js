
    function arcadeloop() {

        let pickAnother = prompt("Would you like to pick another game to play? y/n");
        playing = (pickAnother.toLowerCase() === 'y') ? true : false;
        
        if (!playing) {
            document.body.innerHTML += `
                <div class="reload-container">
                    <p>Thanks for playing! Come back soon.</p>
                    <button onclick="location.reload()">Reload Page</button>
                </div>
            `;
        }

    }

    function guessingGame() {
        let keepPlaying = true;

        while (keepPlaying) {
            let randomNumber = Math.floor(Math.random() * 10) + 1;
            let guessCount = 0;
            let guessedCorrectly = false;
        

            while (!guessedCorrectly) {
                let input = prompt("Enter a number between 1 and 10");
                if (input === null) {
                    alert("Game cancelled.");
                    return;
                }

                let guess = Number(input);
                guessCount++;

                if (guess > randomNumber) {
                    alert("Your guess was too high, guess again.");
                } else if (guess < randomNumber) {
                    alert("Your guess was too low, guess again.");
                } else {
                    alert("You guessed it in " + guessCount + " guesses!");
                    guessedCorrectly = true;
                }
            }

            let playAgain = prompt("Would you like to keep playing this game? y/n");
            keepPlaying = (playAgain.toLowerCase() === 'y') ? true : false;
        }
        arcadeloop();
    }

    let consultOracle = function() {
        let keepPlaying = true
        
        while (keepPlaying) {
            let question = "";

            // Create array with 8 ball answers
            const answers = [
                "Yes",
                "No",
                "The most likely outcome is yes, probably...",
                "Definitely maybe",
                "I think not",
                "Without a doubt",
                "Very doubtful",
                "It is certain"
            ];

            // LOOP Prompt user for yes or no question or type Done to finish game
            while (true) {
                question = prompt("Ask a yes or no question (or type 'Done' to quit):");

                if (question.toLowerCase() === "done") {
                    break;
                }

                // Randomly select answer
                let randomIndex = Math.floor(Math.random() * answers.length);
                let response = answers[randomIndex];

                // Alert with response
                alert(response);
                
            }

            let playAgain = prompt("Would you like to keep playing this game? y/n");
            keepPlaying = (playAgain.toLowerCase() === 'y') ? true : false;
        }

        arcadeloop();
    }

    let bnh = () => {
        let keepPlaying = true

        while (keepPlaying) {
            // Assigning game tracking variables.
            let gamesPlayed = 0;
            let gamesWon = 0;
            let gamesLost = 0;
            let storedPlayerName = null;
            let gameRunning = true;


            // Main game loop that continues until the player chooses to stop playing. Also assigning variables for the player character, outcome, and player name.
            while (gameRunning) {
                let choiceArray = ["Bear", "Ninja", "Hunter"];
                let playerCharacter;
                let outcome;
                let playerName;

                // Prompt the player for their name. Use a loop to add potential for reprompts(see other branch).
                while (true) {
                playerName = prompt('Welcome to Bear Hunter Ninja! Please enter your name to get started:');

                // Check if the player pressed cancel or entered an empty string. End the game if they do.
                if (playerName === null || playerName.trim() === "") {
                    alert("Please Press F5 to Play Again.");
                    gameRunning = false;
                    break;
                }

                // Trim whitespace.
                playerName = playerName.trim();

                // If the  Player Name isn't stored, it.
                if (storedPlayerName === null) {
                    storedPlayerName = playerName;
                }

                // If there already is a stored player name, confirm it matches the stored name. If it matches, the game continues.
                if (storedPlayerName === playerName) {
                    let nameConfirmation = `Hi ${playerName} Let's play!!`;
                    alert(nameConfirmation);
                    break;
                }
                // If the player name doesn't match the stored name, the game ends and HTML is added with replay instructions.
                if (storedPlayerName !== playerName) {
                    alert("Invalid Entry. Please Press F5 to Play Again.");
                    gameRunning = false;
                    break;
                } else { 
                    break;
                }
                }

                // Check if the game is not running, break out of the loop if not.
                if (!gameRunning) break;

                // Prompt the player to choose a character. Check to make sure they are inputting correct data. Added loops for potential reprompts(see other branch).
                while (true) {
                playerCharacter = prompt('Who are you: Bear, Ninja, or Hunter?');

                // Check if the player pressed cancel or entered an empty string. End the game if they do.
                if (playerCharacter === null || playerCharacter.trim() === "") {
                    alert("Please Press F5 to Play Again.");
                    gameRunning = false;
                    break;
                }

                // Trim whitespace and capitalize the first letter of the player's choice.
                playerCharacter = playerCharacter.trim().toLowerCase();
                playerCharacter = playerCharacter.charAt(0).toUpperCase() + playerCharacter.slice(1);


                // Check if the player's choice is valid by going through array. If it isn't, the game ends. If it is, the loop breaks and game continues.
                if (!choiceArray.includes(playerCharacter)) {
                    alert ("Invalid Entry. Please Press F5 to Play Again.");
                    gameRunning = false;
                    break;
                } else {
                    break;
                }
                }

                // Check if the game is not running, break out of the loop if not.
                if (!gameRunning) break;

                //Chooses a random number between 0 and 2 then uses that number to select a character from the choiceArray (0, 1, 2).
                let randomIndex = Math.floor(Math.random() * choiceArray.length);
                let computerCharacter = choiceArray[randomIndex];

                // Switch statements nested in if else conditionals to determine the outcome of the game based on the player's choice and the computers choice. The outcome variable is assigned.
                if (computerCharacter === "Bear") {
                switch (playerCharacter) {
                    case "Bear":
                    outcome = "It's a tie!!";
                    break;
                    case "Ninja":
                    outcome = "You Lose!!";
                    break;
                    case "Hunter":
                    outcome = "You Win!!";
                    break;
                }
                }
                else if (computerCharacter === "Ninja") {
                switch (playerCharacter) {
                    case "Bear":
                    outcome = "You Win!!";
                    break;
                    case "Ninja":
                    outcome = "It's a tie!!";
                    break;
                    case "Hunter":
                    outcome = "You Lose!!";
                    break;
                }
                }
                else if (computerCharacter === "Hunter") {
                switch (playerCharacter) {
                    case "Bear":
                    outcome = "You Lose!!";
                    break;
                    case "Ninja":
                    outcome = "You Win!!";
                    break;
                    case "Hunter":
                    outcome = "It's a tie!!";
                    break;
                }
                }

                // Create player and computer result message.
                let playerResult = `${playerName}, You picked ${playerCharacter}!`;
                let computerResult = `The computer picked ${computerCharacter}!`;
                
                
                // Increment the gamesPlayed variable and check if the player won or lost, increment the respective counters.
                gamesPlayed++;
                
                if (outcome === "You Win!!") {
                gamesWon++;
                } 
                else if (outcome === "You Lose!!") {
                gamesLost++;
                }
                
                // Display the results on the page.
                alert(`${playerResult}\n${computerResult}\n${outcome}\nGames Played: ${gamesPlayed} | Wins: ${gamesWon} | Losses: ${gamesLost}`);

                // If the game is over, prompt the player to play again.
                while (true) {
                let playAgain = prompt(`${playerName}, would you like to play again, Yes or No?`);

                // Check if the player pressed cancel or entered an empty string. End the game if they do.
                if (playAgain === null || playAgain.trim() === "") {
                    alert ("Please Press F5 to Play Again.");
                    gameRunning = false;
                    break;
                }

                // Trim whitespace and capitalize the first letter of the player's choice.
                playAgain = playAgain.trim().toLowerCase();
                playAgain = playAgain.charAt(0).toUpperCase() + playAgain.slice(1);

                // If the players enters No, the game ends by changing gameRunning to false. If they enter Yes, the loop breaks and the game continues.
                if (playAgain === "No") {
                    gameRunning = false;
                    break;
                }
                if (playAgain === "Yes") {
                    break;
                }
                }
            }

            let playAgain = prompt("Would you like to keep playing this game? y/n");
            keepPlaying = (playAgain.toLowerCase() === 'y') ? true : false;
        }
        arcadeloop();
    }