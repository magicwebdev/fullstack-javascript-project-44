import readLineSync from 'readline-sync';

const randomNumber = (min = 1, max = 100) => Math.floor(Math.random() * (max - min + 1) + min);
const isValidAnswer = (answer) => answer === 'yes' || answer === 'no';
const isEvenNumber = (number) => number % 2 === 0;
const checkNumber = (number) => (isEvenNumber(number) ? 'yes' : 'no');
const isCorrectAnswer = (number, answer) => checkNumber(number) === answer;

export default () => {
  console.log('Welcome to the Brain Games!');
  const userName = readLineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  let countCorrectAnswers = 0;
  while (countCorrectAnswers < 3) {
    const number = randomNumber();
    console.log(`Question: ${number}`);
    const answer = readLineSync.question('Your answer: ');
    if (isValidAnswer(answer) && isCorrectAnswer(number, answer)) {
      console.log('Correct!');
      countCorrectAnswers += 1;
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${checkNumber(number)}'.`);
      console.log(`Let's try again, ${userName}!`);
      break;
    }
  }
  if (countCorrectAnswers === 3) {
    console.log(`Congratulations, ${userName}!`);
  }
};
