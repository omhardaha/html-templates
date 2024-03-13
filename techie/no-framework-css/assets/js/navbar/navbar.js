const navbar = document.querySelector('.nav-bar');

console.log(navbar);
window.onscroll = () => {
	if (window.scrollY > 50) {
		navbar.classList.add('nav-bg');
		console.log("ffff");
	} else {
		navbar.classList.remove('nav-bg');
	}
};

console.log("ffff");
