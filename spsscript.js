document.addEventListener("DOMContentLoaded", function() {
    let userc = document.querySelectorAll("#ele");
    let userchoice = null;
    let comchoice = null;
    let winstatus="Win";
    let score = 0;
    let para = document.getElementById("ScoreLine");

    function scorecalculator(userchoice, comchoice) {
        if (userchoice == comchoice) {
            console.log("Tie");
            winstatus="Tie !";
        } else {
            if (userchoice === "Rock") {
                score = comchoice === "Paper" ? score : score += 1;
                winstatus = comchoice ==="Paper" ? "Lose !" : "Win !";

            } else if (userchoice === "Paper") {
                score = comchoice === "Scissors" ? score : score += 1;
                winstatus = comchoice ==="Scissors" ? "Lose !" : "Win !";
            } else {
                score = comchoice === "Rock" ? score : score += 1;
                winstatus = comchoice ==="Rock" ? "Lose !" : "Win !";

            }
        }
        
        para.innerHTML = "Score: " + score + "<br>" +"Computer chooses:"+comchoice+"<br>"+ winstatus ;


        
        
    }

    function computer() {
        let compchoices = ["Rock", "Paper", "Scissors"];
        let j = Math.floor(Math.random() * 3);
        return compchoices[j];
    }

    for (let i = 0; i < 3; i++) {
        userc[i].addEventListener("click", () => {
            if (i == 0) {
                console.log("Rock");
                userchoice = "Rock";
                comchoice = computer();
                console.log("Computer choice:", comchoice);
                scorecalculator(userchoice, comchoice);
            } else if (i == 1) {
                console.log("Paper");
                userchoice = "Paper";
                comchoice = computer();
                console.log("Computer choice:", comchoice);
                scorecalculator(userchoice, comchoice);
            } else {
                console.log("Scissors");
                userchoice = "Scissors";
                comchoice = computer();
                console.log("Computer choice:", comchoice);
                scorecalculator(userchoice, comchoice);
            }
        });
    }
});
















