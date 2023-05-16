// Questions data
var questions = [
  {
    "fieldName": "patientRace",
    "helperText": "This question is optional",
    "id": "demographics-2",
    "properties": {
      "allowOther": true,
      "options": [
        {
          "label": "American Indian or Alaska Native",
          "value": "American Indian or Alaska Native"
        },
        {
          "label": "Asian",
          "value": "Asian"
        },
        {
          "label": "Black or African American",
          "value": "Black or African American"
        },
        {
          "label": "Native Hawaiian or Other Pacific Islander",
          "value": "Native Hawaiian or Other Pacific Islander"
        },
        {
          "label": "White Hispanic",
          "value": "White Hispanic"
        },
        {
          "label": "White Non-Hispanic",
          "value": "White Non-Hispanic"
        },
        {
          "label": "Prefer not to answer",
          "value": "Prefer not to answer"
        }
      ]
    },
    "question": "Please select your race(s):",
    "required": false,
    "type": "multiSelect"
  }
];

// Variables
var currentIndex = 0;
var selectedAnswers = [];

// Function to display the current question
function displayQuestion() {
  var question = questions[currentIndex];
  var questionElement = document.getElementById("question");
  var answerElement = document.getElementById("answer");

  // Display the question
  questionElement.textContent = question.question;

  // Clear previous answers
  answerElement.innerHTML = "";

  // Create and append options
  for (var i = 0; i < question.properties.options.length; i++) {
    var option = question.properties.options[i];
    var optionElement = document.createElement("option");
    optionElement.value = option.value;
    optionElement.textContent = option.label;
    answerElement.appendChild(optionElement);
  }
}

// Function to handle the next question
function nextQuestion() {
  var answerElement = document.getElementById("answer");
  var selectedAnswer = answerElement.value;

  // Store the selected answer
  selectedAnswers.push(selectedAnswer);

  // Move to the next question
  currentIndex++;

  // If all questions are answered, display the results
  if (currentIndex >= questions.length) {
    displayResults();
  } else {
    displayQuestion();
  }
}

// Function to display the results
function displayResults() {
  // Clear the question container
  var questionContainer = document.getElementById("questionContainer");
  questionContainer.innerHTML = "";

  // Display the selected answers
  var resultsElement = document.createElement("p");
  resultsElement.textContent = "Selected answers: " + selectedAnswers.join(", ");
  questionContainer.appendChild(resultsElement);
}

// Display the first question
displayQuestion();
