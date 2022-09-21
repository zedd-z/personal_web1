$(document).ready(function () {
	const body = $("body");
	const orb = $(".orb");
	let timeout;
	let daytimeToggle = false;
	let darkimg = document.getElementById("darkimg");
	let darkbtn = document.getElementById("darkbtn");

	orb.on("click tap", (e) => {
		clearTimeout(timeout);
		daytimeToggle = !daytimeToggle;
		if (daytimeToggle) {
			body.addClass("dark");
		} else {
			body.removeClass("dark");
		}
	});


	function todark() {
		if (darkimg.getAttribute('src') === "intro/background12.jpg") {
			darkimg.setAttribute('src', "intro/darkbg2.jpg");
        }
else {
	darkimg.setAttribute('src', "intro/background12.jpg")
}
	}
	darkbtn.addEventListener("click", todark);


});
