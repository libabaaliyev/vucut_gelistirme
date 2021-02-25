$("#" + lang).attr("selected","");
$("#" + sound).attr("selected","");



set_confirm_txt.click(()=>
{
	let lang_value 		= language_input	.children("option:selected").val();
	let sound_value 	= sound_input 		.children("option:selected").val();

	localStorage.lang 	= JSON.stringify(lang_value);
	localStorage.sound 	= JSON.stringify(sound_value);

	location.reload();

});


set_reset_txt.click(()=>
{
	localStorage.removeItem("weight");
	localStorage.removeItem("height");
	localStorage.removeItem("bodyType");

	notification("success-reset"); 
});