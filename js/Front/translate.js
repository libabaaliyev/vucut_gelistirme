function translate_words(e) {
	if(e == "training")
	{
		musc_title				.html(translate_items['musc-title']);
		how_title				.html(translate_items['how-title']);
		help_title				.html(translate_items['help-title']);
	}
	else if(e == "setting")
	{

		set_open_txt			.html(translate_items['open']);
		set_close_txt			.html(translate_items['close']);
		set_lang_txt			.html(translate_items['language']);
		set_sound_txt			.html(translate_items['sound']);
		set_confirm_txt			.html(translate_items['confirm']);
		set_reset_txt			.html(translate_items['reset']);
		$(".followus")			.html(translate_items['followus']);
	}

	else if(e == "program")
	{
		information_txt 		.html(translate_items['information']);
		weight_txt				.html(translate_items['weight-txt']);
		height_txt				.html(translate_items['height-txt']);
		day_txt					.html(translate_items['day-txt']);

		week_txt				.html(translate_items['week-txt']);
		form_body_txt			.html(translate_items['form-body']);

		if(!bodyType)
			body_info_txt 		.html(translate_items['not-info']);
		else
			body_info_txt 		.html(translate_items[bodyType]);
		
		add_info_txt			.html(translate_items['add-info-notf']);

		pr_count_txt			.html(translate_items['pr-count']);
		time_count_txt			.html(translate_items['repeat-count']);
		set_count_tr 			.html(translate_items['set-txt'])

		$(".done-txt")			.html(translate_items['done']);
		$(".rest-txt")			.html(translate_items['rest']);
		$(".secund-txt")		.html(translate_items['seconds']);

		$("#first-week")		.html(translate_items['first-week']);
		$("#second-week")		.html(translate_items['second-week']);
		
		$(".first-day")			.html(translate_items['first-day']);
		$(".second-day")		.html(translate_items['second-day']);
		$(".third-day")			.html(translate_items['third-day']);

		start_txt				.html(translate_items['start']);
		next_txt				.html(translate_items['next']);
		skip_txt				.html(translate_items['skip-txt']);
	}
}
