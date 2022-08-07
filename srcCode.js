let readlineSync = require("readline-sync");

let score = 0;

let highScores = [
  {
    name: "Prachi",
    score: 3,
  },

  {
    name: "Purvi",
    score: 2,
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
    question: "What is my favourte dish ? ",
    answer: "mushroom noodles",
  },
];

let username = readlineSync.question("What's your name ? ");
console.log("welcome " + username + " Do you know Prachi ? ");

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
