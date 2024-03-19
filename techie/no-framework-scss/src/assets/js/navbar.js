const navbar = document.querySelector('.header');

window.onscroll = () => {
	if (window.scrollY > 50) {
		navbar.classList.add('header-bg-onscroll');
	} else {
		navbar.classList.remove('header-bg-onscroll');
	}
};
