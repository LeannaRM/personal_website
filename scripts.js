window.addEventListener("load", function (){

	trigger = document.getElementsByClassName("hamburger_container")[0];
	trigger.addEventListener("click",showLinks);

	function showLinks() {
		nav = document.getElementsByClassName("links_container")[0];
		if (nav.classList.contains("showlinks")) {
			nav.classList.remove('showlinks');
		} else {
			nav.classList.add('showlinks');
		};
	};


});