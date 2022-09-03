var quizform = document.querySelector(".quiz-form");


var button = document.querySelector("#btn-submit");


var output = document.querySelector("#output");




const correctAnswers = [
    "90°",
    "right angled",
    "one right angle",
    "12, 16, 20",
    "Equilateral triangle",
    "100°",
    "30°",
    "a + b + c",
    "no",
    "45°"
];

button.addEventListener("click", calculateScore)


function calculateScore() {


    var score = 0;
    var index = 0;
    const formResult = new FormData(quizform);

    //console.log(formResult);
    for (let value of formResult.values()) {



        if (value === correctAnswers[index]) {


            console.log(value, correctAnswers[index]);
            score = score + 1;
        }
        index = index + 1;
    }

    output.innerText = "your score is " + score;
}


