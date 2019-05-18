import React from 'react'; 
import Options from './Options/Options'
import Header from './Header/Header'; 
import Message from './Message/Message'; 
import PlayerScore from './PlayerScore/PlayerScore'; 
import ComputerScore from './ComputerScore/ComputerScore'; 


class New extends React.Component {
    constructor() {
        super() 
        this.state = {
            username: 'Daria',
            PlayerChoice:"smth",
            computerChoice: "other",
            playerScore: 0,
            computerScore: 0,
            startGame:false,
            endGame:false,
            tieGame:false,
            test:true,
            generateComputerChoiceBool:false,
            message:"Welcome to the game!",
            PlayerScoreBool:true,
            computerScoreBool:true
          }
 
    }

    playerMoved = (choice) => {
        this.setState({
                PlayerChoice: choice,
                startGame:true,
                test:true,
            })
        this.generateComputerChoice()
        this.findWinner()
        // this.broadcastTest("broadcasw")
    }

    generateComputerChoice() {
        var random = Math.floor(Math.random()*3); 
        let choices = ["rock","paper","scissors"]; 
        var computerChoice = choices[random]; 
        this.setState({
            computerChoice: computerChoice
        })
        console.log(`computer choice is ${computerChoice}`)
    }
  
    findWinner() {
        let resultArray = []; 
        resultArray.push(this.state.PlayerChoice) 
        resultArray.push(this.state.computerChoice) 
        let player = resultArray[0]; 
        let computer = resultArray[1];
        
        if(player === computer) {
            this.setState({
                message:"tie"
              });
        }
        switch(player,computer) {
          case 'rock','paper':
            this.setState({
                computerScore: this.state.computerScore +1,
                message: "Paper wins rock! Computer won!"
              });
         
            break;
          case 'rock','scissors':
            this.setState({
                playerScore: this.state.playerScore +1,
                message:"Congrats!! Rock wins scissors!"
              });
            break;
          case 'paper','rock': 
            this.setState({
                playerScore: this.state.playerScore +1,
                message:"Congrats! Paper wins rock!"
              });
            break;
          case 'paper', "scissors":
            this.setState({
                computerScore: this.state.computerScore +1,
                message:"Computer won! Scissors wins paper"
              });
            break;
          case 'scissors', "rock":
            this.setState({
                computerScore : this.state.computerScore +1,
                message:"Computer won! Rock wins scissors!"
              });
            break;
          case 'scissors', "paper":
            this.setState({
                playerScore: this.state.playerScore +1,
                message:"Scissors wins paper!"
              });
            break;
          default:
              // code block
    }
}
    render() {
        let message = null; 
        let playerScore = null; 
        let computerScore = null; 

        if(this.state.computerScoreBool) {
          computerScore = (
            <div>
              <ComputerScore choice={this.state.computerScore}> </ComputerScore>
            </div>
          )
        }

        if(this.state.PlayerScoreBool) {
          playerScore = (
            <div>
              <PlayerScore choice={this.state.playerScore}> </PlayerScore>
            </div>
          )
        }
        if(this.state.message) {
            message = (
              <div>
                 <Message message={this.state.message}> </Message> 
              </div>
            )
          }
    
    
        return (
            <div>
                <Header> </Header>
                <div className="flex-container"> 
                  {playerScore}
                  {computerScore}
                </div>
                
                {/* {message} */}
                <div className="flex-container">
                   <Options click={() => this.playerMoved("paper")} choice="Paper" style="Options Rock"/>
                   <Options click={() =>this.playerMoved("rock")} choice="Rock" style="Options Paper"/>
                   <Options click={() =>this.playerMoved("scissors")} choice="Scissors" style="Options Scissors" /> 
                </div>
            </div>
        )}
}

export default New; 