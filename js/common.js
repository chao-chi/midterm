const ELEMENTS = document.querySelectorAll(".HOVER");
const ELEMENTS_SPAN = [];

ELEMENTS.forEach((element, index) => {  
	// If The span element for this element does not exist in the array, add it.
	if (!ELEMENTS_SPAN[index])
		ELEMENTS_SPAN[index] = element.querySelector("span");

	element.addEventListener("mouseover", e => {
		ELEMENTS_SPAN[index].style.left = e.pageX - element.offsetLeft + "px";
		ELEMENTS_SPAN[index].style.top = e.pageY - element.offsetTop + "px";
	});

	element.addEventListener("mouseout", e => {
		ELEMENTS_SPAN[index].style.left = e.pageX - element.offsetLeft + "px";
		ELEMENTS_SPAN[index].style.top = e.pageY - element.offsetTop + "px";
	});
});

$(document).ready(function () {
  $('.third-button').on('click', function () {

    $('.animated-icon3').toggleClass('open');
  });
});
