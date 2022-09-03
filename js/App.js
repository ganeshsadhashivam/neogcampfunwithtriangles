var input = document.querySelectorAll(".input-text");

var output = document.querySelector("#output");

var clickButton = document.querySelector("#button");

clickButton.addEventListener("click", isTriangle);


function sumOfAngles(angle1, angle2, angle3) {

    const values = angle1 + angle2 + angle3;

    return values;
}

function isTriangle() {

    const valuesOfAngles = sumOfAngles((Number(input[0].value)), (Number(input[1].value)), (
        Number(input[2].value)));
    console.log(valuesOfAngles);
    if (valuesOfAngles === 180) {
        output.innerText = "yes, The angle is triangle";
    }
    else {
        output.innerText = "oh The angle doesnt form triangle";
    }

}