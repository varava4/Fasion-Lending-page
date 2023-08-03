document.addEventListener('click', documentClick);

function documentClick(e) {
	const targetItem = e.target;
	if (targetItem.closest('.icon-menu')) {
		document.documentElement.classList.toggle('menu-open');
	}
};


const swiper = new Swiper(".swiper", {
	slidesPerView: 1,
	spaceBetween: 30,
	loop: true,
	breakpoints: {
		540: {
			slidesPerView: 1,
			spaceBetween: 30,
		},
		760: {
			slidesPerView: 2,
			spaceBetween: 30,
		},
		1076: {
			slidesPerView: 3,
			spaceBetween: 30,
		},
		1400: {
			slidesPerView: 4,
			spaceBetween: 30,
		}
	},
	autoplay: {
		delay: 3000,
		disableOnInteraction: false,
	},
});