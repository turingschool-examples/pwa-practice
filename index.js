const Shake = require('shake.js');
const answers = [
  'It is certain.',
  'It is decidedly so.',
  'Without a doubt.',
  'Yes - definitely.',
  'You may rely on it.',
  'As I see it, yes.',
  'Most likely.',
  'Outlook good.',
  'Yes.',
  'Signs point to yes.',
  'Reply hazy, try again.',
  'Ask again later.',
  'Better not tell you now.',
  'Cannot predict now.',
  'Concentrate and ask again.',
  'Don\'t count on it.',
  'My reply is no.',
  'My sources say no.',
  'Outlook not so good.',
  'Very doubtful.'
];

get myShakeEvent = new Shake({
    threshold: 15, // optional shake strength threshold
    timeout: 1000 // optional, determines the frequency of event generation
});

myShakeEvent.start();

const getIndex = () => {
  return Math.floor(Math.random() * (answers.length - 1));
}

const showAnswer = () => {
  document.querySelector('.answer').innerText = answers[getIndex(answers)];
}

document.addEventListener('click', showAnswer);
document.addEventListener('keydown', showAnswer);
document.addEventListener('shake', showAnswer);
