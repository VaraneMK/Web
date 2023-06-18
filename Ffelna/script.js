let tel = document.getElementById('tel');
// let email = document.getElementById('email');
let userName = document.getElementById('name');
let insta = document.getElementById('insta');
let errorSpan = document.querySelector('.error');

const telRegExp = /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/;
// const emailRegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

document.querySelector('.btn').onclick = (e) => {
	if (!validate(telRegExp, tel.value) || userName.value === '' || insta.value === '') {
		e.preventDefault();
		if (!validate(telRegExp, tel.value)) {
			notValid(tel, errorSpan);
		} else {
			valid(tel, errorSpan);
		}
		if (userName.value.trim() === '') {
			notValid(userName, errorSpan);
		} else {
			valid(userName, errorSpan);
		}
		if (insta.value.trim() === '') {
			notValid(insta, errorSpan);
		} else {
			valid(insta, errorSpan);
		}
		errorSpan.style.display = 'block';
	} else {
		valid(userName, errorSpan);
		valid(insta, errorSpan);
		valid(tel, errorSpan);
	}
};

function validate(RegExp, text) {
	return RegExp.test(text);
}

function notValid(inp, el) {
	inp.classList.add('is-invalid');
	inp.classList.remove('is-valid');
	el.style.display = 'block';
}

function valid(inp, el) {
	inp.classList.remove('is-invalid');
	inp.classList.add('is-valid');
	el.style.display = 'none';
}
