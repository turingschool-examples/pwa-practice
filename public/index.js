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

const getIndex = () => {
  return Math.floor(Math.random() * (answers.length - 1));
}

const showAnswer = () => {
  document.querySelector('.answer').innerText = answers[getIndex(answers)];
}

window.addEventListener('shake', showAnswer, false);

const stopShake = () => {
  shakeEvent.stop();
}

document.addEventListener('click', showAnswer);
document.addEventListener('keydown', showAnswer);
