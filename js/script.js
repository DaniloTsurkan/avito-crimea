import { useDynamicAdapt } from './src/dynamicAdapt.js'

useDynamicAdapt()

const iconMenu = document.querySelector('.menu__icon');
if (iconMenu) {
	const menuHeader = document.querySelector('.menu-header');
	iconMenu.addEventListener("click", function (e) {
		document.body.classList.toggle('lock');
		iconMenu.classList.toggle('active');
		menuHeader.classList.toggle('active');
	});
}


window.addEventListener('scroll', function () {
	scrollY > 0 ? document.querySelector('.header').classList.add('scroll') : document.querySelector('.header').classList.remove('scroll');
})

import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs'

const swiper = new Swiper('.swiper', {
	// Optional parameters
	loop: true,
	slidesPerView: 3,
	// If we need pagination
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
	spaceBetween: 20,
	breakpoints: {
		1024: { slidesPerView: 3 },
		768: { slidesPerView: 2 },
		320: { slidesPerView: 1 },
	},
});