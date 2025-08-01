const menu = document.querySelector("#headerUl");
const burgerButton = document.querySelector("#burgerButton");
const closeButton = document.querySelector("#closeButton");
const form = document.querySelector(".header-form");
const input = form.querySelector(".header-form__input");
const body = document.body;

// For burger menu

function openMenu() {
	menu.classList.add("_active");
	body.classList.add("no-scroll");
}

function closeMenu() {
	menu.classList.remove("_active");
	body.classList.remove("no-scroll");
}

function isMenuOpen() {
	return menu.classList.contains("_active");
}

burgerButton.addEventListener("click", openMenu);
closeButton.addEventListener("click", closeMenu);

document.addEventListener("click", (e) => {
	const clickOutsideMenu = !menu.contains(e.target) && !e.target.closest("#burgerButton");
	
	if (isMenuOpen() && clickOutsideMenu) {
		closeMenu();
	}
});

// For for header-form styles

input.addEventListener("input", () => {
	if (input.value) {
		form.classList.add("filled");
	} else {
		form.classList.remove("filled");
	}
});

//For owl carousel

$(document).ready(function () {
	$(".owl-carousel").owlCarousel({
		loop: true,
		margin: 0,
		dots: true,
		items: 1,
	});
});
