"use strict";

window.addEventListener("DOMContentLoaded",
    function(){
        let popMsg = "<<<<<<<<やりますねー！要来力（悲）>>>>>>>";
        window.alert(popMsg);
        $("header").textillate({
            loop: false, // ループのオンオフ
            minDisplayTime: 2000, // テキストが置き換えられるまでの表示時間
            initialDelay: 2000, // 遅延時間
            autoStart: true, // アニメーションを自動的にスタート
            in: { // フェードインのエフェクトの詳細設定
            effect: "fadeInLeftBig", // エフェクトの名前(animate.css参照)
            delayScale: 1.5, // 遅延時間の指数
            delay: 50, // 文字ごとの遅延時間
            sync: false, // trueはアニメーションをすべての文字に同時に適用
            shuffle: true // trueは文字を順番にではなく、ランダムに
            }
            });
            // おみくじボタン(id="btn1") ボヤァと表示させる
            $(function(){
            ScrollReveal().reveal("#btn1", { duration: 9000 });
            });
    },false

    );


    const btn1 = document.getElementById("btn1");
    btn1.addEventListener("click",
    function(){
            /* let n = Math.floor(Math.random() * 5);
    
            switch(n){
                case 0:
                    btn1.textContent ="哼..哼";
                    btn1.style.color ="#b0e0e6";
                    btn1.style.fontSize = "70px";
                    break;
                case 1:
                    btn1.textContent ="哼啊啊啊啊";
                    btn1.style.color ="#ff00ff";
                    btn1.style.fontSize = "50px";
                    break;
                case 2:
                    btn1.textContent ="哼..哼啊啊啊";
                    btn1.style.color ="#ff0000";
                    btn1.style.fontSize = "40px";
                    break;
                case 3:
                    btn1.textContent ="哼哼啊啊啊..哼";
                    btn1.style.color ="#00008b";
                    btn1.style.fontSize = "35px";
                    break;
                case 4:
                    btn1.textContent ="要来力（悲）";
                    btn1.style.color ="#000000";
                    btn1.style.fontSize = "15px";
                    break;
              }*/
              btn1.style.transition ="1s";
              let resultText = ["大吉","吉","中吉","小吉","凶"];
              let resultColor =["#b0e0e6","#ff00ff","#ff0000","#00008b","#000000"];
              let resultFontSize =["55px","45px","40px","35px","30px",];
              let n = Math.floor(Math.random() * resultText.length);
              btn1.textContent = resultText[n];
              btn1.style.color = resultColor[n];
              btn1.style.fontSize = resultFontSize[n];
        // jQueryのsnowfall
        $(document).snowfall("clear");
        $(document).ready(function(){
        $(document).snowfall({
        maxSpeed : 3, // 最大速度
        minSpeed : 1, // 最小速度
        maxSize : 70, // 最大サイズ
        minSize : 20, // 最小サイズ
        image : 'img/YANO.gif'
        });
        });
        },false
    );