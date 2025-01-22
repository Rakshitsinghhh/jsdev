let lst = ["rock", "paper", "scissors"];
let answer = "";

let playercount = 0; 
let ccount = 0; 

const buttons = document.querySelectorAll('#images button');

buttons.forEach(button => {
    button.addEventListener('click', function() {
        answer = button.getAttribute('data-answer');
        
        const random = lst[Math.floor(Math.random() * lst.length)];
        
        if (answer === random) {
            playercount++;
            document.getElementById("playerScore").innerHTML = playercount;
            alert('YOU WON!');
        } else {
            ccount++;
            document.getElementById("computerScore").innerHTML = ccount;
            alert('Random choice was: ' + random);
        }
    });
});
