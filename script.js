var wins = 0
var losses = 0
function playGame(){
    var myChoice = prompt('please enter R P or S')
    var compChoice = Math.floor(Math.random() * 3)

    if (myChoice != 'R' && myChoice != 'P' && myChoice != 'S'){
        alert('not a valid entry')
        playGame()
    }

    if(myChoice === 'R'){
        if(compChoice === 0){
            alert('computer chose R. Tie game you have won '+wins+' times and you have lost '+losses+' times.')
            if(confirm('play again?')){
                playGame()
            }else{
                alert('thanks for playing!')
            }
        }
        if(compChoice === 1){
            losses += 1
            alert('computer chose P, you lose. you have won '+wins+' times and you have lost '+losses+' times.')
            if(confirm('play again?')){
                playGame()
            }else{
                alert('thanks for playing!')
            }
        }
        if(compChoice === 2){
            wins += 1
            alert('computer chose S, you win! you have won '+wins+' times and you have lost '+losses+' times.')
            if(confirm('play again?')){
                playGame()
            }else{
                alert('thanks for playing!')
            }
        }
    }
    if(myChoice === 'P'){
        if(compChoice === 0){
            wins += 1
            alert('computer chose R. You win! you have won '+wins+' times and you have lost '+losses+' times.')
            if(confirm('play again?')){
                playGame()
            }else{
                alert('thanks for playing!')
            }
        }
        if(compChoice === 1){
            alert('computer chose P, tie game. you have won '+wins+' times and you have lost '+losses+' times.')
            if(confirm('play again?')){
                playGame()
            }else{
                alert('thanks for playing!')
            }
        }
        if(compChoice === 2){
            losses += 1
            alert('computer chose S, you lose. you have won '+wins+' times and you have lost '+losses+' times.')
            if(confirm('play again?')){
                playGame()
            }else{
                alert('thanks for playing!')
            }
        }
    }
    if(myChoice === 'S'){
        if(compChoice === 0){
            losses += 1
            alert('computer chose R. You lose. you have won '+wins+' times and you have lost '+losses+' times.')
            if(confirm('play again?')){
                playGame()
            }else{
                alert('thanks for playing!')
            }
        }
        if(compChoice === 1){
            wins += 1
            alert('computer chose P, You win! you have won '+wins+' times and you have lost '+losses+' times.')
            if(confirm('play again?')){
                playGame()
            }else{
                alert('thanks for playing!')
            }
        }
        if(compChoice === 2){
            alert('computer chose S, tie game. you have won '+wins+' times and you have lost '+losses+' times.')
            if(confirm('play again?')){
                playGame()
            }else{
                alert('thanks for playing!')
            }
        }
    }
}

playGame()
