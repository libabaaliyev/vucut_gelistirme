$("#" + lang).attr("selected","");
$("#" + sound).attr("selected","");

for (var i = 0; i < alarms.length; i++) {
	
	let selected = '';

	if(alarms[i]['url'] == alarm)
		selected = 'selected=""';

	let create = `<option id="` + alarms[i]['url'] + `" value="` + alarms[i]['url'] + `" `+selected+`>` + alarms[i]['name'] + `</option>`;

	$(create).appendTo(".alarm-input");
}

$(".alarm-input").change(function()
{
    let value = $(this).val();
    start_alarm(value);

});

set_confirm_txt.click(()=>
{
	let lang_value 		= language_input	.children("option:selected").val();
	let sound_value 	= sound_input 		.children("option:selected").val();
	let alarm_value 	= alarm_input 		.children("option:selected").val();

	localStorage.lang 	= JSON.stringify(lang_value);
	localStorage.sound 	= JSON.stringify(sound_value);
	localStorage.alarm 	= JSON.stringify(alarm_value);
	location.reload();

});


set_reset_txt.click(()=>
{
	localStorage.removeItem("weight");
	localStorage.removeItem("height");
	localStorage.removeItem("bodyType");

	notification("success-reset"); 
});