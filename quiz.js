// timer
var time = document.getElementById('time');
var secondsLeft = 60;
var isWin = false;

// score
var score;
var userInput = document.getElementById('username');


// quiz elements
var start = document.getElementById('begin-screen');
var section = document.getElementById('question-section')

// quiz questions
var questions = [
    {
        title: 'Commonly used data types DO NOT include which of the following?',
        choices: ['strings', 'booleans', 'alerts', 'numbers'],
        answer: 'alerts',
    },
    {
        title: 'the condition in an if/ else statement is enclosed in a … ?',
        choices: ['quotes', 'curly brackets', 'parenthesis', 'square brackets'],
        answer: 'parenthesis',
    },
    {
        title: 'arrays in JS can be used to store … ?',
        choices: ['numbers & strings', 'other arrays', 'booleans', 'all of the above'],
        answer: 'all of the above',
    },
    {
        title: 'string values must be enclosed in … when being assigned to a variable.',
        choices: ['commas', 'curly brackets', 'quotes', 'parenthesis'],
        answer: 'quotes',
    },
    {
        title: 'a useful tool used during the development and debugging for printing content to the debugger is … ?',
        choices: ['javascripts', 'terminal/bash', 'for loops', 'console.log'],
        answer: 'console.log',
    }
];

var index = 0;

function displayNextQuestion(){
    var h2 = document.getElementById('qs');
    var button1 = document.getElementById('button1');
    var button2 = document.getElementById('button2');
    var button3 = document.getElementById('button3');
    var button4 = document.getElementById('button4');
    h2.textContent = questions[index].title;
    button1.textContent = questions[index].choices[0];
    button2.textContent = questions[index].choices[1];
    button3.textContent = questions[index].choices[2];
    button4.textContent = questions[index].choices[3];
    button1.addEventListener('click', checkAnswer)
    button2.addEventListener('click', checkAnswer)
    button3.addEventListener('click', checkAnswer)
    button4.addEventListener('click', checkAnswer)
}

// event listener to initialize game and change screen
document.getElementById('start-game').addEventListener('click', function(){
    displayNextQuestion();
    this.style.display = 'none';
    start.style.display = 'none';
    document.querySelector('#answers').style.display = 'block';

    // timer funtion 
    function setTime(){
        var timer = setInterval(function(){
            secondsLeft--;
            time.textContent = `Time: ${secondsLeft}`;
            if (isWin && (secondsLeft > 0)){
                clearInterval(timer)
            }
            if (secondsLeft === 0) {
                clearInterval(timer);
            } 
        }, 1000);
    } 
    setTime();
});

// check if button click is correct & advance if so
function checkAnswer(event){
    if (event.target.textContent === questions[4].answer){
        document.querySelector('#question-section').style.display = 'none';
        document.querySelector('#score-input').style.display = 'block';
        isWin = true;
        score = secondsLeft;
        return;
    }
    if (event.target.textContent === questions[index].answer){
        index++;
        displayNextQuestion();
    } else {
        secondsLeft -= 15;
    }
}

// store user scores in local storage

document.getElementById('submit-btn').addEventListener('click', function(event){
        event.preventDefault();
        var userScore = {
            name: userInput.value,
            score: score,
        }
        var userName = document.getElementById('username').value;
        localStorage.setItem('score', JSON.stringify(userScore));
        document.querySelector('#score-input').style.display = 'none';
        document.querySelector('#scoreboard').style.display = 'block';
        renderScoreboard();
})

function renderScoreboard () {
    var scoreValue = JSON.parse(localStorage.getItem('userScore'));
}