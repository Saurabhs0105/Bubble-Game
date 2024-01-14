let timer = 30;
let Score = 0;
let hitNum = 0;

function makeBubbles () {
    let bubbles = "";
    for (let i = 1; i <= 170; i++) {
        let rdnNum = Math.floor(Math.random() * 10);
    bubbles += `<div class="bubble">${rdnNum}</div>`; 
    }
    document.querySelector("#pbtm").innerHTML = bubbles;
}


function runTimer() {
    let timerInt = setInterval(function () {
        if(timer>0){
            timer--
            document.querySelector("#setTimer").textContent = timer ;
        }
        else {
            clearInterval(timerInt)
            document.querySelector("#pbtm").innerHTML =`<h1>Time Over...!<h1> 
            <button style=" cursor: pointer; border-radius: 10px; margin: 5px; padding: 3px; background-color:rgb(72,104, 72) ;">Start Again</button>  `;
           
        }

    },1000);
}


function getNewHit(){
    hitNum  = Math.floor(Math.random() * 10);
    document.querySelector("#hitNum").textContent = hitNum;
}


function increaseScore() {
    Score +=10;
    document.querySelector("#incScore").textContent = Score;
}

document.querySelector("#pbtm")
.addEventListener("click", function(dets) {
    let clickNum = Number(dets.target.innerText);

    if(clickNum === hitNum){
        increaseScore();
        makeBubbles();
        getNewHit();
    }
    else {
        document.querySelector("#pbtm").innerHTML =`<h1>Game Over! You Choose Wrong Hit Number</h1>
        <button style=" cursor: pointer; border-radius: 10px; margin: 5px; padding: 5px; background-color:rgb(72,104, 72) ;">Start Again</button>`;

     
        setTimeout(function() {
            makeBubbles();
            getNewHit();
            timer =30;
            document.querySelector("#setTimer").textContent = timer ;
            Score = 0;
            document.querySelector("#incScore").textContent = Score;
           
        }, 3000);
        


    }

})


getNewHit();

runTimer();

makeBubbles();