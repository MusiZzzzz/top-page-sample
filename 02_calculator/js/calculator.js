"use strict";

//***********************************//
//    ページ上の要素(Element)を参照    //    
//***********************************//

const elementSelect = document.getElementById("calcType");
const elementNum1 = document.getElementById("num1");
const elementNum2 = document.getElementById("num2");
const elementResult = document.getElementById("result");
const elementbtnEqual = document.getElementById("btnEqual")

//*********************************//
//         イベントを登録           //
//********************************//

elementSelect.addEventListener("change", E);
elementNum1.addEventListener("change", E);
elementNum2.addEventListener("change", E);

elementbtnEqual.addEventListener("click", update);

function update() {

    const result = calculate(
        Number(elementNum1.value),
        Number(elementNum2.value),
        elementSelect.value
    )

    elementResult.innerHTML = result;
}

function calculate(num1, num2, calcType) {
    let result;
    //計算の種類
    switch (calcType) {
        case "type-add":
            result = num1 + num2;
            break;
        case "type-substract":
            result = num1 - num2;
            break;
        case "type-multiply":
            result = num1 * num2;
            break;
        case "type-divide":
            result = num1 / num2;
            break;
    }
    return result;
}

function E() {
    elementResult.innerHTML = "";
}