const readlineSync = require("readline-sync");
const chalk = require("chalk");
const userName = readlineSync.question("What is your name ? ");
console.log(
  "Hello " +
    chalk.blue.bold(userName + "!") +
    " Welcome to the Zindagi Na Milegi Dobara Quiz."
);
console.log(
  chalk.green.bgBlack("---------------------------------------------------")
);
console.log(chalk.green.bgBlack("Rules:"));
console.log(
  chalk.green.bgBlack(
    "You get +1 for each right answer and -1 for each wrong answer."
  )
);
console.log(
  chalk.green.bgBlack("---------------------------------------------------")
);

let score = 0;
const questions = (module.exports = [
  {
    question:
      "How much does Bagwati cost? \n A. 12,000 Euros\n B. 14,000 Euros \n C. 12,000 Pounds \n ",
    answer: "a",
  },
  {
    question:
      "When the gang decided to pull Imraan's leg. They sang a jingle that he wrote for a biscuit company. What were the biscuits called?   \n A. Diamond Busicuit  \n B. Almond Biscotti \n C. Gold Biscuits \n ",
    answer: "a",
  },
  {
    question:
      "How did the three musketeers end up behind the bars? \n A. They got into a bar fight  \n B. They were pranking a stranger at a bar \n C. Both things happened. One led to another.  \n ",
    answer: "c",
  },
  {
    question:
      "So we know that Imraan's long-lost biological father was a famous artist in the film who went by the name_______. \n A. Salim Quereshi \n B. Irfaan Shah \n C. Salman Habib \n ",
    answer: "c",
  },
  {
    question:
      " According to the main zinda raha toh pact, Imraan would publish his poetry, Kabir would tell Natasha that he won't marry her and Arjun would? \n A. Quit his job \n B. Leave everything and go to Morocco with Laila \n C. Propose to Laila  \n ",
    answer: "b",
  },
]);

function play(question, answer) {
  const userAnswer = readlineSync.question(question);

  if (userAnswer === answer) {
    console.log(chalk.green.bold("You are right!"));
    score = score + 1;
  } else {
    console.log(chalk.red.bold("You are wrong! Right answer was " + answer));
    score = score - 1;
  }

  console.log(chalk.blue.bold("Current score : " + score));
  console.log(chalk.cyan.bgBlack("----------------------------------"));
}

for (let i = 0; i < questions.length; i++) {
  let currentQuestion = questions[i];

  play(currentQuestion.question, currentQuestion.answer);
}

console.log("YAY! You scored: " + score);
