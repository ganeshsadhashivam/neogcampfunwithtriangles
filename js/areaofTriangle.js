let input = document.querySelectorAll(".base-input");


let button = document.querySelector("#area-btn");

let output = document.querySelector("#output");

button.addEventListener("click", calculateAreaOfTriangle)



function calculateAreaOfTriangle() {

    var area = 1 / 2 * (input[0].value * input[1].value);
    output.innerText = "The Area of Triangle is " + area + " cm2"
}