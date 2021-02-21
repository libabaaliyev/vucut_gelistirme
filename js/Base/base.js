body 			= document.querySelector('body');
next 			= $(".next");
back 			= $(".back");
loading			= $(".loading");
lang 			= JSON.parse(localStorage.lang);
words 			= JSON.parse(localStorage.words);
categories 		= JSON.parse(localStorage.categories);
translate_items = words[lang];
screenWidth 	= $("body").width();
scrollTop 		= 0;

$(window).scroll(function(e) {
  scrollTop = $(window).scrollTop();
});

function random_number(min,max)
{
	return Math.floor(Math.random()*(max-min+1)+min);
}