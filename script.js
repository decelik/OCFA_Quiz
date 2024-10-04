// Import questions from a separate file
import { questions } from "./questions.js";

// Get DOM (Document Object Model) elements for question, answer buttons, next button, timer, progress bar, and progress bar container
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const backButton = document.getElementById("back-btn"); // Select the back button element
const timerElement = document.getElementById("timer");
const progressBarElement = document.getElementById("progress");
const questionCounterElement = document.getElementById("question-counter");
const correctCountElement = document.getElementById("correct-count");
const incorrectCountElement = document.getElementById("incorrect-count");

// Load audio files for correct and incorrect answers
const correctSound = new Audio("audio/correct_answer.mp3");
const incorrectSound = new Audio("audio/incorrect_answer.mp3");

// Variables to track the quiz state
let currentQuestionIndex = 0; // Track the current question index
let score = 0; // Track user's score for correct answers
let incorrectScore = 0; // Track user's incorrect answers
let timeLeft = 7200; // 120 minutes in seconds for the quiz timer
let timerInterval; // Variable for the timer interval
let quizEnded = false; // Flag to check if the quiz has ended

// Store a subset of 60 random questions
let selectedQuestions = [];

// Start the quiz by resetting the question index, score, and showing the first question
function startQuiz() {
  quizEnded = false; // Reset quiz state
  currentQuestionIndex = 0; // Reset the question index
  score = 0; // Reset the score
  incorrectScore = 0; // Reset incorrect answers
  timeLeft = 7200; // Reset the timer
  nextButton.innerHTML = "Next"; // Update next button text
  backButton.innerHTML = "Back"; // Update back button text

  // Select 60 random questions from the questions pool
  selectedQuestions = getRandomQuestions(questions, 60);

  updateProgressBar(); // Initialize progress bar
  showQuestion(); // Display the first question
  updateQuestionCounter(); // Update the question counter
  updateScoreCount(); // Update score display
  startTimer(); // Start the quiz timer
}

// Shuffle function to randomize the order of questions in the array
function shuffle(array) {
  let currentIndex = array.length; // Get the total number of elements in the array
  while (currentIndex != 0) {
    let randomIndex = Math.floor(Math.random() * currentIndex); // Pick a random index
    currentIndex--;
    // Swap the elements at currentIndex and randomIndex
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }
}

// Get a subset of random questions from the provided array
function getRandomQuestions(array, num) {
  let clonedArray = [...array]; // Clone the array to avoid modifying the original one
  shuffle(clonedArray); // Shuffle the cloned array
  return clonedArray.slice(0, num); // Return the first `num` elements after shuffling
}

// Show the current question and its possible answers
function showQuestion() {
  resetState(); // Reset the state to remove previous question's answers
  let currentQuestion = selectedQuestions[currentQuestionIndex]; // Get current question
  questionElement.innerHTML = currentQuestion.question; // Display the current question text

  // If the current question contains a code snippet, display it
  if (currentQuestion.code) {
    const codeElement = document.createElement("pre"); // Create a preformatted text element
    codeElement.classList.add("question-code"); // Add a class for styling
    const codeBlock = document.createElement("code"); // Create a code block element
    codeBlock.classList.add("python"); // Add class for Python syntax highlighting
    codeBlock.textContent = currentQuestion.code; // Set the code text
    codeElement.appendChild(codeBlock); // Append the code block to the pre element

    // Create a copy button to copy the code
    const copyButton = document.createElement("button");
    copyButton.classList.add("copy-button");
    copyButton.textContent = "Copy All"; // Button text for copying the code
    copyButton.addEventListener("click", () => {
      navigator.clipboard.writeText(currentQuestion.code).then(() => {
        showCopyMessage(); // Show a confirmation message after copying
      });
    });
    codeElement.appendChild(copyButton); // Add the copy button to the code element
    questionElement.appendChild(codeElement); // Add the pre element to the question container
  }

  // Create buttons for each possible answer
  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button"); // Create a button for the answer
    button.classList.add("btn"); // Add a class for styling
    button.appendChild(document.createTextNode(` ${answer.text}`)); // Set the button text to the answer
    answerButtons.appendChild(button); // Add the button to the answer buttons container

    // If the answer is correct, mark it using a data attribute
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }

    // Add event listener for answer selection when the button is clicked
    button.addEventListener("click", selectAnswer);
  });
  updateQuestionCounter(); // Update the question counter after displaying a question
}

// Reset the state by clearing previous answers and hiding the next button
function resetState() {
  nextButton.style.display = "none"; // Hide the next button initially
  backButton.style.display = "block"; // Ensure the back button is visible

  // Remove all answer buttons from the container
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }

  // Clear the explanation and link elements
  const explanationElement = document.getElementById("explanation");
  explanationElement.innerHTML = ""; // Clear explanation text
  explanationElement.style.display = "none"; // Hide the explanation container
  const linkElement = document.getElementById("link");
  linkElement.innerHTML = ""; // Clear any existing link
}

// Handle answer selection when a user clicks on an answer button
function selectAnswer(e) {
  const selectedBtn =
    e.target.tagName === "SPAN" ? e.target.parentNode : e.target; // Get the clicked button
  const isCorrect = selectedBtn.dataset.correct === "true"; // Check if the answer is correct

  // Function to play sound for correct or incorrect answers
  function playSound(sound) {
    sound.pause(); // Pause the sound to reset it
    sound.currentTime = 0; // Rewind to the start
    sound.play(); // Play the sound
  }

  // If the selected answer is correct and hasn't been marked yet
  if (isCorrect && !selectedBtn.classList.contains("correct")) {
    selectedBtn.classList.add("correct"); // Mark the button as correct
    score++; // Increase the score for correct answers
    playSound(correctSound); // Play the correct answer sound
  } else if (!isCorrect && !selectedBtn.classList.contains("incorrect")) {
    selectedBtn.classList.add("incorrect"); // Mark the button as incorrect
    incorrectScore++; // Increase the incorrect score
    playSound(incorrectSound); // Play the incorrect answer sound
  }

  // Check if all correct answers have been selected
  const allCorrectAnswers = Array.from(answerButtons.children).filter(
    (button) => button.dataset.correct === "true"
  );
  const selectedCorrectAnswers = Array.from(answerButtons.children).filter(
    (button) =>
      button.classList.contains("correct") && button.dataset.correct === "true"
  );

  if (allCorrectAnswers.length === selectedCorrectAnswers.length) {
    // If all correct answers are selected, display the explanation and link
    const explanationElement = document.getElementById("explanation");
    const linkElement = document.getElementById("link"); // Get the link element
    let currentQuestion = selectedQuestions[currentQuestionIndex]; // Get the current question
    explanationElement.innerHTML = currentQuestion.explanation; // Show the explanation
    explanationElement.style.display = "block"; // Make the explanation visible
    explanationElement.classList.remove("show");
    explanationElement.classList.add("show");

    // If there's an additional link, display it
    if (currentQuestion.link) {
      linkElement.innerHTML = ""; // Clear existing link
      const link = document.createElement("a");
      link.href = currentQuestion.link; // Set the link URL
      link.target = "_blank"; // Open the link in a new tab
      link.rel = "noopener noreferrer"; // Security best practice
      link.textContent = "Learn more"; // Text for the link
      link.style.color = "white"; // Style the link text
      linkElement.appendChild(link); // Append the link to the container
    } else {
      linkElement.innerHTML = ""; // Clear the link if none is provided
    }

    nextButton.style.display = "block"; // Show the next button after selecting the correct answer(s)
    backButton.style.display = "block"; // Keep the back button visible
  }
  updateScoreCount(); // Update the score display
}

// Show the final score after all questions have been answered
function showScore() {
  resetState(); // Reset the state for the quiz
  questionElement.innerHTML = `Well done! That was ${selectedQuestions.length} questions!`; // Display the quiz completion message
  nextButton.innerHTML = "Try Again"; // Update the next button to "Try Again"
  nextButton.style.display = "block"; // Show the next button
  clearInterval(timerInterval); // Stop the timer
  quizEnded = true; // Mark the quiz as ended
}

// Handle the next button click to move to the next question or restart the quiz
function handleNextButton() {
  if (quizEnded) return; // Exit if the quiz has already ended

  currentQuestionIndex++; // Move to the next question index
  if (currentQuestionIndex < selectedQuestions.length) {
    showQuestion(); // Show the next question
  } else {
    showScore(); // Show the final score if no more questions
  }
  updateProgressBar(); // Update the progress bar
}

// Event listener for the next button to either proceed to the next question or restart the quiz
nextButton.addEventListener("click", () => {
  if (quizEnded) {
    startQuiz(); // Restart the quiz if it's ended
  } else if (currentQuestionIndex < selectedQuestions.length) {
    handleNextButton(); // Show the next question if there are more
  } else {
    startQuiz(); // Restart the quiz if all questions are answered
  }
});

// Event listener for the back button to go to the previous question
backButton.addEventListener("click", () => {
  if (currentQuestionIndex > 0) {
    currentQuestionIndex--; // Move back to the previous question
    showQuestion(); // Show the previous question
    updateProgressBar(); // Update the progress bar
  }
});

// Start the timer when the quiz starts
function startTimer() {
  timerInterval = setInterval(updateTimer, 1000); // Set the timer to update every second
}

// Timer logic to update the countdown
function updateTimer() {
  timeLeft--; // Decrease the time left by one second
  const minutes = Math.floor(timeLeft / 60); // Calculate minutes remaining
  const seconds = timeLeft % 60; // Calculate seconds remaining
  const timeDisplay = document.getElementById("time-display");
  if (timeDisplay) {
    timeDisplay.textContent = `${minutes}:${
      seconds < 10 ? "0" + seconds : seconds
    }`; // Display time in minutes and seconds
  }

  // If the timer reaches zero, end the quiz
  if (timeLeft <= 0) {
    clearInterval(timerInterval); // Stop the timer
    showScore(); // Show the final score
  }
}

// Toggle the menu visibility for mobile view
const menuToggle = document.getElementById("menu-toggle");
const menu = document.getElementById("menu");

// Toggle menu visibility on button click
menuToggle.addEventListener("click", () => {
  menu.classList.toggle("show"); // Show or hide the menu
});

// Close the menu when a link inside the menu is clicked (for mobile view)
menu.addEventListener("click", (e) => {
  if (e.target.tagName === "A") {
    menu.classList.remove("show"); // Hide the menu when a link is clicked
  }
});

// Update the progress bar to reflect the current question index
function updateProgressBar() {
  const progressPercentage =
    (currentQuestionIndex / selectedQuestions.length) * 100; // Calculate the progress percentage
  progressBarElement.style.width = progressPercentage + "%"; // Set the progress bar width
}

// Update the question counter (e.g., "Question 3 / 60")
function updateQuestionCounter() {
  questionCounterElement.innerHTML = `Question ${
    currentQuestionIndex + 1
  } / 60`;
}

// Update the displayed score for correct and incorrect answers
function updateScoreCount() {
  correctCountElement.innerHTML = score; // Update the correct score count
  incorrectCountElement.innerHTML = incorrectScore; // Update the incorrect score count
}

// Reset the quiz state (hide next button and show back button)
function resetQuizState() {
  quizEnded = false; // Reset the quiz ended flag
  nextButton.style.display = "none"; // Hide the next button
  backButton.style.display = "block"; // Show the back button
}

// Start the quiz initially when the page loads
resetQuizState();
startQuiz();

// Function to display a copy confirmation message after code is copied
function showCopyMessage() {
  const message = document.createElement("div");
  message.classList.add("copy-message"); // Add a class for the message styling
  message.textContent = "Code copied! :)"; // Message text
  document.body.appendChild(message); // Append the message to the body

  // Remove the message after a short delay
  setTimeout(() => {
    message.classList.add("fade-out"); // Add fade-out effect
    setTimeout(() => {
      document.body.removeChild(message); // Remove the message from the DOM
    }, 1000);
  }, 1000);
}
