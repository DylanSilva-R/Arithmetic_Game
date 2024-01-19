/*
* problems
* 1) Figure out how to create a time interval for user input for set of equations.
*   a) For now create the website without a timer.
*/

/*
* Difference between let and var.
    Let = are not global and can be only be accessed within {}
    var = are global variables.
*/


//let userName = null;
//let userPassword = null;
/*User name and password data will be handled in the future

 What will I do with that data?
   . Show the user how well they did compared to other users.
   . Show the user how well they did compared to their past attempts.
   ...

*/ 


// Hypothesis: When a you switch from one html file to another, the same js file will be reseted.

let firstName = sessionStorage.getItem('firstName');
let lastName = sessionStorage.getItem('lastName');
var maxVal = null;
var minVal = null;
var time = null;
var operations = [];

function checkCheckBoxes() // I don't like this function, fix later.
{
    var additionOperationCheck = document.getElementById("additionCheckBox");
    var subtractionOperationCheck = document.getElementById("subtractionCheckBox");
    var multiplicationOperationCheck = document.getElementById("multiplicationCheckBox");
    var divisionOperationCheck = document.getElementById("divisionCheckBox");

    const operationCheckBoxes = [additionOperationCheck, subtractionOperationCheck, multiplicationOperationCheck, divisionOperationCheck];
    var length = operationCheckBoxes.length;
    var checkBoxesExist = 0;

    for(let i = 0; i < length; i++)
    {
        if(i == 0 && (operationCheckBoxes[i].checked == true))
        {
            operations.push("Addition");
            checkBoxesExist++;
            console.log(checkBoxesExist);
        }else if(i == 1 && (operationCheckBoxes[i].checked == true))
        {
            operations.push("Subtraction");
            checkBoxesExist++;
            console.log(checkBoxesExist);
        }else if(i == 2 && (operationCheckBoxes[i].checked == true))
        {
            operations.push("Multiplication");
            checkBoxesExist++;
            console.log(checkBoxesExist);
        }else if(i == 3 && (operationCheckBoxes[i].checked == true))
        {
            operations.push("Division");
            checkBoxesExist++;
            console.log(checkBoxesExist);
        }
    }

    if(checkBoxesExist > 0)
    {
        sessionStorage.setItem('operationsArray', JSON.stringify(operations));
        sessionStorage.setItem('amountOfOperations', checkBoxesExist);
        showMinMaxInput();
    }else
    {
        alert("You didn't choose anything. Like, bro, do you want to play or not?");
    }

}

function showMinMaxInput() 
{
    var x = document.getElementById("maxAndMin");

    if (x.style.display === "none")
    {
      x.style.display = "block";
    }else
    {
      x.style.display = "none";
    }
}

function showOrHideTimeOption(showOrHide)
{
    var x = document.getElementById("timeOptions");

    if(showOrHide === "show")
    {
        x.style.display = "block";
    }else if(showOrHide === "hide")
    {
        x.style.display = "none";
    }
}

function checkMinMaxAndCheck()
{

    maxVal = parseInt(document.getElementById("max").value, 10);
    minVal = parseInt(document.getElementById("min").value, 10);

    var errorHtmlMessage = document.getElementById("errorMessageOne");

    try
    {
        if(maxVal < minVal)
        {
            showOrHideTimeOption("hide");
            alert("Your max value is less than your minimum value. Fix that you idiot.");
        }else if(minVal > maxVal)
        {
            showOrHideTimeOption("hide");
            alert("Your minimum value is greater than your maximum value. Please change that becuase that is completely illogical.");
        }else if(minVal === maxVal)
        {
            showOrHideTimeOption("hide");
            alert("Your minimum and maximum value are equal. Wtf are you doing buddy?");
        }else if(isNaN(maxVal) || isNaN(minVal))
        {
            showOrHideTimeOption("hide");
            alert("Your minimum value or maximum value is empty. What are you doing?");
        }else if(((minVal + 1  == maxVal)))
        {
            alert("There are no values in between your minimum and maximum value. I will only generate whole numbers.");
        }else
        {
            sessionStorage.setItem('maximum', maxVal);
            sessionStorage.setItem('minimum', minVal);
            showOrHideTimeOption("show");
        }
    }catch(err)
    {
        document.getElementById("errorMessageOne").innerHTML = err.message;
    }

}

function getTimeData(timeInSec) // Store this data in local storage
{
    sessionStorage.setItem('timeS', timeInSec);
}

//Below is the complete terminal based script.
/*

let gameMode = null;


function userData()
{
    firstName = prompt('What is your first name? ');
    lastName = prompt('What is your last name? ');
}


userData();
console.log("Welcome " + firstName + " to ...");
console.log("---------------------------");
console.log("Super Ultra Arithmetic!!!!");
console.log("---------------------------")

console.log("Which gameMode would you like to play?");
console.log("A) Addition");
console.log("B) Subtraction");
console.log("C) Multiplication");
console.log("D) Division");


while(gameMode == null)
{
    let temp = prompt("What are you going to pick?");
    
    if(temp == "Addition" || temp == "A" || temp == "a")
    {
        gameMode = "Addition";
    }else if(temp == "Subtraction" || temp == "B" || temp == "b")
    {
        gameMode = "Subtraction";

    }else if(temp == "Multiplication" || temp == "C" || temp == "c")
    {
        gameMode = "Multiplication";

    }else if(temp == "Division" || temp == "D" || temp == "d") 
    {
        gameMode = "Division";
    }else
    {
        console.log("Your choice isn't valid. Please tryu again");
    }

}

//This is where the application gets interesting.
/*
This is the question I asked myself: How do I generate random equations for the user to solve?
Answer: 
1) Creata a data structure
2) Generate two random values (depending on what the user wants) and calculate the output between them.
3) Then store the values.
4) After generating random equations and answers for the equations. Store them and present them to the user.

I also asked myself another question: What's the best data structure for this application?
Answer:
1) The application won't need random access of the data structure since it will be going in sequential order.
    Options:
        a) linked list
        b) queue
        c) stack
        d) or a simple array
 New questions: How will I determine how many equations will be calculated?       
Answer: Let's say one equation takes 1 second to solve.




/*
console.log("Range of values");
var min = prompt("What would you like your minimum value to be?");
var max = prompt("What would you like your maximum value to be?");

var equations = [];
var answers = [];

console.log("For how long do you want to solve equations for?")
console.log("a) 1 minute");
console.log("b) 5 minutes");
console.log("c) 10 minutes");

var time = null;

while(time == null)
{
    let temp = prompt("What's your choice? ");
    if(temp == "a" || temp == "A" || temp == "1 minute")
    {
        time = 60; //seconds
    }else if(temp == "b" || temp == "B"|| temp == "5 minutes")
    {
        time = 300; //seconds
    }else if(temp == "c" || temp == "C"|| temp == "10 minutes")
    {
        time = 600; //seconds
    }else
    {
        console.log("Your choice isn't valid. Please try again.");
    }
}


function Addition(min, max, index)
{
    var valueOne = Math.floor(Math.random() * (max - min + 1) ) + min;
    var valueTwo = Math.floor(Math.random() * (max - min + 1) ) + min;
    let equation = valueOne.toString() + " + " + valueTwo.toString();
    equations[index] = (index + 1) + ") " + equation;
    var answer = valueOne + valueTwo;
    answers[index] = answer;
}

function Subtraction(min, max)
{
    var valueOne = Math.floor(Math.random() * (max - min + 1) ) + min;
    var valueTwo = Math.floor(Math.random() * (max - min + 1) ) + min;
    let equation = valueOne.toString() + " - " + valueTwo.toString();
    equations[index] = equation;
    var answer = valueOne - valueTwo;
    answers[index] = answer;
}

function Multiplication(min, max)
{
    var valueOne = Math.floor(Math.random() * (max - min + 1) ) + min;
    var valueTwo = Math.floor(Math.random() * (max - min + 1) ) + min;
    let equation = valueOne.toString() + " * " + valueTwo.toString();
    equations[index] = equation;
    var answer = valueOne * valueTwo;
    answers[index] = answer;

}

function Division(min, max)
{
    var valueOne = Math.floor(Math.random() * (max - min + 1) ) + min;
    var valueTwo = Math.floor(Math.random() * (max - min + 1) ) + min;
    let equation = valueOne.toString() + " / " + valueTwo.toString();
    equations[index] = equation;
    var answer = valueOne / valueTwo;
    answers[index] = answer;

}

//Create another function that can create a mix of arithematic expressions. This will rely on what the user wants. For example, additiona and subtraction problems only.


for(let i = 0; i < time; i++)
{
    if(gameMode == "Addition")
    {
        Addition(parseInt(min),parseInt(max), i);
    }else if(gameMode == "Subtraction")
    {
        Subtraction(parseInt(min),parseInt(max), i)
    }else if(gameMode == "Multiplication")
    {
        Multiplication(parseInt(min),parseInt(max), i);
    }else if(gameMode == "Division")
    {
        Division(parseInt(min),parseInt(max), i);
    }
}

console.log("Time for you to answer your arithmetic expressions.");

//Figure out a way to time the user.


var score = 0;
var secondsToMs = time * 1000;


function answerQuestions()
{
    try
    {
        for(var track = 0; track < time; track++)
        {
            let temp = equations[track];
            var userAnswer = prompt(temp + " = ?");
            parseInt(userAnswer);
            
            if(userAnswer == answers[track])
            {
                score+=1;
            }
        }
        console.log(firstName + " you got " + score + "/" + track + " right!");
    }catch(ArrayIndexOutOfBoundsException)
    {
        console.log("You managed to solve each problem within a second. Mad sus.")
    }
}

answerQuestions();
*/