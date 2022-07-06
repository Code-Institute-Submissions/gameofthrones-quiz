// List of questions for the quiz

const questions = [
    {
        question: "What is the seat of house Tully?",
        answers: [{
                text: 'Winterfell',
                correct: false
            },
            {
                text: 'Riverrun',
                correct: true
            },
            {
                text: 'Casterly Rock',
                correct: false
            },
            {
                text: 'The Eyrie',
                correct: false
            },

        ]
    },
    {
        question: "What was the sword given to Brienne named?",
        answers: [{
                text: 'Ice',
                correct: false
            },
            {
                text: 'Heartsbane',
                correct: false
            },
            {
                text: 'Oathkeeper',
                correct: true
            },
            {
                text: 'Lady Forlorn',
                correct: false
            },

        ]
    },
    {
        question: "What are the words of house Baratheon?",
        answers: [{
                text: 'Winter is Coming',
                correct: false
            },
            {
                text: 'Unbound, Unbent, Unbroken',
                correct: false
            },
            {
                text: 'We Do Not Sow',
                correct: false
            },
            {
                text: 'Ours Is The Fury',
                correct: true
            },

        ]
    },
    {
        question: "What kingdom does house Greyjoy rule over?",
        answers: [{
                text: 'The North',
                correct: false
            },
            {
                text: 'The Riverlands',
                correct: false
            },
            {
                text: 'Dorne',
                correct: false
            },
            {
                text: 'The Iron Islands',
                correct: true
            },

        ]
    },
    {
        question: "What was the monicker given to Lyonel Baratheon?",
        answers: [{
                text: 'The Mountain',
                correct: false
            },
            {
                text: 'The Laughing Storm',
                correct: true
            },
            {
                text: 'The Hound',
                correct: false
            },
            {
                text: 'The Kingslayer',
                correct: false
            },

        ]
    },
    {
        question: "Which kingsguard was called The Sword Of The Morning?",
        answers: [{
                text: 'Arthur Dayne',
                correct: true
            },
            {
                text: 'Gerold Hightower',
                correct: true
            },
            {
                text: 'Barristan Selmy',
                correct: false
            },
            {
                text: 'Lewyn Martell',
                correct: false
            },

        ]
    }
]

/**
 * Create variables for the HTML elements
 */

 const beginButton = document.getElementById('begin-btn');
 const nextButton = document.getElementById('next-btn');
 const answerButtonsElement = document.getElementById('answer-btns');
 const questionElement = document.getElementById('question');
 const questionContainerElement = document.getElementById('quiz-container');

 let randomQuestions, currentQuestionIndex;

 /**
 * Start the game
 */

beginButton.addEventListener('click', beginGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

function beginGame() {
    console.log('Started');
    beginButton.classList.add('hide');
    randomQuestions = questions.sort(() => Math.random() - .5);
    currentQuestionsIndex = 0;
    questionContainerElement.classList.remove('hide');
    setNextQuestion();
}

function showQuestion(question) {
    questionElement.innerText = question.question;
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer);
        answerButtonsElement.appendChild(button);
    })
}