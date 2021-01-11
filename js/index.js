document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady(){
	
	document.addEventListener("backbutton", onBackKeyDown, false);
	
	admob.banner.config({
	 id: 'ca-app-pub-4626112194393151/9883510837',
	})

	// Create banner
	admob.banner.prepare();

	// Show the banner
	admob.banner.show();
	
	admob.interstitial.config({
	 id: 'ca-app-pub-4626112194393151/3372220600',
	})

	var reklam = 0;
/*
	admob.rewardvideo.config({
	 id: 'ca-app-pub-4626112194393151/3158320380',
	})
	
	admob.rewardvideo.prepare()
	
	admob.rewardvideo.show()


	
	
$(document).ready(function()
{*/
	loading = $(".loading");
	menuicon = $(".menuicon");
	menu = $(".body_menu");
	menuaktiv = $(".body_menu ul li");
	bilgiicon = $(".bilgiicon");
	bilgi = $(".bilgi");
	paylasim = $(".paylas");
	kat_secme = $(".kateqoriya ul li");

	motiv_secme = $(".motiv ul li");
	
	title = $(".title");
	govde = $(".body");
	help = $(".help");
	motive = $(".motive");
	//1.6
	umumihisse = $(".body_cat");
	//1.6

	var orta = (parseInt($("body").width()))/2;
	

	//ilkin bilgiler - x0
		var menuacilma = 1,aktivm = 1,kateqoriya = 1,yardim = 1,motivasiya = 0,komeksayi,motiv_m,motivsay,avto_play = 1,bilgim = 0;
		var motivasiya_id = -1;
		var titlead = document.title;

		var home = localStorage.home;
		
		var cat_id = localStorage.cat;
		
		var kilo = localStorage.kilo;
		
		var boy = localStorage.boy;

		var vucuttipi = localStorage.vucuttipi; 
		
		var bodyolcusu = $('body').width();

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


		var komekacma = localStorage.komekacma;
		var yardimci = 0;
		var komekferq = komekciler.length-komekacma;
		if(localStorage.getItem("komekacma")===null)
		{
	
			komekacma = 0;
			localStorage.komekacma = komekacma;
			//yardimci = parseInt(komekciler.length) - parseInt(komekacma);
			komekferq = komekciler.length;
		}

		
		
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

		var motivasiya = 
		[
			{
				"ad": "Spor Salonuna Gitmeden Önce İzleyin",
				"video_id": "331838190",
				"sekil": "hitgym.jpg"

			},
			{
				"ad": "Neler Başaracağını Gör",
				"video_id": "331837488",
				"sekil": "omuz_orta.jpg"
			},
			{
				"ad": "Asla Pes Etme",
				"video_id": "331834932",
				"sekil": "nevergiveup.jpeg"
			},
			{
				"ad": "Bodybuilding",
				"video_id": "331835805",
				"sekil": "kol_cetin.jpg"
			},
			{
				"ad": "Rich Piana",
				"video_id": "331837816",
				"sekil": "richpiana.png"
			},
			{
				"ad": "Lazar Angelov",
				"video_id": "331836957",
				"sekil": "lazarangelov.jpg"
			},
			{
				"ad": "C.T. Fletcher",
				"video_id": "331836552",
				"sekil": "ctfletcher.jpg"
			}

		];

		var kateqoriyalar = 
		[
			{
				"ad": "Göğüs Kası",
				"sekil": "img/sine_cetin.jpg",
				"sekil1": "img/sine_asan.jpg",
				"sekil2": "img/sine_orta.jpg",
				"sekil3": "img/sine_cetin.jpg"
			},
			{
				"ad": "Kol Kasları",
				"sekil": "img/cat2.jpg",
				"sekil1": "img/kol_asan.jpg",
				"sekil2": "img/kol_orta.jpg",
				"sekil3": "img/kol_cetin.jpg"
			},
			{
				"ad": "Omuz Kası",
				"sekil": "img/cat3.jpg",
				"sekil1": "img/omuz_asan.jpg",
				"sekil2": "img/omuz_orta.jpg",
				"sekil3": "img/omuz_cetin.jpg"
			},
			{
				"ad": "Sırt",
				"sekil": "img/cat4.jpg",
				"sekil1": "img/sirt_asan.jpg",
				"sekil2": "img/sirt_orta.jpg",
				"sekil3": "img/sirt_cetin.jpg"
			},
			{
				"ad": "Karın Kası",
				"sekil": "img/cat5.jpg",
				"sekil1": "img/karin_asan.jpg",
				"sekil2": "img/karin_orta.jpg",
				"sekil3": "img/karin_cetin.jpg"
			},
			{
				"ad": "Bacak",
				"sekil": "img/cat6.jpg",
				"sekil1": "img/bacak_asan.jpg",
				"sekil2": "img/bacak_orta.jpg",
				"sekil3": "img/bacak_cetin.jpg"
			}
		];

		var komeksayi = komekciler.length;

		var motivsay = motivasiya.length;

		var kateqoriya_sayi =kateqoriyalar.length;

		if(localStorage.getItem("home")===null)
		{
			home = 0;
			localStorage.setItem("home",home);

			cat_id = 0;
			localStorage.setItem("cat",cat_id);

			kilo = 0;
			localStorage.setItem("kilo",kilo);


			boy = 0;
			localStorage.setItem("boy",boy);

			vucuttipi = 0;
			localStorage.setItem("vucuttipi",vucuttipi);


		}
		else
		{

			var cat_b = localStorage.getItem('cat_body');
			var cat = JSON.parse(cat_b);
		}
	//ilkin bilgiler - x0
		
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

				menuacilma=0;
				motive.hide();
				bilgiicon.removeClass("fas fa-times-circle");
				bilgiicon.addClass("fas fa-lightbulb");
				
						
				yardim = 1;
				bilgiicon.hide();  $(".head_r span").hide();

				$(".motiveurl").attr("src","?autoplay="+avto_play);
				avto_play = 1;
				motive.hide();

			}
			else
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
				bilgiicon.show();  $(".head_r span").show();

			}
			

		});

		//touch test

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
								$(".motiveurl").attr("src","?autoplay="+avto_play);
								avto_play = 1;
								motive.hide();
							}	
							govde.show();
							menu.show();
							help.hide();
							motive.hide();
							bilgiicon.hide();

							$(".head_r span").hide();
							
							$(".qaralti_x").show();
							umumihisse.css("opacity",0.5);
							$(".body").css("z-index",104);
							
							menu.removeClass('fadeInLeft');
							menu.addClass("fadeInLeft");

							menuacilma=0;
							motive.hide();
							bilgiicon.removeClass("fas fa-times-circle");
							bilgiicon.addClass("fas fa-lightbulb");
							//$(".head_r span").show();
									
							
						}
					}
					else
					{
						if(yardim==0)
						{
							if(motivasiya_id==-1)
							{	
								reklam++;

								if(reklam==10)
								{
									admob.interstitial.prepare();
									admob.interstitial.show();
									reklam = 1;
								}

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
							else
							{
								if(motivasiya_id==0)
										{
											motivasiya_id = motivsay;
											
											setTimeout(function()
											{
												$(".motive_desk").addClass("bounceInLeft");
												$(".motivetitle").html(motivasiya[motivsay]['ad']);
												$(".motiveurl").attr("src","https://player.vimeo.com/video/"+motivasiya[motivasiya_id]['video_id']+"?autoplay="+avto_play+"&title=0&byline=0");

												

											},100);
											
										}
										else
										{
											motivasiya_id = motivasiya_id-1;
											setTimeout(function()
											{
												$(".motive_desk").addClass("bounceInLeft");
												$(".motivetitle").html(motivasiya[motivasiya_id]['ad']);
												$(".motiveurl").attr("src","https://player.vimeo.com/video/"+motivasiya[motivasiya_id]['video_id']+"?autoplay="+avto_play+"&title=0&byline=0");

												

											},100);
										}
									
									$(".motive_desk").removeClass("bounceInLeft");
									$(".motive_desk").removeClass("bounceInRight");


							}



						}
					}
				}
				else if(hesab<=-100)
				{
					if(menuacilma==0)
					{
						bilgiicon.show();  $(".head_r span").show();
						if(yardim==0)
						{
							$(".head_r span").hide();
							bilgiicon.removeClass("fas fa-lightbulb");
							bilgiicon.addClass("fas fa-times-circle");
							
							if(motivasiya_id<0)
							{
								title.html("Bilgi");

								
								
								menuicon.hide();

								help.show();
							}
							else
							{
								govde.hide();

								motive.show();

								$(".motivetitle").html(motivasiya[motivasiya_id]['ad']);
								$(".motiveurl").attr("src","https://player.vimeo.com/video/"+motivasiya[motivasiya_id]['video_id']+"?autoplay="+avto_play+"&title=0&byline=0");


							}
							
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
								if(motivasiya_id<0)
								{
									reklam++;

									if(reklam==10)
									{
										admob.interstitial.prepare();
										admob.interstitial.show();
										reklam = 0;
									}

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
								else
								{
									motivasiya_id = motivasiya_id+1;
									
									if(motivasiya_id==motivsay)
										motivasiya_id = 0;
									
									$(".motive_desk").removeClass("bounceInRight");
									$(".motive_desk").removeClass("bounceInLeft");
									
									setTimeout(function()
									{
										
										$(".motive_desk").addClass("bounceInRight");
									

										$(".motivetitle").html(motivasiya[motivasiya_id]['ad']);
										$(".motiveurl").attr("src","https://player.vimeo.com/video/"+motivasiya[motivasiya_id]['video_id']+"?autoplay="+avto_play+"&title=0&byline=0");


									},10);
								}
							}
							else //sola tiklama
							{
								if(motivasiya_id<0)
								{		
									reklam++;

									if(reklam==10)
									{
										admob.interstitial.prepare();
										admob.interstitial.show();
										reklam = 0;
									}
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
								else
								{
									if(motivasiya_id==0)
										{
											motivasiya_id = motivsay;

											setTimeout(function()
											{
												$(".motive_desk").addClass("bounceInLeft");
												$(".motivetitle").html(motivasiya[motivsay]['ad']);
												$(".motiveurl").attr("src","https://player.vimeo.com/video/"+motivasiya[motivasiya_id]['video_id']+"?autoplay="+avto_play+"&title=0&byline=0");

												

											},100);
											
										}
										else
										{
											motivasiya_id = motivasiya_id-1;
											setTimeout(function()
											{
												$(".motive_desk").addClass("bounceInLeft");
												$(".motivetitle").html(motivasiya[motivasiya_id]['ad']);
												$(".motiveurl").attr("src","https://player.vimeo.com/video/"+motivasiya[motivasiya_id]['video_id']+"?autoplay="+avto_play+"&title=0&byline=0");

												

											},100);
										}
									
									$(".motive_desk").removeClass("bounceInLeft");
									$(".motive_desk").removeClass("bounceInRight");
									
									
								}
							}
							
						}
					}
					
				}
			}
		});

	//menu acilma - x1
	
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
	//menu secimi - x2
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
    //paylas - x3

	//bilgi - x4
		bilgiicon.click(function()
		{
			if(yardim==1)
			{
				menuacilma=1;
				motivasiya_id = -1;
				menu.hide();

				title.html("Bilgi");
				$(".head_r span").hide();
				bilgiicon.removeClass("fa-lightbulb");
				bilgiicon.addClass("fa-times-circle");
				
				yardim = 0;
				avto_play = 0;
				menuicon.hide();
				govde.hide();
				bilgi.hide();
				motive.hide();
				$(".cat_x").hide();
				help.show();

				$(".motiveurl").attr("src","?autoplay="+avto_play);
				$(".helptitle").html(komekciler[yardimci]['yardim_basliq']);
				$(".helpinfo").html(komekciler[yardimci]['yardim_metn']);

				if(komekacma==0)
				{
					komekacma = parseInt(komekciler.length) - 1;
					localStorage.komekacma = komekacma;
					$(".head_r span").html(komekacma);
				}

				

				

			}
			else
			{
				if(home==0)
				{
					title.html("Vücut Geliştirme");
				}
				else
				{
					title.html(titlead);
				}
				bilgiicon.removeClass("fa-times-circle");
				bilgiicon.addClass("fa-lightbulb");
				$(".head_r span").show();
				
				
				$(".qaralti_x").fadeOut();
				umumihisse.css("opacity",1);

				yardim = 1;
				$(".motiveurl").attr("src","?autoplay="+avto_play);
				avto_play = 1;
				motive.hide();
				menuicon.show();
				govde.show();

				help.hide();

				$(".cat_x").show();

				$(".title").html(cat['kateqoriya'][cat_id]['ad']);

				/*if(komekacma!=komeksayi)
				{*/
					admob.interstitial.prepare();
					admob.interstitial.show();
				/*}*/

			}


		});
	
		$(".help_left").click(function()
		{
			reklam++;

			if(reklam==10)
			{
				admob.interstitial.prepare();
				admob.interstitial.show();
				reklam = 1;
			}
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
			reklam++;

			if(reklam==10)
			{
				admob.interstitial.prepare();
				admob.interstitial.show();
				reklam = 1;
			}

			yardimci = yardimci+1;
			if(yardimci==komeksayi)
			{
				yardimci = 0;
				komekacma = komekciler.length;
				localStorage.komekacma = komekacma;
			}
			
			$(".help_desk").removeClass("bounceInRight");
			$(".help_desk").removeClass("bounceInLeft");
			
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

			setTimeout(function()
			{
				
				$(".help_desk").addClass("bounceInRight");
			

				$(".helptitle").html(komekciler[yardimci]['yardim_basliq']);
				$(".helpinfo").html(komekciler[yardimci]['yardim_metn']);


			},10);
			


		});

	//bilgi - x4
	
	//motivasiya secimi - x5

		if(titlead=="Motivasyon")
		{
			for (var i = 0; i < motivsay; i++)
			{
				motiv_ul_li = '<li data-value="'+i+'">'+
									'<div class="qaralti"></div>'+
									'<img src="img/'+motivasiya[i]['sekil']+'"><h2>'+motivasiya[i]['ad']+'</h2>'+
								'</li>';

				$(motiv_ul_li).appendTo(".motiv ul");
			}
		}
		
		$(".motiv ul li").click(function()
		{
			$(".head_r span").hide();
			bilgiicon.removeClass("fas fa-lightbulb");
			bilgiicon.addClass("fas fa-times-circle");		
			yardim = 0;
			motivasiya_id = $(this).data("value");
			
			
			govde.hide();

			motive.show();

				$(".motivetitle").html(motivasiya[motivasiya_id]['ad']);
				$(".motiveurl").attr("src","https://player.vimeo.com/video/"+motivasiya[motivasiya_id]['video_id']+"?autoplay="+avto_play+"&title=0&byline=0");

		});


		$(".motive_left").click(function()
		{
			
			if(motivasiya_id==0)
			{
				motivasiya_id = motivsay;
			}
			else
			{
				motivasiya_id = motivasiya_id-1;
			}
			
			$(".motive_desk").removeClass("bounceInLeft");
			$(".motive_desk").removeClass("bounceInRight");
			
			setTimeout(function()
			{
				$(".motive_desk").addClass("bounceInLeft");
				$(".motivetitle").html(motivasiya[motivasiya_id]['ad']);
				$(".motiveurl").attr("src","https://player.vimeo.com/video/"+motivasiya[motivasiya_id]['video_id']+"?autoplay="+avto_play+"&title=0&byline=0");

			},10);

		});

		$(".motive_right").click(function()
		{
			motivasiya_id = motivasiya_id+1;
			
			if(motivasiya_id==motivsay)
				motivasiya_id = 0;
			
			$(".motive_desk").removeClass("bounceInRight");
			$(".motive_desk").removeClass("bounceInLeft");
			
			setTimeout(function()
			{
				
				$(".motive_desk").addClass("bounceInRight");
			

				$(".motivetitle").html(motivasiya[motivasiya_id]['ad']);
				$(".motiveurl").attr("src","https://player.vimeo.com/video/"+motivasiya[motivasiya_id]['video_id']+"?autoplay="+avto_play+"&title=0&byline=0");


			},10);
			


		});

	//motivasiya secimi - x5

	//antreman secimi(GIT) - x6
	
		
		for(var i = 0; i < kateqoriya_sayi; i++) 
		{
			if(titlead=="Antremanlar")
			{
				kat_ul_li = '<li data-value="'+i+'">'+
							'<div class="qaralti"></div>'+
							'<img src="'+kateqoriyalar[i]['sekil']+'"><h2>'+kateqoriyalar[i]['ad']+'</h2>'+
							'<div class="git">GİT <i class="fas fa-angle-right"></i></div>'
						'</li>';

			
				$(kat_ul_li).appendTo(".kateqoriya ul");
			}

			seviyye1 = '<li class="mesqe_get b_mesq" data-value="'+i+'"><a href="mesqler.html">'+
							'<div class="qaralti"></div>'+
							'<img src="'+kateqoriyalar[i]['sekil1']+'"><h2>'+kateqoriyalar[i]['ad']+'<br>Zayıf Vücut Düzeyi</h2>'+
						'</a></li>';

			$(seviyye1).appendTo("#level1");

			seviyye2 = '<li class="mesqe_get o_mesq" data-value="'+i+'"><a href="mesqler.html">'+
							'<div class="qaralti"></div>'+
							'<img src="'+kateqoriyalar[i]['sekil2']+'"><h2>'+kateqoriyalar[i]['ad']+'<br>Sağlıklı Vücut Düzeyi</h2>'+
						'</a></li>';

			$(seviyye2).appendTo("#level2");


			seviyye3 = '<li class="mesqe_get c_mesq" data-value="'+i+'"><a href="mesqler.html">'+
							'<div class="qaralti"></div>'+
							'<img src="'+kateqoriyalar[i]['sekil3']+'"><h2>'+kateqoriyalar[i]['ad']+'<br>Yağlı Vücut Düzeyi</h2>'+
						'</a></li>';

			$(seviyye3).appendTo("#level3");

		}
		
	

		$(".kateqoriya ul li").click(function()
		{
			
			home = 1;
			localStorage.setItem("home",home);

			kateqoriya = $(this).data("value");
			localStorage.setItem("cat",kateqoriya);
			window.location = "kateqoriya.html";


		});
	//antreman secimi(GIT) - x6
	

	//program bilgileri - x7
		if(kilo!=0)
		{
			$("#kilo").html(kilo);
		}
		else
		{
			$("#kilo").html("+");
		}

		if(boy!=0)
		{
			$("#boy").html(boy);
		}
		else
		{
			$("#boy").html("+");
		}

		if(boy==0||kilo==0)
		{
			$("#bedentipi").hide();
			$(".bt_netice h3").show();
		}
		else
		{
			$(".bedentipi span").show();
			$(".bt_netice h3").hide();
			$("#bedentipi").show();
			$("#bedentipi").html(vucuttipi);
		}
		$("#kilo").click(function()
		{
		
			menuacilma=1;
			menu.hide();
			govde.hide();
			bilgi.show();
			bilgim = 1;

		});

		$("#boy").click(function()
		{

			menuacilma=1;
			menu.hide();
			govde.hide();
			bilgi.show();
			bilgim = 1;

		});
		var normalboy = 0; //0 olmagi normaldi 1 olmagi qeyri normal
		var normalkilo = 0; //0 olmagi normaldi 1 olmagi qeyri normal
		$(".tesdiq").click(function()
		{
			loading.show();

			kilo = $("input[name=kilo]").val();
			if(kilo)
			{
				if(kilo>40&&kilo<150)
				{
					localStorage.kilo = kilo;
				}
				else
				{
					normalkilo = 1;	
					kilo = localStorage.kilo;
				}

			}
			else
			{
				kilo = localStorage.kilo;
			}
			boy = $("input[name=boy]").val();
			if(boy)
			{
				if(boy>150&&boy<250)
				{
					
					localStorage.boy = boy;
				}
				else
				{
					normalboy = 1;
					boy = localStorage.boy;
				}
					
			}
			else
			{
				boy = localStorage.boy;
			}

			if(normalkilo==1&&normalboy==1)
			{
				alert("Lütfen bilgileri doğru girin ve boyunuzu sm ile yazıb yazmamanızdan emin olun.");
			}
			else if(normalkilo==1&&normalboy==0)
			{
				alert("Lütfen kilonuzu doğru girin.");
			}
			else if(normalkilo==0&&normalboy==1)
			{
				alert("Lütfen boyunuzu doğru girin ve sm ile yazıb yazmamanızdan emin olun.");
			}

			if(kilo!=0)
			{
				$("#kilo").html(kilo);
			}
			else
			{
				$("#kilo").html("+");
			}

			if(boy!=0)
			{
				$("#boy").html(boy);
			}
			else
			{
				$("#boy").html("+");
			}

			if(kilo!=0&&boy!=0)
			{
				vucutyagliliq = kilo/(boy/100*boy/100);

				
				if(vucutyagliliq<18.5)
				{
					vucuttipi = "Zayıf";
					localStorage.vucuttipi = vucuttipi;
				}
				else if(vucutyagliliq>=18.5&&vucutyagliliq<25)
				{
					vucuttipi = "Sağlıklı";
					localStorage.vucuttipi = vucuttipi;
				}
				else
				{
					vucuttipi = "Fazla Yağlı";
					localStorage.vucuttipi = vucuttipi;
				}

				$(".bedentipi span").show();
				$(".bt_netice h3").hide();
				$("#bedentipi").show();
				$("#bedentipi").html(vucuttipi);
			}
			
			bilgi.hide();
			bilgim = 0;
			setTimeout(function()
			{
				loading.hide();
				menuacilma=0;
				normalboy = 0;
				normalkilo = 0;
				govde.show();
				

			},2000)

		});
	//program bilgileri - x7

	//program secimi - x8
		$(".mesqe_get").click(function()
		{
			home = 1;
			localStorage.setItem("home",home);

			kateqoriya = $(this).data("value");
			localStorage.setItem("cat",kateqoriya);

		});
		$(".b_mesq").click(function()
		{
			mesq = 1;
			localStorage.setItem("mesq_level",mesq);

		});
		$(".o_mesq").click(function()
		{
			mesq = 2;
			localStorage.setItem("mesq_level",mesq);

		});
		$(".c_mesq").click(function()
		{
			mesq = 3;
			localStorage.setItem("mesq_level",mesq);

		});
	//program secimi - x8
		
	function onBackKeyDown()
	{
		if(menuacilma==1)
		{
			if(titlead=="Antremanlar")
			{
				if(yardim==1)
				{
					navigator.app.exitApp();
				}
				else
				{
					if(home==0)
					{
						title.html("Vücut Geliştirme");
					}
					else
					{
						title.html(titlead);
					}
					bilgiicon.removeClass("fa-times-circle");
					bilgiicon.addClass("fa-lightbulb");
					
					
					$(".qaralti_x").fadeOut();
					umumihisse.css("opacity",1);

					yardim = 1;
					$(".motiveurl").attr("src","?autoplay="+avto_play);
					avto_play = 1;
					motive.hide();
					menuicon.show();
					govde.show();

					help.hide();

					$(".cat_x").show();

					$(".title").html(cat['kateqoriya'][cat_id]['ad']);
				}
				
			}
		}
		else
		{
			umumihisse.css("opacity",1);
					$(".qaralti_x").fadeOut();
					/*if(hashnumber)
					{
						$("#bolme"+hashnumber).fadeIn();
					}
					else
					{
						$("#bolme1").fadeIn();
					}*/
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
    }	
	
	
	
}
