// create quiz elements
var start = document.getElementById('begin-screen');

var div = document.createElement('div');
var h2 = document.createElement('h2');
var button1 = document.createElement('button');
var button2 = document.createElement('button');
var button3 = document.createElement('button');
var button4 = document.createElement('button');

div.appendChild(h2);
div.appendChild(button1);
div.appendChild(button2);
div.appendChild(button3);
div.appendChild(button4);

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
    document.body.appendChild(div);
});

function checkAnswer(event){
    if (event.target.textContent === questions[index].answer){
        index++;
        displayNextQuestion();
    }
}
