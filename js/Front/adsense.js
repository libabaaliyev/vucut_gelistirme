bannerId 		= 'ca-app-pub-4626112194393151/9883510837';
interstitialId 	= 'ca-app-pub-4626112194393151/3372220600';
bannerPos 		= false;
clickCount 		= 0;
bannerShow 		= true;

/*
admob.banner.config({
 	id: bannerId,
 	bannerAtTop: bannerPos
})

admob.interstitial.config({
 	id: interstitialId,
})*/


function run_banner(position,action)
{
	if(position == 'top')
		bannerPos = true;
	else
		bannerPos = false;
	
	if(action == "hide"){
		//admob.banner.hide();
		bannerShow = false;
	}
	else{
		bannerShow = true;
		/*admob.banner.prepare();
		admob.banner.show();*/
	}

	//console.log("banner run"+action);

}

function run_interstitial()
{
	//console.log('interstitial run');
	/*admob.interstitial.prepare();
	admob.interstitial.show();*/
}