// function changeBack() {
// 	var win = window.innerHeight;
// 	var nav = document.getElementsByTagName("nav")[0].navHeight;
// 	console.log(win);
// 	console.log(nav);
// }

// window.onload = function() {
// 	changeBack();
// }

window.onscroll = function() { scrollFunction() };
function scrollFunction() {
	var nav = document.getElementsByTagName("nav")[0];
	var navHeight = nav.offsetHeight;

	if (document.body.scrollTop > window.innerHeight || document.documentElement.scrollTop>window.innerHeight) {
		if (!nav.classList.contains('white-background')) {
			nav.classList.add('white-background');
		}
	} else {
		nav.classList.remove('white-background');
	}
}
