import React from 'react'; 
import Options from './Options/Options'
import Header from './Header/Header'; 
import Message from './Message/Message'; 

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
            message:"Welcome to the game!"
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

        if(resultArray[0] === resultArray[1]) {
            console.log("tie ")
            this.setState({
                playerScore: this.state.playerScore +1,
                message:"tie"
              });
        }
        switch(resultArray[0],resultArray[1]) {
          case 'rock','paper':
            console.log(resultArray)
            console.log("Paper wins rock!")
            this.setState({
                playerScore: this.state.playerScore +1,
                message:"Paper wins rock!"
              });
         
            break;
          case 'rock','scissors':
            console.log(resultArray)
            console.log("Scissors wins paper!")
            this.setState({
                playerScore: this.state.playerScore +1,
                message:"Scissors wins paper!"
              });
            break;
          case 'paper','rock':
            console.log(resultArray)
            console.log("Paper wins rock!") 
            this.setState({
                playerScore: this.state.playerScore +1,
                message:"Paper wins rock!"
              });
            break;
          case 'paper', "scissors":
            console.log(resultArray)
            console.log("Rock wins scissors!")
            this.setState({
                playerScore: this.state.playerScore +1,
                message:"Rock wins scissors!"
              });
            break;
          case 'scissors', "rock":
            console.log(resultArray)
            console.log("Rock wins scissors!")
            this.setState({
                playerScore: this.state.playerScore +1,
                message:"Rock wins scissors!"
              });
            break;
          case 'scissors', "paper":
            console.log(resultArray)
            console.log("Rock wins scissors!")
            this.setState({
                playerScore: this.state.playerScore +1,
                message:"Rock wins scissors!"
              });
            break;
          default:
              // code block
    }
}
    render() {
        let message = null; 

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
                {message}
                <div className="flex-container">
                <Options click={() => this.playerMoved("paper")} choice="Paper" />
                <Options click={() =>this.playerMoved("rock")} choice="Rock" />
                <Options click={() =>this.playerMoved("scissors")} choice="Scissors" /> 
                </div>
            </div>
        )}
}

export default New; 