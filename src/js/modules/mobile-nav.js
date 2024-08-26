function mobileNav() {
	// Mobile nav button
	const navBtnOpen = document.querySelector('#navBtnOpen');
	const navBtnClose = document.querySelector('#navBtnClose');
	const mobileNavFade = document.querySelector('.mobile-nav-fade');
	const nav = document.querySelector('.mobile-nav');

	// open nav
	navBtnOpen.onclick = openMobileNav;

	// close button
	navBtnClose.onclick = closeMobileNav;

	// close overlay
	mobileNavFade.onclick = closeMobileNav;

	function openMobileNav() {
		nav.classList.add('mobile-nav--open');
		mobileNavFade.classList.add('mobile-nav-fade--open');
		document.body.classList.toggle('no-scroll');
	}

	function closeMobileNav() {
		nav.classList.remove('mobile-nav--open');
		mobileNavFade.classList.remove('mobile-nav-fade--open');
		document.body.classList.toggle('no-scroll');
	}
}

export default mobileNav;
