// ********* GLOBALS ***********
var nav = document.getElementsByTagName("nav")[0]; // var to Navigation bar
var cart_sm = document.getElementById("cart-sm");	// var to Cart btn on mobile-mode
var cart_lg = document.getElementById("cart-lg");	// var to Cart btn on desktop-mode


// ********* FUNCTION OVERWRITING *******
// Overwrite on browser resize function
window.onresize = function() {
	changeColorInNav();
	setCartPosition();
}

// Overwrite on website scrolll function
window.onscroll = function() {
	changeColorInNav();
}

// Overwrite on website load function
window.onload = function() {
	changeColorInNav();
	setCartPosition();
}


// ******* FUNCTIONS **********
// TO to switch background in navbar to-fro from transparent & white
function changeColorInNav() {
	/* Add white color in backgound, when
			1) width is less then 575 px
			2) user scrolled passed corosal part
		else remove background
	 */
	if (window.innerWidth<=575 || document.body.scrollTop > window.innerHeight || document.documentElement.scrollTop>window.innerHeight) {
		if (!nav.classList.contains('white-background')) { nav.classList.add('white-background'); }
	} else {
		nav.classList.remove('white-background');
	}
}

// To switch cart btn on left or right of nav-link in navbar
function setCartPosition() {
	// Display cart on left of nav-link in mobile mode
	// Display cart on right of nav-link in desktop mode
	if (window.innerWidth<=575) {
		cart_sm.classList.remove('d-none');
		cart_lg.classList.add('d-none');
	} else {
		cart_sm.classList.add('d-none');
		cart_lg.classList.remove('d-none');
	}
}