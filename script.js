// Variables to track quiz state
let currentQuestion = 0;
let correctAnswers = 0;
let score = 0;

// Sample questions array
const questions = [
    {
        question: "What does HTML stand for?",
        options: [
            { text: "Hyper Type Multi Language", isCorrect: false },
            { text: "Hyper Text Multiple Language", isCorrect: false },
            { text: "Hyper Text Markup Language", isCorrect: true },
            { text: "Home Text Multi Language", isCorrect: false }
        ]
    },
    {
        question: "What is the capital of France?",
        options: [
            { text: "Paris", isCorrect: true },
            { text: "London", isCorrect: false },
            { text: "Berlin", isCorrect: false },
            { text: "Rome", isCorrect: false }
        ]
    },
    {
        question: "What is 2 + 2?",
        options: [
            { text: "3", isCorrect: false },
            { text: "4", isCorrect: true },
            { text: "5", isCorrect: false },
            { text: "6", isCorrect: false }
        ]
    },
    {
        question: "What is the color of the sky?",
        options: [
            { text: "Blue", isCorrect: true },
            { text: "Red", isCorrect: false },
            { text: "Green", isCorrect: false },
            { text: "Yellow", isCorrect: false }
        ]
    },
    {
        question: "Who developed JavaScript?",
        options: [
            { text: "Brendan Eich", isCorrect: true },
            { text: "Steve Jobs", isCorrect: false },
            { text: "Bill Gates", isCorrect: false },
            { text: "Mark Zuckerberg", isCorrect: false }
        ]
    }
];

// Function to update the quiz UI
function loadQuestion() {
    const questionElement = document.querySelector(".quiz-container h2");
    const optionsElement = document.querySelector(".quiz-container .options");

    // Update question text
    questionElement.textContent = questions[currentQuestion].question;

    // Update options
    optionsElement.innerHTML = "";
    questions[currentQuestion].options.forEach((option) => {
        const button = document.createElement("button");
        button.textContent = option.text;
        button.onclick = () => {
            checkAnswer(button, option.isCorrect);
        };
        optionsElement.appendChild(button);
    });
}

// Function to check the answer
function checkAnswer(button, isCorrect) {
    if (isCorrect) {
        button.style.backgroundColor = "green";
        correctAnswers++;
        score++;
        alert("Correct!");
    } else {
        button.style.backgroundColor = "red";
        alert("Wrong answer. Try again!");
    }

    // Disable all buttons
    const buttons = document.querySelectorAll(".quiz-container .options button");
    buttons.forEach((button) => {
        button.disabled = true;
    });

    // Enable next button
    document.getElementById("next-button").disabled = false;
}

// Function to handle the "Next" button click
function nextQuestion() {
    currentQuestion++;
    if (currentQuestion >= questions.length) {
        // End of quiz
        quizOver();
    } else {
        loadQuestion();
    }
}

// Function to handle the "Exit" button click
function exitQuiz() {
    window.location.href = "courses.html";
}

// Function to display the quiz over message
function quizOver() {
    const quizContainer = document.querySelector(".quiz-container");
    quizContainer.innerHTML = "";
    const message = document.createElement("p");
    message.textContent = `Quiz over! Your score is ${score} out of ${questions.length}.`;
    if (score === questions.length) {
        message.textContent += " Congratulations, you got all questions correct!";
    }
    quizContainer.appendChild(message);
    const exitButton = document.createElement("button");
    exitButton.textContent = "Exit Quiz";
    exitButton.onclick = () => {
        window.location.href = "courses.html";
    };
    quizContainer.appendChild(exitButton);
}

// Start the quiz
loadQuestion();

