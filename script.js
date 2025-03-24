// Game variables
let currentQuestion = 0;
let score = 0;
let timerInterval;
let timeLeft = 45;
let timeBonus = 10;
let totalQuestions = 0;
let selectedOption = null;
let correctCount = 0;
let incorrectCount = 0;

// Game settings
let difficulty = 'medium';
let questionsCount = 10;
let timePerQuestion = 45;

// DOM elements
const questionElement = document.getElementById('question');
const optionsContainer = document.getElementById('optionsContainer');
const timerElement = document.getElementById('timer');
const timeProgressElement = document.getElementById('timeProgress');
const gameScreen = document.getElementById('gameScreen');
const resultScreen = document.getElementById('resultScreen');
const welcomeScreen = document.getElementById('welcomeScreen');
const finalScoreElement = document.getElementById('finalScore');
const scoreMessageElement = document.getElementById('scoreMessage');
const playAgainButton = document.getElementById('playAgainButton');
const backToSettingsButton = document.getElementById('backToSettingsButton');
const startGameButton = document.getElementById('startGameButton');
const questionCounterElement = document.getElementById('questionCounter');
const currentScoreElement = document.getElementById('currentScore');
const timeBonusElement = document.getElementById('timeBonus');
const correctCountElement = document.getElementById('correctCount');
const incorrectCountElement = document.getElementById('incorrectCount');
const levelIndicatorElement = document.getElementById('levelIndicator');
const difficultySelectElement = document.getElementById('difficultySelect');
const questionsCountSelectElement = document.getElementById('questionsCountSelect');
const timerSelectElement = document.getElementById('timerSelect');

// Easy level questions
const easyQuestions = [
  {
    type: 'mcq',
    question: "Solve for x: 2x + 5 = 15",
    options: ["x = 5", "x = 7.5", "x = 10", "x = 4"],
    answer: 0
  },
  {
    type: 'mcq',
    question: "What is 25% of 80?",
    options: ["15", "20", "25", "40"],
    answer: 1
  },
  {
    type: 'true-false',
    question: "The sum of interior angles of a triangle is 180 degrees.",
    answer: true
  },
  {
    type: 'mcq',
    question: "Simplify: 3(4 + 2)",
    options: ["9", "14", "18", "24"],
    answer: 2
  },
  {
    type: 'mcq',
    question: "Convert 0.25 to a fraction.",
    options: ["1/5", "1/4", "2/5", "3/4"],
    answer: 1
  },
  {
    type: 'true-false',
    question: "The square root of 64 is 8.",
    answer: true
  },
  {
    type: 'mcq',
    question: "Solve: 3x - 7 = 8",
    options: ["x = 5", "x = 15/3", "x = 1", "x = 3"],
    answer: 0
  },
  {
    type: 'mcq',
    question: "What is the area of a rectangle with length 8 and width 5?",
    options: ["13", "26", "40", "45"],
    answer: 2
  },
  {
    type: 'true-false',
    question: "A right angle measures 90 degrees.",
    answer: true
  },
  {
    type: 'mcq',
    question: "What is the value of 2³?",
    options: ["6", "8", "10", "12"],
    answer: 1
  },
  {
    type: 'mcq',
    question: "If a = 3 and b = 4, what is a² + b²?",
    options: ["7", "25", "49", "50"],
    answer: 1
  },
  {
    type: 'true-false',
    question: "The median of [3, 5, 7, 8, 10] is 7.",
    answer: true
  },
  {
    type: 'mcq',
    question: "Solve: 5x + 2 = 3x + 10",
    options: ["x = 4", "x = 5", "x = 6", "x = 8"],
    answer: 0
  },
  {
    type: 'mcq',
    question: "Simplify: 18 ÷ 6 × 3 + 2",
    options: ["7", "9", "11", "27"],
    answer: 2
  },
  {
    type: 'true-false',
    question: "The perimeter of a square with side length 5 is 20.",
    answer: true
  },
  {
    type: 'mcq',
    question: "What is 20% of 150?",
    options: ["15", "30", "50", "60"],
    answer: 1
  },
  {
    type: 'mcq',
    question: "If x:y = 3:4 and y = 20, what is x?",
    options: ["15", "16", "18", "24"],
    answer: 0
  },
  {
    type: 'true-false',
    question: "The square root of 100 is 10.",
    answer: true
  },
  {
    type: 'mcq',
    question: "Simplify: 2(3x - 4) + 5x",
    options: ["6x - 8 + 5x", "11x - 8", "6x + 5x - 4", "11x - 4"],
    answer: 1
  },
  {
    type: 'mcq',
    question: "What is the volume of a cube with side length 3?",
    options: ["9", "18", "21", "27"],
    answer: 3
  }
];

// Medium level questions
const mediumQuestions = [
  {
    type: 'mcq',
    question: "Which of the following is a solution to the equation 2x² - 5x + 3 = 0?",
    options: ["x = 1", "x = 3", "x = 1.5", "x = 2"],
    answer: 2
  },
  {
    type: 'mcq',
    question: "What is the derivative of f(x) = 3x³ - 5x² + 2x - 1?",
    options: ["f'(x) = 9x² - 10x + 2", "f'(x) = 9x² - 5x + 2", "f'(x) = 3x² - 10x + 2", "f'(x) = 9x² - 10x - 1"],
    answer: 0
  },
  {
    type: 'true-false',
    question: "The integral of (3x² + 2x - 1) with respect to x is (x³ + x² - x + C).",
    answer: true
  },
  {
    type: 'mcq',
    question: "What is the limit of sin(x)/x as x approaches 0?",
    options: ["0", "1", "∞", "Does not exist"],
    answer: 1
  },
  {
    type: 'mcq',
    question: "What is the value of log₁₀(100)?",
    options: ["10", "1", "2", "100"],
    answer: 2
  },
  {
    type: 'true-false',
    question: "The solution to the equation e^x = 20 is x = ln(20).",
    answer: true
  },
  {
    type: 'mcq',
    question: "What is the value of tan(π/4)?",
    options: ["0", "1", "√2", "Undefined"],
    answer: 1
  },
  {
    type: 'true-false',
    question: "The solutions to the quadratic equation 4x² + 4x - 3 = 0 are x = -1.5 and x = 0.5.",
    answer: true
  },
  {
    type: 'mcq',
    question: "What is the integral of (2x² - 4x) with respect to x?",
    options: ["x² - 2x² + C", "(2/3)x³ - 2x² + C", "x³ - 2x² + C", "2x³ - 2x² + C"],
    answer: 1
  },
  {
    type: 'mcq',
    question: "What is the determinant of the matrix [[2,3],[1,4]]?",
    options: ["5", "6", "8", "11"],
    answer: 0
  },
  {
    type: 'mcq',
    question: "If f(x) = x² + 3x - 4, what is f'(2)?",
    options: ["7", "10", "11", "14"],
    answer: 0
  },
  {
    type: 'true-false',
    question: "The standard form of a circle with center (h,k) and radius r is (x-h)² + (y-k)² = r².",
    answer: true
  },
  {
    type: 'mcq',
    question: "Simplify: sin²θ + cos²θ",
    options: ["0", "1", "2", "Depends on θ"],
    answer: 1
  },
  {
    type: 'mcq',
    question: "What is the domain of f(x) = √(x-3)?",
    options: ["x ≥ 0", "x > 3", "x ≥ 3", "All real numbers"],
    answer: 2
  },
  {
    type: 'true-false',
    question: "The derivative of sin(x) is cos(x).",
    answer: true
  },
  {
    type: 'mcq',
    question: "What is the value of ∫₀¹ 2x dx?",
    options: ["0", "1", "2", "4"],
    answer: 1
  },
  {
    type: 'mcq',
    question: "Solve the system: 2x + y = 5, 3x - 2y = 4",
    options: ["x = 2, y = 1", "x = 3, y = -1", "x = 1, y = 3", "x = 2, y = 0"],
    answer: 0
  },
  {
    type: 'true-false',
    question: "The function f(x) = |x| is differentiable at x = 0.",
    answer: false
  },
  {
    type: 'mcq',
    question: "What is the remainder when x³ - 3x² + 2x - 5 is divided by (x-2)?",
    options: ["-5", "-3", "0", "7"],
    answer: 3
  },
  {
    type: 'mcq',
    question: "If f(x) = cos(x) and g(x) = x², what is (f∘g)(π)?",
    options: ["1", "-1", "0", "π²"],
    answer: 0
  }
];

// Hard level questions
const hardQuestions = [
  {
    type: 'mcq',
    question: "Find the value of the limit: lim(x→∞) (1 + 1/x)^x",
    options: ["0", "1", "e", "∞"],
    answer: 2
  },
  {
    type: 'mcq',
    question: "Evaluate the improper integral: ∫₁^∞ 1/x² dx",
    options: ["0", "1", "∞", "Does not exist"],
    answer: 1
  },
  {
    type: 'true-false',
    question: "The Wronskian of two solutions to a second-order linear differential equation is constant.",
    answer: true
  },
  {
    type: 'mcq',
    question: "What is the third term in the Taylor series expansion of e^x around x = 0?",
    options: ["x/2", "x²/2", "x²/2!", "x³/3!"],
    answer: 2
  },
  {
    type: 'mcq',
    question: "For a random variable X with mean μ and variance σ², what is E[(X - μ)²]?",
    options: ["0", "μ²", "σ", "σ²"],
    answer: 3
  },
  {
    type: 'true-false',
    question: "Every continuous function on a closed interval [a,b] is uniformly continuous on that interval.",
    answer: true
  },
  {
    type: 'mcq',
    question: "What is the rank of the matrix [[1,2,3],[2,4,6],[3,6,9]]?",
    options: ["1", "2", "3", "4"],
    answer: 1
  },
  {
    type: 'mcq',
    question: "Solve the differential equation: dy/dx = y² with y(0) = 1",
    options: ["y = 1/(1-x)", "y = 1/(1+x)", "y = 1-x", "y = 1+x"],
    answer: 0
  },
  {
    type: 'true-false',
    question: "The sum of an absolutely convergent series is independent of the order of its terms.",
    answer: true
  },
  {
    type: 'mcq',
    question: "What is the solution to the system Ax = b where A is singular?",
    options: ["No solution", "Unique solution", "Infinitely many solutions", "Either no solution or infinitely many solutions"],
    answer: 3
  },
  {
    type: 'mcq',
    question: "What is the eigenvalue of the matrix [[3,1],[1,3]] with eigenvector [1,1]?",
    options: ["0", "2", "3", "4"],
    answer: 3
  },
  {
    type: 'true-false',
    question: "For a Cauchy sequence in a complete metric space, convergence is guaranteed.",
    answer: true
  },
  {
    type: 'mcq',
    question: "Evaluate: ∫₀^π sin(x)cos(x)dx",
    options: ["0", "π/4", "π/2", "π"],
    answer: 0
  },
  {
    type: 'mcq',
    question: "If z = 3 + 4i, what is |z|²?",
    options: ["5", "7", "25", "34"],
    answer: 2
  },
  {
    type: 'true-false',
    question: "The Fourier transform of a Gaussian function is also a Gaussian function.",
    answer: true
  },
  {
    type: 'mcq',
    question: "For a continuous random variable with PDF f(x), what is P(X = a)?",
    options: ["f(a)", "∫f(a)", "0", "1"],
    answer: 2
  },
  {
    type: 'mcq',
    question: "What is the solution to the wave equation u_tt = c²u_xx?",
    options: ["u(x,t) = f(x+ct) + g(x-ct)", "u(x,t) = f(x+ct) * g(x-ct)", "u(x,t) = e^(x+ct)", "u(x,t) = ln(x+ct)"],
    answer: 0
  },
  {
    type: 'true-false',
    question: "In a Hilbert space, every bounded linear operator has an adjoint.",
    answer: true
  },
  {
    type: 'mcq',
    question: "What is the residue of f(z) = 1/z² at z = 0?",
    options: ["0", "1", "-1", "∞"],
    answer: 2
  },
  {
    type: 'mcq',
    question: "For a Markov process, what property must be satisfied?",
    options: ["Reversibility", "Memorylessness", "Stationarity", "Symmetry"],
    answer: 1
  }
];

// All questions based on difficulty
const allQuestions = {
  easy: easyQuestions,
  medium: mediumQuestions,
  hard: hardQuestions
};

// Initialize the game
function initGame() {
  // Add event listeners for settings
  startGameButton.addEventListener('click', applySettings);
  playAgainButton.addEventListener('click', returnToGame);
  backToSettingsButton.addEventListener('click', returnToSettings);

  // Set up difficulty indicator texts
  difficultySelectElement.addEventListener('change', updateDifficultyDescription);

  // Show welcome screen initially
  showWelcomeScreen();
}

// Update difficulty description based on selection
function updateDifficultyDescription() {
  const selectedDifficulty = difficultySelectElement.value;
  let description;

  switch (selectedDifficulty) {
    case 'easy':
      levelIndicatorElement.textContent = 'Basic Level';
      break;
    case 'medium':
      levelIndicatorElement.textContent = 'College Level';
      break;
    case 'hard':
      levelIndicatorElement.textContent = 'Advanced Level';
      break;
  }
}

// Apply settings and start the game
function applySettings() {
  // Get settings from select elements
  difficulty = difficultySelectElement.value;
  questionsCount = parseInt(questionsCountSelectElement.value);
  timePerQuestion = parseInt(timerSelectElement.value);

  // Update time bonus based on difficulty
  switch (difficulty) {
    case 'easy':
      timeBonus = 5;
      break;
    case 'medium':
      timeBonus = 10;
      break;
    case 'hard':
      timeBonus = 15;
      break;
  }

  // Update UI based on difficulty
  updateDifficultyDescription();

  // Update timeBonus display
  timeBonusElement.textContent = `x${timeBonus}`;

  // Start the game
  startGame();
}

// Show the welcome screen
function showWelcomeScreen() {
  welcomeScreen.classList.remove('hidden');
  gameScreen.classList.add('hidden');
  resultScreen.classList.add('hidden');
}

// Return to settings
function returnToSettings() {
  clearInterval(timerInterval);
  showWelcomeScreen();
}

// Return to game
function returnToGame() {
  startGame();
}

// Start the game
function startGame() {
  // Reset game variables
  score = 0;
  currentQuestion = 0;
  timeLeft = timePerQuestion;
  correctCount = 0;
  incorrectCount = 0;

  // Select questions based on difficulty and count
  totalQuestions = questionsCount;

  // Update UI elements
  currentScoreElement.textContent = '0';
  timeBonusElement.textContent = `x${timeBonus}`;

  // Show game screen, hide other screens
  welcomeScreen.classList.add('hidden');
  resultScreen.classList.add('hidden');
  gameScreen.classList.remove('hidden');

  // Show first question
  nextQuestion();
}

// Get a random set of questions based on difficulty and count
function getGameQuestions() {
  const allQuestionsForDifficulty = [...allQuestions[difficulty]];
  const shuffled = allQuestionsForDifficulty.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, questionsCount);
}

// Display the next question
function nextQuestion() {
  // Get game questions if this is the first question
  if (currentQuestion === 0) {
    window.gameQuestions = getGameQuestions();
  }

  // Clear the options container
  optionsContainer.innerHTML = '';
  selectedOption = null;

  if (currentQuestion < questionsCount) {
    // Get the current question
    const questionObj = window.gameQuestions[currentQuestion];

    // Update the question counter
    questionCounterElement.textContent = `Question ${currentQuestion + 1} of ${totalQuestions}`;

    // Display the question
    questionElement.textContent = questionObj.question;

    // Generate options based on question type
    if (questionObj.type === 'mcq') {
      createMultipleChoiceOptions(questionObj);
    } else if (questionObj.type === 'true-false') {
      createTrueFalseOptions(questionObj);
    }

    // Reset timer
    timeLeft = timePerQuestion;
    timerElement.textContent = `Time Left: ${timeLeft}s`;
    timerElement.classList.remove('timer-low');

    // Animate the progress bar
    timeProgressElement.style.width = '100%';

    // Start the timer
    startTimer();

    // Increment the question counter
    currentQuestion++;
  } else {
    // End the game if all questions have been answered
    endGame();
  }
}

// Create multiple choice options
function createMultipleChoiceOptions(questionObj) {
  optionsContainer.className = 'options-container';

  questionObj.options.forEach((option, index) => {
    const optionButton = document.createElement('button');
    optionButton.className = 'option-btn';
    optionButton.textContent = option;
    optionButton.dataset.index = index;

    optionButton.addEventListener('click', () => {
      // Remove 'selected' class from all options
      document.querySelectorAll('.option-btn').forEach(btn => {
        btn.classList.remove('selected');
      });

      // Add 'selected' class to the clicked option
      optionButton.classList.add('selected');
      selectedOption = index;

      // Automatically submit answer after a short delay
      setTimeout(() => {
        checkAnswer();
      }, 500);
    });

    optionsContainer.appendChild(optionButton);
  });
}

// Create true/false options
function createTrueFalseOptions(questionObj) {
  optionsContainer.className = 'true-false-container';

  const trueButton = document.createElement('button');
  trueButton.className = 'true-btn';
  trueButton.textContent = 'TRUE';
  trueButton.addEventListener('click', () => {
    selectedOption = true;
    setTimeout(() => {
      checkAnswer();
    }, 500);
  });

  const falseButton = document.createElement('button');
  falseButton.className = 'false-btn';
  falseButton.textContent = 'FALSE';
  falseButton.addEventListener('click', () => {
    selectedOption = false;
    setTimeout(() => {
      checkAnswer();
    }, 500);
  });

  optionsContainer.appendChild(trueButton);
  optionsContainer.appendChild(falseButton);
}

// Start the timer
function startTimer() {
  // Clear any existing interval
  clearInterval(timerInterval);

  // Set up the timer interval
  timerInterval = setInterval(() => {
    timeLeft--;

    // Update the timer text
    timerElement.textContent = `Time Left: ${timeLeft}s`;

    // Update the progress bar
    timeProgressElement.style.width = `${(timeLeft / timePerQuestion) * 100}%`;

    // Add visual indication when time is running low
    if (timeLeft <= 10) {
      timerElement.classList.add('timer-low');
    } else {
      timerElement.classList.remove('timer-low');
    }

    // Check if time is up
    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      checkAnswer();
    }
  }, 1000);
}

// Check the user's answer
function checkAnswer() {
  // Clear the timer
  clearInterval(timerInterval);

  const currentQuestionObj = window.gameQuestions[currentQuestion - 1];
  let isCorrect = false;

  // Check if an option was selected
  if (selectedOption !== null) {
    isCorrect = selectedOption === currentQuestionObj.answer;

    // Highlight the correct and wrong answers
    if (currentQuestionObj.type === 'mcq') {
      const options = document.querySelectorAll('.option-btn');

      options.forEach((option, index) => {
        if (index === currentQuestionObj.answer) {
          option.classList.add('correct');
        } else if (index === selectedOption && !isCorrect) {
          option.classList.add('incorrect');
        }
      });
    }

    // Update correct/incorrect counts
    if (isCorrect) {
      correctCount++;
    } else {
      incorrectCount++;
    }
  } else {
    // If no option was selected, count as incorrect
    incorrectCount++;
  }

  if (isCorrect) {
    // Calculate points based on time left
    const points = timeLeft * timeBonus * 10;
    score += points;

    // Update the score display
    currentScoreElement.textContent = score;
  }

  // Move to the next question after a short delay
  setTimeout(nextQuestion, 1500);
}

// End the game
function endGame() {
  // Hide game screen, show result screen
  gameScreen.classList.add('hidden');
  resultScreen.classList.remove('hidden');

  // Update final score and statistics
  finalScoreElement.textContent = `Your Score: ${score}`;
  correctCountElement.textContent = correctCount;
  incorrectCountElement.textContent = incorrectCount;

  // Determine score message based on performance
  let message = '';
  const totalPossibleQuestions = questionsCount;
  const percentageCorrect = (correctCount / totalPossibleQuestions) * 100;

  if (percentageCorrect >= 90) {
    message = 'Outstanding! You have mastered this level!';
  } else if (percentageCorrect >= 70) {
    message = 'Great job! Your math skills are impressive!';
  } else if (percentageCorrect >= 50) {
    message = 'Good effort! Keep practicing to improve.';
  } else {
    message = 'Practice makes perfect! Keep trying!';
  }

  scoreMessageElement.textContent = message;
}

// Initialize the game when the page loads
window.addEventListener('DOMContentLoaded', initGame);
