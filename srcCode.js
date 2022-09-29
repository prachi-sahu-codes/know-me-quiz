let readlineSync = require("readline-sync");

let score = 0;

let highScores = [
  {
    name: "Prachi",
    score: 5,
  },

  {
    name: "Purvi",
    score: 4,
  },
];

let questions = [
  {
    question: "Which state I am from ? ",
    answer: "chhattisgarh",
  },
  {
    question: "Which city I am from ? ",
    answer: "dalli-rajhara",
  },
  {
    question: "What is my favourite dish ? ",
    answer: "mushroom noodles",
  },
  {
    question: "What is my favourite color ? ",
    answer: "black",
  },
  {
    question: "What is my favourite pet ? ",
    answer: "dog",
  },
];

let username = readlineSync.question("What's your name ? ");
console.log("Welcome!! " + username);

let userYn = readlineSync.question("Do you know Prachi ? ");
console.log("Ok! So lets get started");

function play(question, answer) {
  let useranswer = readlineSync.question(question);

  if (useranswer.toUpperCase() === answer.toUpperCase()) {
    score++;
    console.log("You were right.");
  } else {
    console.log("You were wrong.");
  }

  console.log("your score is : " + score);
  console.log("------------------");
}

for (let i = 0; i < questions.length; i++) {
  let currentQuestion = questions[i];
  play(currentQuestion.question, currentQuestion.answer);
}

function endscores() {
  console.log(
    "Wohooo!!! you've just completed this awesome quiz and your score is " +
      score
  );

  console.log(
    "Check out the high scores, if you scored higher than others ping me and I'll update it"
  );

  highScores.forEach(function (currentplayer) {
    console.log(currentplayer.name, " : ", currentplayer.score);
  });
}

endscores();
