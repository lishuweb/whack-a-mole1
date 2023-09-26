let score = 0;
let scoreDisplay = document.getElementById('score');

let holes = document.getElementsByClassName('hole');

const timeEl = document.querySelector('#time');
let time = 60;


let hello = setInterval(function() 
{
    let index = Math.floor(Math.random() * holes.length);
    holes[index].classList.toggle('mole');
    time--;
    timeEl.innerHTML = time;
    if (time === 0) 
    { // time's up
    //     setTimeout(() => {
        
    //     document.location.href = "home.html";
    //     alert('Game Done! Go back to home page to start again.');
    // }, 100);
    //     time = 0;
        document.location.href = "home.html";
        console.log("hello");
    }
}, 300);

let gameArea = document.getElementById('whack-a-mole');
gameArea.addEventListener('click', function(clickEvent) 
{
    if (clickEvent.target.matches('.mole')) 
    {
        clickEvent.target.classList.remove('mole');
        score++;
        scoreDisplay.innerText = score;
        
        if(score > 50)
        {
            alert('Your score is: ' +score);
            location.reload();
        }
    }
});

