const sides = document.querySelectorAll(".side-input");

const hypotenuseBtn = document.querySelector("#hypotenuse-btn");

const output = document.querySelector("#output");



hypotenuseBtn.addEventListener("click", calculateHypotenuse);


function calculateHypotenuse() {


    var sumSquare = sumOfSquares(sides[0].value, sides[1].value);



    var hypotenuse = Math.sqrt(sumSquare);


    output.innerText = "The Length of hypotenuse is " + hypotenuse;
}


function sumOfSquares(a, b) {

    var sumOfSquare = a * a + b * b;

    return sumOfSquare;
}