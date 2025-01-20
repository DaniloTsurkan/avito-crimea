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