"use strict";

// flag pf -> penguins  .  bf -> bear
let flag = "pf";

let counter = 9;

const squares = document.getElementsByClassName("square");

const squaresArray = Array.from(squares);

const a_1 = document.getElementById("a_1");
const a_2 = document.getElementById("a_2");
const a_3 = document.getElementById("a_3");
const b_1 = document.getElementById("b_1");
const b_2 = document.getElementById("b_2");
const b_3 = document.getElementById("b_3");
const c_1 = document.getElementById("c_1");
const c_2 = document.getElementById("c_2");
const c_3 = document.getElementById("c_3");

// New Game
const newgamebtn_display = document.getElementById("newgame-btn");
const newgamebtn = document.getElementById("btn90");


//win or Lose
const line1 = JudgLine(squaresArray,["a_1","a_2","a_3"]);
const line2 = JudgLine(squaresArray,["b_1","b_2","b_3"]);
const line3 = JudgLine(squaresArray,["c_1","c_2","c_3"]);
const line4 = JudgLine(squaresArray,["a_1","b_1","c_1"]);
const line5 = JudgLine(squaresArray,["a_2","b_2","c_2"]);
const line6 = JudgLine(squaresArray,["a_3","b_3","c_3"]);
const line7 = JudgLine(squaresArray,["a_1","b_2","c_3"]);
const line8 = JudgLine(squaresArray,["a_3","b_2","c_1"]);

const lineArray = [line1,line2,line3,line4,line5,line6,line7,line8];
let winnningLine = null;

function JudgLine(targetArray,idArray){
    return targetArray.filter(function(e){
        return(e.id === idArray[0] || e.id === idArray[1] || e.id === idArray[2]);
    });
}


const msgtxt1 = `<p class = "image"> <img src = "img/penguins.jpg" width=91px height=91px></p><p class="text animate__animated animate__zoomInLeft">コーディ!your turn!</p>`;
const msgtxt2 = `<p class = "image"> <img src = "img/whitebear.jpg" width=91px height=91px></p><p class="text animate__animated animate__zoomInRight">メイ!your turn! </p>`;
const msgtxt3 = `<p class = "image"> <img src = "img/penguins.jpg" width=91px height=91px></p><p class="text animate__animated animate__lightSpeedInRight">コーディ Win!</p>`;
const msgtxt4 = `<p class = "image"> <img src = "img/whitebear.jpg" width=91px height=91px></p><p class="text animate__animated animate__lightSpeedInLeft">メイ!win!</p>`;
const msgtxt5 = `<p class = "image"> <img src = "img/hakin.jpg" width=108px height=108px></p><p class="text animate__bounceIn">Oh!it's Draw!</p>`;

let gameSound = ["sound/click_sound1.mp3","sound/click_sound2.mp3","sound/codywin.mp3","sound/maywin.mp3","sound/draw_sound.mp3"];

window.addEventListener("DOMContentLoaded",
function(){
    setMessage("pen-turn");
},false
);

a_1.addEventListener("click",() =>{
    isSelect(a_1);
});

a_2.addEventListener("click",() =>{
    isSelect(a_2);
});

a_3.addEventListener("click",() =>{
    isSelect(a_3);
});

b_1.addEventListener("click",() =>{
    isSelect(b_1);
});

b_2.addEventListener("click",() =>{
    isSelect(b_2);
});

b_3.addEventListener("click",() =>{
    isSelect(b_3);
});

c_1.addEventListener("click",() =>{
    isSelect(c_1);
});

c_2.addEventListener("click",() =>{
    isSelect(c_2);
});

c_3.addEventListener("click",() =>{
    isSelect(c_3);
});

function isSelect(selectSquare){

    if(flag === "pf"){

        let music = new Audio(gameSound[0]);
        music.currentTime = 0;
        music.play();

        selectSquare.classList.add("js-pen-checked");
        selectSquare.classList.add("js-unclickable");
        if(isWinner("penguins")){
            setMessage("pen-win");
            gameOver("penguins");
            return "pen-turn";
        }
        setMessage("bear-turn");
        flag = "bf";
    }else{
        let music = new Audio(gameSound[1]);
        music.currentTime = 0;
        music.play();

        selectSquare.classList.add("js-bear-checked");
        selectSquare.classList.add("js-unclickable");
        if(isWinner("bear")){
            setMessage("bear-win");
            gameOver("bear");
            return "bear-turn";
        }
        setMessage("pen-turn");
        flag = "pf";
    }
        counter --;

        if(counter === 0){
            setMessage("draw");
            gameOver("draw");
    }
}

function setMessage(msgtext){
    var massagetext = document.getElementById("msgtext");
    switch(msgtext){
        case "pen-turn" :
        massagetext.innerHTML = msgtxt1;
        break;
        case "bear-turn" :
        massagetext.innerHTML = msgtxt2;
        break;
        case "pen-win":
        massagetext.innerHTML = msgtxt3;
        break;
        case "bear-win":
        massagetext.innerHTML = msgtxt4;
        break;
        case "draw":
        massagetext.innerHTML = msgtxt5;
        break;
        default :
        massagetext.innerHTML = msgtxt1;
    }
}


function isWinner(symbol){
    const result = lineArray.some(function(line){
        const subResult = line.every(function(square){
            if(symbol === "penguins"){
                return square.classList.contains("js-pen-checked");
            }
            if(symbol === "bear"){
                return square.classList.contains("js-bear-checked");
            }
        });

        if(subResult){winnningLine = line}
        return subResult;
    });
    return result;
}

function gameOver(status){

    let w_sound;
    switch(status){
        case "penguins":
            w_sound = gameSound[2];
            break;
        case "bear":
            w_sound = gameSound[3];
            break;
        case "draw":
            w_sound = gameSound[4];
            break;
    }

    let music = new Audio(w_sound);
    music.currentTime = 0;
    music.play();


    squaresArray.forEach(function(square){
        square.classList.add("js-unclickable");
    });

    //display NewGame button:display
    newgamebtn_display.classList.remove("js-hidden");

    if(status === "penguins"){
        if(winnningLine){
            winnningLine.forEach(function(square){
                square.classList.add("js-pen_highLight");
            });
        }
        $(document).snowfall({
            flakeColor : "rgb(255,240,245)",
            maxSpeed : 3,
            minSpeed : 1,
            maxSize : 20,
            minSize : 10,
            round : true
        });
    }else if (status === "bear"){
        if(winnningLine){
            winnningLine.forEach(function(square){
                square.classList.add("js-bear_highLight");
        });
        $(document).snowfall({
            flakeColor : "rgb(175,238,238)",
            maxSpeed : 3,
            minSpeed : 1,
            maxSize : 20,
            minSize : 10,
            round : true
        });
     }
    }
}


newgamebtn.addEventListener("click",() =>{
   flag = "pf";
   counter = 9;
   winnningLine = null;
   squaresArray.forEach(function(square){
    square.classList.remove("js-pen-checked");
    square.classList.remove("js-bear-checked");
    square.classList.remove("js-unclickable");
    square.classList.remove("js-pen_highLight");
    square.classList.remove("js-bear_highLight");
   });
   setMessage("pen-turn");
   newgamebtn_display.classList.add("js-hidden");
   $(document).snowfall("clear");
});
