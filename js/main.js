var nav = document.getElementsByTagName("nav")[0];
var cartsm = document.getElementById("cart-sm");
var cartlg = document.getElementById("cart-lg");

window.onresize = function() {
	onDimensionChange();
	setCartPosition();
}

window.onscroll = function() {
	onDimensionChange();
}

window.onload = function() {
	onDimensionChange();
	setCartPosition();
}


function onDimensionChange() {
	if (nav.offsetWidth<575 || document.body.scrollTop > window.innerHeight || document.documentElement.scrollTop>window.innerHeight) {
		if (!nav.classList.contains('white-background')) { nav.classList.add('white-background'); }
	} else {
		nav.classList.remove('white-background');
	}
}

function setCartPosition() {
	if (nav.offsetWidth<575) {
		cartsm.classList.remove('d-none');
		cartlg.classList.add('d-none');
	} else {
		cartsm.classList.add('d-none');
		cartlg.classList.remove('d-none');
	}
}