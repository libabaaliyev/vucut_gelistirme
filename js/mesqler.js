document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady(){

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
$(document).ready(function()
{*/
	var cat_id = localStorage.cat;
	var sirala = 0;
	var sekil = $(".mesq_sekil");
	loading = $(".loading");
	govde = $(".body");
	bilgiicon = $(".bilgiicon");
	/*kateqoriya.js*/
	cat_title =$(".cattitle");
	cat_sekil = $(".sekil");
	cat_info = $(".catinfo");
	cat_info2 = $(".catinfo2");
	cat_info3 = $(".catinfo3");

	sekiligoster = $("#c0");
	melumatal = $("#c1");
	ipucu = $("#c2");
	kas_melumat = $("#c3");
	/*kateqoriya.js*/
	/*index.js*/
	menuicon = $(".menuicon");
	menu = $(".body_menu");
	menuaktiv = $(".body_menu ul li");
	paylasim = $(".paylas");
	bilgiicon = $(".bilgiicon");
	title = $(".title");
	govde = $(".body");
	help = $(".help");

	//1.6
	umumihisse = $(".body_cat");
	//1.6
	var orta = (parseInt($("body").width()))/2;
	

var menuacilma = 1,aktivm = 1,yardim = 1,bilgim = 0;
	var home = localStorage.home;
	var bip = new Audio("music/bip.mp3");
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

		$(".head_r span").html(komekciler.length);

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


	/*index.js*/
	var cat_id = localStorage.cat;
	var cetinlik = localStorage.mesq_level;

	var pause = 0;
	var say = 10*parseInt(cetinlik);
	var hefte = 0;
	var mesqler = 
	[
		//sine
		[
			{
				"ad": "Dumbbell Chest Press",
				"sekil": "img/cat/sine/dumbbell-chest-press.gif",
				"melumat": "Kanepenin ucuna oturun ve halterlerin dizlerinize yaslanmasına izin verin. Halterleri omuzlarınıza getirin ve sonra sırtüstü koltukta uzanın. Göğsünüzün her iki tarafındaki halterleri avuçlarınız vücudunuza dönük ve dirsekleriniz bükülmüş olarak tutun. Halterleri yukarı doğru bastırın ve dirseklerinizi yay şeklinde küçük bir hareketle gerin. Göğsünüzün üstündeki halterleri birbirine yakın tutun. Ağırlıkları yavaşça başlangıç pozisyonuna getirin ve hissettiğinizde omuzlarınıza çekin.",
				"ipucu": "a) Harekete hakim olmak için, yeni başlayanlar en iyi ihtimalle düşük ağırlıkla başlayabilir. <hr>b) Dambıl ile yay şeklinde hareketler yapın. Bu etki, halterleri omuz genişliğinden daha düşük ve omuz genişliğinden daha düşük tutarak sağlanmıştır. <hr>c) Egzersizi yapmazdan önce zemindeki halterleri uzandığınız konumdan almayın. Bu, yaralanmalara neden olabilir. <hr>d) Halterlerin birbirine değmesine izin vermeyin. <br>",
				"kaslar":"İlk etapta büyük göğüs kası (pektoralis majör) ve omuz kanadının (ön deltoid) yanlarındaki kasları çalıştırıyorsunuz. Halterleri kaldırmak için kollar genellikle üst kolların arkasındaki kaslara (triceps brachii) dayanır. Ek olarak, dambıl göğüs presini gerçekleştirmek için farklı kaslar birlikte çalışır. Bunlar dengeleyici kaslar. Bu omuz kuşağının ön serratusudur. Sırtta bunlar geniş sırt kası (latissimus dorsi) ve keşiş kasıdır (trapezius). Üst kollarda ise, bu ravenbone kol kasıdır (coracobrachialis)."
				
			},
			{
				"ad": "Dumbbell Fly ",
				"sekil": "img/cat/sine/dumbbell-fly.gif",
				"melumat": "Düz bir  fitness tezgahı kullanın. Kondisyon tezgahına uzanın ve halterleri hafifçe bükülmüş dirseklerle tutun. Halterler artık göğsün ortasından yüksekte, avuç içi birbirine bakmaktadır. Şimdi halterleri yumuşak bir hareketle göğsünüzün yanlarına getirin. Dirseklerinizin aynı açıyla hafifçe bükülmüş kaldığından emin olun. Omuzlarınızın ve göğsünüzün önünde bir çekme hissi oluştuğunda hareketi durdurun. Ardından dambılleri yavaşça başlangıç konumuna getirin. Halterlerin birbirine temas etmesini önleyin.",
				"ipucu": "a) Ağırlığı yavaşça arttırın. Son pozisyon omuz ekleminden çok şey talep ettiğinden, çok fazla ağırlık kullanırken yaralanma riski vardır. <hr>b) Dirsekler daima dambıl kanadı ile aynı açıda hafifçe bükülmüş kalmalıdır. <hr>c) Kolların her zaman omuzlarının önünde olmalı. <br>",
				"kaslar": "Dumbbell fly  sözde bileşik bir egzersizdir . Bu, aynı anda farklı kasların çalıştığı anlamına gelir. Ana pektoral kas (pektoralis major) esas olarak eğitilmiştir. Destekleyici kaslar deltoid kas (omuzlar), pazı brachii (üst kol üst tarafı), brachioradialis (alt kol alt tarafı) ve brachialis (üst kol üst tarafı)."
	
			},
			{
				"ad": "Dumbbell Pullover",
				"sekil": "img/cat/sine/dumbbell-pullover.gif",
				"melumat": "İki elinizle bir halter alın (halterin kenarına doğru tutun). Düz bir fitness bankında arkanıza yaslanın. Ayaklarınız yere temas eder ve başınız sonunda görünür. Şimdi kollarını dümdüz yukarı itin ve yüzünüzün üstüne uzatın. Şimdi dumbbell'i yavaşça başınızın üzerine geri getirin. Göğsünüze ve omuzlarınıza çekildiğini hissettiğinizde hareketi durdurun. Ağırlığı yavaşça başlangıç pozisyonuna getirin.",
				"ipucu": "a) Sırtınızı dik tutmak için karın kasınızı sıkın. Sırtın boş kalmamalı. <hr>b) Dirseklerinizi daima aynı konumda tutun: hafifçe bükülmüş ve omuzlarınızla hizalı.<hr>c) Ne kadar uzatabileceğiniz esnekliğinize bağlıdır. Göğsünüze ve omuzlarınıza çekildiğini hissettiğinizde hareketi durdurun.<br>",
				"kaslar":"Ana göğüs kasları (pektoralis majör) ve geniş sırt kasları (latissimus dorsi) ağırlıklı olarak bu haraket ile eğitilir. Diğer çeşitli kaslar egzersizi gerçekleştirmeye yardımcı olur ve bu nedenle derhal ele alınır. Eğitilen destekleyici kaslar arasında triceps (üst kolların alt kısmında), düz karın kası (rektus abdominisi) ve büyük gluteal kaslar (glutaus maximus) bulunur. Kısacası: Bu, çok fazla etkinliğe sahip bir egzersizdir."
	
			},
			{
				"ad": "Barbell Bench Press",
				"sekil": "img/cat/sine/Barbell-bench-press.gif",
				"melumat": "Yatay olarak yerleştirilmiş bir fitness bankına sırtınızla uzanın. Halteri alın ve ellerinizi omuz genişliğinden biraz daha fazla tutun. Halteri kollarınız düz bir şekilde tutun ve göğsünüzün hemen üzerinde avuç içi yapın. Nefes alın ve halterleri göğse doğru yavaşça indirin ve hemen üzerinde durun. Kollarınız tekrar esnetilinceye kadar uzun süre halterle nefes verin ve itin.",
				"ipucu": "a) Yeni başlayanlar önce bu egzersizi ağırlık plakası olmayan bir halterle yapmalıdır. Harekete hakim olduğunuzda, halter üzerine ekstra ağırlık yükleyebilirsiniz. <hr>b) Bench press ile daima sırtınızı dik dururken fitness tezgahında kalın. Sırtınız büküldüğünde, ağırlığın çok ağır olduğu anlamına gelir. Bu yaralanma riskini arttırır.<hr>c) Yeni başlayanlar için bir yardımcı  kullanmak akıllıca olabilir. Bu aynı zamanda ağır ağırlık kullanan deneyimli sporcular için de geçerlidir.<hr>d) Halteri her zaman doğrudan göğsün üzerinde tutun ve ileri ya da geri dolaşmasına izin vermeyin.<br>",
				"kaslar": "Halter bench press, öncelikle göğüs, omuz ve kol kaslarını çalıştırmaya odaklanır. Bu egzersizde, büyük göğüs kası (depectoralis major), omuzların etrafındaki delta şekilli kas (anterior deltoid) ve üst kolun arkası (triceps brachii) güçlenir. Rotator manşet ve omuz bıçağının dengeleyici kasları da eğitilmiştir. Kısacası: bench press, farklı kasları eğitmek için etkili bir egzersizdir."
	
			},
			{
				"ad": "Cable Crossover",
				"sekil": "img/cat/sine/cable-crossover.gif",
				"melumat": "Makaraları başınızın biraz üstünde olacak şekilde ayarlayın. Kasnaklar arasında ortada durun. Kolları avuç içi aşağı yatırılmış durumdayken tutun. Omuzların içe doğru döndü ve kalçaların hafifçe öne eğildi. Göğüs kaslarınızı sıkın ve kollarınızı aşağı ve içe doğru hareket ettirin. Dirseklerinizi hareket boyunca sabit bir açıda tutun. Yavaş (kontrollü) bir hareketle başlangıç pozisyonuna dönün.",
				"ipucu": "a) Hafif hareketler yapın ve kolların geri çekilmesini önleyin. Bu, omzun kaseden çıkmasına neden olabilir.<hr>b) Bu egzersiz bükülmüş dirseklerle yapılır. Bu nedenle göğüs kasları işi yapar, kol kaslarını değil.<hr>c) Kablo geçişi, makaraları omuz yüksekliğinin biraz altına ayarlayarak daha hafif yapılabilir. <br>",
				"kaslar": "Kablo geçişi ile birlikte büyük göğüs kasları (pektoralis major) ele alınır. Bu egzersizi yapabilmek için çeşitli destek kasları da kullanılır ve bu nedenle hafifçe eğitilir. Abs ile ilgilidir ve önkollarda flexor carpi ulnaris ve extensor carpi radialis bulunur."
	
			},
			{
				"ad": "Push Up ",
				"sekil": "img/cat/sine/push-up.gif",
				"melumat": "Karnını yere yatır. Elleriniz omuzlarınızın yanına, eller öne bakacak şekilde yerleştirin. Vücudunu, ayak parmakların üstünde tutarak. Kollarınızı maksimuma uzatın. Kollarınızı bükerek başlangıç pozisyonuna dönün. Vücudu yavaşça zeminin hemen üstüne indirin.",
				"ipucu": "a) Push-up pozisyonuna geldiğinizde tüm vücudunuzu dik tutun.<hr>b) Egzersiz sırasında omuzlarınızı omuz silkmeyin. Bu, kollarınızı daha az stabil yapar.<hr>c) Yeni başlayanlar bu egzersizi ayak parmakları yerine dizler üzerinde de yapabilirler. Bu durumda, sırtınızın düz olduğundan emin olun ve kalçalarınızın bükülmesini önleyin. Aksi takdirde etkisi yoktur.<br>",
				"kaslar": "Push-up ile çok sayıda kasları çalıştırıyorsunuz. Vurgu temel olarak büyük göğüs kası (pektoralis majör), omuzların üst tarafında (anterior anterior), omuz kuşağı (serratus anterior) ve üst kolların (triceps brachii) sırtındadır. Ek olarak, bir dizi dengeleyici kas, egzersizi gerçekleştirmeye yardımcı olur. Yoğun bir şekilde eğitilmemelerine rağmen, teşvik edilirler. Ön kollarda farklı kaslar bulunur (ekstansör carpi radialis longus, ekstansör carpi radialis brevis ve ekstansör carpi ulnaris). Üst kolların iç kısmında bu coracobrachialis'dir. Omuzların arkasında, rotator manşeti, dengeleyici işlevlere sahiptir ve sırt tarafında, bu eşkenar dörtgen kaslar için geçerlidir."
	
			},
			{
				"ad": "Chest Dip ",
				"sekil": "img/cat/sine/chest-dip.gif",
				"melumat": "Paralel çubuklarin arasinda durun ve barlarin bel yüksekligine ulasmasi için adimi kullanin.Çubuklari iki elinizle kavrayin.Dirseklerini uzat ve dizlerini bük.Ayaklarinizi basamaktan kaldirin.Simdi dirsekleriniz 90 derecelik bir açiya gelene kadar kendinizi yavasça indirin.Kendinizi tekrar baslangiç pozisyonuna dogru itin.",
				"ipucu": "a) Egzersiz muhtemelen ekstra ağırlıkta bir dip kemer takılarak ağırlaştırılabilir.<hr>b) Büyük göğüs kası ve trisepsinde çatlaklara yol açabileceğinden aşırı kilo kullanmayın.<hr>c) Göğüs kaslarını eğitmek için öne eğilmek. tricepsleri eğitmek için dik durun.<br>",
				"kaslar": "Chest dip haraketi  ile özellikle büyük göğüs kası (pektoralis major) ve omuzların etrafındaki üçgen kası (anterior deltoid) eğitilir. Triceps brachii (arka üst kollar) da yoğun bir şekilde eğitilmiştir. Ek olarak, birkaç destekleyici kas hafifçe eğitilmiştir. Bunlar önkollardaki şu kaslardır: ekstansör carpi radialis (önkol dış) ve ekstansör carpi ulnaris."
			}	

		],	
		//qol	
		[
			{
				"ad":"Dumbbell Concentration Curl",
				"sekil": "img/cat/qol/dumbbell-concentration-curl.gif",
				"melumat": "Bir fitness bankına, tabureye ve ya sandalyeye oturun. Halteri ayaklarınızın arasına yerleştirin.Halterinizi avuçlarınız sizden uzağa bakacak şekilde tutun.Avucunuz omzunuza bakana kadar kolunuzu yukarı kaldırın. Kolunuz tamamen uzayana kadar ağırlığı tekrar indirin.",
				"ipucu": "a) Bu alıştırma izolasyonda yapılmalıdır. Bu, antrenman sırasında elbette antrenman yaptığınız kol dışında tüm vücudun sessiz olması gerektiği anlamına gelir <hr>b) Göğsünüzden dönüş veya kalkmayı önleyin. Bu durumda, o zaman ağırlık çok ağır.<hr>c) Diğer elinizi destek için uyluğunuza koyun.<br>",
				"kaslar":"Bu izolasyon egzersizi ile hedeflenen şekilde üç kası çalıştırıyorsunuz. Üst kolda bu esas olarak brachialis'tir. Bu, öndeki dirsek eklemi üzerinden geçen bir fleksör kasıdır. Dumbbell konsantrasyonu kıvrılmalarında da büyük ölçüde ele alınan biseps brachii altında üst kolun iç kısmında bulunur. Sonunda brachioradialis'i eğitiyorsun. Bu kolun ön kısmındaki kolla kaplı kas. Önkolların iç kısmında üst kısımda bulunur. Ek olarak, bazı dengeleyici kaslar onunla çalışır. Bunlar kollardaki fleksör carpi radialis ve fleksör carpi ulnaris'tir. Ön deltoid omuzda hafifçe eğitilmiştir."
			},
			{
				"ad":"Barbell Wrist Curl",
				"sekil": "img/cat/qol/barbell-wrist-curl.gif",
				"melumat": "Bir fitness bankının ortasına oturun, öne dogru eğin ve ön kollarınızı bankta dinlendirin.Halteri omuz genişliğinden biraz daha az elinizle kavrayın. Avuçlarınız yukarı dönük.Kollarınızı, fitness tezgahında, bileklerinizi sonuna kadar dinlendirin.Artık fitness tezgahına dokunmadan bileklerinizi yere çevirebilirsiniz. Şimdi halteri yere indirin ve çubuğun avuç içinde parmaklara dogru dönmesine izin verin.",
				"ipucu": "a)Bilek bükme kaslarına karşı direnci korumak için bileklerinizi ve dirseklerinizi aynı yükseklikte tutun. <hr>b) Zemin yüzeyinin boş olduğundan emin olun. Halter elinizden kayarsa, başkalarına dokunmadan kayabilir.<hr>c) Ellerin dışındaki vücut parçalarının hareketlerinden kaçının.<br>",
				"kaslar":"Barbell wrist curl, öncelikle el fleksörlerini eğitmeye odaklanır. Bunlar, ön kollardaki ellerimizin hareket etmesini sağlayan kaslardır. Kesin olarak, radyal el kıvrımı olarak da bilinen flexor carpi radialis'i çalıştırıyorsunuz. Bu kas, ön kolun sağ tarafında çapraz olarak uzanır. Ayrıca ön kolun sol tarafında yer alan flexor carpi ulnaris'i de eğitiyorsunuz. Son olarak, flexor digitorum da hafifçe eğitilmiştir. Bu parmakların hareketine yardımcı olan bir kastır."
			}
			,
			{
				"ad":"Dumbbell Triceps Extension",
				"sekil": "img/cat/qol/dumbbell-triceps-extension.gif",
				"melumat": "Bacaklariniz hafifce birbirinden ayrı ve ayaklarınız hafifce dize bakacak şekilde dik durun. Halterin bir tarafında her iki avuç içi olan bir halter alın. Elleriniz artık dambıl tarafının iç tarafında V şeklindedir.Dirseklerinizi sabit tutun ve halteri başınızın arkasına getirin. Dirsekleriniz hareketin sonunda biraz hareket etsin.",
				"ipucu": "a) dumbbell triceps extension ile sırtınızın egzersiz boyunca düz olması amaçlanmıştır. Bunun için absini sıkın. <hr>b) Ağırlığı yavaşça indirin ve kontrollü bir hareket sağlayın.<hr>c) Çok fazla kilo alarak kas yetmezliğinden kaçının. Ağırlık boynunuza düşebilir.<br>",
				"kaslar": "Bir çok sporcu, pazı (ön üst kollar) iyi eğitilirken triceps'i eğitmeyi unutma eğilimindedir. Her ikisinin de dikkat etmesi gerekir, çünkü tricepsler pazıların zıt işini yapar: triceps önkolu uzatır ve pazı önkolu esnetir. Halter triceps uzantısıyla triceps brachii'ye ek olarak aynı zamanda fleksör karpi ulnaris (önkolların altı), deltoid (omuzların üstü), pektoralis major (büyük göğüs kasları) ve latissimus dorsi'nin (geniş sırt kasları) antremanı yapabilirsiniz. Kısacası, aynı anda farklı kasları çalıştırmak için etkili bir egzersiz."
			}
			,
			{
				"ad":"Dumbbell Kickback",
				"sekil": "img/cat/qol/dumbbell-kickback.gif",
				"melumat": "Elinize yaslanın ve dizinizi stabilizasyon için kullanın.Diğer ayağınızı kanepenin yanındakı yere yerleştirin. Bacağınızla kanepe arasında bir boşluk bırakın. Şimdi kolunuzu tamamen uzayana ve geriye doğru çıkana kadar dirseğinizden uzatın.Ağırlığı yavasça başlanğıç konumuna indirin.",
				"ipucu": "a) Hareketi kolundan yap. Vücudunuzun ağırlığını taşımasına yardım etmesini önleyin.<hr>b) Dirseğinizin daima yanınızın yanında durduğundan emin olun.<hr>c) Egzersiz sırasında önünüzdeki bir metreden bir noktaya bakın.<br>",
				"kaslar": "Dumbbell kickback egzersizinde  özellikle triceps brachii eğitilmiştir. Ek olarak, eğitilmiş ve bir egzersiz sırasında çok fazla etkinlik anlamına gelen üç stabilize edici kas vardır. Destekleyici kaslar posterior deltoid (omuzlar) ve uzatıcı carpi ulnaris'tir (iç önkol). Latissimus dorsi (geniş sırt kası) da hafifçe eğitilmiştir."
			}
			,
			{
				"ad":"Barbell Biceps Curl",
				"sekil": "img/cat/qol/Barbell-biceps-curl.gif",
				"melumat": "Ayaklariniz omuz genisliginde ve dizler hafifçe bükülmüş olarak düz bir zeminde durun. Şimdi ön kollarınız dikey olana kadar halterinizi üst bedeninize doğru kaldırın.Kollarınız tekrar gerilinceye kadar çubugu yavaşça tekrar indirin.",
				"ipucu": "a) Pazı kıvırmak dirseklerinizle sürekli yanınızda yapılmalıdır.<hr>b) En iyi sonuçlar vücudu mümkün olduğunca sabit tutarak elde edilir. Bu nedenle, vücudunuzu sabit tutmak için kalça ve karın kaslarınızı sıkın.<hr>c) Vücudunuz hızlandırmak için çok hareket ettiğinde, halter aşırı yüklenmiş olur. Alt sırtınız daha sonra yüklenir ve bu, yaralanma riskini arttırır.<br>",
				"kaslar": "Barbell biceps curl haraketi, üst kolların ön kısmını (biseps brachii), dirsek ekleminin önünü (brachialis) ve alt kol kasını (brachioradialis) eğitmeye odaklanır. Ek olarak, önkol ve omuzlardaki bazı dengeleyici kaslar ele alınır. Omuzlarda, sırtın üstündeki elmas şeklindeki kas (trapezius) ve üst koldaki delta şeklindeki kas (anterior deltoid) vardır. Önkolların iç kısmında bunlar, flexor carpi radialis ve flexor carpi ulnaris'dir."
			},
			{
				"ad":"Chest Dip",
				"sekil": "img/cat/qol/chest-dip.gif",
				"melumat": "Paralel çubukların arasında durun ve barların bel yüksekliğine ulaşması için kullanın. Çubukları iki elinizle kavrayın. Dirseklerinizi uzatın ve dizlerini bükün. Ayaklarınızı basamaktan kaldırın. Şimdi dirsekleriniz 90 derecelik bir açıya gelene kadar kendinizi yavaşça indirin. Kendinizi tekrar başlanğıç pozisyonuna doğru itin.",
				"ipucu": "a) Egzersiz muhtemelen ekstra ağırlıkta bir dip kemer takılarak ağırlaştırılabilir.<hr>b) Büyük göğüs kası ve trisepsinde çatlaklara yol açabileceğinden aşırı kilo kullanmayın.<hr>c) Göğüs kaslarını eğitmek için öne eğilmek. tricepsleri eğitmek için dik durun.<br>",
				"kaslar": "Chest dip haraketi  ile özellikle büyük göğüs kası (pektoralis major) ve omuzların etrafındaki üçgen kası (anterior deltoid) eğitilir. Triceps brachii (arka üst kollar) da yoğun bir şekilde eğitilmiştir. Ek olarak, birkaç destekleyici kas hafifçe eğitilmiştir. Bunlar önkollardaki şu kaslardır: ekstansör carpi radialis (önkol dış) ve ekstansör carpi ulnaris."
			}
			,
			{
				"ad":"Chin Up",
				"sekil": "img/cat/qol/chin-up.gif",
				"melumat": "Aynı anda sırt kaslarını da çalıştırsada tutarkenki el pozisyonunuz iç taraf olsa ön kolu daha çok çalıştırır.",
				"ipucu": "a) Antrenman sırasında abs'inizi sert  tutun. Aksi halde vücudunu çok sallarsın.<hr>b) Dirsek yaralanmalarını önlemek için yavaşça başlangıç konumuna geri indirin<br>",
				"kaslar":"Bununla aktif olarak çalıştırdığınız kaslar aşağıda listelenmiştir. Arkada bunlar eşkenar dörtgen kaslar ve trapez omuz (trapezius). Omuzlarda bunlar delta şeklindeki kas (posterior deltoid) ve yuvarlak kol kaslarıdır (ana ve küçük ana teller). Üst kolların üst tarafında biceps brachii ve brachialis'i, alt kollarda ise brachioradialis kasını  çalıştırıyorsunuz. Ek olarak, diğer bazı kaslar hafifçe eğitilmiştir. Arkada bu infraspinatus, omuzda ise serratus anterior kuşağı. Ve kollarda bunlar fleksör karpi ulnaris, triceps brachii ve ekstansör digitorumdur."
			}
			,
			{
				"ad":"Cable Triceps Pushdown",
				"sekil": "img/cat/qol/cable-triceps-pushdown.gif",
				"melumat": "Ellerinizi omuz genişliğinden biraz daha az yerleştirin. Kollarınızı gerin ve dirseğiniz yanınızda dururken çubugu yere itin. Şimdi kollarınızı kollarınız neredeyse üst kollariniza değene kadar yavasça geri hareket ettirin.",
				"ipucu": "a) Egzersiz sırasında sırtınızı dik tutun. Sırtınız sizinle birlikte hareket ettiğinde, ağırlık çok ağırdır ve triseps etkili bir şekilde eğitilmez.<hr>b) Kabloya yakın durun, böylece egzersiz boyunca yeterli dayanıklılığa sahip olursunuz.<hr>c) Bir ayağını diğerinin önüne koyarak daha fazla stabilite elde edilebilir.<br>",
				"kaslar": "İlk etapta, üst kolların arkasında bulunan triceps brachii'yi eğitiyorsunuz. Cable triceps pushdown  de diğer çeşitli kaslara iyi bir ikincil egzersiz sunuyor. Bunlar, egzersizi gerçekleştirmeye yardımcı olan dengeleyici kaslar. Bunlar düz karın kasları (rektus abdomini) ve dış eğik karın kasları (oblik externus abdomini) 'dir. Büyük pektoralis major (pektoralis major) de hafifçe eğitilmiştir. Ön kollarda, el fleksörleri (flexor carpi radialis ve flexor carpi ulnaris) iyi bir ikincil egzersiz yapar."
			}

		],
		//omuz
		[
			{
				"ad": "Dumbbell Shoulder Press",
				"sekil": "img/cat/omuz/dumbbell-shoulder-press.gif",
				"melumat": "Bir fitness bankına oturun ve dikey olarak yerleştirilmiş sırt dayanağına sıkıca oturun. Ayaklarınızı ayırın ve her bir elinizde bir halter alın. Halterleri kulak yüksekliğinde avuç içi öne bakacak şekilde tutun. Şimdi kollarınızı başınızın üstüne kadar uzatıncaya kadar halterleri yukarı itin. Halterler başınızın üzerinde bir araya gelsin, ancak halterlerin birbirine değmesine izin vermeyin. Halterleri yavaşça başlangıç pozisyonuna getirin.",
				"ipucu": "a) Bu haraketi yaparken kavisli bir sırttan kaçının. Karın kaslarınızı sıkılaştırarak bunu önleyebilirsiniz.<hr>b) Egzersizin maksimum etki etmesi için halterlerin birbirine temas etmesine izin vermeyin.<hr>c) Ağır ağırlıklarla antrenman yaparken, kas arızası sırasında halterin başınıza düşmesini önlemek için bir gözcü yararlı olabilir.<br>",
				"kaslar": "Bu egzersiz öncelikle ön ve yan deltoid kaslarının antremanına odaklanmaktadır. Bu omuzların üstünde yer almaktadır. Stabilize kaslar, biseps brakii (üst kol üst tarafı), triceps brachii (üst kol arka), serratus anterior ve serratus anterior (omuz kuşağı) ve trapezius'tur (sırtın üzerinde elmas şeklindeki kas). Halterleri başın üstünde kaldırabilmek için, bagajın dengeleyici kapasitesine de başvurulur. Dambıl omuz basın ile, abs de eğitilmiştir."
	
			},
			{
				"ad": "Barbell Front Raise",
				"sekil": "img/cat/omuz/Barbell-front-raise.gif",
				"melumat": "Ayaklarınız omuz genişliğinde ve ayaklarınız hafifçe bükülmüş olarak dik durun. Halteri elleriniz omuz genişliğinde olacak şekilde tutun. Avuçlarınız size bakıyor. Dirsekleriniz çok hafif düz şekilde bükülmüş. Şimdi kollarınızı, omuzlarınızın yüksekliğine ulaşana kadar öne ve yukarı doğru kaldırarak kaldırın. Ağırlığı yavaşça başlangıç konumuna indirin. Halterin bacaklarınıza temas etmesini önleyin.",
				"ipucu": "a) Barbell front raise gövdesi düz bir konumda yapılmalıdır.<hr>b) Vücudunuzu egzersiz yaparken yardımcı olmak zorunda kalmaktan koruyun.<hr>c) Egzersiz sırtınızla duvara da yapılabilir.<hr>d) Egzersiz sırasında dümdüz ileri bakmaya devam edin. <hr>e) Halter omuz yüksekliğinden daha yüksek olmayabilir.<br>",
				"kaslar": "Barbell front raise başlangıçta ön deltoid kasların (omuzların) antremanına odaklanır. Ayrıca, diğer çeşitli kaslar da eğitilmiştir. Omuzlarda bunlar trapezius ve lateral deltoiddir. Egzersizi yapmak için, ön kollardaki aşağıdaki kaslar yardımcı olur: extensor carpi radialis ve extensor carpi ulnaris. Son olarak, düz karın kası (rektus abdominisi) de önemli bir çaba ile başa çıkmak zorundadır."
	
			},
			{
				"ad": "Dumbbell Rear Fly",
				"sekil": "img/cat/omuz/dumbbell-rear-fly.gif",
				"melumat": "Bir fitness bankının sonuna oturun. Bir sandalye veya sandık da kullanabilirsiniz. Öne doğru eğilin ve vücudunuzun uyluklarınıza yaslanmasına izin verin. Ayaklarının yanındaki halterleri al. Avuçlarınız içeriye dönük. Şimdi dirsekleriniz omuz hizasında oluncaya kadar ellerinizi yukarı ve yana doğru kaldırın. Ağırlığı yavaşça başlangıç pozisyonuna getirin. Halterlerin bacaklarınıza temas etmesine izin vermeyin.",
				"ipucu": "a) Dirseklerinizin omuz yüksekliğinden daha yüksek olmasına izin vermeyin. Bu, egzersiz için bir anlam ifade etmiyor ve aşırı yüklenmeye neden olabilir.<hr>b) Halter arkasını, yaralanmaları önlemek için hafifçe bükülmüş dirseklerle yapın.<hr>c) Dambıllerin bacaklara temas etmesini önleyin ve bacaklarınıza vurmalarına izin vermeyin.<br>",
				"kaslar": "Bu sözde bileşik egzersizde  farklı kaslar eğitilmiştir. Bu, sadece tek bir egzersiz sırasında çok fazla etkinlik anlamına gelir. Dumbbell rear fly haraketi ile odak, omuzların hemen altında, üst sırtın iki tarafında bulunan arka deltoid üzerindedir. Ek olarak, bir dizi dengeleyici kas eğitilmiştir. Bunlar arkada ve omuzlarda trapezius (üst sırtın üst tarafı), eşkenar dörtgen kaslar (trapeziusun altı), küçük dişler (omuz bıçaklarının dış kenarı) ve infraspinatus (omuz bıçakları). Son olarak, triceps brachii (üst kolların altı) da eğitim alır."
	
			}
		],
		//sirt
		[
			{
				"ad": "Barbell Shrug Back",
				"sekil": "img/cat/sirt/Barbell-shrug-back.gif",
				"melumat": "Ayak omuz genişliğiniz ve düz dizlerinizle, halterin önünde durun. Ellerin omuz genişliğiyle halteri al. Avuçlarınız size dönük ve dirsekleriniz düz. Kollarınız uzanmış şekilde dik duruyorsunuz. Bu senin başlangıç pozisyonun. Şimdi omuzlarını indir. Ardından, halteri kulaklarınıza kaldırarak düz olarak yukarı çekin. Halteri yavaşça başlangıç pozisyonuna getirin.",
				"ipucu": "a) Daha ağır ağırlıklarla antrenman yaparken, silkmek (halter) raf yardımı ile yapılması tavsiye edilir. Halteri başlangıç pozisyonunuz hakkında bilgilendirin. <hr>b) Egzersiz sırasında omuzlarınızı yuvarlamanıza gerek yoktur. Aşağı ve yukarı doğru düz bir hareket yeterlidir.<hr>c) Halterleri daima vücudunuza karşı sıkı tutun.<br>",
				"kaslar": "Trapezius halter omuz silkme ile eğitilmiştir. Bu sırtın üst tarafındaki elmas şeklindeki kastır. Vurgu, trapeziusun üst tarafındadır ve levator skapulaları (omuz bıçağının boyuna doğru kaldırılması) yardımcı olur. Ele alınan diğer kaslar, fleksör dijitorum (önkolun arkası), fleksör pollicis longus (ön kolun arkası) ve alt sırtındaki erector spinae'dir. Kısacası: Bu, aynı anda farklı kasları çalıştırmak için etkili bir egzersizdir."
	
			},
			{
				"ad": "Dumbbell Pullover",
				"sekil": "img/cat/sirt/dumbbell-pullover.gif",
				"melumat": "İki elinizle bir halter alın (halterin kenarına doğru tutun). Düz bir fitness bankında arkanıza yaslanın. Ayaklarınız yere temas eder ve başınız sonunda görünür. Şimdi kollarını dümdüz yukarı itin ve yüzünüzün üstüne uzatın. Şimdi dumbbell'i yavaşça başınızın üzerine geri getirin. Göğsünüze ve omuzlarınıza çekildiğini hissettiğinizde hareketi durdurun. Ağırlığı yavaşça başlangıç pozisyonuna getirin.",
				"ipucu": "a) Sırtınızı dik tutmak için karın kasınızı sıkın. Sırtın boş kalmamalı.<hr>b) Dirseklerinizi daima aynı konumda tutun: hafifçe bükülmüş ve omuzlarınızla hizalı.<hr>c) Ne kadar uzatabileceğiniz esnekliğinize bağlıdır. Göğsünüze ve omuzlarınıza çekildiğini hissettiğinizde hareketi durdurun.<br>",
				"kaslar": "Ana göğüs kasları (pektoralis majör) ve geniş sırt kasları (latissimus dorsi) ağırlıklı olarak bu haraket ile eğitilir. Diğer çeşitli kaslar egzersizi gerçekleştirmeye yardımcı olur ve bu nedenle derhal ele alınır. Eğitilen destekleyici kaslar arasında triceps (üst kolların alt kısmında), düz karın kası (rektus abdominisi) ve büyük gluteal kaslar (glutaus maximus) bulunur. Kısacası: Bu, çok fazla etkinliğe sahip bir egzersizdir."
	
			},
			{
				"ad": "Dumbbell Rear Fly",
				"sekil": "img/cat/sirt/dumbbell-rear-fly.gif",
				"melumat": "Bir fitness bankının sonuna oturun. Bir sandalye veya sandık da kullanabilirsiniz. Öne doğru eğilin ve vücudunuzun uyluklarınıza yaslanmasına izin verin. Ayaklarının yanındaki halterleri al. Avuçlarınız içeriye dönük. Şimdi dirsekleriniz omuz hizasında oluncaya kadar ellerinizi yukarı ve yana doğru kaldırın. Ağırlığı yavaşça başlangıç pozisyonuna getirin. Halterlerin bacaklarınıza temas etmesine izin vermeyin.",
				"ipucu": "a) Dirseklerinizin omuz yüksekliğinden daha yüksek olmasına izin vermeyin. Bu, egzersiz için bir anlam ifade etmiyor ve aşırı yüklenmeye neden olabilir.<hr>b) Halter arkasını, yaralanmaları önlemek için hafifçe bükülmüş dirseklerle yapın.<hr>c) Dambıllerin bacaklara temas etmesini önleyin ve bacaklarınıza vurmalarına izin vermeyin.<br>",
				"kaslar": "Bu sözde bileşik egzersizde  farklı kaslar eğitilmiştir. Bu, sadece tek bir egzersiz sırasında çok fazla etkinlik anlamına gelir. Dumbbell rear fly haraketi ile odak, omuzların hemen altında, üst sırtın iki tarafında bulunan arka deltoid üzerindedir. Ek olarak, bir dizi dengeleyici kas eğitilmiştir. Bunlar arkada ve omuzlarda trapezius (üst sırtın üst tarafı), eşkenar dörtgen kaslar (trapeziusun altı), küçük dişler (omuz bıçaklarının dış kenarı) ve infraspinatus (omuz bıçakları). Son olarak, triceps brachii (üst kolların altı) da eğitim alır."
	
			},
			{
				"ad": "Dumbbell Single Arm Row",
				"sekil": "img/cat/sirt/dumbbell-single-arm-row.gif",
				"melumat": "Düz bir fitness tezgahı kullanın. Dizinizi ve destek kolunuzun elini fitness tezgahının kenarına yerleştirin. Üst gövdenin zeminde yatay olduğundan emin olun. Diğer ayağınızı kanepenin yanındaki yere yerleştirin. Ayağını stabilite için bir kenara koy. Dumbbell'i serbest elinizle alın ve avuç içinde fitness tezgahına bakacak şekilde tutun. Şimdi dumbbell'i gövdesine gelene kadar yukarı çekin. Hareket sırasında, kolunuz dirseğiniz belinizden biraz yukarıda olana kadar yanınızda hareket eder. Şimdi ağırlığı yavaşça başlangıç pozisyonuna getirin. İstediğiniz tekrar sayısını yapın ve ardından kol başlangıç pozisyonunu değiştirin.",
				"ipucu": "a) Bu egzersiz sırasında vücudunuzla mümkün olduğunca az hareket edin. Hareket, üst bedeninizden değil kolunuzdan gelmelidir.<hr>b) Haraketi  gerçekleştirirken, daima önünüzdeki bir metre kadar, zemindeki bir noktaya bakın.<hr>c) Vücudunuzun her iki tarafı için aynı egzersiz yükünü sağlayın.<br>",
				"kaslar": "Halter tekli kol sırası ile sırt kasları (latissimus dorsi ve eşkenar dörtgen kaslar), sırt omuz kasları (deltoid kaslar) ve üst kolların önü (pazılar) eğitilir. Ek olarak, üst sırttaki elmas şeklindeki kas (trapezius), üst kolların arkasındaki kas (ana büyük tırtıllar) ve dirsek eklemi üzerindeki ön kısım (brachialis) de bu egzersizde eğitilmiştir. Kısacası: Tek bir egzersizde aynı anda farklı kasları çalıştırıyorsunuz."
	
			},
			{
				"ad": "Barbell-bent-over-row",
				"sekil": "img/cat/sirt/Barbell-bent-over-row.gif",
				"melumat": "Halter önünüzde yerde. Halterle yüz yüze gidin. Halteri avuç içi gövdeye bakacak şekilde ve omuz genişliğinden biraz daha fazla tutun. Ayaklarınızı omuz genişliğine yerleştirin ve dizlerinizi hafifçe bükün. Sırtını dik tut. Dizleriniz halterin hemen üstüne gelinceye kadar kalçalarınızdan kıvrılın. Halterleri dirsekleriniz yerin gövdesine yakın olacak şekilde çekin. Halteri göbeğinize doğru hareket ettirin ancak dokunmayın. Halteri tekrar başlangıç konumuna indirin, ancak yere dokunmayın.",
				"ipucu": "a) Satır üstündeki halter düz bir sırt ile yapılmalıdır. Asla sırtınızı oyuk veya yuvarlak hale getirmeyin, çünkü bu yaralanma riskini arttırır.<hr>b) Bu egzersiz sırasında gözlerinizi önünüzdeki yaklaşık iki metre önünde bir noktaya odaklayın.<hr>c) İsteğe bağlı olarak, halteri avuçlarınızla kendinizden uzağa hareket ettirerek değişir. Bununla pazı eğitmeye daha çok önem veriyorsunuz.<br>",
				"kaslar": "Bu haraketde  özellikle sırtın üstündeki kasları çalıştırıyorsunuz. Bu, geniş sırt kası (latissimus dorsi), omuz etrafındaki üçgen kası (arka deltoid), omuz kılığındaki kas (infraspinatus) ve üst kolların önü (pazı) ile ilgilidir. Bu egzersizde de eğitilmiş olan kaslar, alt sırttaki sırt gergisi (erector spinae) ve arka bacak kaslarıdır (hamstrings)."
	
			},
			{
				"ad": "Chin Up",
				"sekil": "img/cat/sirt/chin-up.gif",
				"melumat": "Çubuğu ellerinizin omuz genişliğiyle kavrayın. Avuç içi vücudunla karşı karşıya. Hafifçe bükülmüş dizlerle çubuğa asın. Kafanı dik tut. Çenenizi çubuğun üstüne gelinceye kadar vücudunuzu yumuşak bir hareketle çekin. Sonra vücudunuzu yavaşça başlangıç pozisyonuna indirin. Vücudunuz başlangıç pozisyonundayken kollarınız tamamen uzar.",
				"ipucu": "a) Antrenman sırasında abs'inizi sert  tutun. Aksi halde vücudunu çok sallarsın.<hr>b) Dirsek yaralanmalarını önlemek için yavaşça başlangıç konumuna geri indirin <br>",
				"kaslar": "Bununla aktif olarak çalıştırdığınız kaslar aşağıda listelenmiştir. Arkada bunlar eşkenar dörtgen kaslar ve trapez omuz (trapezius). Omuzlarda bunlar delta şeklindeki kas (posterior deltoid) ve yuvarlak kol kaslarıdır (ana ve küçük ana teller). Üst kolların üst tarafında biceps brachii ve brachialis'i, alt kollarda ise brachioradialis kasını  çalıştırıyorsunuz. Ek olarak, diğer bazı kaslar hafifçe eğitilmiştir. Arkada bu infraspinatus, omuzda ise serratus anterior kuşağı. Ve kollarda bunlar fleksör karpi ulnaris, triceps brachii ve ekstansör digitorumdur."
	
			},
			{
				"ad": "Cable Lat Pulldown",
				"sekil": "img/cat/sirt/cable-lat-pulldown.gif",
				"melumat": "Bankta otur ve sırtını dik tut. Uyluklarınızı sıkıca silindirlerin altına yerleştirin. Çubuğu omuz genişliğinden biraz daha fazla tutun. Avuç içi vücudun kapalı. Çubuğu çenenizin altına indirin ve omuz bıçaklarınızı birbirine sıkın. Kollarınız tekrar düz oluncaya kadar ağırlığı yavaşça indirin.",
				"ipucu": "a) Çubuğu başınızın arkasına çekmeyin. Bunun omuz kapsülü üzerinde yarattığı gerilim yaralanmalara neden olabilir.<hr>b) Bu egzersizi düz bir sırtla yapın ve sırtınıza yaslanmayın.<hr>c) Bu egzersiz ellerinizi çubuğun omuz genişliğinden daha azına ve avuç içi size bakacak şekilde yerleştirerek daha hafif yapılabilir. <br>",
				"kaslar": "Bu haraket ile, tek bir egzersiz sırasında çok sayıda kasları çalıştırırsınız. Vurgu, geniş sırt kası (latissimus dorsi) ve büyük yuvarlak kol kası (ana teres ana) eğitimi üzerinedir. Ek olarak, üst kollardaki bazı kaslar etkili bir eğitim alır. Bunlar pazı brachii (ön üst kol), brachialis (ön dirsek eklemi), brachioradialis (kol-bacak bacak kası) ve posterior deltoid (omuzların etrafındaki üçgen kası). Son olarak, bir dizi dengeleyici kaslar birlikte çalışır. Bunlar arasında ekstansör digitorum (üst önkol), üst sırttaki farklı kaslar (trapezius, eşkenar dörtgen, eşkenar dörtgen ana), tensör fascia lata (ön kalçalar), triceps brachii (arka üst kollar) ve infraspinatus (omuz kanadının dibi) bulunur."
	
			}
		],
		//karin
		[
			{
				"ad": "Bridge Decline",
				"sekil": "img/cat/karin/Bridge-decline.gif",
				"melumat": "Fitness minderi üzerine sırt üstü uzanın. Ellerini vücudunun yanına koy. Şimdi dizlerinizi vücudunuza doğru eğin ve ayaklarınızı yere düz bir şekilde yerleştirin. Karın ve kalça kaslarınızı sıkın ve topuklarınıza baskı uygulayın. Kalçalarını yerden kaldır ve gövdesini yukarı kaldır. Kalçalarınızın üst bedeninizle düz bir çizgi oluşturduğundan emin olun. Bu pozisyonda 20 ila 30 saniye kalın. Kaslarınız yorulduğunda yere geri dönün. Egzersizi tekrarlayın.",
				"ipucu": "a) Köprüyü sakin hareketlerle yapın. Çok hızlı düşmeyin, çünkü bu yaralanmalara neden olabilir.<hr>b) Bir içbükey veya dışbükey geri kaçının. Karın ve kalça kaslarını sıkarak daima sabit bir düz pozisyon sağlayın.<hr>c) Bu egzersiz, karnınıza fazladan ağırlık verilerek daha ağır şekilde eğitilebilir.<br>",
				"kaslar": "Köprü, öncelikle, abs(karın kasları) ve bel kaslarını çalıştırmaya odaklanmaktadır. Bu egzersizde aşağıdaki karın kaslarına değinilir: düz karın kasları (rektus abdominisi), iç oblik karın kasları (eğik internus abdomini) ve dış eğik karın kasları (eğik eksterus abdomini). Alt sırtta, bölünmüş sırt kası (multifidus) ve sırt gerdiricisi (erector spinae) ele alınır. Son olarak, büyük gluteal kaslar (glutaeus maximus) ayrıca sıkı bir antrenman alır."
	
			},
			{
				"ad": "Crunch",
				"sekil": "img/cat/karin/crunch.gif",
				"melumat": "Bir spor minderinde sırtınızla uzanın. Ayaklarınızı kalçalarınıza doğru hareket ettirin ve yere düz bir şekilde koyun. Bacaklarınız artık zeminde hayali bir üçgen oluşturmalıdır. Ellerini arkana koy. Kollarınız öne doğru değil, yana doğru yönlendirilir. Nefes al. Şimdi abs'inizi sıkın ve yumuşak bir hareketle başınızı, omuzlarınızı ve omuz bıçaklarınızı yerden kaldırın. Zeminden fazla uzaklaşmayın ve yavaşça alçaltın. Nefes verin.",
				"ipucu": "a) Sırtınızı içi boş veya yuvarlak yapmayın, ancak her zaman sırtınızın düz olduğundan emin olun.<hr>b) Hareket midenden gelmeli. Bu yüzden başınızı ellerinizin boynunuzun arkasında olacak şekilde kaldırmayın.<hr>c) Elleriniz omuzlarınızda olacak şekilde ellerinizi göğsünüzün üzerinden geçirerek kıtlık hafifleşir.<hr>d) Egzersizi daha hafif kılmanın başka bir yolu da ayaklarınızı bir kanepenin altına sıkıştırmaktır.<br>",
				"kaslar": "Crunch öncelikle farklı karın kaslarını eğitmeye odaklanıyor. Bu egzersiz özellikle aşağıdaki karın kaslarına yöneliktir: düz karın kası (rektus abdomini), dış eğik karın kası (eğik externus abdomini) ve iç eğik karın kası (eğik internus abdomini). Eğitilmiş olan destekleyici kaslar büyük gluteal kaslardır (glutaeus maximus) ve uylukların önündeki rektus femoris."
	
			},
			{
				"ad": "Plank",
				"sekil": "img/cat/karin/plank.gif",
				"melumat": "Karnınızı yere yatırın ve dirseklerinize ve ayak parmaklarınıza yaslanın. Ellerin omuzlarının önünde sıkılıyken dirseklerine yaslan. Vücudunuzu, sadece ayak parmaklarınıza ve ön kollarınıza yaslanacak şekilde yükseltin. Aşağıya bak ve sırtını dik tut. Bu, tüm vücudunuzun baştan topuğa düz olması gerektiği anlamına gelir. Bir içbükey veya dışbükey geri kaçının. Bu pozisyonu bir süre basılı tutun. 15 saniye ile başlayın ve süresi yavaş yavaş arttırın. İsteğe bağlı olarak, kısa aralıklarla birden fazla set gerçekleştirin.",
				"ipucu": "a) Alt sırtın düz tutulması önemlidir.<hr>b) Başlangıçta konumunuzu kontrol edin.<hr>c) Yeni başlayanlar bu egzersizi ayak parmakları yerine dizler üzerinde de yapabilirler. Bu egzersiz yapmak için kolay yapar.<br>",
				"kaslar": "Plank haraketi, sözde bir bileşik alıştırmasıdır . Bu, tek seferde farklı kasları çalıştırdığınız anlamına gelir. Plank haraketi ile esas olarak çok sayıda önemli kasla mücadele edersiniz. Bunlar düz karın kası (rektus abdomini), iç oblik karın kası (eğik internus abdomini) ve dış eğik karın kası (eğik eksterus abdomini) 'dir. Ek olarak, omuzlarda, alt sırtta ve kalçalarda çeşitli dengeleyici kaslar çalışır."
	
			},
			{
				"ad": "Band Bicycle Crunch",
				"sekil": "img/cat/karin/band-bicycle-crunch.gif",
				"melumat": "Askıları ayaklarınızın etrafına yerleştirin. Sırtınızı yere bastırarak yere yaslayın. Gövde kaslarınızı sıkın. Ellerinizi başınızın arkasına gevşetin. Dizlerinizi 45 derecelik bir açıyla kaldırın. Bacaklarınızla bir bisiklet hareketi yapın. Her zaman karşı dizinizi dirsekle vurmak için bir dönüş yapın.",
				"ipucu": "a) Derin absleri daima omurgaya doğru çekerek omurgayı nötr pozisyonda tutun.<hr>b) Çeneyi göğsüne taşımaktan kaçının.<hr>c) Tüm egzersiz boyunca rahat bir boyun sağlayın.<br>",
				"kaslar": "Bisiklet egzersizi bileşik bir egzersizdir . Bu, egzersiz sırasında farklı kaslara yönelik anlamına gelir. Bu egzersiz temel olarak düz karın kası (rektus abdominisi), iç oblik abs (eğik internus karın kası), dış eğik karın (eğik eksterus karın kemiği) ve enine karın kası (enine karın kası) üzerinde durmaktadır. Ek olarak, çeşitli dengeleyici kaslar işbirliği yapar. Bunlar büyük gluteal kaslar (glutaeus maximus), hamstrings (arka uyluk), rectus femoris ve sartorius (her ikisi de ön uyluk)."
	
			}

		],
		//bacak
		[
			{
				"ad": "Barbell Romanian Deadlift",
				"sekil": "img/cat/ayaq/barbell-romanian-deadlift.gif",
				"melumat": "Ayaklarınızı omuz genişliğinden daha az tutun ve bir halter alın. Avuçlarınız vücudunuza bakıyor ve onları uyluklarınızın hemen dışındaki halterin üzerine yerleştiriyorsunuz. Dizlerinizi hafif bir açıyla bükün ve bu açıyı kaldırırken tuttuğunuzdan emin olun. Halterleri vücuda yakın tutun ve kollarınızı dik tutun. Çubuk dizinizin hemen altına düşene kadar kalçalarınızdan bükülerek üst bedeninizi şimdi indirin",
				"ipucu": "a) Dizlerinizi kaldırırken aynı açıda bükülmüş halde tutun ve sırtınızı dik tutun. Vücudunuzu daima sakince ve kontrollü bir şekilde indirin.<hr> b) Bu egzersizi normal Deadlift'ten daha az ağırlıkla yapın. <hr> c) Tekniği kontrol altına almak için yeni başlayanlar ilk önce bu egzersizi ağırlıksız daha iyi yapabilirler.",
				"kaslar":"Barbell Romen deadlift ile, bacaklarda ve kalçalarda farklı kaslar ele alınır. Vurgu büyük gluteal kaslara (glutaeus maximus) ve uylukların arkasındaki çeşitli kaslaradır. Kesin olmak gerekirse, semimembranosus, semitendinosus ve biceps femoris ile ilgilidir. Bu kaslar hamstrings bir parçasıdır. Son olarak, erector spinae (arka sedye) de hafifçe eğitilmiştir."
			},
			{
				"ad": "Barbell Deadlift",
				"sekil": "img/cat/ayaq/barbell-deadlift.gif",
				"melumat": "Önünüzdeki zemine bir halter yerleştirin ve ayaklarınız omuz genişliğinde olacak şekilde önünde durun. Dizlerinizi indirin ve halterinizi karışık bir kavrama ile kavrayabilene kadar sırtınızı ve kollarınızı düz tutun. Bir avuç size doğru bakarken, diğer avuç sizden uzağa bakar. Ellerin biraz dizlerinin dışında.Kendinizi sıkı tutun ve ayağa kalkana kadar dizlerinizi ve kalçalarınızı gerin. Hareketin en yüksek noktasında omuzlarınızı kulağınıza yaklaştırın sonra  göğsünüzü öne doğru açın. Omuzlarınızı alçaltın, dizlerinizi bükün ve halterinizi yavaşça yere indirin. Halterin yere temas etmesini önleyin.",
				"ipucu": "a) Egzersiz boyunca sırtınızı dik tutun. Bir içbükey veya dışbükey geri kaçının.<hr>b) Başlangıçta çok fazla ağırlık alma. Önce hareketi kontrol edin, sonra yavaşça ağırlığı yükseltin.<hr>c) Egzersiz sırasında zemine bakmayın, önünüzdeki yaklaşık iki metre zemindeki bir noktaya odaklanın",
				"kaslar":"Bu haraketi yaparken, büyük gluteal kaslar (glutaeus maximus) ve üst bacakların önü (vastus lateralis) ele alınır. Ek olarak, çeşitli destekleyici kaslar ele alınmaktadır. Yani, biseps femorisi (arka uyluklar), semimembranosus (arka uyluklar), semitendinosus (arka uyluklar), adductors (arka uyluklar) ve erector spinae (uzun düz sırt kasları). Kısacası: Bu, aynı anda farklı kasları eğitmek için etkili bir egzersizdir."
			},
			{
				"ad": "Dumbbell Squat",
				"sekil": "img/cat/ayaq/dumbbell-squat.gif",
				"melumat": "Dambılları alın ve ayaklarınız omuz genişliğinde durun. Dambılları vücudunuzun yanında uzanmış kolları ve avuçlarınız size dönük olacak şekilde tutun. Tüm egzersiz boyunca duvardaki bir noktaya dümdüz bir şekilde bakın. Uyluklarınız zeminde yatay olana kadar dizlerinizi bükün. Şimdi bacaklarınız tamamen uzayana kadar yavaşça tekrar yükselin.",
				"ipucu": "a) Bu egzersiz sırasında ileriye bakmaya devam edin.<hr>b) Topuklarınızın yerden çıkmasını önleyin. Bu durumda, indirmeyi bırakmanız gerekir.<hr>c) Halter çömelmesini sakin hareketlerle yapın. Alçalırken bacaklarınızı bükmeniz gerekmez.<hr>d) Uyluklarınızı zeminden yataydan daha yükseğe indirmeyin.",
				"kaslar": "Bu haraketi yaparken  büyük gluteal kasları (glutaeus maximus), üst bacakların önünü (rectus femoris) ve kuadrisepsleri eğitmektir. Bu, üst bacakların çoğuna yayılan dört başlı uyluk kasıdır. Daha spesifik olarak, uyluk aşağıdaki kasları içerir: vastus intermedius, vastus intermedius ve vastus medialis. Dumbbell boduruyla eğitilmiş diğer kaslar üst bacaklardaki eklemlerdir. Kısacası: Bu egzersizle bacaklarda ve kalçalarda çok sayıda kası zorlarsınız."
			},
			{
				"ad": "Barbell Lunge",
				"sekil": "img/cat/ayaq/Barbell-lunge.gif",
				"melumat": "Ayakda tam dik dur. Halter boynunuzun hemen altına, sırtınızın üst kısmına yerleştirin. Halteri avuçlarınız sizden uzakta olacak şekilde omuz genişliğinden biraz fazla tutun. Tek bacakla ileri doğru büyük bir adım atın ve ayağınızı yere düz bir şekilde koyun. Parmakların öne dönük olucak. Ön dizinizi ve ardından arka dizinizi de bükün. Vücut bu hareket nedeniyle yere doğru batıyor. Arka bacak zemine yatay gelene kadar indirmeyi durdurun. Ağırlık şimdi ayağınızın üzerinde. Şimdi kendini ön bacağından geçir. Egzersizi tekrarlayın ve birkaç tekrarın ardından ayağı değiştirin.",
				"ipucu": "a) Halteri boynunuza değil, sadece boynunuzun altına, sırtınızın üst kısmına yerleştirmeniz önemlidir.<hr>b) Tüm egzersiz sırasında dümdüz ileri bakın.<hr>c) Gövdenin sabit bir pozisyonda olduğundan emin olun ve mümkün olduğunca az hareket ettirin.<hr>d) Her zaman iki ayağı üzerinde daima aynı yük ile çalışın.<br>",
				"kaslar":"Barbell Lunge  haraketinde farklı kaslar, özellikle büyük kalça kasları ve uyluk önündeki kaslar çalıştırılır. Glutaeus maximus (büyük gluteal kaslar), indüktör magnus (büyük uyluk kasları), vastus medialis ve vastus lateralis (ön uyluk bacakları) konusunda kesin olmalıdır. Adductor brevis ve vastus intermedius (iç uyluktaki kaslar) da ele alınmaktadır. Kısacası: Barbell-lunge bacakların ve kalçaların büyük bölümleriyle mücadele eden etkili bir egzersizdir."
			},
			{
				"ad": "Barbell Step Up",
				"sekil": "img/cat/ayaq/Barbell-step-up.gif",
				"melumat": "20 ila 40 santimetre yüksekliğe sahip bir tezgah veya göğsün önünde durun. Ayaklarınızı yan yana yerleştirin ve boynunuzun hemen altına, üst sırtınızda bir halter yerleştirin. Dümdüz ileri bak ve sırtını dik tut. Şimdi bir bacağınızı yerden kaldırın ve bu bacağınızla tezgah veya göğsün üstüne çıkın. Diğer ayağını yanına koy. İlk ayağınızı tekrar hareket ettirin ve diğer ayağınızı takip edin.",
				"ipucu": "a) Halteri boynunuza doğru yerleştirmeyin, ancak boynunuzun hemen altına, sırtınızın üst kısmına yerleştirin. <hr>b) Halter basamağı sakin ve eşit bir hızda gerçekleştirilmelidir<hr>c) Birkaç tekrardan sonra daima ikinci bir set yapın. Şimdi diğer bacağını ilk önce kanepeye ya da göğse koy.<hr>d) Sadece bacaklarınızla hareket edin ve egzersizi düz bir sırtla yapın.<hr>e) Egzersizi ekstra ağırlıkla veya daha yüksek bir bank veya göğsüne basarak daha da zorlaştırabilirsiniz.<br>",
				"kaslar":"Barbell-step-up  haraketi ile alt gövdenin büyük bir bölümünü eğitmeye başladınız. Egzersiz, büyük gluteal kaslara (glutaeus maximus), üst bacakların yan kaslarına (vastus lateralis), üst bacakların ön tarafına (vastus medialis) ve baldırlara (gastrocnemius ve soleus) odaklanır. Küçük bir bonus olarak, biceps femoris (arka uyluk) kooperatif kas olarak da yetiştirilir."
			},
			{
				"ad": "Dumbbell Standing Calf Raise",
				"sekil": "img/cat/ayaq/dumbbell-standing-calf-raise.gif",
				"melumat": "Ayaklarınızı kalın bir tahta veya basamak gibi bir platformun üzerinde durun.ayak uçlarınızı platforma üzerine öyle yerleştirin ki topuklarınız ayak uçlarına nisbeten aşağıda kalsın. Dik durun ve dumbellleri düz bir şekilde kollarınızla vücudunuz boyunca tutun. Halter, uyluklarınızın yanında bulunsun.Şimdi ayak uçlarınızın üzerine dikelin ve topuklarınız yukarı kalksın. Şimdi  topuklarınızı yükseltinin altına indirerek kendinizi mümkün olduğunca aşağı indirin.",
				"ipucu": "a) Bu hareket sırasında esnemeyi önleyin. Hareket, başka hareketler olmadan sakince ve kontrollü bir şekilde gerçekleştirilmelidir.<hr>b) Hareket ayaklarından gelmeli. Dizlerinizin ve kalçalarınızın düz olduğundan daima emin olun.<hr>c) Dambıl ayakta baldır yükseltmek usta, ağırlıksız bir merdiven başlayabilirsiniz. Daha sonra, elinizi merdiven korkuluğuna yerleştirerek dengelenmeyi sağlayabilirsiniz.<br>",
				"kaslar": "Dumbbell Standing Calf Raise ile, baldırlarda altı kastan daha az egzersiz olmaz. Bunlar dana (soleus), uzun kavernöz fleksör (fleksör halüsis longus), uzun ayak fleksör (fleksör digitorum longus), arka tibial kas (tibialis posterior) ve taban (plantaris) altındaki yüzeyel baldır kası (gastrocnemius). Kısacası: Baldırdakı  tüm önemli kaslar bu egzersizle ele alınır."
			},
			{
				"ad": "Leg Press",
				"sekil": "img/cat/ayaq/leg-press.gif",
				"melumat": "Leg Press cihazına oturun. Kolları kavrayın. Arkanıza yaslanın ve ayaklarınızı plakaya yerleştirin. Ayaklarınız hafifçe dışa doğru yönlendirilir. Ağırlığı hafifçe yükseltmek için plakaya basınç uygulayın. Ardından güvenlik mandallarını serbest bırakın. Plakayı yavaşça ve rahatça gövdeye indirin. Bacaklarınızı tamamen uzayana kadar yavaşça yukarı itin. Ağırlığı kontrollü bir şekilde başlangıç pozisyonuna getirin.",
				"ipucu": "a) Yaralanmaları önlemek için, ağırlığı kontrollü bir şekilde azaltmak önemlidir.<hr>b) Maksimum sonuç için, ağırlığı mümkün olan en geniş aralıkta yukarı ve aşağı hareket ettirmek önemlidir.<hr>c) Bu alıştırmada ustalaşmak için yeni başlayanlar plakayı serinin sadece ilk çeyreğine indirebilir.<br>",
				"kaslar": "Leg Press ile  bacaklarda ve kalçalarda farklı kaslar eğitilir. İlk olarak, bu egzersiz kuadriseps ve büyük gluteal kasların (glutaeus maximus) antremanına odaklanmaktadır. Ek olarak, farklı kaslar üst bacakların ön ve iç kısımlarında yoğun olarak eğitilir. Uylukların önünde bunlar vastus medialis, vastus lateralis ve vastus intermedius'tur. Üst bacakların iç kısmındaki kaslar, endüktör magnus, endüktör breviler ve endüktör longus'tur."
			},
			{
				"ad": "Leg Extension",
				"sekil": "img/cat/ayaq/leg-extension.gif",
				"melumat": "Leg-extension cihazına oturun. Dizlerinizin arkasını, koltuğun kenarına ve diz eklemlerinize, kaldırma çubuğunun üst kısmı bacaklarınız arasına yerleştirin. Kaldırma çubuğunun ucundaki makaraların ayak bileklerinizin hemen ön tarafında olduğundan emin olun. Şimdi bacağına yaslan. Düz duruncaya kadar bacaklarınızı kaldırın. Vücudunuz dik duruyor ve ayaklarınız ileriye dönük. Yavaşça (işaretli) ağırlığı başlangıç konumuna getirin.",
				"ipucu": "a) Bacaklarınızı çok hızlı indirmeyin ve üst vücudunuzu dik tutun. <hr>b) Bacaklarınızı tamamen dümdüz olana kadar maksimuma çıkarın. Sonra onları yavaşça tekrar indirin. <hr>c) Ayak bileği ağırlıkları yardımıyla, bu egzersiz bir cihaz olmadan da (hafif biçimde) gerçekleştirilebilir.<br>",
				"kaslar":"Bu egzersizle uylukların önünde büyük bir kütle oluşturan kuadrisepslerle mücadele edilir. Kuadriseps, diz eklemini kontrol etmek için en önemli işleve sahiptir. Kuadriseps önemli bir kas kütlesi oluşturabilir, örneğin bisikletçiler, futbolcular ve patenciler bu durum böyle olabilir. Hepsi bacak uzatmasıyla ilgili dört bölümden oluşur. Özellikle eğitilmiş rektus femoris, vastus medialis, vastus lateralis ve vastus intermedius ile ilgilidir."
			},
			{
				"ad": "Lying Leg Curl",
				"sekil": "img/cat/ayaq/lying-leg-curl.gif",
				"melumat": "Lying-leg-curl cihazının üstüne yat. Dizleriniz yastığın kenarından hafifçe dışarı taşmalı ve diz eklemleriniz kaldırma çubuğunun üstüyle aynı hizada olmalıdır. Silindiri, ayak bileklerinin hemen yukarısındaki kaldırma çubuğunun arkasına yerleştirin. Bacaklarınızı mümkün olduğunca kalçalarınıza doğru hareket ettirin. Şimdi yavaşça başlangıç pozisyonuna dönün. Bu hareket iki veya üç saniye sürmelidir. Vücudunuzun daima bankayla temas halinde kaldığından emin olun.",
				"ipucu": "a) Ağırlığı çok hızlı bir şekilde başlangıç pozisyonuna getirmeyin.<hr>b) Kalçalar hareket sırasında çok fazla bükülmemelidir.<hr>c) Maksimum etki için bacakları olabildiğince kalçalara doğru hareket ettirin.<br>",
				"kaslar":"Bu haraket  ile üst bacakların arkasındaki kaslar özellikle eğitilir. İki başlı uyluk kası (biseps femoris), yarı kaslı kas (semimembranosus) ve yarı kaslı kas (semitendinosus) ile ilgilidir. Ek olarak, terzi kasları (sartorius) uyluk dışına ve yüzeyel baldır kaslarına (gastrocnemius) hafifçe eğitilmiştir."
			},
			{
				"ad": "Barbell Squat",
				"sekil": "img/cat/ayaq/Barbell-squat.gif",
				"melumat": "Ayaklarınızı omuz genişliğinde birbirinden ayırın ve ayaklarınızı hafifçe yerleştirin. Halteri boynunuzun arkasındaki omuzların üzerine getirin ve halterin boynunuzun hemen altına, sırtınızın üstünde durmasına izin verin. Halteri iki elinizle tutun. Ellerinizi omuz genişliğinden biraz daha uzağa yerleştirin. Dümdüz ileri bak ve aşağı bakma. Egzersiz boyunca dümdüz ileri bakmaya devam edin. Dizlerini bük ve yavaşça kendini yere indir. Topuklarını daima yerde tut. Uyluklarınız yerden yatay olarak durduğunda durun. Bundan sonra bacaklarınızı başlangıç pozisyonuna kadar güçlü bir hareketle gerin.",
				"ipucu": "a) Barbell squat ile sırt daima düz durmalıdır. İçi boş veya dışbükey sırt yaralanmaya neden olabilir.<hr>b) Dizler yukarı doğru uzanırken hareket etmemelidir, küçük parmağının yönünü takip etmeliler.<hr>c) Halter boynunun arkasına yerleştirmeyin ve topukları daima yerde tutun.<br>",
				"kaslar": "Barbell squat, alt gövdeyi güçlendirmek için daha iyi egzersizlerden biridir. Bu egzersizde birçok kas aynı anda çalıştırılır. Halter ağzı, esas olarak dört başlı uyluk kaslarına (aracı, vastus lateralis ve vastus medialis de dahil olmak üzere quadriceps vastus) ve büyük gluteal kaslara (glutaeus maximus) odaklanır. Ayrıca eğitilmiş olan kaslar hamstrings (sırt uyluk kasları) ve alt sırt kaslarıdır."
			}

		],
		[
			//1-ci gun
			[
				{
					"set":"4",
					"tekrar":"8,10 ve ya 12",
					"ad": "Barbell Bench Press",
					"sekil": "img/cat/sine/Barbell-bench-press.gif",
					"melumat": "Yatay olarak yerleştirilmiş bir fitness bankına sırtınızla uzanın. Halteri alın ve ellerinizi omuz genişliğinden biraz daha fazla tutun. Halteri kollarınız düz bir şekilde tutun ve göğsünüzün hemen üzerinde avuç içi yapın. Nefes alın ve halterleri göğse doğru yavaşça indirin ve hemen üzerinde durun. Kollarınız tekrar esnetilinceye kadar uzun süre halterle nefes verin ve itin.",
					"ipucu": "a) Yeni başlayanlar önce bu egzersizi ağırlık plakası olmayan bir halterle yapmalıdır. Harekete hakim olduğunuzda, halter üzerine ekstra ağırlık yükleyebilirsiniz. <hr>b) Bench press ile daima sırtınızı dik dururken fitness tezgahında kalın. Sırtınız büküldüğünde, ağırlığın çok ağır olduğu anlamına gelir. Bu yaralanma riskini arttırır.<hr>c) Yeni başlayanlar için bir yardımcı  kullanmak akıllıca olabilir. Bu aynı zamanda ağır ağırlık kullanan deneyimli sporcular için de geçerlidir.<hr>d) Halteri her zaman doğrudan göğsün üzerinde tutun ve ileri ya da geri dolaşmasına izin vermeyin.<br>",
					"kaslar": "Halter bench press, öncelikle göğüs, omuz ve kol kaslarını çalıştırmaya odaklanır. Bu egzersizde, büyük göğüs kası (depectoralis major), omuzların etrafındaki delta şekilli kas (anterior deltoid) ve üst kolun arkası (triceps brachii) güçlenir. Rotator manşet ve omuz bıçağının dengeleyici kasları da eğitilmiştir. Kısacası: bench press, farklı kasları eğitmek için etkili bir egzersizdir."
					
				},
				{
					"set":"4",
					"tekrar":"10",
					"ad": "Dumbbell Chest Press",
					"sekil": "img/cat/sine/dumbbell-chest-press.gif",
					"melumat": "Kanepenin ucuna oturun ve halterlerin dizlerinize yaslanmasına izin verin. Halterleri omuzlarınıza getirin ve sonra sırtüstü koltukta uzanın. Göğsünüzün her iki tarafındaki halterleri avuçlarınız vücudunuza dönük ve dirsekleriniz bükülmüş olarak tutun. Halterleri yukarı doğru bastırın ve dirseklerinizi yay şeklinde küçük bir hareketle gerin. Göğsünüzün üstündeki halterleri birbirine yakın tutun. Ağırlıkları yavaşça başlangıç pozisyonuna getirin ve hissettiğinizde omuzlarınıza çekin.",
					"ipucu": "a) Harekete hakim olmak için, yeni başlayanlar en iyi ihtimalle düşük ağırlıkla başlayabilir. <hr>b) Dambıl ile yay şeklinde hareketler yapın. Bu etki, halterleri omuz genişliğinden daha düşük ve omuz genişliğinden daha düşük tutarak sağlanmıştır. <hr>c) Egzersizi yapmazdan önce zemindeki halterleri uzandığınız konumdan almayın. Bu, yaralanmalara neden olabilir. <hr>d) Halterlerin birbirine değmesine izin vermeyin. <br>",
					"kaslar":"İlk etapta büyük göğüs kası (pektoralis majör) ve omuz kanadının (ön deltoid) yanlarındaki kasları çalıştırıyorsunuz. Halterleri kaldırmak için kollar genellikle üst kolların arkasındaki kaslara (triceps brachii) dayanır. Ek olarak, dambıl göğüs presini gerçekleştirmek için farklı kaslar birlikte çalışır. Bunlar dengeleyici kaslar. Bu omuz kuşağının ön serratusudur. Sırtta bunlar geniş sırt kası (latissimus dorsi) ve keşiş kasıdır (trapezius). Üst kollarda ise, bu ravenbone kol kasıdır (coracobrachialis)."
					
				},
				{
					"set":"4",
					"tekrar":"8 ve ya 10",
					"ad": "Dumbbell Fly ",
					"sekil": "img/cat/sine/dumbbell-fly.gif",
					"melumat": "Düz bir  fitness tezgahı kullanın. Kondisyon tezgahına uzanın ve halterleri hafifçe bükülmüş dirseklerle tutun. Halterler artık göğsün ortasından yüksekte, avuç içi birbirine bakmaktadır. Şimdi halterleri yumuşak bir hareketle göğsünüzün yanlarına getirin. Dirseklerinizin aynı açıyla hafifçe bükülmüş kaldığından emin olun. Omuzlarınızın ve göğsünüzün önünde bir çekme hissi oluştuğunda hareketi durdurun. Ardından dambılleri yavaşça başlangıç konumuna getirin. Halterlerin birbirine temas etmesini önleyin.",
					"ipucu": "a) Ağırlığı yavaşça arttırın. Son pozisyon omuz ekleminden çok şey talep ettiğinden, çok fazla ağırlık kullanırken yaralanma riski vardır. <hr>b) Dirsekler daima dambıl kanadı ile aynı açıda hafifçe bükülmüş kalmalıdır. <hr>c) Kolların her zaman omuzlarının önünde olmalı. <br>",
					"kaslar": "Dumbbell fly  sözde bileşik bir egzersizdir . Bu, aynı anda farklı kasların çalıştığı anlamına gelir. Ana pektoral kas (pektoralis major) esas olarak eğitilmiştir. Destekleyici kaslar deltoid kas (omuzlar), pazı brachii (üst kol üst tarafı), brachioradialis (alt kol alt tarafı) ve brachialis (üst kol üst tarafı)."
					
				},
				{
					"set":"4",
					"tekrar":"12",
					"ad": "Cable Crossover",
					"sekil": "img/cat/sine/cable-crossover.gif",
					"melumat": "Makaraları başınızın biraz üstünde olacak şekilde ayarlayın. Kasnaklar arasında ortada durun. Kolları avuç içi aşağı yatırılmış durumdayken tutun. Omuzların içe doğru döndü ve kalçaların hafifçe öne eğildi. Göğüs kaslarınızı sıkın ve kollarınızı aşağı ve içe doğru hareket ettirin. Dirseklerinizi hareket boyunca sabit bir açıda tutun. Yavaş (kontrollü) bir hareketle başlangıç pozisyonuna dönün.",
					"ipucu": "a) Hafif hareketler yapın ve kolların geri çekilmesini önleyin. Bu, omzun kaseden çıkmasına neden olabilir.<hr>b) Bu egzersiz bükülmüş dirseklerle yapılır. Bu nedenle göğüs kasları işi yapar, kol kaslarını değil.<hr>c) Kablo geçişi, makaraları omuz yüksekliğinin biraz altına ayarlayarak daha hafif yapılabilir. <br>",
					"kaslar": "Kablo geçişi ile birlikte büyük göğüs kasları (pektoralis major) ele alınır. Bu egzersizi yapabilmek için çeşitli destek kasları da kullanılır ve bu nedenle hafifçe eğitilir. Abs ile ilgilidir ve önkollarda flexor carpi ulnaris ve extensor carpi radialis bulunur."
					
				},
				{
					"set":"5",
					"tekrar":"10",
					"ad":"Barbell Biceps Curl",
					"sekil": "img/cat/qol/Barbell-biceps-curl.gif",
					"melumat": "Ayaklariniz omuz genisliginde ve dizler hafifçe bükülmüş olarak düz bir zeminde durun. Şimdi ön kollarınız dikey olana kadar halterinizi üst bedeninize doğru kaldırın.Kollarınız tekrar gerilinceye kadar çubugu yavaşça tekrar indirin.",
					"ipucu": "a) Pazı kıvırmak dirseklerinizle sürekli yanınızda yapılmalıdır.<hr>b) En iyi sonuçlar vücudu mümkün olduğunca sabit tutarak elde edilir. Bu nedenle, vücudunuzu sabit tutmak için kalça ve karın kaslarınızı sıkın.<hr>c) Vücudunuz hızlandırmak için çok hareket ettiğinde, halter aşırı yüklenmiş olur. Alt sırtınız daha sonra yüklenir ve bu, yaralanma riskini arttırır.<br>",
					"kaslar": "Barbell biceps curl haraketi, üst kolların ön kısmını (biseps brachii), dirsek ekleminin önünü (brachialis) ve alt kol kasını (brachioradialis) eğitmeye odaklanır. Ek olarak, önkol ve omuzlardaki bazı dengeleyici kaslar ele alınır. Omuzlarda, sırtın üstündeki elmas şeklindeki kas (trapezius) ve üst koldaki delta şeklindeki kas (anterior deltoid) vardır. Önkolların iç kısmında bunlar, flexor carpi radialis ve flexor carpi ulnaris'dir."
			
				},
				{
					"set":"5",
					"tekrar":"10",
					"ad":"Dumbbell Concentration Curl",
					"sekil": "img/cat/qol/dumbbell-concentration-curl.gif",
					"melumat": "Bir fitness bankına, tabureye ve ya sandalyeye oturun. Halteri ayaklarınızın arasına yerleştirin.Halterinizi avuçlarınız sizden uzağa bakacak şekilde tutun.Avucunuz omzunuza bakana kadar kolunuzu yukarı kaldırın. Kolunuz tamamen uzayana kadar ağırlığı tekrar indirin.",
					"ipucu": "a) Bu alıştırma izolasyonda yapılmalıdır. Bu, antrenman sırasında elbette antrenman yaptığınız kol dışında tüm vücudun sessiz olması gerektiği anlamına gelir <hr>b) Göğsünüzden dönüş veya kalkmayı önleyin. Bu durumda, o zaman ağırlık çok ağır.<hr>c) Diğer elinizi destek için uyluğunuza koyun.<br>",
					"kaslar":"Bu izolasyon egzersizi ile hedeflenen şekilde üç kası çalıştırıyorsunuz. Üst kolda bu esas olarak brachialis'tir. Bu, öndeki dirsek eklemi üzerinden geçen bir fleksör kasıdır. Dumbbell konsantrasyonu kıvrılmalarında da büyük ölçüde ele alınan biseps brachii altında üst kolun iç kısmında bulunur. Sonunda brachioradialis'i eğitiyorsun. Bu kolun ön kısmındaki kolla kaplı kas. Önkolların iç kısmında üst kısımda bulunur. Ek olarak, bazı dengeleyici kaslar onunla çalışır. Bunlar kollardaki fleksör carpi radialis ve fleksör carpi ulnaris'tir. Ön deltoid omuzda hafifçe eğitilmiştir."
				},
				{
					"set":"3",
					"tekrar":"12",
					"ad":"Barbell Wrist Curl",
					"sekil": "img/cat/qol/barbell-wrist-curl.gif",
					"melumat": "Bir fitness bankının ortasına oturun, öne dogru eğin ve ön kollarınızı bankta dinlendirin.Halteri omuz genişliğinden biraz daha az elinizle kavrayın. Avuçlarınız yukarı dönük.Kollarınızı, fitness tezgahında, bileklerinizi sonuna kadar dinlendirin.Artık fitness tezgahına dokunmadan bileklerinizi yere çevirebilirsiniz. Şimdi halteri yere indirin ve çubuğun avuç içinde parmaklara dogru dönmesine izin verin.",
					"ipucu": "a)Bilek bükme kaslarına karşı direnci korumak için bileklerinizi ve dirseklerinizi aynı yükseklikte tutun. <hr>b) Zemin yüzeyinin boş olduğundan emin olun. Halter elinizden kayarsa, başkalarına dokunmadan kayabilir.<hr>c) Ellerin dışındaki vücut parçalarının hareketlerinden kaçının.<br>",
					"kaslar":"Barbell wrist curl, öncelikle el fleksörlerini eğitmeye odaklanır. Bunlar, ön kollardaki ellerimizin hareket etmesini sağlayan kaslardır. Kesin olarak, radyal el kıvrımı olarak da bilinen flexor carpi radialis'i çalıştırıyorsunuz. Bu kas, ön kolun sağ tarafında çapraz olarak uzanır. Ayrıca ön kolun sol tarafında yer alan flexor carpi ulnaris'i de eğitiyorsunuz. Son olarak, flexor digitorum da hafifçe eğitilmiştir. Bu parmakların hareketine yardımcı olan bir kastır."
				
				}


			],
			//2-ci gun
			[
				{
					"set":"5",
					"tekrar":"10",
					"ad": "Barbell Front Raise",
					"sekil": "img/cat/omuz/Barbell-front-raise.gif",
					"melumat": "Ayaklarınız omuz genişliğinde ve ayaklarınız hafifçe bükülmüş olarak dik durun. Halteri elleriniz omuz genişliğinde olacak şekilde tutun. Avuçlarınız size bakıyor. Dirsekleriniz çok hafif düz şekilde bükülmüş. Şimdi kollarınızı, omuzlarınızın yüksekliğine ulaşana kadar öne ve yukarı doğru kaldırarak kaldırın. Ağırlığı yavaşça başlangıç konumuna indirin. Halterin bacaklarınıza temas etmesini önleyin.",
					"ipucu": "a) Barbell front raise gövdesi düz bir konumda yapılmalıdır.<hr>b) Vücudunuzu egzersiz yaparken yardımcı olmak zorunda kalmaktan koruyun.<hr>c) Egzersiz sırtınızla duvara da yapılabilir.<hr>d) Egzersiz sırasında dümdüz ileri bakmaya devam edin. <hr>e) Halter omuz yüksekliğinden daha yüksek olmayabilir.<br>",
					"kaslar": "Barbell front raise başlangıçta ön deltoid kasların (omuzların) antremanına odaklanır. Ayrıca, diğer çeşitli kaslar da eğitilmiştir. Omuzlarda bunlar trapezius ve lateral deltoiddir. Egzersizi yapmak için, ön kollardaki aşağıdaki kaslar yardımcı olur: extensor carpi radialis ve extensor carpi ulnaris. Son olarak, düz karın kası (rektus abdominisi) de önemli bir çaba ile başa çıkmak zorundadır."
				},
				{

					"set":"4",
					"tekrar":"10",
					"ad": "Dumbbell Rear Fly",
					"sekil": "img/cat/omuz/dumbbell-rear-fly.gif",
					"melumat": "Bir fitness bankının sonuna oturun. Bir sandalye veya sandık da kullanabilirsiniz. Öne doğru eğilin ve vücudunuzun uyluklarınıza yaslanmasına izin verin. Ayaklarının yanındaki halterleri al. Avuçlarınız içeriye dönük. Şimdi dirsekleriniz omuz hizasında oluncaya kadar ellerinizi yukarı ve yana doğru kaldırın. Ağırlığı yavaşça başlangıç pozisyonuna getirin. Halterlerin bacaklarınıza temas etmesine izin vermeyin.",
					"ipucu": "a) Dirseklerinizin omuz yüksekliğinden daha yüksek olmasına izin vermeyin. Bu, egzersiz için bir anlam ifade etmiyor ve aşırı yüklenmeye neden olabilir.<hr>b) Halter arkasını, yaralanmaları önlemek için hafifçe bükülmüş dirseklerle yapın.<hr>c) Dambıllerin bacaklara temas etmesini önleyin ve bacaklarınıza vurmalarına izin vermeyin.<br>",
					"kaslar": "Bu sözde bileşik egzersizde  farklı kaslar eğitilmiştir. Bu, sadece tek bir egzersiz sırasında çok fazla etkinlik anlamına gelir. Dumbbell rear fly haraketi ile odak, omuzların hemen altında, üst sırtın iki tarafında bulunan arka deltoid üzerindedir. Ek olarak, bir dizi dengeleyici kas eğitilmiştir. Bunlar arkada ve omuzlarda trapezius (üst sırtın üst tarafı), eşkenar dörtgen kaslar (trapeziusun altı), küçük dişler (omuz bıçaklarının dış kenarı) ve infraspinatus (omuz bıçakları). Son olarak, triceps brachii (üst kolların altı) da eğitim alır."
					
				},
				{

					"set":"4",
					"tekrar":"10 ve ya 12",
					"ad": "Dumbbell Shoulder Press",
					"sekil": "img/cat/omuz/dumbbell-shoulder-press.gif",
					"melumat": "Bir fitness bankına oturun ve dikey olarak yerleştirilmiş sırt dayanağına sıkıca oturun. Ayaklarınızı ayırın ve her bir elinizde bir halter alın. Halterleri kulak yüksekliğinde avuç içi öne bakacak şekilde tutun. Şimdi kollarınızı başınızın üstüne kadar uzatıncaya kadar halterleri yukarı itin. Halterler başınızın üzerinde bir araya gelsin, ancak halterlerin birbirine değmesine izin vermeyin. Halterleri yavaşça başlangıç pozisyonuna getirin.",
					"ipucu": "a) Bu haraketi yaparken kavisli bir sırttan kaçının. Karın kaslarınızı sıkılaştırarak bunu önleyebilirsiniz.<hr>b) Egzersizin maksimum etki etmesi için halterlerin birbirine temas etmesine izin vermeyin.<hr>c) Ağır ağırlıklarla antrenman yaparken, kas arızası sırasında halterin başınıza düşmesini önlemek için bir gözcü yararlı olabilir.<br>",
					"kaslar": "Bu egzersiz öncelikle ön ve yan deltoid kaslarının antremanına odaklanmaktadır. Bu omuzların üstünde yer almaktadır. Stabilize kaslar, biseps brakii (üst kol üst tarafı), triceps brachii (üst kol arka), serratus anterior ve serratus anterior (omuz kuşağı) ve trapezius'tur (sırtın üzerinde elmas şeklindeki kas). Halterleri başın üstünde kaldırabilmek için, bagajın dengeleyici kapasitesine de başvurulur. Dambıl omuz basın ile, abs de eğitilmiştir."

				},
				{

					"set":"4",
					"tekrar":"10",
					"ad":"Cable Triceps Pushdown",
					"sekil": "img/cat/qol/cable-triceps-pushdown.gif",
					"melumat": "Ellerinizi omuz genişliğinden biraz daha az yerleştirin. Kollarınızı gerin ve dirseğiniz yanınızda dururken çubugu yere itin. Şimdi kollarınızı kollarınız neredeyse üst kollariniza değene kadar yavasça geri hareket ettirin.",
					"ipucu": "a) Egzersiz sırasında sırtınızı dik tutun. Sırtınız sizinle birlikte hareket ettiğinde, ağırlık çok ağırdır ve triseps etkili bir şekilde eğitilmez.<hr>b) Kabloya yakın durun, böylece egzersiz boyunca yeterli dayanıklılığa sahip olursunuz.<hr>c) Bir ayağını diğerinin önüne koyarak daha fazla stabilite elde edilebilir.<br>",
					"kaslar": "İlk etapta, üst kolların arkasında bulunan triceps brachii'yi eğitiyorsunuz. Cable triceps pushdown  de diğer çeşitli kaslara iyi bir ikincil egzersiz sunuyor. Bunlar, egzersizi gerçekleştirmeye yardımcı olan dengeleyici kaslar. Bunlar düz karın kasları (rektus abdomini) ve dış eğik karın kasları (oblik externus abdomini) 'dir. Büyük pektoralis major (pektoralis major) de hafifçe eğitilmiştir. Ön kollarda, el fleksörleri (flexor carpi radialis ve flexor carpi ulnaris) iyi bir ikincil egzersiz yapar."
				},
				{

					"set":"4",
					"tekrar":"10 ve ya 12",
					"ad":"Dumbbell Kickback",
					"sekil": "img/cat/qol/dumbbell-kickback.gif",
					"melumat": "Elinize yaslanın ve dizinizi stabilizasyon için kullanın.Diğer ayağınızı kanepenin yanındakı yere yerleştirin. Bacağınızla kanepe arasında bir boşluk bırakın. Şimdi kolunuzu tamamen uzayana ve geriye doğru çıkana kadar dirseğinizden uzatın.Ağırlığı yavasça başlanğıç konumuna indirin.",
					"ipucu": "a) Hareketi kolundan yap. Vücudunuzun ağırlığını taşımasına yardım etmesini önleyin.<hr>b) Dirseğinizin daima yanınızın yanında durduğundan emin olun.<hr>c) Egzersiz sırasında önünüzdeki bir metreden bir noktaya bakın.<br>",
					"kaslar": "Dumbbell kickback egzersizinde  özellikle triceps brachii eğitilmiştir. Ek olarak, eğitilmiş ve bir egzersiz sırasında çok fazla etkinlik anlamına gelen üç stabilize edici kas vardır. Destekleyici kaslar posterior deltoid (omuzlar) ve uzatıcı carpi ulnaris'tir (iç önkol). Latissimus dorsi (geniş sırt kası) da hafifçe eğitilmiştir."
				},
				{

					"set":"4",
					"tekrar":"10",
					"ad":"Dumbbell Triceps Extension",
					"sekil": "img/cat/qol/dumbbell-triceps-extension.gif",
					"melumat": "Bacaklariniz hafifce birbirinden ayrı ve ayaklarınız hafifce dize bakacak şekilde dik durun. Halterin bir tarafında her iki avuç içi olan bir halter alın. Elleriniz artık dambıl tarafının iç tarafında V şeklindedir.Dirseklerinizi sabit tutun ve halteri başınızın arkasına getirin. Dirsekleriniz hareketin sonunda biraz hareket etsin.",
					"ipucu": "a) dumbbell triceps extension ile sırtınızın egzersiz boyunca düz olması amaçlanmıştır. Bunun için absini sıkın. <hr>b) Ağırlığı yavaşça indirin ve kontrollü bir hareket sağlayın.<hr>c) Çok fazla kilo alarak kas yetmezliğinden kaçının. Ağırlık boynunuza düşebilir.<br>",
					"kaslar": "Bir çok sporcu, pazı (ön üst kollar) iyi eğitilirken triceps'i eğitmeyi unutma eğilimindedir. Her ikisinin de dikkat etmesi gerekir, çünkü tricepsler pazıların zıt işini yapar: triceps önkolu uzatır ve pazı önkolu esnetir. Halter triceps uzantısıyla triceps brachii'ye ek olarak aynı zamanda fleksör karpi ulnaris (önkolların altı), deltoid (omuzların üstü), pektoralis major (büyük göğüs kasları) ve latissimus dorsi'nin (geniş sırt kasları) antremanı yapabilirsiniz. Kısacası, aynı anda farklı kasları çalıştırmak için etkili bir egzersiz."	
				}


			],
			//3-ci gun
			[
				{
					"set":"4",
					"tekrar":"8 ve ya 10",
					"ad": "Barbell-bent-over-row",
					"sekil": "img/cat/sirt/Barbell-bent-over-row.gif",
					"melumat": "Halter önünüzde yerde. Halterle yüz yüze gidin. Halteri avuç içi gövdeye bakacak şekilde ve omuz genişliğinden biraz daha fazla tutun. Ayaklarınızı omuz genişliğine yerleştirin ve dizlerinizi hafifçe bükün. Sırtını dik tut. Dizleriniz halterin hemen üstüne gelinceye kadar kalçalarınızdan kıvrılın. Halterleri dirsekleriniz yerin gövdesine yakın olacak şekilde çekin. Halteri göbeğinize doğru hareket ettirin ancak dokunmayın. Halteri tekrar başlangıç konumuna indirin, ancak yere dokunmayın.",
					"ipucu": "a) Satır üstündeki halter düz bir sırt ile yapılmalıdır. Asla sırtınızı oyuk veya yuvarlak hale getirmeyin, çünkü bu yaralanma riskini arttırır.<hr>b) Bu egzersiz sırasında gözlerinizi önünüzdeki yaklaşık iki metre önünde bir noktaya odaklayın.<hr>c) İsteğe bağlı olarak, halteri avuçlarınızla kendinizden uzağa hareket ettirerek değişir. Bununla pazı eğitmeye daha çok önem veriyorsunuz.<br>",
					"kaslar": "Bu haraketde  özellikle sırtın üstündeki kasları çalıştırıyorsunuz. Bu, geniş sırt kası (latissimus dorsi), omuz etrafındaki üçgen kası (arka deltoid), omuz kılığındaki kas (infraspinatus) ve üst kolların önü (pazı) ile ilgilidir. Bu egzersizde de eğitilmiş olan kaslar, alt sırttaki sırt gergisi (erector spinae) ve arka bacak kaslarıdır (hamstrings)."
					
				},
				{
					"set":"4",
					"tekrar":"10",
					"ad": "Cable Lat Pulldown",
					"sekil": "img/cat/sirt/cable-lat-pulldown.gif",
					"melumat": "Bankta otur ve sırtını dik tut. Uyluklarınızı sıkıca silindirlerin altına yerleştirin. Çubuğu omuz genişliğinden biraz daha fazla tutun. Avuç içi vücudun kapalı. Çubuğu çenenizin altına indirin ve omuz bıçaklarınızı birbirine sıkın. Kollarınız tekrar düz oluncaya kadar ağırlığı yavaşça indirin.",
					"ipucu": "a) Çubuğu başınızın arkasına çekmeyin. Bunun omuz kapsülü üzerinde yarattığı gerilim yaralanmalara neden olabilir.<hr>b) Bu egzersizi düz bir sırtla yapın ve sırtınıza yaslanmayın.<hr>c) Bu egzersiz ellerinizi çubuğun omuz genişliğinden daha azına ve avuç içi size bakacak şekilde yerleştirerek daha hafif yapılabilir. <br>",
					"kaslar": "Bu haraket ile, tek bir egzersiz sırasında çok sayıda kasları çalıştırırsınız. Vurgu, geniş sırt kası (latissimus dorsi) ve büyük yuvarlak kol kası (ana teres ana) eğitimi üzerinedir. Ek olarak, üst kollardaki bazı kaslar etkili bir eğitim alır. Bunlar pazı brachii (ön üst kol), brachialis (ön dirsek eklemi), brachioradialis (kol-bacak bacak kası) ve posterior deltoid (omuzların etrafındaki üçgen kası). Son olarak, bir dizi dengeleyici kaslar birlikte çalışır. Bunlar arasında ekstansör digitorum (üst önkol), üst sırttaki farklı kaslar (trapezius, eşkenar dörtgen, eşkenar dörtgen ana), tensör fascia lata (ön kalçalar), triceps brachii (arka üst kollar) ve infraspinatus (omuz kanadının dibi) bulunur."
					
				},
				{
					"set":"4",
					"tekrar":"10",
					"ad": "Dumbbell Single Arm Row",
					"sekil": "img/cat/sirt/dumbbell-single-arm-row.gif",
					"melumat": "Düz bir fitness tezgahı kullanın. Dizinizi ve destek kolunuzun elini fitness tezgahının kenarına yerleştirin. Üst gövdenin zeminde yatay olduğundan emin olun. Diğer ayağınızı kanepenin yanındaki yere yerleştirin. Ayağını stabilite için bir kenara koy. Dumbbell'i serbest elinizle alın ve avuç içinde fitness tezgahına bakacak şekilde tutun. Şimdi dumbbell'i gövdesine gelene kadar yukarı çekin. Hareket sırasında, kolunuz dirseğiniz belinizden biraz yukarıda olana kadar yanınızda hareket eder. Şimdi ağırlığı yavaşça başlangıç pozisyonuna getirin. İstediğiniz tekrar sayısını yapın ve ardından kol başlangıç pozisyonunu değiştirin.",
					"ipucu": "a) Bu egzersiz sırasında vücudunuzla mümkün olduğunca az hareket edin. Hareket, üst bedeninizden değil kolunuzdan gelmelidir.<hr>b) Haraketi  gerçekleştirirken, daima önünüzdeki bir metre kadar, zemindeki bir noktaya bakın.<hr>c) Vücudunuzun her iki tarafı için aynı egzersiz yükünü sağlayın.<br>",
					"kaslar": "Halter tekli kol sırası ile sırt kasları (latissimus dorsi ve eşkenar dörtgen kaslar), sırt omuz kasları (deltoid kaslar) ve üst kolların önü (pazılar) eğitilir. Ek olarak, üst sırttaki elmas şeklindeki kas (trapezius), üst kolların arkasındaki kas (ana büyük tırtıllar) ve dirsek eklemi üzerindeki ön kısım (brachialis) de bu egzersizde eğitilmiştir. Kısacası: Tek bir egzersizde aynı anda farklı kasları çalıştırıyorsunuz."
					
				},
				{
					"set":"3",
					"tekrar":"12",
					"ad": "Barbell Shrug Back",
					"sekil": "img/cat/sirt/Barbell-shrug-back.gif",
					"melumat": "Ayak omuz genişliğiniz ve düz dizlerinizle, halterin önünde durun. Ellerin omuz genişliğiyle halteri al. Avuçlarınız size dönük ve dirsekleriniz düz. Kollarınız uzanmış şekilde dik duruyorsunuz. Bu senin başlangıç pozisyonun. Şimdi omuzlarını indir. Ardından, halteri kulaklarınıza kaldırarak düz olarak yukarı çekin. Halteri yavaşça başlangıç pozisyonuna getirin.",
					"ipucu": "a) Daha ağır ağırlıklarla antrenman yaparken, silkmek (halter) raf yardımı ile yapılması tavsiye edilir. Halteri başlangıç pozisyonunuz hakkında bilgilendirin. <hr>b) Egzersiz sırasında omuzlarınızı yuvarlamanıza gerek yoktur. Aşağı ve yukarı doğru düz bir hareket yeterlidir.<hr>c) Halterleri daima vücudunuza karşı sıkı tutun.<br>",
					"kaslar": "Trapezius halter omuz silkme ile eğitilmiştir. Bu sırtın üst tarafındaki elmas şeklindeki kastır. Vurgu, trapeziusun üst tarafındadır ve levator skapulaları (omuz bıçağının boyuna doğru kaldırılması) yardımcı olur. Ele alınan diğer kaslar, fleksör dijitorum (önkolun arkası), fleksör pollicis longus (ön kolun arkası) ve alt sırtındaki erector spinae'dir. Kısacası: Bu, aynı anda farklı kasları çalıştırmak için etkili bir egzersizdir."
					
				},
				{
					"set":"4",
					"tekrar":"8 ve ya 10",
					"ad": "Barbell Deadlift",
					"sekil": "img/cat/ayaq/barbell-deadlift.gif",
					"melumat": "Önünüzdeki zemine bir halter yerleştirin ve ayaklarınız omuz genişliğinde olacak şekilde önünde durun. Dizlerinizi indirin ve halterinizi karışık bir kavrama ile kavrayabilene kadar sırtınızı ve kollarınızı düz tutun. Bir avuç size doğru bakarken, diğer avuç sizden uzağa bakar. Ellerin biraz dizlerinin dışında.Kendinizi sıkı tutun ve ayağa kalkana kadar dizlerinizi ve kalçalarınızı gerin. Hareketin en yüksek noktasında omuzlarınızı kulağınıza yaklaştırın sonra  göğsünüzü öne doğru açın. Omuzlarınızı alçaltın, dizlerinizi bükün ve halterinizi yavaşça yere indirin. Halterin yere temas etmesini önleyin.",
					"ipucu": "a) Egzersiz boyunca sırtınızı dik tutun. Bir içbükey veya dışbükey geri kaçının.<hr>b) Başlangıçta çok fazla ağırlık alma. Önce hareketi kontrol edin, sonra yavaşça ağırlığı yükseltin.<hr>c) Egzersiz sırasında zemine bakmayın, önünüzdeki yaklaşık iki metre zemindeki bir noktaya odaklanın",
					"kaslar":"Bu haraketi yaparken, büyük gluteal kaslar (glutaeus maximus) ve üst bacakların önü (vastus lateralis) ele alınır. Ek olarak, çeşitli destekleyici kaslar ele alınmaktadır. Yani, biseps femorisi (arka uyluklar), semimembranosus (arka uyluklar), semitendinosus (arka uyluklar), adductors (arka uyluklar) ve erector spinae (uzun düz sırt kasları). Kısacası: Bu, aynı anda farklı kasları eğitmek için etkili bir egzersizdir."
							
				},
				{
					"set":"4",
					"tekrar":"10",
					"ad": "Leg Extension",
					"sekil": "img/cat/ayaq/leg-extension.gif",
					"melumat": "Leg-extension cihazına oturun. Dizlerinizin arkasını, koltuğun kenarına ve diz eklemlerinize, kaldırma çubuğunun üst kısmı bacaklarınız arasına yerleştirin. Kaldırma çubuğunun ucundaki makaraların ayak bileklerinizin hemen ön tarafında olduğundan emin olun. Şimdi bacağına yaslan. Düz duruncaya kadar bacaklarınızı kaldırın. Vücudunuz dik duruyor ve ayaklarınız ileriye dönük. Yavaşça (işaretli) ağırlığı başlangıç konumuna getirin.",
					"ipucu": "a) Bacaklarınızı çok hızlı indirmeyin ve üst vücudunuzu dik tutun. <hr>b) Bacaklarınızı tamamen dümdüz olana kadar maksimuma çıkarın. Sonra onları yavaşça tekrar indirin. <hr>c) Ayak bileği ağırlıkları yardımıyla, bu egzersiz bir cihaz olmadan da (hafif biçimde) gerçekleştirilebilir.<br>",
					"kaslar":"Bu egzersizle uylukların önünde büyük bir kütle oluşturan kuadrisepslerle mücadele edilir. Kuadriseps, diz eklemini kontrol etmek için en önemli işleve sahiptir. Kuadriseps önemli bir kas kütlesi oluşturabilir, örneğin bisikletçiler, futbolcular ve patenciler bu durum böyle olabilir. Hepsi bacak uzatmasıyla ilgili dört bölümden oluşur. Özellikle eğitilmiş rektus femoris, vastus medialis, vastus lateralis ve vastus intermedius ile ilgilidir."
							
				},
				{
					"set":"4",
					"tekrar":"8 ve ya10",
					"ad": "Leg Press",
					"sekil": "img/cat/ayaq/leg-press.gif",
					"melumat": "Leg Press cihazına oturun. Kolları kavrayın. Arkanıza yaslanın ve ayaklarınızı plakaya yerleştirin. Ayaklarınız hafifçe dışa doğru yönlendirilir. Ağırlığı hafifçe yükseltmek için plakaya basınç uygulayın. Ardından güvenlik mandallarını serbest bırakın. Plakayı yavaşça ve rahatça gövdeye indirin. Bacaklarınızı tamamen uzayana kadar yavaşça yukarı itin. Ağırlığı kontrollü bir şekilde başlangıç pozisyonuna getirin.",
					"ipucu": "a) Yaralanmaları önlemek için, ağırlığı kontrollü bir şekilde azaltmak önemlidir.<hr>b) Maksimum sonuç için, ağırlığı mümkün olan en geniş aralıkta yukarı ve aşağı hareket ettirmek önemlidir.<hr>c) Bu alıştırmada ustalaşmak için yeni başlayanlar plakayı serinin sadece ilk çeyreğine indirebilir.<br>",
					"kaslar": "Leg Press ile  bacaklarda ve kalçalarda farklı kaslar eğitilir. İlk olarak, bu egzersiz kuadriseps ve büyük gluteal kasların (glutaeus maximus) antremanına odaklanmaktadır. Ek olarak, farklı kaslar üst bacakların ön ve iç kısımlarında yoğun olarak eğitilir. Uylukların önünde bunlar vastus medialis, vastus lateralis ve vastus intermedius'tur. Üst bacakların iç kısmındaki kaslar, endüktör magnus, endüktör breviler ve endüktör longus'tur."
							
				},
				{
					"set": "4",
					"tekrar": "10",
					"ad": "Barbell Squat",
					"sekil": "img/cat/ayaq/Barbell-squat.gif",
					"melumat": "Ayaklarınızı omuz genişliğinde birbirinden ayırın ve ayaklarınızı hafifçe yerleştirin. Halteri boynunuzun arkasındaki omuzların üzerine getirin ve halterin boynunuzun hemen altına, sırtınızın üstünde durmasına izin verin. Halteri iki elinizle tutun. Ellerinizi omuz genişliğinden biraz daha uzağa yerleştirin. Dümdüz ileri bak ve aşağı bakma. Egzersiz boyunca dümdüz ileri bakmaya devam edin. Dizlerini bük ve yavaşça kendini yere indir. Topuklarını daima yerde tut. Uyluklarınız yerden yatay olarak durduğunda durun. Bundan sonra bacaklarınızı başlangıç pozisyonuna kadar güçlü bir hareketle gerin.",
					"ipucu": "a) Barbell squat ile sırt daima düz durmalıdır. İçi boş veya dışbükey sırt yaralanmaya neden olabilir.<hr>b) Dizler yukarı doğru uzanırken hareket etmemelidir, küçük parmağının yönünü takip etmeliler.<hr>c) Halter boynunun arkasına yerleştirmeyin ve topukları daima yerde tutun.<br>",
					"kaslar": "Barbell squat, alt gövdeyi güçlendirmek için daha iyi egzersizlerden biridir. Bu egzersizde birçok kas aynı anda çalıştırılır. Halter ağzı, esas olarak dört başlı uyluk kaslarına (aracı, vastus lateralis ve vastus medialis de dahil olmak üzere quadriceps vastus) ve büyük gluteal kaslara (glutaeus maximus) odaklanır. Ayrıca eğitilmiş olan kaslar hamstrings (sırt uyluk kasları) ve alt sırt kaslarıdır."
			
				}
			]
		]
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
		},
		{
			"ad": "Haftalık",
			"sekil": "img/cat6.jpg",
			"sekil1": "img/definasyon.jpg",
			"sekil2": "img/definasyon.jpg",
			"sekil3": "img/definasyon.jpg"
		}

	];

//heftelik girilibse
	if(cat_id==6)
	{
		$(".mesqler").hide();
		$(".m4").show();
		$(".mesq_basla").hide();
	}

	$(".hefte ul li").click(function()
	{
		$(".hefte").hide();
		hefte = $(this).data("value");

		//alert(mesqler[6][0][0]["set"]);
		mesqsayi_x = mesqler[cat_id][hefte].length;
		$(".mesqler").show();

		for (var i = 0; i < mesqsayi_x; i++) 
		{
		
			mesq = '<li class="mesq_ac" data-value="'+i+'">'+
						'<div class="m_sol">'+
							'<div class="m_sol_ust">'+
								'<h2>'+mesqler[cat_id][hefte][i]['ad']+'</h2>'+
							'</div>'+
						'</div>'+
						'<div class="m_sag">'+
							'<img src="'+mesqler[cat_id][hefte][i]['sekil']+'">'+
						'</div>'+
					'</li>';

			$(mesq).appendTo(".mesqler ul");

			$(".m4").hide();
			$(".mesq_basla").show();	

		}
		$(".mesq_ac").click(function()
		{
			var secilen = $(this).data("value");
			$(".m5").show();
			$(".m1").hide();
			$(".m4").hide();
			menuicon.hide();
			$(".head_r span").hide();
			bilgiicon.removeClass("fa-lightbulb");
			bilgiicon.addClass("fa-times-circle");
			yardim = 2;

			$(".cattitle").html(mesqler[cat_id][hefte][secilen]['ad']);
			$(".sekil").attr("src",mesqler[cat_id][hefte][secilen]['sekil']);
			$(".catinfo").html(mesqler[cat_id][hefte][secilen]['melumat']);
			$(".catinfo2").html(mesqler[cat_id][hefte][secilen]['ipucu']);
			$(".catinfo3").html(mesqler[cat_id][hefte][secilen]['kaslar']);


		});
		
	});

//heftelik girilibse
	

	var mesqsayi = mesqler[cat_id].length;

	$("#cat"+cetinlik).addClass("aktiv");
	 //mesqler array-inden gelen deyer olacaq bu deyer 

	$(".title").html(kateqoriyalar[cat_id]['ad']);
	
	if(cetinlik==1)
	{
		sekil.attr("src",kateqoriyalar[cat_id]['sekil1']);
	}
	else if(cetinlik==2)
	{
		sekil.attr("src",kateqoriyalar[cat_id]['sekil2']);	
	}
	else
	{
		sekil.attr("src",kateqoriyalar[cat_id]['sekil3']);
	}
	
	if(cat_id!=6)
	{
		for (var i = 0; i < mesqsayi; i++) 
		{
		
			mesq = '<li class="home2"><a href="kateqoriya.html">'+
						'<div class="m_sol">'+
							'<div class="m_sol_ust">'+
								'<h2>'+mesqler[cat_id][i]['ad']+'</h2>'+
							'</div>'+
						'</div>'+
						'<div class="m_sag">'+
							'<img src="'+mesqler[cat_id][i]['sekil']+'">'+
						'</div>'+
					'</a></li>';

			$(mesq).appendTo(".mesqler ul");	

		}

	}

	$(".home2").click(function()
	{
			home=2;
			localStorage.setItem("home",home);
		
	});
	

	
	for(var i = 14; i< 60; i+=2)
	{
		tekrarelave = '<option value="'+i+'">x'+i+'</option>';
		$(tekrarelave).appendTo("#mesqsay_x");
	}

	//hereketsayi secimi
	$(".tekrarsec").click(function()
	{
		$(".tekrarsec").removeClass("aktiv");
		$(this).addClass("aktiv");

	});

	
	var sira = 0;
	var saniye = 0;
	$(".mesq_basla").click(function()
	{
		zaman();
		if(cat_id!=6)
		{


			
			$(".m1").hide();
			$(".m2").show();

			$(".mesq_b_sekil").attr("src",mesqler[cat_id][sira]['sekil']);
			$(".mesq_b_ad").html(mesqler[cat_id][sira]['ad']);
			responsiveVoice.speak(mesqler[cat_id][sira]['ad']);
			
		}
		else
		{
			$(".m1").hide();
			$(".m2").show();
			$(".tekrarlar").hide();
			$(".mesq_b_sekil").attr("src",mesqler[cat_id][hefte][sira]['sekil']);
			$(".mesq_b_ad").html(mesqler[cat_id][hefte][sira]['ad']);
			$(".mesq_s_say").html("Set sayı: "+mesqler[cat_id][hefte][sira]['set']);
			$(".mesq_b_say").html("Tekrar sayı: "+mesqler[cat_id][hefte][sira]['tekrar']);
			$(".oldu").removeClass("fa-check");
			$(".oldu").addClass("fa-question");
			responsiveVoice.speak(mesqler[cat_id][hefte][sira]['ad']);
		}
	
	});

	$("#skip_sol").click(function()
	{
		sira = sira-1;
		if(cat_id!=6)
		{


			if(sira<0)
			{
				sira = mesqler[cat_id].length;
			}

			$(".mesq_b_sekil").attr("src",mesqler[cat_id][sira]['sekil']);
			$(".mesq_b_ad").html(mesqler[cat_id][sira]['ad']);
			responsiveVoice.speak(mesqler[cat_id][sira]['ad']);
			
		}
		else
		{
			if(sira<0)
			{
				sira = mesqler[cat_id][hefte].length;
			}

			$(".mesq_b_sekil").attr("src",mesqler[cat_id][hefte][sira]['sekil']);
			$(".mesq_b_ad").html(mesqler[cat_id][hefte][sira]['ad']);
			$(".mesq_s_say").html("Set sayı: "+mesqler[cat_id][hefte][sira]['set']);
			$(".mesq_b_say").html("Tekrar sayı: "+mesqler[cat_id][hefte][sira]['tekrar']);
			responsiveVoice.speak(mesqler[cat_id][sira][hefte]['ad']);
		}
	});

	var tarix = new Date();
	var gun = tarix.getDate();
	mesqgunsayi = JSON.parse(localStorage.getItem("mesqgunsay"));

	$("#skip_sag").click(function()
	{
		sira = sira+1;
		
		if(cat_id!=6)
		{
			if(sira>=mesqler[cat_id].length)
			{
				$(".m2").hide();
				$(".m3").show();
				
				if(mesqgunsayi.indexOf(parseInt(gun)) < 0)
				{
					
					mesqgunsayi.push(gun);
					localStorage.mesqgunsay = JSON.stringify(mesqgunsayi);
				}

							
				if((saniye/60)<1)
				{
					if(saniye<10)
					{
						$("#vaxt").html("Süre: 00:0"+saniye);
					}
					else
					{
						$("#vaxt").html("Süre: 00:"+saniye);
					}
				}

				else
				{
					if((Math.round(saniye/60) - saniye/60)<=1)
						{
							var deqiqe = Math.round(saniye/60);
							var qaliq = Math.round((saniye/60 - Math.round(saniye/60))*60);
							$("#vaxt").html("Süre: "+deqiqe+":"+qaliq);
						}
					else
					{
						var deqiqe = Math.round(saniye/60) - 1;
						var qaliq = Math.round(((saniye/60) - deqiqe)*60);
						$("#vaxt").html("Süre: "+deqiqe+":"+qaliq);
					}
				}

				$("#mesqsayi").html("Egzersiz: "+edilenler+"/"+mesqsayi);
				
				saniye = -2;
				responsiveVoice.speak("Great! Training completed !!!");
				
			}



			$(".mesq_b_sekil").attr("src",mesqler[cat_id][sira]['sekil']);
			$(".mesq_b_ad").html(mesqler[cat_id][sira]['ad']);
			responsiveVoice.speak(mesqler[cat_id][sira]['ad']);
			 
		}
		else
		{
			if(sira>=mesqler[cat_id][hefte].length)
			{
				$(".m2").hide();
				$(".m3").show();
				responsiveVoice.speak("Great! Training completed !!!");
				if(mesqgunsayi.indexOf(parseInt(gun)) < 0)
				{
					
					mesqgunsayi.push(gun);
					localStorage.mesqgunsay = JSON.stringify(mesqgunsayi);
				}
				if((saniye/60)<1)
				{
					if(saniye<10)
					{
						$("#vaxt").html("Süre: 00:0"+saniye);
					}
					else
					{
						$("#vaxt").html("Süre: 00:"+saniye);
					}
				}

				else
				{
					if((Math.round(saniye/60) - saniye/60)<=1)
						{
							var deqiqe = Math.round(saniye/60);
							var qaliq = Math.round((saniye/60 - Math.round(saniye/60))*60);
							$("#vaxt").html("Süre: "+deqiqe+":"+qaliq);
						}
					else
					{
						var deqiqe = Math.round(saniye/60) - 1;
						var qaliq = Math.round(((saniye/60) - deqiqe)*60);
						$("#vaxt").html("Süre: "+deqiqe+":"+qaliq);
					}
				}

				$("#mesqsayi").html("Egzersiz Sayı: "+mesqsayi_x);
				
				saniye = -2;
			}

			$(".mesq_b_sekil").attr("src",mesqler[cat_id][hefte][sira]['sekil']);
			$(".mesq_b_ad").html(mesqler[cat_id][hefte][sira]['ad']);
			$(".mesq_s_say").html("Set sayı: "+mesqler[cat_id][hefte][sira]['set']);
			$(".mesq_b_say").html("Tekrar sayı: "+mesqler[cat_id][hefte][sira]['tekrar']);
			responsiveVoice.speak(mesqler[cat_id][hefte][sira]['ad']);
		}

	});

	$(".ok").click(function()
	{
		//$(".tekrarlar").hide();
		if(cat_id!=6)
		{
			hereketsayi = $(".aktiv").data("value");
			if(hereketsayi==undefined)
			{
				hereketsayi = document.getElementById("mesqsay_x").value;
			}
			
			govde.hide();
			loading.show();
			setTimeout(function()
			{
				loading.hide();
				govde.show();
				edilenler=edilenler+1;
				$(".skip").hide();
				$(".sayim").show();
				mesqsayim(hereketsayi);
				
			},1000);	
		}
		else
		{
			$(".m5").show();
			$(".m1").hide();
			$(".m4").hide();
			$(".m2").hide();
			$(".head_r span").hide();
			bilgiicon.removeClass("fa-lightbulb");
			bilgiicon.addClass("fa-times-circle");
			yardim = 3;
			
			sekiligoster.hide();
			melumatal.hide();
			ipucu.hide();
			kas_melumat.hide();
			cat_sekil.hide();
			cat_info2.hide();
			cat_info3.hide();
			cat_info.html("Öncelikle  antrenmana ısınmadan başlamayın. Geçici de ola bilir ama genel olarak çok ciddi ve kalıcı kas hasarları alma riskiniz vardır. Bu  risk yapılan haraketler ve ağırlıklarla da bağlı olabilir. Bu yüzden haraketlerin nasıl yapıldığını ve ip uçlarını antrenmanlar bölümünden mutlaka okumanız tavsiye olunur.<br>Seçilen ağırlık her zaman tekrar sayısını rahatça yapa bileceğiniz ama kaslarınızı zorlayacak ağırlikta  olmalıdır.<br>Eğer kaslarınızın hacmi az olsun  ama sıkı olsun daha sert  vücut  yani güç istiyorsanız o zaman ağırlik maxsimum seviyede , tekrar 1 yada 3 ama set sayınız tam aksine  en az 8-10 arası almalıdır.<br>Eğer bodybulding vücudu yani daha şişkin kaslar istiyorsanız zorlu ağırlık seviyesinde  tekrar sayınız 8-10 yada 12 tekrar, set sayınız 3-4 veya 5 set ola bilir.");
			cat_title.html("Tavsiye");
			cat_info.show();
		}
		
	});

	$("#pausa").click(function()
	{
		if(pause==0)
		{
			pause=1;
			$(".deyisme").removeClass("fa-pause");
			$(".deyisme").addClass("fa-play");
		}
		else
		{
			pause=0;			
			$(".deyisme").removeClass("fa-play");
			$(".deyisme").addClass("fa-pause");
			
		}
	
	});


	var ireli = -1;
	var faiz = 100;
	var h_faiz = -10;
	var edilenler = 0;
	function mesqsayim(hedef)
	{
		if(ireli==-1)
		{
			responsiveVoice.speak('Start!');
		}

		if(pause==0)
		{
			ireli++;
			h_faiz = h_faiz+(faiz/hedef);
			$(".reng").width(h_faiz+"%");
			$("#hereketsayi").html(ireli+"/"+hereketsayi);
		}
			if(ireli<hedef)
			{
				

				setTimeout(function()
				{
						if(ireli>=(hedef-4))
						{
							bip.play();
						}	
						mesqsayim(hereketsayi);
					

				},1500);
			}
			else
			{
				responsiveVoice.speak('Finish');
				setTimeout(function()
				{
					govde.hide();
					loading.show();
					if(sira>2)
					{
						if(reklam==0)
						{
							admob.interstitial.prepare();
							admob.interstitial.show();
							reklam = 1;
						}
					}
					setTimeout(function()
					{
						loading.hide();
						govde.show();
						h_faiz = 0;
						$(".reng").width("0%");
						ireli = -1;
						sira = sira+1;
						if(sira>=mesqler[cat_id].length)
						{
							$(".m2").hide();
							$(".m3").show();
							
										
							if((saniye/60)<1)
							{
								$("#vaxt").html("Süre: 00:"+saniye);
							}

							else
							{
								if((Math.round(saniye/60) - saniye/60)<=0)
									{
										var deqiqe = Math.round(saniye/60);
										var qaliq = Math.round((saniye/60 - Math.round(saniye/60))*60);
										if(deqiqe<10&&qaliq<10)
										{
											$("#vaxt").html("Süre: 0"+deqiqe+":0"+qaliq);
										}
										else if(deqiqe<10&&qaliq>10)
										{
											$("#vaxt").html("Süre: 0"+deqiqe+":"+qaliq);
										}
										else if(deqiqe>10&&qaliq<10)
										{
											$("#vaxt").html("Süre: "+deqiqe+":0"+qaliq);
										}
										else
										{
											$("#vaxt").html("Süre: "+deqiqe+":"+qaliq);
										}
										
									}
								else
								{
									var deqiqe = Math.round(saniye/60) - 1;
									var qaliq = Math.round(((saniye/60) - deqiqe)*60);
									if(deqiqe<10&&qaliq<10)
									{
										$("#vaxt").html("Süre: 0"+deqiqe+":0"+qaliq);
									}
									else if(deqiqe<10&&qaliq>10)
									{
										$("#vaxt").html("Süre: 0"+deqiqe+":"+qaliq);
									}
									else if(deqiqe>10&&qaliq<10)
									{
										$("#vaxt").html("Süre: "+deqiqe+":0"+qaliq);
									}
									else
									{
										$("#vaxt").html("Süre: "+deqiqe+":"+qaliq);
									}

								}
							}

							$("#mesqsayi").html("Egzersiz: "+edilenler+"/"+mesqsayi);
							
							saniye = -2;
							
						}
						else
						{
							$(".skip").show();
							$(".sayim").hide();
							$(".mesq_b_sekil").attr("src",mesqler[cat_id][sira]['sekil']);
							$(".mesq_b_ad").html(mesqler[cat_id][sira]['ad']);
							responsiveVoice.speak(mesqler[cat_id][sira]['ad']);
						}					

					},1000);
				},1000);
			}
		
	}

	function zaman()
	{
		
		if(saniye>=0)
		{


			saniye++;

			setTimeout(function()
			{
				zaman();
			},1000);

		}
	}


/*index.js kodlari*/


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
				bilgiicon.hide();
				
				yardim = 1;
				menuacilma=0;
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
				bilgiicon.show();
				$(".head_r span").show();

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

	menuaktiv.click(function()
	{
		aktivm = $(this).data("value");
		if(aktivm==6)
		{
			
			localStorage.removeItem('boy');
			localStorage.removeItem('kilo');
			localStorage.removeItem('home');
			localStorage.removeItem('gunsay');
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

	//paylas
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

			title.html("Yardım");
			$(".head_r span").hide();
			bilgiicon.removeClass("fa-lightbulb");
			bilgiicon.addClass("fa-times-circle");
			
			yardim = 0;
			
			menuicon.hide();
			govde.hide();
			
			$(".cat_x").hide();
			help.show();

			$(".helptitle").html(komekciler[yardimci]['yardim_basliq']);
			$(".helpinfo").html(komekciler[yardimci]['yardim_metn']);


		}
		else if(yardim==2)
		{
			yardim = 1;
			$(".m5").hide();
			$(".m1").show();
			$(".m4").show();
			bilgiicon.removeClass("fa-times-circle");
			bilgiicon.addClass("fa-lightbulb");
			$(".head_r span").show();
			menuicon.show();
			
		}
		else if(yardim==3)
		{
			yardim = 1;
			$(".m5").hide();
			$(".m1").hide();
			$(".m2").show();
			bilgiicon.removeClass("fa-times-circle");
			bilgiicon.addClass("fa-lightbulb");
			$(".head_r span").show();

		}
		else
		{
			if(home==0)
			{
				title.html("Vücut Geliştirme");
			}
			$(".head_r span").show();
			bilgiicon.addClass("fa-lightbulb");
			bilgiicon.removeClass("fa-times-circle");
			
			yardim = 1;
			menuicon.show();
			govde.show();
			help.hide();
			$(".cat_x").show();
			$(".title").html(kateqoriyalar[cat_id]['ad']);
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


/*index.js kodlari*/
/*kateqoriya.js*/
melumatal.click(function()
{
	cat_sekil.hide();

	melumatal.hide();
	sekiligoster.show();
	ipucu.show();
	kas_melumat.show();



	cat_info.show();
	cat_info2.hide();
	cat_info3.hide();


});

ipucu.click(function()
{
	cat_sekil.hide();

	melumatal.show();
	sekiligoster.show();
	ipucu.hide();
	kas_melumat.show();

	cat_info.hide();
	cat_info2.show();
	cat_info3.hide();


});

kas_melumat.click(function()
{
	cat_sekil.hide();

	melumatal.show();
	sekiligoster.show();
	ipucu.show();
	kas_melumat.hide();

	cat_info.hide();
	cat_info2.hide();
	cat_info3.show();


});

sekiligoster.click(function()
{
	cat_sekil.show();

	melumatal.show();
	sekiligoster.hide();
	ipucu.show();
	kas_melumat.show();

	cat_info.hide();
	cat_info2.hide();
	cat_info3.hide();


});
/*kateqoriya.js*/

$(".f_button").click(function()
{
	admob.interstitial.prepare();
	admob.interstitial.show();
});

//geri duymesi
	document.addEventListener("backbutton", onBackKeyDown, false);
	function onBackKeyDown()
	{
		if(home==1)
		{
			if(yardim==0)
			{
				bilgiicon.addClass("fa-lightbulb");
				bilgiicon.removeClass("fa-times-circle");
				
				yardim = 1;
				menuicon.show();
				govde.show();
				help.hide();
				$(".cat_x").show();
				$(".title").html(kateqoriyalar[cat_id]['ad']);
			}
			else
			{
				window.location = "program.html";
			}
		
		}
		else if(home==3)
		{
			home = 1;
			localStorage.setItem("home",home);
			
			location.reload();
			
		}
		
		
	}

}
