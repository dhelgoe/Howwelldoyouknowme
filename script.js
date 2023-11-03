const questionsAndAnswers = [
    {
        question: "What is your favorite color?",
        answer: ""
    },
    {
        question: "Morning or night person?",
        answer: ""
    },
    {
        question: "What is your favorite food?",
        answer: ""
    },
    {
        question: "Type yes to confirm your answers",
        answer: ""
    }

];

let currentQuestionIndex = 0;
let firstUserAnswers = [];
let secondUserGuesses = [];


document.getElementById("start-game").addEventListener("click", startGame);

function startGame() {
    document.querySelector(".start-container").style.display = "none";
    displayQuestion();
}

function displayQuestion() {
    const questionContainer = document.querySelector(".question-container");
    const currentQuestion = questionsAndAnswers[currentQuestionIndex];
    const userAnswerInput = document.getElementById("user-answer");

    if (currentQuestion) {
        document.getElementById("question-number").textContent = `Question ${currentQuestionIndex + 1}`;
        document.getElementById("question-text").textContent = currentQuestion.question;

        userAnswerInput.value = "";

        document.getElementById("user-answer").style.display = "block";
        document.getElementById("submit-answer").style.display = "block";
        questionContainer.style.display = "block";
    } else {

        displayResults();
        questionContainer.style.display = "none";
    }
}
document.getElementById("submit-answer").addEventListener("click", checkAnswer);

function checkAnswer() {
    const userAnswer = document.getElementById("user-answer").value;

    firstUserAnswers.push(userAnswer);
    document.getElementById("user-answer").value = "";

    currentQuestionIndex++;
    displayQuestion();
}

function displayResults() {
    const resultContainer = document.querySelector(".result-container");
    const resultMessage = document.getElementById("result-message");
    const correctAnswers = document.getElementById("correct-answers");

    // The second user guesses the answers
    for (let i = 0; i < questionsAndAnswers.length; i++) {
        secondUserGuesses.push(prompt(`Guess for Question ${i + 1}: ${questionsAndAnswers[i].question}`));
    }

    let correctGuesses = 0;
    let resultHtml = "";

    for (let i = 0; i < questionsAndAnswers.length; i++) {
        resultHtml += `Question ${i + 1}:<br>`;
        resultHtml += `Your Answer: ${firstUserAnswers[i]}<br>`;
        resultHtml += `Friend's Guess: ${secondUserGuesses[i]}<br>`;
        
        if (firstUserAnswers[i].toLowerCase() === secondUserGuesses[i].toLowerCase()) {
            resultHtml += "Correct!<br>";
            correctGuesses++;
        } else {
            resultHtml += "Incorrect<br>";
        }

        resultHtml += "<br>";
    }

    resultMessage.textContent = `You got ${correctGuesses} out of ${questionsAndAnswers.length} questions correct!`;
    correctAnswers.innerHTML = resultHtml;

    resultContainer.style.display = "block";
}


