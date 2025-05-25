const dice=document.querySelector('.dice-display');
const roll=document.querySelector('.roll-dice');
const hold=document.querySelector('.hold-btn');
const playAgain=document.querySelector('.new-game');

let activePlayer,currentScore,highScores,state;


const init=function(){
        //Initializes the game

        activePlayer=0;
        currentScore=0;
        highScores=[0,0];
        state=true;
        dice.classList.add('hide-dice');
        document.querySelector(`.current-0`).textContent=currentScore;
        document.querySelector(`.current-1`).textContent=currentScore;
        document.querySelector(`.player-0`).classList.add('player-active');
        document.querySelector(`.player-1`).classList.remove('player-active');
        document.querySelector(`.score-0`).textContent=0;
        document.querySelector(`.score-1`).textContent=0;
        document.querySelector(`.player-0`).classList.remove('winner');
        document.querySelector(`.player-1`).classList.remove('winner');
};
init();
const switchPlayer=function(){
    currentScore=0; // currrent score set zero 
    document.querySelector(`.current-${activePlayer}`).textContent=currentScore;
    activePlayer= (activePlayer===0) ? 1 : 0; //switch execution
    document.querySelector(`.player-0`).classList.toggle('player-active'); //visual switching
    document.querySelector(`.player-1`).classList.toggle('player-active');
        
};
roll.addEventListener('click',function(){
    if(state){ 
        dice.classList.remove('hide-dice');
        const num=Math.trunc(Math.random()*6)+1; //[1,6]
        dice.src=`dice-${num}.png`;
        if(num!=1){
            currentScore+=num; //dice score added to the active player's current score
            document.querySelector(`.current-${activePlayer}`).textContent=currentScore;
        }
        else{
            // if dice score is 1 player is switched

            switchPlayer();
        }
    }        
});

hold.addEventListener('click',function(){
    if(state){ 
        // high scores are updated corresponding to the active player

        highScores[activePlayer]=highScores[activePlayer]+currentScore;
        document.querySelector(`.score-${activePlayer}`).textContent=highScores[activePlayer];
        if(highScores[activePlayer]>=53){
            //handles winning case
            state=false;
            currentScore=0;
            document.querySelector(`.current-${activePlayer}`).textContent='🥇';
            document.querySelector(`.player-${activePlayer}`).classList.toggle('winner');
            dice.classList.toggle('hide-dice');
            }
        else{
            
            switchPlayer();
        }
    }
    
});

playAgain.addEventListener('click',function(){
    init();
})