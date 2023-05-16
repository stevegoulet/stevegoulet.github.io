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
  },
  {
    "fieldName": "patientRelationshipStatus",
    "id": "demographics-3",
    "properties": {
      "allowOther": true,
      "options": [
        {
          "label": "Single",
          "value": "Single"
        },
        {
          "label": "Married",
          "value": "Married"
        },
        {
          "label": "Committed partnership",
          "value": "Committed partnership"
        },
        {
          "label": "Divorced",
          "value": "Divorced"
        },
        {
          "label": "Widow/widower",
          "value": "Widow/widower"
        }
      ]
    },
    "question": "What is your relationship status?",
    "type": "singleSelect"
  }
];

// Rest of the code remains unchanged...

// Display the first question
displayQuestion();
