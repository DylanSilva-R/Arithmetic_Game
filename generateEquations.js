
let initialTime = sessionStorage.getItem('timeS');
let operations = JSON.parse(sessionStorage.getItem('operationsArray'));
let operationCount = sessionStorage.getItem('amountOfOperations');
let maxVal = parseInt(sessionStorage.getItem('maximum'));
let minVal = parseInt(sessionStorage.getItem('minimum'));

let equations = new Array(initialTime * 60);
let equationSize = equations.length;
let answers = [];
let userAnswer = [];
const equationId = document.getElementById("Equations");
const answerInput = document.getElementById("answer");
const timeId = document.getElementById("Timer");


// First, there needs to be a function that generates one equation at the start of the script.
// Second, eventListener will do the rest of the work.
// Third, 

let minutes = Math.floor(initialTime/60);
let seconds = initialTime % 60;


let timePassed = 0;
let timeLeft = initialTime;

let timerInterval;


if(seconds < 10)
{
    seconds = `0${seconds}`;
}

document.getElementById("Timer").innerHTML = minutes + ":" + seconds;


function generateAdditionEq()
{
    let firstInt = Math.floor(Math.random() * (maxVal - minVal) + minVal);
    let secondInt = Math.floor(Math.random() * (maxVal - minVal) + minVal);
    
    let answer = firstInt + secondInt;
    answers.push(answer);
    let equation = firstInt + " + " + secondInt + " = ";
    equationId.innerHTML = equation;
}

function generateSubtractionEq()
{
    let firstInt = Math.floor(Math.random() * (maxVal - minVal) + minVal);
    let secondInt = Math.floor(Math.random() * (maxVal - minVal) + minVal);
    
    let answer = firstInt - secondInt;
    answers.push(answer);
    let equation = firstInt + " - " + secondInt + " = ";
    equationId.innerHTML = equation;
}

function generateMultiplicationEq()
{
    let firstInt = Math.floor(Math.random() * (maxVal - minVal) + minVal);
    let secondInt = Math.floor(Math.random() * (maxVal - minVal) + minVal);
    
    let answer = firstInt * secondInt;
    answers.push(answer);
    let equation = firstInt + " * " + secondInt + " = ";
    equationId.innerHTML = equation;
}

function generateDivisionEq()
{
    let firstInt = Math.floor(Math.random() * (maxVal - minVal) + minVal);
    let secondInt = Math.floor(Math.random() * (maxVal - minVal) + minVal);
    
    let answer = Math.round(firstInt / secondInt);
    answers.push(answer);
    let equation = firstInt + " / " + secondInt + " = ";
    equationId.innerHTML = equation;
}

function chooseOperations()
{
    let randomChoice = Math.floor(Math.random() * (operationCount) + operationCount);
    let choice = operations[randomChoice];

    if(choice == "Addition")
    {
        generateAdditionEq();
    }else if(choice == "Subtraction")
    {
        generateSubtractionEq();
    }else if(choice == "Division")
    {
        generateDivisionEq();
    }else if(choice == "Multiplication")
    {
        generateMultiplicationEq();
    }
}

function checkAnswers()
{
    let countRight = 0;
    let size = answers.length;
    let getScoreText = document.getElementById("scoreText");

    for(let i = 0; i < size; i++)
    {
        if(answers[i] === parseInt(userAnswer[i]))
        {
            countRight+=1;
        }
    }

    let score = (100 * (countRight / size)).toFixed(2);
    getScoreText.innerHTML = "Score: " + countRight + "/" + size + " (%" + score + ")";
}

function formatTime(time)
{
    const minutes = Math.floor(time/60);
    let seconds = time % 60;

    if(seconds < 10)
    {
        seconds = `0${seconds}`;
    }

    if(`${minutes}:${seconds}` === "0:00")
    {
        showScore();
        disableAnswerInput();
        return "Times up!";
    }

    return `${minutes}:${seconds}`;
}

function startTimer()
{
    timerInterval = setInterval(() =>
    {
        timePassed = timePassed += 1;
        timeLeft = initialTime - timePassed;

        timeId.innerHTML = formatTime(timeLeft);

        if(timeId.innerHTML === "Times up!")
        {
            checkAnswers();
            disableAnswerInput();
            clearInterval(timerInterval);
        }
    }, 1000);
}

function showScore()
{
    var x = document.getElementById("score");

    if (x.style.display === "none")
    {
      x.style.display = "block";
    }else
    {
      x.style.display = "none";
    }
}

function disableAnswerInput()
{
    document.getElementById("answer").disabled = true;
}

answerInput.addEventListener("keypress", function(event)
{
    if(event.key == 'Enter')
    {
        chooseOperations();
        adjustEquationContainerForNewEquation();
        let getUserAnswer = answerInput.value;
        userAnswer.push(getUserAnswer);
        answerInput.value = '';
    }
});


function adjustEquationContainerForNewEquation()
{
    /**
     * What's the purpose of making this function?
     *      -Fitting the main parent container around the equation div and the answer div.
     * How will it work?
     *      -
     */
    const container = document.getElementById('equationContainer');
    const equationElement = document.getElementById('Equations');
    const answerElement = document.getElementById('answer');

    console.log("container width: " + container.offsetWidth);
    console.log("Equation width: " +  equationElement.offsetWidth);
    console.log("Answer width: " + answerElement.offsetWidth);

    console.log("New container: " + (answerElement.offsetWidth + equationElement.offsetWidth))

    // Generate a random equation
    // Update the content and adjust container width


    if(equationElement.offsetWidth > container.offsetWidth)
    {
        container.style.width = orginialWidth

    }else
    {
        const orginialWidth = container.offsetWidth + equationElement.offsetWidth;
        container.style.width = orginialWidth - (equationElement.offsetWidth + 'px');
    }
}

adjustEquationContainerForNewEquation();
startTimer();
chooseOperations();
