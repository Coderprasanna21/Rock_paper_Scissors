const startBtn  = document.querySelector("#start");
const rockBtn =  document.querySelector("#rock");
const paperBtn =  document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");

function start()
{
    rockBtn.style.visibility ='visible';
    paperBtn.style.visibility ='visible';
    scissorsBtn.style.visibility ='visible';
    startBtn.style.visibility ='hidden';
}

clickedLeftHand =["<img src='rock.png' id='img1'>","<img src='paper.png' id='img1'>","<img src='scissors.png' id='img1'>"];

clickedRightHand =["<img src='rock.png' id='img2'>","<img src='paper.png' id='img2'>","<img src='scissors.png' id='img2'>"];


function play(position)
{
    document.getElementById("img1").style.animation="shakeleft 1s ease-in-out 4";
    document.getElementById("img2").style.animation="shakeright 1s ease-in-out 4";

    var random = Math.floor(Math.random()*3);
    setTimeout(() =>{
        document.getElementById("hand2").innerHTML = clickedRightHand[random];
        document.getElementById("hand1").innerHTML = clickedLeftHand[position];
    }, 3000);

    setTimeout(() => {
        if(position==random){
            alert("MATCH DRAW !!");
            window.location.reload();
        }
        else if(position==0 && random==2)
        {
            alert("WOW,YOU WIN !!")
            window.location.reload();
        }
        else if(position==1 && random==0)
        {
            alert("WOW,YOU WIN !! GOOD JOB!!");
            window.location.reload();
        }
        else if(position==2 && random==1)
        {
            alert("WOW YOU WIN THE MATCH!!");
            window.location.reload();
        }
        else
        {
            alert("OH COMPUTER WIN THE MATCH...");
            window.location.reload();
        }
    }, 3500);
}