document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady(){

document.addEventListener("backbutton", onBackKeyDown, false);


/*	
$(document).ready(function()
{*/
	cat_title =$(".cattitle");
	cat_sekil = $(".sekil");
	cat_info = $(".catinfo");
	cat_info2 = $(".catinfo2");
	cat_info3 = $(".catinfo3");

	sekiligoster = $("#c0");
	melumatal = $("#c1");
	ipucu = $("#c2");
	kas_melumat = $("#c3");
	var cat_id = localStorage.cat;
	var sirala = 0;
	var songirilen = localStorage.songirilenyer;
	var home = localStorage.home;
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
				"ipucu": "a) Bu alıştırma izolasyonda yapılmalıdır. Bu, antreman sırasında elbette antreman yaptığınız kol dışında tüm vücudun sessiz olması gerektiği anlamına gelir <hr>b) Göğsünüzden dönüş veya kalkmayı önleyin. Bu durumda, o zaman ağırlık çok ağır.<hr>c) Diğer elinizi destek için uyluğunuza koyun.<br>",
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
				"ipucu": "a) antreman sırasında abs'inizi sert  tutun. Aksi halde vücudunu çok sallarsın.<hr>b) Dirsek yaralanmalarını önlemek için yavaşça başlangıç konumuna geri indirin<br>",
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
				"ipucu": "a) Bu haraketi yaparken kavisli bir sırttan kaçının. Karın kaslarınızı sıkılaştırarak bunu önleyebilirsiniz.<hr>b) Egzersizin maksimum etki etmesi için halterlerin birbirine temas etmesine izin vermeyin.<hr>c) Ağır ağırlıklarla antreman yaparken, kas arızası sırasında halterin başınıza düşmesini önlemek için bir gözcü yararlı olabilir.<br>",
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
				"ipucu": "a) Daha ağır ağırlıklarla antreman yaparken, silkmek (halter) raf yardımı ile yapılması tavsiye edilir. Halteri başlangıç pozisyonunuz hakkında bilgilendirin. <hr>b) Egzersiz sırasında omuzlarınızı yuvarlamanıza gerek yoktur. Aşağı ve yukarı doğru düz bir hareket yeterlidir.<hr>c) Halterleri daima vücudunuza karşı sıkı tutun.<br>",
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
				"ipucu": "a) antreman sırasında abs'inizi sert  tutun. Aksi halde vücudunu çok sallarsın.<hr>b) Dirsek yaralanmalarını önlemek için yavaşça başlangıç konumuna geri indirin <br>",
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
				"kaslar": "Köprü, öncelikle, abs(karın kasları) ve bel kaslarını çalıştırmaya odaklanmaktadır. Bu egzersizde aşağıdaki karın kaslarına değinilir: düz karın kasları (rektus abdominisi), iç oblik karın kasları (eğik internus abdomini) ve dış eğik karın kasları (eğik eksterus abdomini). Alt sırtta, bölünmüş sırt kası (multifidus) ve sırt gerdiricisi (erector spinae) ele alınır. Son olarak, büyük gluteal kaslar (glutaeus maximus) ayrıca sıkı bir antreman alır."
	
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
					"ipucu": "a) Bu alıştırma izolasyonda yapılmalıdır. Bu, antreman sırasında elbette antreman yaptığınız kol dışında tüm vücudun sessiz olması gerektiği anlamına gelir <hr>b) Göğsünüzden dönüş veya kalkmayı önleyin. Bu durumda, o zaman ağırlık çok ağır.<hr>c) Diğer elinizi destek için uyluğunuza koyun.<br>",
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
					"ipucu": "a) Bu haraketi yaparken kavisli bir sırttan kaçının. Karın kaslarınızı sıkılaştırarak bunu önleyebilirsiniz.<hr>b) Egzersizin maksimum etki etmesi için halterlerin birbirine temas etmesine izin vermeyin.<hr>c) Ağır ağırlıklarla antreman yaparken, kas arızası sırasında halterin başınıza düşmesini önlemek için bir gözcü yararlı olabilir.<br>",
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
					"ipucu": "a) Daha ağır ağırlıklarla antreman yaparken, silkmek (halter) raf yardımı ile yapılması tavsiye edilir. Halteri başlangıç pozisyonunuz hakkında bilgilendirin. <hr>b) Egzersiz sırasında omuzlarınızı yuvarlamanıza gerek yoktur. Aşağı ve yukarı doğru düz bir hareket yeterlidir.<hr>c) Halterleri daima vücudunuza karşı sıkı tutun.<br>",
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
			"sekil": "img/cat1.jpg",
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

	$(".title").html(kateqoriyalar[cat_id]['ad']);

	if(sirala==0)
	{
		$(".cat_left").hide();
	}

	cat_title.html(mesqler[cat_id][sirala]['ad']);
	cat_sekil.attr("src",mesqler[cat_id][sirala]['sekil']);
	cat_info.html(mesqler[cat_id][sirala]['melumat']);
	cat_info2.html(mesqler[cat_id][sirala]['ipucu']);
	cat_info3.html(mesqler[cat_id][sirala]['kaslar']);

	
	if(localStorage.getItem("mesq_level")===null)
	{
		$(".mesq_get").html("Program Seç");
	}

	$(".mesq_get").click(function()
	{
		home = 0;
		localStorage.setItem("home",home);
			
		if(localStorage.getItem("mesq_level")===null)
		{
			window.location = "index.html#3";
		}
		else
		{
			window.location = "mesqler.html";
		}
	});


/*sol ve sag*/
/*sag*/
$(".body_menu ul li").click(function()
{
	home = 0;
	localStorage.setItem("home",home);
	
});

$(".cat_right").click(function()
{
	sirala = sirala+1;


	$(".cat_x_desk").removeClass("bounceInRight");
	$(".cat_x_desk").removeClass("bounceInLeft");
	$(".cat_left").show();


		if(sirala==(mesqler[cat_id].length-1))
		{
			$(".cat_right").hide();
		}
		else
		{
			$(".cat_right").show();
		}

		
		setTimeout(function()
		{
			
			$(".cat_x_desk").addClass("bounceInRight");

			cat_title.html(mesqler[cat_id][sirala]['ad']);
			
			cat_sekil.attr("src",mesqler[cat_id][sirala]['sekil']);
			
			cat_info.html(mesqler[cat_id][sirala]['melumat']);
			cat_info2.html(mesqler[cat_id][sirala]['ipucu']);
			cat_info3.html(mesqler[cat_id][sirala]['kaslar']);

			cat_sekil.show();

			melumatal.show();
			sekiligoster.hide();
			ipucu.show();
			kas_melumat.show();

			cat_info.hide();
			cat_info2.hide();
			cat_info3.hide();


		},10);

});
/*sag*/

/*sol*/
$(".cat_left").click(function()
{

	sirala = sirala-1;

	$(".cat_right").show();
	$(".cat_x_desk").removeClass("bounceInRight");
	$(".cat_x_desk").removeClass("bounceInLeft");
	
	if(sirala==0)
	{
		$(".cat_left").hide();
	}
	else
	{
		$(".cat_left").show();
	}

		setTimeout(function()
		{
			
			$(".cat_x_desk").addClass("bounceInRight");
			cat_title.html(mesqler[cat_id][sirala]['ad']);
			cat_sekil.attr("src",mesqler[cat_id][sirala]['sekil']);
			cat_info.html(mesqler[cat_id][sirala]['melumat']);
			cat_info2.html(mesqler[cat_id][sirala]['ipucu']);
			cat_info3.html(mesqler[cat_id][sirala]['kaslar']);

			

			cat_sekil.show();

			melumatal.show();
			sekiligoster.hide();
			ipucu.show();
			kas_melumat.show();

			cat_info.hide();
			cat_info2.hide();
			cat_info3.hide();

		},10);


});
/*sol*/

/*sol ve sag*/
var melumatverme = 0;
/*melumatlari gostermek*/
melumatal.click(function()
{
	melumatverme = 1;
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
	melumatverme = 1;
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
	melumatverme = 1;
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
	melumatverme = 0;
	cat_sekil.show();

	melumatal.show();
	sekiligoster.hide();
	ipucu.show();
	kas_melumat.show();

	cat_info.hide();
	cat_info2.hide();
	cat_info3.hide();


});

/*melumatlari gostermek*/

function onBackKeyDown()
{
	if(melumatverme==1)
	{
		
		melumatverme = 0;
		cat_sekil.show();

		melumatal.show();
		sekiligoster.hide();
		ipucu.show();
		kas_melumat.show();

		cat_info.hide();
		cat_info2.hide();
		cat_info3.hide();
	}
	else
	{
		if(sirala!=0)
		{
			
			sirala = sirala-1;
			if(sirala==0)
			{
				$(".cat_left").hide();
			}
			else
			{
				$(".cat_left").show();
			}

				setTimeout(function()
				{
					
					$(".cat_x_desk").addClass("bounceInRight");
					cat_title.html(mesqler[cat_id][sirala]['ad']);
					cat_sekil.attr("src",mesqler[cat_id][sirala]['sekil']);
					cat_info.html(mesqler[cat_id][sirala]['melumat']);
					cat_info2.html(mesqler[cat_id][sirala]['ipucu']);
					cat_info3.html(mesqler[cat_id][sirala]['kaslar']);

					

					cat_sekil.show();

					melumatal.show();
					sekiligoster.hide();
					ipucu.show();
					kas_melumat.show();

					cat_info.hide();
					cat_info2.hide();
					cat_info3.hide();

				},10);
		}
		else
		{
			if(home==1)
			{
				home = 0;
				localStorage.setItem("home",home);
			
				window.location = "index.html#"+songirilen;
			}
			else if(home==2)
			{
				home = 1;
				localStorage.setItem("home",home);
			
				window.location = "mesqler.html";
			}
			
			
		}
	}
}


}
