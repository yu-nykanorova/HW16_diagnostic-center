const menu = document.querySelector("#headerUl");
const burgerButton = document.querySelector("#burgerButton");
const closeButton = document.querySelector("#closeButton");

function menuToggle() {
	menu.classList.toggle("_active");
}

burgerButton.addEventListener("click", menuToggle);
closeButton.addEventListener("click", menuToggle);

document.addEventListener("click", (e) => {
	if (!menu.contains(e.target) && !e.target.closest("#burgerButton")) {
		menuToggle();
	}
});

$(document).ready(function () {
	$(".owl-carousel").owlCarousel({
		loop: true,
		margin: 0,
		dots: true,
		items: 1,
	});
});
