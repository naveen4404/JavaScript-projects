let number=Math.trunc(Math.random()*20)+1;
let score=20;
let highScore=0;
document.querySelector('.check').addEventListener('click',
    function(){
        const guessed=+(document.querySelector('.guess-area').value);
        if(!guessed){
            document.querySelector('.result-area').textContent="⛔ No Number!"
        }
        else if(guessed<0 || guessed>20){
            document.querySelector('.result-area').textContent="🚫 Select valid number";
        }
        else if(guessed === number){
            document.querySelector('.result-area').textContent="🎉 Correct Number!";
            document.querySelector('body').style.backgroundColor='#60b347';
            document.querySelector('.number-box').style.width='120px';
            document.querySelector('.number-box').style.color='black';
            document.querySelector('.number-box').textContent=number;
            if(score>highScore){
            highScore=score
            document.querySelector('.high-score').textContent=highScore;
        }

        }
        else{
            const message=(guessed>number) ? '📈Too High' : '📉Too Low'
            if(score>1){
            document.querySelector('.result-area').textContent=message;
            score--;
            document.querySelector('.current-score').textContent=score;
            }
            else{
                if(score){
                document.querySelector('.result-area').textContent='😑Lost the game';
                score--;
                document.querySelector('.current-score').textContent=score;}

            }
            
        }
        
    }
   
);
document.querySelector('.again').addEventListener('click',
    function(){
        score=20;
        document.querySelector('.number-box').textContent="?";
        document.querySelector('.current-score').textContent=score;
        number=Math.trunc(Math.random()*20)+1;
        document.querySelector('.result-area').textContent="Start Guessing...";
        document.querySelector('.guess-area').value='';
        document.querySelector('body').style.backgroundColor='#222';
        document.querySelector('.number-box').style.width='100px';
        document.querySelector('.number-box').style.color='white';
    }
);
