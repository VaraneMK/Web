const inputEl = document.querySelector('input');
const buttonEl = document.querySelector('button');
const timerEl = document.querySelector('span');

let timerID = null;
// Напишите реализацию createTimerAnimator
// который будет анимировать timerEl
const createTimerAnimator = () => {
	return (seconds) => {
		buttonEl.disabled = true;
		timerID = setInterval(() => {
			if (seconds === 0) {
				timerEl.innerHTML = 'Таймер завершил свою работу';
				buttonEl.disabled = false;
				clearInterval(timerID);
			} else {
				--seconds;
				let total = seconds;
				let h = Math.floor(total / 3600);
				total %= 3600;
				let m = Math.floor(total / 60);
				let s = total % 60;

				m = String(m).padStart(2, '0');
				h = String(h).padStart(2, '0');
				s = String(s).padStart(2, '0');
				timerEl.innerHTML = h + ':' + m + ':' + s;
			}
		}, 1000);
	};
};

const animateTimer = createTimerAnimator();

inputEl.addEventListener('input', (e) => {
	// Очистите input так, чтобы в значении
	// оставались только числа
	inputEl.value = e.target.value.replace(/\D/g, '');
});

buttonEl.addEventListener('click', (e) => {
	e.preventDefault();
	const seconds = Number(inputEl.value);

	animateTimer(seconds);

	inputEl.value = '';
});
