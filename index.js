const questionEl = document.querySelector('.question');

questionEl.textContent = 'Uveďte příjmení amerického vynálezce, který v roce 1876 jako první úspěšně podal patent na zařízení, které je dnes považováno za první telefon.';

setTimeout(() => {
  const userAnswer = prompt('Write your answer:');
  const answerText = document.querySelector('.answer__text');
  
  answerText.textContent = userAnswer;
  const answerBlock = document.querySelector('.answer');
  
  if (userAnswer === 'Bell') {
    answerBlock.classList.add('answer--correct');
  } else {
    answerBlock.classList.add('answer--wrong');
  }
}, 8000);
