function notification(event,e1)
{
	messageTxt = notfs[event]['message'];
	if(e1)
		messageTxt = messageTxt + "<br>" + translate_items[e1];

	soundManager(notfs[event]['info']);

	Swal.fire(
	{
	  position				: 'center',
	  icon					: notifications[lang][event]['info'],
	  title					: messageTxt,
	  showConfirmButton 	: true,
	  backdrop				: true,
	  allowOutsideClick		: false,
	  allowEscapeKey		: false,
	  heightAuto			: true,
	  confirmButtonText 	: notifications[lang]['confirmText']
	 
	});

}