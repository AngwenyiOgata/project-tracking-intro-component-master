(function () {
	'use strict';

	const hambuger = document.querySelector('.icon-hamburger');
	const navUl = document.querySelector('.app__header-ul');

	hambuger.addEventListener('click', (evt) =>{
		evt.preventDefault();

		navUl.classList.toggle('scale-in-center');

		if (navUl.classList.contains('active')) {
			hambuger.src = './images/icon-close.svg';
			hambuger.alt = 'close menu'
		} else {
			hambuger.src = './images/icon-hamburger.svg';
			hambuger.alt = 'menu'
		}
	})

}());