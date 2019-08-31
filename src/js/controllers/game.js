import { showWinMessage, showLoseMessage, showDrawMessage, increaseUserScore, increaseComputerScore, endOfGame } from '../lib/options.js';

const rock = 'rock';
const paper = 'paper';
const scissors = 'scissors';

const game = userChoice => {
  const computer = computerChoice();
  const result = resultGame(userChoice, computer);
  console.log(`USER: ${userChoice}`);
  console.log(`COMPUTER: ${computer} `);

  const resultOptions = {
    'win': () => {
      showWinMessage()
      increaseUserScore();
    },
    'lose': () => {
      showLoseMessage();
      increaseComputerScore();
    },
    'draw': () => {
      showDrawMessage();
    },
  };

  resultOptions[result]();
  endOfGame(finalResult);

}

const resultGame = (userChoice, computerChoice) => {
  let returnValue;
  switch (`${userChoice}-${computerChoice}`) {
    case `${rock}-${scissors}`:
    case `${paper}-${rock}`:
    case `${scissors}-${paper}`:
      returnValue = 'win';
      break;
    case `${paper}-${scissors}`:
    case `${rock}-${paper}`:
    case `${scissors}-${rock}`:
      returnValue = 'lose';
      break;
    case `${rock}-${rock}`:
    case `${paper}-${paper}`:
    case `${scissors}-${scissors}`:
      returnValue = 'draw';
      break;
  }
  return returnValue;
}

const computerChoice = () => {
  const choice = {
    '0': rock,
    '1': paper,
    '2': scissors,
  };
  const choiceNumber = Math.floor(Math.random() * 3);

  return choice[choiceNumber];
}

export default game;
