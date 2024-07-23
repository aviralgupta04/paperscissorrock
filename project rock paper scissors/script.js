let userscore=0;
let compscore=0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () =>{
    const options = ["rock","paper","scissors"];
    const randIdx= Math.floor(Math.random() * 3);
    return options[randIdx];
}
const drawGame = () =>{
    msg.innerText ="Game was drawn";
    msg.style.backgroundColor ="#081b31";
}
const showWinner= (userWin,userchoice,CompChoice) =>{
    if(userWin){
        userscore++;
        userScorePara.innerText = userscore;
        msg.innerText =`You win! ${userchoice} beats ${CompChoice}`;
        msg.style.backgroundColor ="green";
    }
    else{
        compscore++;
        compScorePara.innerText = compscore;
        msg.innerText =`You lost! ${CompChoice} beats ${userchoice}`;
        msg.style.backgroundColor ="red";
    }
}
const playgame= (userchoice) => {
    console.log("choice was clicked=",userchoice);
    const CompChoice = genCompChoice();
    console.log("computer choice=", CompChoice);
    if(userchoice ===CompChoice){
          drawGame();
    } else {
        let userWin = true;
        if(userchoice=="rock"){
            //scissors,paper
            userWin = CompChoice === "paper" ? false : true;
        }
        else if(userchoice==="paper"){
                //rock,scissors
                userWin = CompChoice === "scissors" ? false:true;
        }
        else {
            userWin = CompChoice === "rock" ? false:true;
        }
        showWinner(userWin,userchoice,CompChoice);
    }

};
choices.forEach((choice) => {
    choice.addEventListener("click", ()=> {
        const userchoice = choice.getAttribute("id");
        
        playgame(userchoice);
    });

});
