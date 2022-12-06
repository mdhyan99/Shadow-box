const questionElem = document.querySelector('.question');
const answerElem = document.querySelector('.answer');
const showAnswerButtonElem = document.querySelector('.showAnswerButton');

showAnswerButtonElem.addEventListener('click', () => {
	answerElem.classList.toggle('hidden');
});
