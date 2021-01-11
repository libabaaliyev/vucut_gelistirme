document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady(){

admob.banner.config({
	 id: 'ca-app-pub-4626112194393151/9883510837',
	})

	// Create banner
	admob.banner.prepare();

	// Show the banner
	admob.banner.show();
	
	/*admob.interstitial.config({
	 id: 'ca-app-pub-4626112194393151/3372220600',
	})

	reklam = 0;

	reklamverme();

	function reklamverme()
	{
		reklam++;

		if(reklam==2)
		{
			admob.interstitial.prepare();
			admob.interstitial.show();
			reklam = 0;
		}
		setTimeout(function()
		{
			reklamverme();
		},10000);

	}
*/
	

/*	
	
$(document).ready(function()
{*/

	menuicon = $(".menuicon");
	menu = $(".body_menu");
	menuaktiv = $(".body_menu ul li");
	bilgiicon = $(".bilgiicon");
	
	title = $(".title");
	govde = $(".body");
	help = $(".help");
	
	umumihisse = $(".body_cat");

	var orta = (parseInt($("body").width()))/2;

var menuacilma = 1,aktivm = 1,kateqoriya = 1,yardim = 1,motivasiya = 0,komeksayi,motiv_m,motivsay,avto_play = 1,bilgim = 0;
	
	
	var komekciler = 
		[
				{
					"yardim_basliq": "Proteinler",
					"yardim_metn":"Protein, kas kütlesi oluşturmak için gerekli olan bir makro besindir. Hayvan ürünlerinde yaygın olarak bulunur, ancak fındık ve baklagiller gibi başka kaynaklarda da bulunmaktadır. Makrobesinler, kalori veya enerji sağlayabilmektedirler. “University of Illinois McKinley Health Center”a göre vücut, işleyişini devam ettirebilmek için büyük miktarlarda makro besine ihtiyaç duymaktadır. Her bir gram protein, 4 kalori içerir. Protein, bir kişinin vücut ağırlığının yaklaşık yüzde 15'ini oluşturmaktadır."
				},
				{
					"yardim_basliq": "Balık yağı ne işe yarar?",
					"yardim_metn": "Balık yağının faydaları arasında çeşitli kalp rahatsızlıkları, kolesterol, depresyon, anksiyete bozuklukları, dikkat eksikliği ve hiperaktivite bozukluğu (DEHB), zayıflamış bağışıklık sistemi, kanser, diyabet, iltihaplanma, eklem iltihabı, iltihabi bağırsak sendromu, AIDS, Alzheimer, göz bozuklukları, sarı nokta hastalığı ve ülser tedavilerine yardımcı olarak kullanılması gelir. Bunlara ilave olarak kilo kaybı, sağlıklı bir hamilelik, doğurganlık ve cilt bakımı (özellikle sedef ve akne) için faydalıdır."
				},
				{
					"yardim_basliq": "Melatonin Hormonu",
					"yardim_metn": "Büyük bir kısmı epifiz bezinden salgılanmakta ve karanlıkta sentezlenmektedir. Karanlık bir ortam olduğu için gece vaktini tercih eden melatonin 23:00-5:00 saatleri arasında salgılanırken, en yüksek değerine 02:00-04:00 arasında ulaşmaktadır. Günün aydınlanması ile birlikte, optik sinirler aracılığıyla, melatonin hormonu sentezi durur ve serotonin hormonuna, yani mutluluk hormonuna dönüşür. Sadece gün ışığına bağlı kalmaksızın, lamba, televizyon gibi her türlü yapay ışık yayan etmenlerde, hayati önem taşıyan melatonin hormonunun salgılanmasını engellemektedir. Özellikle gece 2:00-4:00 saatleri arasında ışıktan izole edilmiş bir odada mutlaka uykuda olmamız gerekmektedir. Bunun için uyuduğumuz odada hiçbir ışık kaynağının bulunmaması, hatta ışık geçirmeyen perdelerin kullanılması uzmanlar tarafından önerilmektedir.<br>Melatonin sentezi, birçok işlevde olduğu gibi yaşa bağlı olarak azalmaktadır. En yüksek 1-3 yaş arasında salgılanan melatonin, 20’li yaşlara kadar yüksek seviyede salgılanma potansiyeline sahiptir."
				},
				{
					"yardim_basliq": "Şekerin zararları",
					"yardim_metn": "Amerikan Kalp Cemiyeti'nin yayınladığı rakamlara göre; günlük olarak alınabilecek şeker miktarı erkekler için 35 gram (150 kalori), kadınlar içinse 20 gram (100 kalori) olmalı.<br>1. Vücuda hiçbir faydası yok!<br>2. Ciltte kırışıklık yaratıyor.<br>3. Hafızayı zayıflatıyor. <br>4. Kanser riskini artırıyor. <br>5. Vücudun savunma sistemini zayıflatıyor.<br>6. Diş çürüklerine neden oluyor.<br>7. Obeziteye yol açıyor. <br>8. Karaciğer yağlanmasını tetikliyor.<br>9. Kalbe zarar veriyor. <br>10. Mutsuzluk nedeni.<br>11. İnsülin direncine sebep oluyor.<br>Sofra şekeri (sükroz) iki bağlı molekülden oluşur: Glikoz ve fruktoz. Vücutta, bu bağ kırılır ve ayrı ayrı glikoz ve fruktoz salınımı meydana gelir. Kan akışı, glikoz moleküllerini alır ve bunları vücutta enerjiye ihtiyaç duyan organlara taşır. Ancak, fruktoz molekülü yalnızca karaciğer tarafından kullanılır. Karaciğerde depolanan bu şeker az miktardadır çünkü ilk insanlar meyve ve bal gibi ürünlerle az karşılaştığı için vücut kullanmadığı kısmı burada depolamayı tercih eder. Günümüzde ise vücudun günlük fruktoz alımı 54.7 gram kadardır. (Yaklaşık 14 çay kaşığı kadar.) Bu miktar, karaciğerin metabolize edebileceğinden çok daha fazladır. Uzmanlara göre bu miktar, bir insanın genel fizyolojisini bozmaya yeter de artar bile."
				},
				{
					"yardim_basliq":"Somon Balığı",
					"yardim_metn": "Somon - ve diğer yağlı balık türleri - en fazla miktarda omega-3 yağ asidi içerir .<br>Omega-3'ler vücudunuzun optimum işlevi için son derece önemlidir. İyileştirilmiş refah ve birçok ciddi hastalık riski daha düşüktür.<br>Her ne kadar somon balığı, esas olarak yağ asitlerinin faydalı bileşimi ile ödüllendirilmesine rağmen, aynı zamanda büyük miktarda başka besinleri de içerir.<br>Vahşi somon 100 gram parçası, yüksek kaliteli hayvan proteini ve magnezyum, potasyum, selenyum ve B vitaminleri (büyük miktarda dahil olmak üzere geniş bir vitamin ve mineraller, sürü ile birlikte, omega-3, 2.8 gram içerir).<br>Vücudunuzun ihtiyaç duyduğu tüm omega-3'leri almak için haftada en az bir veya iki kez yağlı balık yemek iyi bir fikirdir.<br>Araştırmalar, düzenli olarak yağlı balık yiyen insanların kalp hastalığı, demans, depresyon ve diğer birçok yaygın hastalık riskinin daha düşük olduğunu göstermektedir.<br>Ayrıca, somon tadı iyi ve hazırlanması oldukça kolaydır. Aynı zamanda görece az kalori ile dolu hissetmenizi sağlar.<br>Yapabilirseniz, çiftlik yerine yabani somonu seçin. Daha besleyicidir, daha iyi bir omega-6 ila omega-3 oranına sahiptir ve kirletici madde içermesi daha düşüktür.<br>ÖZET<br>Somon gibi yağlı balıklar, faydalı yağ asitleri, protein, vitamin ve minerallerle doludur. Her hafta yağlı balık yemek iyi bir fikirdir.<br>"
				},
				{
					"yardim_basliq": "Lahana",
					"yardim_metn": "Vitaminler, mineraller, lif, antioksidanlar ve çeşitli biyoaktif bileşiklerle doludur.<br>100 gramlık bir lahana kısmı içerir :<br>C Vitamini: RDI'nın% 200'ü<br>A Vitamini: RDI'nin% 300'ü<br>K1 Vitamini: RDI’nin% 1.000’i<br>Çok miktarda B6 vitamini, potasyum, kalsiyum, magnezyum, bakır ve manganez<br>Aynı miktar 2 gram lif, 3 gram protein ve sadece 50 kaloriye sahiptir.<br>Lahana ıspanaktan bile daha sağlıklı olabilir. Her ikisi de çok besleyicidir, ancak lahana bağırsakta kalsiyum gibi mineralleri bağlayan ve emilmelerini önleyen maddeler olan oksalatlarda daha düşüktür.<br>Lahana ve diğer yeşillikler , tüp ve hayvan çalışmalarında kansere karşı mücadele ettiği kanıtlanan izotiyosiyanatlar ve indol-3-karbinol gibi çeşitli biyoaktif bileşiklerde de yüksektir.<br>ÖZET<br>Lahana, bol miktarda vitamin, mineral ve kanserle mücadele bileşikleri içeren, yiyebileceğiniz en yoğun sebzelerden biridir.<br>"
				},
				{
					"yardim_basliq": "Yosun",
					"yardim_metn": "Denizde balıktan daha fazlası var. Aynı zamanda büyük miktarda bitki örtüsü içerir.<br>Okyanusta, bazıları çok besleyici olan binlerce farklı bitki türü var. Genellikle toplu olarak deniz yosunu olarak adlandırılırlar.<br>Yosun suşi gibi yemeklerde popülerdir. Suşi yemeklerinin birçoğunda, yenilebilir bir ambalaj olarak kullanılan ve nori olarak bilinen bir deniz yosunu türü de bulunmaktadır.<br>Çoğu durumda, deniz yosunu kara sebzelerinden bile daha besleyicidir. Kalsiyum, demir, magnezyum ve manganez gibi minerallerde özellikle yüksektir.<br>Aynı zamanda, fososiyaninler ve karotenoidler dahil olmak üzere çeşitli biyoaktif bileşiklerle yüklenir. Bu maddelerin bazıları, güçlü antienflamatuar kapasiteye sahip antioksidanlardır.<br>Ancak deniz yosunu, vücudunuzun tiroid hormonları yapmak için kullandığı bir mineral olan yüksek iyot içeriğinde parlar.<br>Sadece birkaç kez yosun gibi yüksek iyotlu bir deniz yosunu yemek vücudunuza ihtiyaç duyduğu tüm iyotları verebilir.<br>Deniz yosununun tadını beğenmiyorsanız, ek olarak da alabilirsiniz. Kurutulmuş yosun tabletler çok ucuz ve iyot yüklü.<br>ÖZET<br>Deniz sebzeleri oldukça besleyicidir ancak Batı'da nadiren tüketilmektedir. Bunlar, özellikle optimum tiroid işlevi için gerekli olan iyot bakımından oldukça yüksektir.<br>"
				},
				{
					"yardim_basliq": "Sarımsak",
					"yardim_metn": "Her türlü yumuşak tabağı lezzetli hale getirmekle kalmaz, aynı zamanda çok besleyicidir.<br>Vitamin C, B1 ve B6, kalsiyum, potasyum, bakır, manganez ve selenyum bakımından yüksektir.<br>Sarımsak, allisin gibi faydalı sülfür bileşiklerinde de yüksektir.<br>Birçok çalışma, allisin ve sarımsakların, kan basıncının yanı sıra total ve “kötü” LDL kolesterolü düşürdüğünü göstermektedir. Ayrıca “iyi” HDL kolesterolü yükseltir ve potansiyel olarak kalp hastalığı riskini azaltır.<br>Ayrıca çeşitli kanserle mücadele özelliklerine sahiptir. Araştırmalar, çok fazla sarımsak yiyen insanların, özellikle kolon ve mide kanserleri olmak üzere, birçok yaygın kanser riski çok daha düşük olduğunu göstermektedir.<br>Çiğ sarımsak da önemli antibakteriyel ve antifungal özelliklere sahiptir.<br>ÖZET<br>Sarımsak hem lezzetli hem de sağlıklıdır. Oldukça besleyicidir ve içindeki biyoaktif bileşikler hastalıklarla mücadele özelliklerini doğrulamıştır.<br>"
				},
				{
					"yardim_basliq": "Patates",
					"yardim_metn": "Tek bir büyük patates , potasyum, magnezyum, demir, bakır ve manganez bakımından yüksektir. Ayrıca C vitamini ve çoğu B vitamini içerir.<br>İhtiyacınız olan hemen hemen her besinden biraz içeriyorlar. Uzun zamandır patates dışında hiçbir şeyde yaşayan insanların hesapları var.<br>Aynı zamanda en dolgulu yiyeceklerden biridir. Araştırmacılar farklı yiyeceklerin doyma değerini karşılaştırdıklarında, haşlanmış patatesler ölçülen diğer yiyeceklerden daha yüksek puan aldı.<br>Patateslerin pişirildikten sonra soğumasına izin verirseniz, güçlü sağlık yararları olan lif benzeri bir madde olan dirençli nişasta da oluştururlar.<br>ÖZET<br>Patates, ihtiyacınız olan hemen hemen her besin maddesinin bir kısmını içerir. İnanılmaz derecede doludurlar ve çok miktarda dirençli nişasta sağlayabilirler.<br>"
				},
				{
					"yardim_basliq": "Karaciğer",
					"yardim_metn": "Bununla birlikte, modern Batı diyeti kas etine organ etlerine göre öncelik vermiştir. Organlara kıyasla kas eti besleyici olarak zayıf.<br>Tüm organların dışında karaciğer,en besleyicidir.<br>Karaciğer, metabolizma ile ilgili yüzlerce işlevi olan dikkat çekici bir organdır. İşlevlerinden biri, vücudunuzun geri kalanı için önemli besinleri depolamaktır.<br>3.5 gramlık (100 gram) bir sığır karaciğeri kısmı içerir :<br>B12 Vitamini: DV'nin% 1,176'sı<br>B5 Vitamini, B6 Vitamini, Niasin ve Folat: DV'nin% 50'sinden fazlası<br>B2 Vitamini: DV'nin% 201'i<br>A Vitamini: DV'nin% 634'ü<br>Bakır: DV'nin% 714'ü Demir, fosfor, çinko ve selenyum: DV'nin% 30'undan fazlası<br>Yüksek kaliteli hayvansal protein: 29 gram Karaciğerin haftada bir kez yemek yemesi, bu hayati besinlerin optimal miktarlarını almanızı sağlamak için iyi bir yoldur.<br>ÖZET<br>Karaciğer, yüksek miktarda B vitamini ve diğer sağlıklı maddeleri içeren oldukça besleyici bir organ etidir.<br>"
				},
				{
					"yardim_basliq": "Yumurta sarısı",
					"yardim_metn": "Bununla birlikte, araştırmalar diyet kolesterolünün genellikle endişelenmeniz gereken bir şey olmadığını göstermektedir.<br>Orta derecede kolesterol yemek, kanınızdaki “kötü” LDL kolesterolü yükseltmez.<br>Bu nedenle yumurta sarısı, gezegendeki en besleyici gıdalardan biridir. Bütün yumurtalar o kadar besleyicidir ki bazen “doğanın multivitamin” olarak adlandırılırlar.<br>Yumurta sarısı vitaminler, mineraller ve kolin de dahil olmak üzere çeşitli güçlü besinlerle yüklenir.<br>Lutein ve zeaksantin bakımından zengindirler, gözlerinizi koruyabilen ve katarakt ve maküler dejenerasyon gibi göz hastalığı riskini azaltan antioksidanlar.<br>Yumurtalar ayrıca yüksek kaliteli protein ve sağlıklı yağlar içerir. Bazı çalışmalar kilo vermenize yardımcı olabileceğini göstermektedir.<br>Ayrıca ucuz, lezzetli ve hazırlanmaları kolaydır.<br>Yapabiliyorsanız, otlak ve / veya omega-3 zenginleştirilmiş yumurta satın alın. Geleneksel süpermarket yumurtalarının çoğundan daha sağlıklı ve besleyicidirler.<br>ÖZET<br>Bütün yumurtalar o kadar besleyicidir ki bazen “doğanın multivitamini” olarak adlandırılırlar. Sarısı hemen hemen tüm besin maddelerinin bulunduğu yerdir.<br>"
				}

		];


	var komeksayi = komekciler.length;
	var komekacma = localStorage.komekacma;
	var yardimci = 0;
	var komekferq = komekciler.length-komekacma;
	
	if(komekacma!=komekciler.length)
	{
		if(komekacma==0)
		{
			$(".head_r span").html(komekciler.length);
		}
		else
		{	
			if(komekferq<0)
			{
				$(".head_r span").html("");	
			}
			else
			{
				$(".head_r span").html(komekferq);
			}
			
		}
		
	}
	else
	{
		$(".head_r span").html("");
	}


	// #-varsa 
	var hashnumber = window.location.hash.substr(1);
	
	if(hashnumber)
	{
		$("#kesfet"+hashnumber).show();
	}

	
	//menu acilma - x1
		menuicon.click(function()
		{
			
			if(menuacilma==1)
			{
				govde.show();
				menu.show();
				
				$(".qaralti_x").show();
				umumihisse.css("opacity",0.5);
				$(".body").css("z-index",104);

				menu.removeClass('fadeInLeft');
				menu.addClass("fadeInLeft");

				bilgiicon.removeClass("fas fa-times-circle");
				bilgiicon.addClass("fas fa-lightbulb");
				
				$(".head_r span").hide();		

				yardim = 1;

				menuacilma=0;
				bilgiicon.hide();
			}
			else
			{
				
				$(".head_r span").show();
				umumihisse.css("opacity",1);
				$(".qaralti_x").fadeOut();
				
				menu.removeClass('fadeInLeft');
				menu.fadeOut();
				
				menuacilma=1;
				setTimeout(function()
				{
					$(".body").css("z-index",102);
					if(bilgim==1)
					{
						govde.hide();
					}
					menu.hide();
				},500);
			
				bilgiicon.show();
			}
			

		});

		var toxunmahisse = document.querySelector('body');
		var pagex,pagey,page_y,hesab;
		toxunmahisse.addEventListener('touchstart',function(e)
		{
			//console.log(e);
			pagex = e.changedTouches[0].pageX;
			page_y = e.changedTouches[0].pageY;
			
		});

		toxunmahisse.addEventListener('touchend',function(e)
		{
			pagey = e.changedTouches[0].pageX;
			
			hesab = pagey - pagex;
			
			if(page_y>50)
			{
				
				if(hesab>=100)
				{
					if(pagex<=20)
					{
						
						if(menuacilma==1)
						{

							if(yardim==0)
							{
								title.html(titlead);
								menuicon.show();
								
							}	
							govde.show();
							menu.show();
							help.hide();
							
							bilgiicon.hide();
							$(".qaralti_x").show();
							umumihisse.css("opacity",0.5);
							$(".body").css("z-index",104);
							
							menu.removeClass('fadeInLeft');
							menu.addClass("fadeInLeft");

							menuacilma=0;
							
							bilgiicon.removeClass("fas fa-times-circle");
							bilgiicon.addClass("fas fa-lightbulb");
							$(".head_r span").hide();		
							
						}
					}
					else
					{
						if(yardim==0)
						{
									
								yardimci = yardimci-1;
								if(yardimci<=0)
									yardimci = komeksayi-1;
								
								$(".help_desk").removeClass("bounceInLeft");
								$(".help_desk").removeClass("bounceInRight");
								


								setTimeout(function()
								{
									$(".help_desk").addClass("bounceInLeft");
									$(".helptitle").html(komekciler[yardimci]['yardim_basliq']);
									$(".helpinfo").html(komekciler[yardimci]['yardim_metn']);
								},10);
							



						}
					}
				}
				else if(hesab<=-100)
				{
					if(menuacilma==0)
					{
						bilgiicon.show();
						if(yardim==0)
						{
							$(".head_r span").hide();
							bilgiicon.removeClass("fas fa-lightbulb");
							bilgiicon.addClass("fas fa-times-circle");
							
							
								title.html("Bilgi");

								
								
								menuicon.hide();

								help.show();
							
							
						}
						else
						{
							$(".head_r span").show();
						}
						umumihisse.css("opacity",1);
						$(".qaralti_x").fadeOut();
						
						menu.removeClass('fadeInLeft');
						menu.fadeOut();
						
						menuacilma=1;
						setTimeout(function()
						{
							$(".body").css("z-index",102);
							if(bilgim==1)
							{
								govde.hide();
							}
							menu.hide();
						},500);

					}
					else
					{
						if(yardim==0)
						{
							//saga tiklama
							if(orta<=pagex)
							{
									yardimci = yardimci+1;
									
									if(yardimci==komeksayi)
									{
										yardimci = 0;
										komekacma = komekciler.length;
										localStorage.komekacma = komekacma;
									}
									
									if(komekacma!=komekciler.length)
									{
										komekacma = komekacma - 1;


										localStorage.komekacma = komekacma;

										if(komekferq>komekacma&&komekferq>0)
										{
											if(komekacma==0)
											{
												komekacma = komekciler.length;
												localStorage.komekacma = komekacma;
												$(".head_r span").html("");
											}
											else
											{	

												$(".head_r span").html(komekacma);	
											}
											
										}
										
									}
									else
									{
										$(".head_r span").html("");
										$(".head_r span").hide();
									}
									
									$(".help_desk").removeClass("bounceInRight");
									$(".help_desk").removeClass("bounceInLeft");
									
									setTimeout(function()
									{
										
										$(".help_desk").addClass("bounceInRight");
									

										$(".helptitle").html(komekciler[yardimci]['yardim_basliq']);
										$(".helpinfo").html(komekciler[yardimci]['yardim_metn']);


									},10);
								
							}
							else //sola tiklama
							{
										
									yardimci = yardimci-1;
									if(yardimci<=0)
										yardimci = komeksayi-1;
									
									$(".help_desk").removeClass("bounceInLeft");
									$(".help_desk").removeClass("bounceInRight");
									


									setTimeout(function()
									{
										$(".help_desk").addClass("bounceInLeft");
										$(".helptitle").html(komekciler[yardimci]['yardim_basliq']);
										$(".helpinfo").html(komekciler[yardimci]['yardim_metn']);
									},10);
								
							}
							
						}
					}
					
				}
			}
		});	

	//menu secimi - x2
		menuaktiv.click(function()
		{
			
			aktivm = $(this).data("value");
			if(aktivm==6)
			{
				
				localStorage.removeItem('boy');
				localStorage.removeItem('kilo');
				localStorage.removeItem('home');
				localStorage.removeItem('gunsay');
				localStorage.removeItem('cat');
				localStorage.removeItem('level');
				localStorage.removeItem('mesq_level');
				localStorage.removeItem('mesqgunsay');
				localStorage.removeItem('vucuttipi');

				govde.hide();
				loading.show();
				setTimeout(function()
				{
					loading.hide();
					location.reload();
				},1000);
				

			}

		});

	//paylas - x3
		paylasim.click(function()
		{
			
			
				umumihisse.css("opacity",1);
				$(".qaralti_x").fadeOut();
				
				menu.removeClass('fadeInLeft');
				menu.fadeOut();
				
				menuacilma=1;
				setTimeout(function()
				{
					$(".body").css("z-index",102);
					if(bilgim==1)
					{
						govde.hide();
					}
					menu.hide();
				},500);

			
			
			paylas();
		});

		function paylas() 
	    {
	        var options = {
	            message: 'Vücut Geliştirme Rehberi mükemmel sonuçlar elde etmenize yardımcı olacak.', // Paylaşılcak yazı metni  .  (Facebook, Instagram patformlarında gözükmez)
	            subject: 'Vücut Geliştirme Rehberi', // Paylaşılcak açıklama
	            files: ['', ''], // Resim paylaşmak istiyorsanız url , base64 veya cihaz içerisindeki resim yolu bu diziye eklencek
	            url: 'https://play.google.com/store/apps/details?id=com.alibabastudio.bodybuilding',//Link paylaşmak istiyorsanız
	            chooserTitle: 'Vücut Geliştirme Rehberi' // Uygulama seçimi yaparken gözükecek başlık (Android için)
	        }
	        var onSuccess = function (result) {
	            
	            }
	        var onError = function (msg) {
	            /*alert("Paylaşım Hatası :" + msg);*/
	        }
	        window.plugins.socialsharing.shareWithOptions(options, onSuccess, onError);
	    }


	//bilgi
	bilgiicon.click(function()
	{
		if(yardim==1)
		{
			menuacilma=1;
			
			menu.hide();

			title.html("Bilgi");
			$(".head_r span").hide();
			bilgiicon.removeClass("fas fa-lightbulb");
			bilgiicon.addClass("fas fa-times-circle");
			
			yardim = 0;
			menuicon.hide();
			govde.hide();
			help.show();

			$(".helptitle").html(komekciler[yardimci]['yardim_basliq']);
			$(".helpinfo").html(komekciler[yardimci]['yardim_metn']);


		}
		else
		{
			
			title.html("Keşfet");

			$(".head_r span").show();
			bilgiicon.removeClass("fas fa-times-circle");
			bilgiicon.addClass("fas fa-lightbulb");
			
			
			yardim = 1;
			
			menuicon.show();
			govde.show();

			help.hide();


		}


	});

	$(".help_left").click(function()
	{
		yardimci = yardimci-1;
		if(yardimci<=0)
			yardimci = komeksayi-1;
		
		$(".help_desk").removeClass("bounceInLeft");
		$(".help_desk").removeClass("bounceInRight");
		


		setTimeout(function()
		{
			$(".help_desk").addClass("bounceInLeft");
			$(".helptitle").html(komekciler[yardimci]['yardim_basliq']);
			$(".helpinfo").html(komekciler[yardimci]['yardim_metn']);
		},10);

	});

	$(".help_right").click(function()
	{
		yardimci = yardimci+1;
		if(yardimci==komeksayi)
		{
			yardimci = 0;
			komekacma = komekciler.length;
			localStorage.komekacma = komekacma;
		}
		
		if(komekacma!=komekciler.length)
		{
			komekacma = komekacma - 1;


			localStorage.komekacma = komekacma;

			if(komekferq>komekacma&&komekferq>0)
			{
				if(komekacma==0)
				{
					komekacma = komekciler.length;
					localStorage.komekacma = komekacma;
					$(".head_r span").html("");
				}
				else
				{	

					$(".head_r span").html(komekacma);	
				}
				
			}
			
		}
		else
		{
			$(".head_r span").html("");
			$(".head_r span").hide();
		}
		
		$(".help_desk").removeClass("bounceInRight");
		$(".help_desk").removeClass("bounceInLeft");
		
		setTimeout(function()
		{
			
			$(".help_desk").addClass("bounceInRight");
		

			$(".helptitle").html(komekciler[yardimci]['yardim_basliq']);
			$(".helpinfo").html(komekciler[yardimci]['yardim_metn']);


		},10);
		


	});

}
