const destinations = [
  { city:"Adana", region:"Akdeniz", emoji:"🍊", color:"#f2d89e", tags:["food","nature"], places:["Taşköprü","Varda Köprüsü","Kapıkaya Kanyonu"], blurb:"Taşköprü'nün gölgesinden kanyon manzaralarına, Adana'nın enerjisi her köşede hissedilir.", featured:true },
  { city:"Adıyaman", region:"Güneydoğu Anadolu", emoji:"⛰️", color:"#e4c69f", tags:["history","nature"], places:["Nemrut Dağı","Cendere Köprüsü","Arsemia Antik Kenti"], blurb:"Güneşin doğuşunu dev heykeller arasında izleyebileceğin, tarihle gökyüzünün buluştuğu şehir.", featured:true },
  { city:"Afyonkarahisar", region:"Ege", emoji:"🏰", color:"#e7c4a0", tags:["history","food"], places:["Afyonkarahisar Kalesi","Frig Vadisi","İhsaniye Peribacaları"], blurb:"Kayalık kaleleri, Frig izleri ve dillere destan mutfağıyla keşfedilmeyi bekliyor.", featured:false },
  { city:"Ağrı", region:"Doğu Anadolu", emoji:"🏔️", color:"#d0dce0", tags:["nature","history"], places:["Ağrı Dağı","İshak Paşa Sarayı","Meteor Çukuru"], blurb:"Türkiye'nin çatısına uzanan manzaralar ve Doğubayazıt'ta görkemli bir saray.", featured:false },
  { city:"Aksaray", region:"İç Anadolu", emoji:"🌄", color:"#e6c6a5", tags:["nature","history"], places:["Ihlara Vadisi","Selime Katedrali","Hasan Dağı"], blurb:"Ihlara'nın yemyeşil kanyonunda yürüyüş, Hasan Dağı'nın eteklerinde unutulmaz bir mola.", featured:true },
  { city:"Amasya", region:"Karadeniz", emoji:"🏘️", color:"#c5ddca", tags:["history","nature"], places:["Kral Kaya Mezarları","Yalıboyu Evleri","Borabay Gölü"], blurb:"Yeşilırmak kıyısındaki tarihî evler ve kaya mezarlarıyla zamansız bir şehir.", featured:true },
  { city:"Ankara", region:"İç Anadolu", emoji:"🏛️", color:"#d6d3c4", tags:["history","food"], places:["Anıtkabir","Anadolu Medeniyetleri Müzesi","Ankara Kalesi"], blurb:"Başkentte binlerce yıllık uygarlıkların izini sür, müzeler ve sokaklarla şehri tanı.", featured:true },
  { city:"Antalya", region:"Akdeniz", emoji:"🌊", color:"#a8d7d4", tags:["sea","history","nature"], places:["Kaleiçi","Düden Şelalesi","Olympos Antik Kenti"], blurb:"Turkuaz koylar, antik kentler ve portakal çiçeği kokan sokaklar bir arada.", featured:true },
  { city:"Ardahan", region:"Doğu Anadolu", emoji:"🏞️", color:"#bbd5ca", tags:["nature","history"], places:["Çıldır Gölü","Şeytan Kalesi","Ardahan Kalesi"], blurb:"Kışın atlı kızaklarla, yazın geniş yaylalarla bambaşka güzellikler sunar.", featured:false },
  { city:"Artvin", region:"Karadeniz", emoji:"🌲", color:"#a9cdb5", tags:["nature"], places:["Karagöl-Sahara Millî Parkı","Macahel","Mençuna Şelalesi"], blurb:"Sisli dağları, yemyeşil yaylaları ve coşkun şelaleleriyle doğanın en cömert hâli.", featured:true },
  { city:"Aydın", region:"Ege", emoji:"🏛️", color:"#e8d5a4", tags:["history","sea","food"], places:["Aphrodisias Antik Kenti","Dilek Yarımadası","Didim Apollon Tapınağı"], blurb:"Ege kıyılarında antik dünyanın izleri, masmavi koylar ve incir kokulu sofralar.", featured:true },
  { city:"Balıkesir", region:"Marmara", emoji:"🏝️", color:"#c2d9c2", tags:["sea","nature","food"], places:["Cunda Adası","Kazdağları","Ayvalık Taksiyarhis Anıt Müzesi"], blurb:"Ada sokaklarından zeytinliklere, Ege ve Marmara'nın en güzel renkleri burada.", featured:true },
  { city:"Bartın", region:"Karadeniz", emoji:"🌊", color:"#add2d2", tags:["nature","sea"], places:["Amasra","İnkumu Plajı","Güzelcehisar Lav Sütunları"], blurb:"Amasra'nın kıyı manzaraları, ahşap tekne gezileri ve saklı koylar.", featured:false },
  { city:"Batman", region:"Güneydoğu Anadolu", emoji:"🏘️", color:"#d7c6a9", tags:["history","nature"], places:["Hasankeyf","Malabadi Köprüsü","Mor Kiryakus Manastırı"], blurb:"Dicle kıyısındaki Hasankeyf'te uygarlıkların katman katman izlerini keşfet.", featured:false },
  { city:"Bayburt", region:"Karadeniz", emoji:"🏰", color:"#d5c8ac", tags:["history","nature"], places:["Bayburt Kalesi","Baksı Müzesi","Aydıntepe Yeraltı Şehri"], blurb:"Dağların arasına saklanmış kale, çağdaş sanat ve yeraltı şehriyle sürprizlerle dolu.", featured:false },
  { city:"Bilecik", region:"Marmara", emoji:"🌳", color:"#c8d8ba", tags:["history","nature"], places:["Şeyh Edebali Türbesi","Ertuğrul Gazi Türbesi","Küçükelmalı Tabiat Parkı"], blurb:"Osmanlı'nın kuruluş hikâyelerinin geçtiği topraklarda tarihî bir yolculuk.", featured:false },
  { city:"Bingöl", region:"Doğu Anadolu", emoji:"🏞️", color:"#bed4c4", tags:["nature"], places:["Yüzen Adalar","Buban Peribacaları","Çır Şelalesi"], blurb:"Göl yüzeyinde süzülen adacıklar ve yüksek yaylalarla doğanın şaşırtıcı yüzü.", featured:false },
  { city:"Bitlis", region:"Doğu Anadolu", emoji:"🏔️", color:"#c8d2cb", tags:["nature","history"], places:["Nemrut Krater Gölü","Ahlat Selçuklu Mezarlığı","Bitlis Kalesi"], blurb:"Krater gölünün dinginliği ile Ahlat'ın taş işçiliği ve tarihî mirası buluşuyor.", featured:false },
  { city:"Bolu", region:"Karadeniz", emoji:"🌲", color:"#b9d1ba", tags:["nature"], places:["Abant Gölü","Yedigöller Millî Parkı","Gölcük Tabiat Parkı"], blurb:"Göllerin çevresinde yürüyüş, orman havası ve dört mevsim değişen manzaralar.", featured:true },
  { city:"Burdur", region:"Akdeniz", emoji:"🦩", color:"#b7d8d1", tags:["nature","history"], places:["Salda Gölü","Sagalassos Antik Kenti","İnsuyu Mağarası"], blurb:"Turkuaz göl kıyıları ve Toroslar'daki antik kentlerle sakin bir keşif rotası.", featured:false },
  { city:"Bursa", region:"Marmara", emoji:"⛰️", color:"#c9d6b8", tags:["history","nature","food"], places:["Cumalıkızık","Ulu Cami","Uludağ"], blurb:"Osmanlı mirası, dağ havası ve ipeksi bir şehir yaşamı aynı rotada.", featured:true },
  { city:"Çanakkale", region:"Marmara", emoji:"⛵", color:"#b6d7d5", tags:["history","sea"], places:["Troya Antik Kenti","Gelibolu Yarımadası","Bozcaada"], blurb:"Efsanelerin, tarihî hafızanın ve ada rüzgârlarının şehri.", featured:true },
  { city:"Çankırı", region:"İç Anadolu", emoji:"🧂", color:"#e0d1b3", tags:["nature","history"], places:["Tuz Mağarası","Ilgaz Dağı Millî Parkı","Çankırı Kalesi"], blurb:"Tuz mağarasından Ilgaz'ın ormanlarına uzanan sakin bir İç Anadolu rotası.", featured:false },
  { city:"Çorum", region:"Karadeniz", emoji:"🏺", color:"#ddc6a4", tags:["history","food"], places:["Hattuşa","Yazılıkaya Açık Hava Tapınağı","Alacahöyük"], blurb:"Hitit uygarlığının başkentinde binlerce yıllık taşların izini sür.", featured:false },
  { city:"Denizli", region:"Ege", emoji:"♨️", color:"#d6d8d0", tags:["nature","history"], places:["Pamukkale Travertenleri","Hierapolis Antik Kenti","Laodikeia"], blurb:"Beyaz travertenler, termal sular ve antik tiyatrolar; doğa ve tarih iç içe.", featured:true },
  { city:"Diyarbakır", region:"Güneydoğu Anadolu", emoji:"🧱", color:"#d8c6a9", tags:["history","food"], places:["Diyarbakır Surları","Hevsel Bahçeleri","Zerzevan Kalesi"], blurb:"Surların gölgesinde tarih, Dicle kıyısında manzara ve unutulmaz sofralar.", featured:true },
  { city:"Düzce", region:"Karadeniz", emoji:"💧", color:"#b4d7ce", tags:["nature"], places:["Samandere Şelalesi","Güzeldere Şelalesi","Efteni Gölü"], blurb:"Şelalelerin serinliği, göl kıyısı yürüyüşleri ve yemyeşil ormanlar.", featured:false },
  { city:"Edirne", region:"Marmara", emoji:"🕌", color:"#d9c8b0", tags:["history","food"], places:["Selimiye Camii","Meriç Köprüsü","Edirne Eski Camii"], blurb:"Mimar Sinan'ın ustalık eseri ve nehir kıyısındaki tarihî şehir dokusu.", featured:true },
  { city:"Elazığ", region:"Doğu Anadolu", emoji:"🌅", color:"#d2c8a9", tags:["nature","history","food"], places:["Harput Kalesi","Hazar Gölü","Buzluk Mağarası"], blurb:"Harput'un köklü geçmişi, göl kıyısında gün batımı ve kendine özgü ezgiler.", featured:false },
  { city:"Erzincan", region:"Doğu Anadolu", emoji:"🏞️", color:"#b9d1c5", tags:["nature","food"], places:["Karanlık Kanyon","Girlevik Şelalesi","Ergan Dağı"], blurb:"Kanyon manzaraları, çağlayan sular ve yüksek dağlarda macera.", featured:false },
  { city:"Erzurum", region:"Doğu Anadolu", emoji:"❄️", color:"#d4dfe3", tags:["history","nature","food"], places:["Çifte Minareli Medrese","Palandöken","Tortum Şelalesi"], blurb:"Selçuklu taş işçiliği, kış sporları ve çağ kebabıyla dört mevsim keşif.", featured:true },
  { city:"Eskişehir", region:"İç Anadolu", emoji:"🚣", color:"#b9d8d1", tags:["history","food"], places:["Odunpazarı Evleri","Porsuk Çayı","Sazova Bilim Kültür ve Sanat Parkı"], blurb:"Renkli sokaklar, nehir kıyısında gezinti ve genç şehir enerjisi.", featured:true },
  { city:"Gaziantep", region:"Güneydoğu Anadolu", emoji:"🥮", color:"#e7c99b", tags:["food","history"], places:["Zeugma Mozaik Müzesi","Gaziantep Kalesi","Bakırcılar Çarşısı"], blurb:"Mozaiklerin zarafeti ve dünyanın dört yanından meraklıları çağıran mutfak.", featured:true },
  { city:"Giresun", region:"Karadeniz", emoji:"🌰", color:"#b9d3b8", tags:["nature","sea","food"], places:["Giresun Adası","Kümbet Yaylası","Mavi Göl"], blurb:"Fındık bahçeleri, yaylalar ve Karadeniz'in tek yerleşime açık adası.", featured:false },
  { city:"Gümüşhane", region:"Karadeniz", emoji:"🕳️", color:"#d7c6aa", tags:["nature","history"], places:["Karaca Mağarası","Santa Harabeleri","Limni Gölü"], blurb:"Yeraltının büyülü sarkıtları ve dağların arasındaki taş köyler.", featured:false },
  { city:"Hakkari", region:"Doğu Anadolu", emoji:"🏔️", color:"#c6d3d0", tags:["nature"], places:["Cilo Dağı","Sat Gölleri","Mergan Yaylası"], blurb:"Yüksek dağlar, buzullar ve el değmemiş yaylalar için etkileyici bir rota.", featured:false },
  { city:"Hatay", region:"Akdeniz", emoji:"🍽️", color:"#e4c69f", tags:["food","history"], places:["St. Pierre Kilisesi","Titus Tüneli","Harbiye Şelaleleri"], blurb:"Farklı kültürlerin izleri, tarihî yapılar ve zengin mutfak kültürü.", featured:true },
  { city:"Iğdır", region:"Doğu Anadolu", emoji:"🌄", color:"#e0d2b2", tags:["nature","history"], places:["Ağrı Dağı manzarası","Tuzluca Tuz Mağaraları","Aras Kuş Cenneti"], blurb:"Ağrı Dağı'nın görkemli silueti ve kuş göç yollarının sessiz güzelliği.", featured:false },
  { city:"Isparta", region:"Akdeniz", emoji:"🌹", color:"#d6d9bb", tags:["nature","history"], places:["Eğirdir Gölü","Lavanta Kokulu Köy","Kovada Gölü Millî Parkı"], blurb:"Güller ve lavantalar arasında göl kıyısında huzurlu bir yolculuk.", featured:false },
  { city:"İstanbul", region:"Marmara", emoji:"🌉", color:"#bfd2d0", tags:["history","food","sea"], places:["Ayasofya","Galata Kulesi","Boğaz hattı ve vapur iskeleleri"], blurb:"İki kıta arasında her sokağı başka bir hikâye anlatan eşsiz bir şehir.", featured:true },
  { city:"İzmir", region:"Ege", emoji:"🌅", color:"#ead5a9", tags:["sea","history","food"], places:["Efes Antik Kenti","Kordon","Şirince"], blurb:"Kordon'da gün batımından Efes'in mermer yollarına uzanan Ege ruhu.", featured:true },
  { city:"Kahramanmaraş", region:"Akdeniz", emoji:"🍦", color:"#e4d1aa", tags:["food","nature"], places:["Yedikuyular Kayak Merkezi","Başkonuş Yaylası","Taş Medrese"], blurb:"Dondurmasıyla ünlü şehirde yaylalara ve tarihî çarşılara doğru keşif.", featured:false },
  { city:"Karabük", region:"Karadeniz", emoji:"🏘️", color:"#d4c7b2", tags:["history","nature"], places:["Safranbolu","Yenice Ormanları","İncekaya Su Kemeri"], blurb:"Safranbolu'nun cumbalı evleri ve Yenice'nin derin ormanlarında zaman yavaşlar.", featured:true },
  { city:"Karaman", region:"İç Anadolu", emoji:"🏰", color:"#d6c6a7", tags:["history","nature"], places:["Manazan Mağaraları","Binbir Kilise","Karaman Kalesi"], blurb:"Taşın içine oyulmuş yerleşimler ve Karadağ'ın tarihî izleri.", featured:false },
  { city:"Kars", region:"Doğu Anadolu", emoji:"🏰", color:"#d2d7d2", tags:["history","nature","food"], places:["Ani Ören Yeri","Kars Kalesi","Çıldır Gölü"], blurb:"Ani'nin görkemli kalıntıları, taş mimari ve kışın donan göl manzarası.", featured:true },
  { city:"Kastamonu", region:"Karadeniz", emoji:"🌲", color:"#b8d0b6", tags:["nature","history"], places:["Küre Dağları Millî Parkı","Valla Kanyonu","Kasaba Köyü Mahmut Bey Camii"], blurb:"Kanyonların derinliği, ahşap camiler ve dağ yollarının dinginliği.", featured:false },
  { city:"Kayseri", region:"İç Anadolu", emoji:"🏔️", color:"#d9c6a9", tags:["nature","history","food"], places:["Erciyes Dağı","Kayseri Kalesi","Kültepe-Kaniş-Karum"], blurb:"Erciyes'in eteklerinde kayak, köklü bir çarşı kültürü ve zengin mutfak.", featured:true },
  { city:"Kırıkkale", region:"İç Anadolu", emoji:"🌿", color:"#cbd8b8", tags:["nature","history"], places:["Çeşnigir Köprüsü","Karaahmetli Tabiat Parkı","Silah Sanayi Müzesi"], blurb:"Kızılırmak kıyısında tarihî köprü ve sakin doğa durakları.", featured:false },
  { city:"Kırklareli", region:"Marmara", emoji:"🌳", color:"#bed2b5", tags:["nature","food"], places:["İğneada Longoz Ormanları","Dupnisa Mağarası","Kıyıköy"], blurb:"Longoz ormanları, mağaralar ve Karadeniz kıyısında sakin kasabalar.", featured:false },
  { city:"Kırşehir", region:"İç Anadolu", emoji:"🎶", color:"#d7c9a9", tags:["history","nature"], places:["Cacabey Medresesi","Ahi Evran Külliyesi","Seyfe Gölü"], blurb:"Ahilik geleneğinin izleri ve bozkırın ortasında şaşırtıcı doğa durakları.", featured:false },
  { city:"Kilis", region:"Güneydoğu Anadolu", emoji:"🫒", color:"#d4d0a6", tags:["history","food"], places:["Ravanda Kalesi","Oylum Höyük","Tarihi Kilis evleri"], blurb:"Zeytinlikler arasında saklı kalmış tarih ve samimi bir şehir dokusu.", featured:false },
  { city:"Kocaeli", region:"Marmara", emoji:"🌊", color:"#b8d3ce", tags:["nature","sea"], places:["Ormanya","Kartepe","Kefken ve Kerpe kıyıları"], blurb:"Orman yürüyüşlerinden kıyı rotalarına, kısa kaçamaklar için ideal.", featured:false },
  { city:"Konya", region:"İç Anadolu", emoji:"🌀", color:"#d5c8ad", tags:["history","nature","food"], places:["Mevlana Müzesi","Çatalhöyük","Tropikal Kelebek Bahçesi"], blurb:"Mevlana'nın şehrinde maneviyat, binlerce yıllık yerleşimler ve geniş ufuklar.", featured:true },
  { city:"Kütahya", region:"Ege", emoji:"🏺", color:"#d8c4ab", tags:["history","nature"], places:["Aizanoi Antik Kenti","Kütahya Kalesi","Frig Vadisi"], blurb:"Çini sanatının renkleri ve Anadolu'nun en etkileyici antik kentlerinden biri.", featured:false },
  { city:"Malatya", region:"Doğu Anadolu", emoji:"🍑", color:"#e3c39e", tags:["food","history","nature"], places:["Arslantepe Höyüğü","Levent Vadisi","Günpınar Şelalesi"], blurb:"Kayısı bahçelerinden UNESCO mirası Arslantepe'ye uzanan bir keşif.", featured:false },
  { city:"Manisa", region:"Ege", emoji:"🌿", color:"#cad7ad", tags:["nature","history","food"], places:["Spil Dağı Millî Parkı","Sardes Antik Kenti","Kula Peribacaları"], blurb:"Spil'in doğası, Sardes'in tarihi ve Kula'nın volkanik manzaraları.", featured:false },
  { city:"Mardin", region:"Güneydoğu Anadolu", emoji:"🏘️", color:"#d8bb9c", tags:["history","food"], places:["Eski Mardin","Deyrulzafaran Manastırı","Dara Antik Kenti"], blurb:"Taş evlerin Mezopotamya ovasına baktığı, katmanlı kültürlerin şehri.", featured:true },
  { city:"Mersin", region:"Akdeniz", emoji:"🐚", color:"#a9d8d2", tags:["sea","history","nature"], places:["Kızkalesi","Cennet-Cehennem Obrukları","Tarsus Şelalesi"], blurb:"Sahil kasabaları, antik kentler ve Akdeniz'in berrak suları.", featured:true },
  { city:"Muğla", region:"Ege", emoji:"⛵", color:"#acd6d2", tags:["sea","nature","history"], places:["Ölüdeniz","Knidos Antik Kenti","Akyaka"], blurb:"Koyların mavisi, çam ormanları ve antik limanlarda gün batımı.", featured:true },
  { city:"Muş", region:"Doğu Anadolu", emoji:"🌷", color:"#ced8b4", tags:["nature","history"], places:["Muş Ovası","Murat Nehri","Malazgirt Tarihî Alanı"], blurb:"Bahar aylarında çiçeklenen geniş ova ve tarihe yön veren topraklar.", featured:false },
  { city:"Nevşehir", region:"İç Anadolu", emoji:"🎈", color:"#e8c8a4", tags:["nature","history"], places:["Kapadokya","Göreme Açık Hava Müzesi","Uçhisar Kalesi"], blurb:"Peribacaları arasında gün doğumu, yeraltı şehirleri ve vadilerde yürüyüş.", featured:true },
  { city:"Niğde", region:"İç Anadolu", emoji:"🏔️", color:"#d6d4c5", tags:["nature","history"], places:["Aladağlar Millî Parkı","Gümüşler Manastırı","Tyana Antik Kenti"], blurb:"Aladağlar'da dağ rotaları, kaya manastırları ve tarihî su kemerleri.", featured:false },
  { city:"Ordu", region:"Karadeniz", emoji:"🌊", color:"#b8d6c7", tags:["nature","sea","food"], places:["Boztepe","Perşembe Yaylası","Yason Burnu"], blurb:"Teleferikle Boztepe'ye çık, yaylalarda serinle ve kıyı manzarasının tadını çıkar.", featured:true },
  { city:"Osmaniye", region:"Akdeniz", emoji:"🏰", color:"#d7c4a6", tags:["history","nature"], places:["Karatepe-Aslantaş Açık Hava Müzesi","Zorkun Yaylası","Kastabala Antik Kenti"], blurb:"Hitit izleri, orman içi yaylalar ve antik kent kalıntıları bir arada.", featured:false },
  { city:"Rize", region:"Karadeniz", emoji:"🍃", color:"#9fcbb5", tags:["nature"], places:["Ayder Yaylası","Zilkale","Kaçkar Dağları Millî Parkı"], blurb:"Çay bahçeleri ve bulutların üzerindeki yaylalarda Karadeniz'in yeşiline karış.", featured:true },
  { city:"Sakarya", region:"Marmara", emoji:"🏞️", color:"#b3d5ca", tags:["nature"], places:["Sapanca Gölü","Acarlar Longozu","Taraklı"], blurb:"Göl kıyısında sakinlik, longoz ormanlarında keşif ve tarihî Taraklı sokakları.", featured:false },
  { city:"Samsun", region:"Karadeniz", emoji:"🌊", color:"#b0d5d4", tags:["history","nature","sea"], places:["Bandırma Vapuru Müzesi","Kızılırmak Deltası","Amisos Tepesi"], blurb:"Millî Mücadele tarihinden kuş cennetine uzanan bir kıyı şehri rotası.", featured:true },
  { city:"Siirt", region:"Güneydoğu Anadolu", emoji:"🌄", color:"#d6c7a6", tags:["nature","history","food"], places:["Tillo","Botan Vadisi","Ulu Cami"], blurb:"Botan Vadisi'nin derin manzaraları, taş yapılar ve yöresel lezzetler.", featured:false },
  { city:"Sinop", region:"Karadeniz", emoji:"⚓", color:"#b6d6d3", tags:["sea","history","nature"], places:["Hamsilos Koyu","Sinop Tarihî Cezaevi","Erfelek Tatlıca Şelaleleri"], blurb:"Türkiye'nin en kuzeyinde koylar, şelaleler ve hafızalara kazınan tarih.", featured:true },
  { city:"Sivas", region:"İç Anadolu", emoji:"🏛️", color:"#d7c8ac", tags:["history","nature"], places:["Divriği Ulu Camii ve Darüşşifası","Gök Medrese","Gökpınar Gölü"], blurb:"Taş işçiliğinin başyapıtları ve turkuaz rengiyle büyüleyen bir göl.", featured:false },
  { city:"Şanlıurfa", region:"Güneydoğu Anadolu", emoji:"🪨", color:"#d9bfa0", tags:["history","food"], places:["Göbeklitepe","Balıklıgöl","Harran Kümbet Evleri"], blurb:"İnsanlık tarihinin en eski izleri, kadim şehir ve kendine has sofralar.", featured:true },
  { city:"Şırnak", region:"Güneydoğu Anadolu", emoji:"🏔️", color:"#c7d0bc", tags:["nature","history"], places:["Cudi Dağı","Kasrik Boğazı","Finik Ören Yeri"], blurb:"Dağların gölgesinde, tarihî izlerle çevrili etkileyici bir coğrafya.", featured:false },
  { city:"Tekirdağ", region:"Marmara", emoji:"🌊", color:"#bad8d3", tags:["sea","food","history"], places:["Uçmakdere","Rakoczi Müzesi","Hora Feneri"], blurb:"Marmara kıyısında yamaç paraşütü, sahil yürüyüşleri ve tarihî duraklar.", featured:false },
  { city:"Tokat", region:"Karadeniz", emoji:"🏘️", color:"#d7c9ad", tags:["history","nature","food"], places:["Ballıca Mağarası","Tokat Kalesi","Sulusokak Caddesi"], blurb:"Yeraltının gizeminden tarihî sokaklara uzanan, sürprizlerle dolu bir şehir.", featured:false },
  { city:"Trabzon", region:"Karadeniz", emoji:"⛪", color:"#b6d1bc", tags:["nature","history","food"], places:["Sümela Manastırı","Uzungöl","Trabzon Ayasofya Müzesi"], blurb:"Dağ yamacındaki manastır, göl manzaraları ve Karadeniz mutfağı.", featured:true },
  { city:"Tunceli", region:"Doğu Anadolu", emoji:"🏞️", color:"#acd0bf", tags:["nature"], places:["Munzur Vadisi Millî Parkı","Munzur Gözeleri","Pülümür Vadisi"], blurb:"Munzur'un berrak suları ve sarp vadiler boyunca uzanan özgür doğa.", featured:false },
  { city:"Uşak", region:"Ege", emoji:"🧶", color:"#d6c7aa", tags:["history","nature"], places:["Ulubey Kanyonu","Blaundos Antik Kenti","Clandras Köprüsü"], blurb:"Dünyanın en büyük kanyonlarından birinin manzarasında tarihî köprüler.", featured:false },
  { city:"Van", region:"Doğu Anadolu", emoji:"🐈", color:"#b6d3d8", tags:["nature","history","food"], places:["Van Gölü","Akdamar Adası","Van Kalesi"], blurb:"Van Gölü'nün maviliği, Akdamar'ın taş kabartmaları ve benzersiz bir kahvaltı.", featured:true },
  { city:"Yalova", region:"Marmara", emoji:"♨️", color:"#b8d6c1", tags:["nature"], places:["Yalova Termal Kaplıcaları","Sudüşen Şelalesi","Dipsiz Göl"], blurb:"Şelaleler ve ormanlarla çevrili termal duraklarda kısa bir nefes molası.", featured:false },
  { city:"Yozgat", region:"İç Anadolu", emoji:"🌳", color:"#cbd6b8", tags:["nature","history"], places:["Çamlık Millî Parkı","Kazankaya Kanyonu","Yozgat Saat Kulesi"], blurb:"Türkiye'nin ilk millî parkında yürüyüş ve kanyon boyunca doğa keşfi.", featured:false },
  { city:"Zonguldak", region:"Karadeniz", emoji:"⛏️", color:"#b7ceca", tags:["nature","history","sea"], places:["Gökgöl Mağarası","Filyos Antik Kenti","Fener semti"], blurb:"Maden tarihinin izleri, mağaralar ve Karadeniz kıyısında saklı güzellikler.", featured:false }
];

const cityEnrichment = {
  "Adana": { fact:"Sıcak yazları, Çukurova'nın bereketli ovası ve kebap kültürüyle tanınır.", places:["Anavarza Antik Kenti","Sabancı Merkez Camii"] },
  "Adıyaman": { fact:"Kommagene Krallığı'nın izleri ve Nemrut Dağı'ndaki anıtsal heykeller şehrin simgelerindendir.", places:["Karakuş Tümülüsü","Perre Antik Kenti"] },
  "Afyonkarahisar": { fact:"Sucuk ve kaymağıyla tanınır; termal kaynakları ve mermer üretimiyle de öne çıkar.", places:["Afyon Ulu Camii","Gazlıgöl Kaplıcaları"] },
  "Ağrı": { fact:"Türkiye'nin en yüksek dağı olan Ağrı Dağı ve tarihî İshak Paşa Sarayı şehrin en bilinen simgeleridir.", places:["Ahmed-i Hani Türbesi","Doğubayazıt Eski Bayezid Camii"] },
  "Aksaray": { fact:"Ihlara Vadisi, Hasan Dağı ve Selçuklu kervansaraylarıyla doğa ve tarih rotalarını bir araya getirir.", places:["Sultanhanı Kervansarayı","Aşıklı Höyük"] },
  "Amasya": { fact:"Yeşilırmak kıyısındaki Yalıboyu evleri ve kaya mezarlarıyla tanınır; Osmanlı şehzadelerinin yetiştiği kentlerdendir.", places:["Ferhat Su Kanalı","Şehzadeler Müzesi"] },
  "Ankara": { fact:"Türkiye'nin başkenti; Anıtkabir'in yanı sıra müzeleri ve köklü Cumhuriyet tarihiyle öne çıkar.", places:["Hacı Bayram Camii","Atakule"] },
  "Antalya": { fact:"Uzun Akdeniz kıyısı, antik kentleri ve ılıman iklimiyle Türkiye'nin başlıca turizm merkezlerindendir.", places:["Aspendos Antik Tiyatrosu","Perge Antik Kenti"] },
  "Ardahan": { fact:"Kışın donan Çıldır Gölü, yüksek yaylaları ve Kafkaslara açılan coğrafyasıyla bilinir.", places:["Damal Atatürk Silüeti","Posof"] },
  "Artvin": { fact:"Dağlık coğrafyası, ormanları ve yaylalarıyla doğa turizminin öne çıktığı Karadeniz şehirlerindendir.", places:["Borçka Karagöl","Şavşat Karagöl"] },
  "Aydın": { fact:"İnciri ve zeytiniyle tanınan Aydın, Ege kıyılarını antik İyon kentleriyle buluşturur.", places:["Milet Antik Kenti","Priene Antik Kenti"] },
  "Balıkesir": { fact:"Hem Ege hem Marmara kıyılarına uzanır; zeytini, adaları ve Kazdağları'yla tanınır.", places:["Şeytan Sofrası","Kuvayı Milliye Müzesi"] },
  "Bartın": { fact:"Amasra başta olmak üzere koyları, ahşap tekne geleneği ve Karadeniz kıyılarıyla tanınır.", places:["Amasra Kalesi","Çakraz Plajı"] },
  "Batman": { fact:"Dicle kıyısındaki Hasankeyf ve çevresindeki tarihî miras şehrin en güçlü simgelerindendir.", places:["Zeynel Bey Türbesi","Hasankeyf Müzesi"] },
  "Bayburt": { fact:"Bayburt Kalesi ve Baksı Müzesi, küçük şehirde tarih ile çağdaş sanatı bir araya getirir.", places:["Kop Dağı Geçidi","Dede Korkut Türbesi"] },
  "Bilecik": { fact:"Söğüt ve çevresi, Osmanlı Beyliği'nin kuruluş dönemine ait önemli tarihî duraklar barındırır.", places:["Pelitözü Göleti","Ertuğrul Gazi Müzesi"] },
  "Bingöl": { fact:"Yüzen Adalar, yüksek yaylalar ve zengin su kaynakları Bingöl'ün doğa mirasını öne çıkarır.", places:["Kığı Kalesi","Hesarek Kayak Merkezi"] },
  "Bitlis": { fact:"Ahlat'ın Selçuklu mezar taşları ve Van Gölü çevresindeki volkanik manzaralarla tanınır.", places:["Ahlat Müzesi","Süphan Dağı"] },
  "Bolu": { fact:"Ormanları, gölleri ve dört mevsim doğa kaçamağı sunan millî parklarıyla bilinir.", places:["Kartalkaya Kayak Merkezi","Seben Kaya Evleri"] },
  "Burdur": { fact:"Salda Gölü'nün turkuaz kıyıları ve Sagalassos gibi yüksek rakımlı antik kentleriyle tanınır.", places:["Kibyra Antik Kenti","Kremna Antik Kenti"] },
  "Bursa": { fact:"Osmanlı'nın ilk başkentlerinden olan Bursa; İskender kebabı, kestane şekeri ve ipeğiyle de bilinir.", places:["Koza Han","Muradiye Külliyesi"] },
  "Çanakkale": { fact:"Troya ve Gelibolu Yarımadası'nın tarihî mirasını Bozcaada ve Boğaz manzaralarıyla birleştirir.", places:["Assos Antik Kenti","Kilitbahir Kalesi"] },
  "Çankırı": { fact:"Tuz yatakları ve Ilgaz Dağı çevresindeki doğa rotaları şehrin belirgin özelliklerindendir.", places:["Çankırı Müzesi","Ilgaz Yıldıztepe Kayak Merkezi"] },
  "Çorum": { fact:"Hitit başkenti Hattuşa'nın bulunduğu Çorum, leblebisi ve binlerce yıllık tarihiyle tanınır.", places:["Çorum Müzesi","İncesu Kanyonu"] },
  "Denizli": { fact:"Pamukkale travertenleri ve tekstil üretimiyle tanınır; termal suları da şehrin önemli kaynaklarındandır.", places:["Kaklık Mağarası","Buldan Evleri"] },
  "Diyarbakır": { fact:"Bazalt surları, Dicle kıyısı ve karpuzuyla tanınan şehir, çok katmanlı bir kültürel mirasa sahiptir.", places:["On Gözlü Köprü","Hasan Paşa Hanı"] },
  "Düzce": { fact:"Şelaleleri, yaylaları ve Akçakoca kıyılarıyla Batı Karadeniz'de doğa ve deniz rotaları sunar.", places:["Akçakoca Ceneviz Kalesi","Fakıllı Mağarası"] },
  "Edirne": { fact:"Selimiye Camii'nin şehri Edirne, Meriç kıyıları ve tava ciğeriyle de tanınır.", places:["Karaağaç Eski Tren Garı","II. Bayezid Külliyesi Sağlık Müzesi"] },
  "Elazığ": { fact:"Harput'un tarihî dokusu, Hazar Gölü ve üzümden yapılan yöresel ürünleriyle öne çıkar.", places:["Harput Ulu Camii","Keban Baraj Gölü"] },
  "Erzincan": { fact:"Dağlık coğrafyası, tulum peyniri ve Fırat vadisindeki kanyon rotalarıyla tanınır.", places:["Ekşisu Mesire Alanı","Mama Hatun Kervansarayı"] },
  "Erzurum": { fact:"Palandöken'de kış sporları, tarihî taş yapıları ve cağ kebabıyla tanınır.", places:["Yakutiye Medresesi","Erzurum Kalesi"] },
  "Eskişehir": { fact:"Porsuk kıyısındaki canlı şehir hayatı, lületaşı işçiliği ve öğrenci nüfusuyla bilinir.", places:["Kurşunlu Külliyesi","Lületaşı Müzesi"] },
  "Gaziantep": { fact:"Antep fıstığı, baklavası ve zengin mutfak kültürüyle tanınır; gastronomi alanında UNESCO Yaratıcı Şehirler Ağı'ndadır.", places:["Emine Göğüş Mutfak Müzesi","Yesemek Açık Hava Müzesi"] },
  "Giresun": { fact:"Türkiye'nin fındık üretiminde öne çıkan şehirlerinden; kıyıdaki adası ve yaylalarıyla da bilinir.", places:["Giresun Kalesi","Tirebolu Kalesi"] },
  "Gümüşhane": { fact:"Karaca Mağarası, dağ köyleri ve pestil-köme gibi dut ürünleriyle tanınır.", places:["Torul Cam Seyir Terası","Süleymaniye Mahallesi"] },
  "Hakkari": { fact:"Yüksek dağları, buzul gölleri ve yaylalarıyla Türkiye'nin en sarp ve yüksek coğrafyalarındandır.", places:["Zap Vadisi","Hakkari Taş Köprü"] },
  "Hatay": { fact:"Farklı kültürlerin buluştuğu Hatay; künefesi, zengin mutfağı ve inanç mirasıyla tanınır.", places:["Vakıflı Köyü","Payas Sokullu Mehmet Paşa Külliyesi"] },
  "Iğdır": { fact:"Ağrı Dağı'nın kuzey eteklerindeki verimli ovası sayesinde çevresine göre daha ılıman iklimiyle bilinir.", places:["Harmandöven Kervansarayı","Karakoyunlu Açık Hava Müzesi"] },
  "Isparta": { fact:"Gül yağı ve lavanta üretimiyle tanınır; gölleri ve Davraz Dağı doğa turizmini destekler.", places:["Yazılı Kanyon Tabiat Parkı","Davraz Kayak Merkezi"] },
  "İstanbul": { fact:"Avrupa ve Asya'ya yayılan İstanbul; tarihî yarımadası, Boğazı ve çok katmanlı şehir kültürüyle öne çıkar.", places:["Topkapı Sarayı","Yerebatan Sarnıcı"] },
  "İzmir": { fact:"Ege kıyısındaki yaşamı, zeytinyağlı mutfağı ve antik kentleriyle tanınan büyük bir liman şehridir.", places:["İzmir Saat Kulesi","Bergama Asklepionu"] },
  "Kahramanmaraş": { fact:"Dövme dondurması ve biberiyle tanınır; yaylaları ve tarihî çarşıları da keşif rotalarına eklenir.", places:["Germanicia Mozaik Müzesi","Eshab-ı Kehf Külliyesi"] },
  "Karabük": { fact:"UNESCO Dünya Mirası Safranbolu evleri ve Yenice Ormanları şehrin başlıca simgelerindendir.", places:["Tokatlı Kanyonu","Bulak Mencilis Mağarası"] },
  "Karaman": { fact:"Türkçe tarihindeki önemli yeri, Taşkale'nin tahıl ambarları ve çevredeki kaya yerleşimleriyle bilinir.", places:["Taşkale Tahıl Ambarları","Karaman İmaret Camii"] },
  "Kars": { fact:"Baltık mimarisi, Ani kalıntıları, gravyer peyniri ve kışın donan Çıldır Gölü'yle tanınır.", places:["Fethiye Camii","Sarıkamış Kayak Merkezi"] },
  "Kastamonu": { fact:"Ahşap konakları, çekme helvası ve Küre Dağları'nın kanyonlarıyla Batı Karadeniz'in öne çıkan şehirlerindendir.", places:["Kastamonu Saat Kulesi","Ilıca Şelalesi"] },
  "Kayseri": { fact:"Erciyes Dağı, pastırma ve mantısıyla tanınır; tarihî ticaret yolları üzerinde gelişmiş bir şehirdir.", places:["Gevher Nesibe Şifahanesi","Sultan Sazlığı Millî Parkı"] },
  "Kırıkkale": { fact:"Kızılırmak kıyısındaki tarihî köprüleri ve savunma sanayisi geçmişiyle bilinir.", places:["Hasandede Camii","Keskin Sulu Mağara"] },
  "Kırklareli": { fact:"İğneada longoz ormanları, üzüm bağları ve Trakya mutfağıyla doğa ve lezzet rotaları sunar.", places:["Kıyıköy Aya Nikola Manastırı","Kıyıköy Limanı"] },
  "Kırşehir": { fact:"Ahilik geleneği, Neşet Ertaş'ın bozlak kültürü ve termal kaynaklarıyla tanınır.", places:["Aşık Paşa Türbesi","Terme Kaplıcaları"] },
  "Kilis": { fact:"Zeytinyağı, üzümü ve yöresel mutfağıyla tanınan Kilis, Suriye sınırındaki tarihî bir kenttir.", places:["Canbolat Paşa Külliyesi","Kilis Ulu Camii"] },
  "Kocaeli": { fact:"Sanayi kimliğinin yanında Kartepe, kıyı kasabaları ve geniş orman alanlarıyla da öne çıkar.", places:["Seka Park","Hereke Halı ve İpekli Dokuma Fabrikası"] },
  "Konya": { fact:"Mevlana ve sema geleneğiyle tanınır; yüzölçümü geniş, tarım kültürü güçlü bir İç Anadolu şehridir.", places:["Sille Mahallesi","Alaeddin Camii"] },
  "Kütahya": { fact:"Çini ve seramik sanatının önemli merkezlerinden; termal kaynakları ve Frig mirasıyla da bilinir.", places:["Germiyan Sokağı","Kütahya Çini Müzesi"] },
  "Malatya": { fact:"Kayısısıyla dünya çapında tanınan Malatya, Arslantepe Höyüğü'nde çok eski yerleşim izleri taşır.", places:["Battalgazi Ulu Camii","Orduzu Pınarbaşı"] },
  "Manisa": { fact:"Mesir macunu geleneği, üzümü ve Sardes Antik Kenti'yle tanınan bir Ege şehridir.", places:["Muradiye Camii","Kula Tarihî Evleri"] },
  "Mardin": { fact:"Taş mimarisi, Mezopotamya ovasına bakan terasları ve çok dilli kültürel mirasıyla tanınır.", places:["Midyat Eski Kent","Mor Gabriel Manastırı"] },
  "Mersin": { fact:"Limanı, narenciye üretimi ve uzun Akdeniz kıyısıyla tanınır; tantunisi de şehrin sevilen lezzetlerindendir.", places:["Anemurium Antik Kenti","Aziz Pavlus Kuyusu"] },
  "Muğla": { fact:"Ege ve Akdeniz kıyılarındaki koyları, antik kentleri ve zeytinyağlı mutfağıyla tanınır.", places:["İztuzu Plajı","Saklıkent Kanyonu"] },
  "Muş": { fact:"Bahar aylarında çiçeklenen geniş ovası ve Malazgirt'le özdeşleşen tarihî mirasıyla bilinir.", places:["Murat Köprüsü","Malazgirt Kalesi"] },
  "Nevşehir": { fact:"Kapadokya'nın merkezindeki Nevşehir, peribacaları, yeraltı şehirleri ve balon manzaralarıyla tanınır.", places:["Derinkuyu Yeraltı Şehri","Paşabağları Ören Yeri"] },
  "Niğde": { fact:"Aladağlar'ın dağ rotaları, elması ve tarihî kaya yapılarıyla tanınan bir İç Anadolu şehridir.", places:["Niğde Kalesi","Göllüdağ Ören Yeri"] },
  "Ordu": { fact:"Fındık üretimiyle tanınır; Boztepe manzarası, yaylaları ve Karadeniz kıyısı şehrin öne çıkan güzellikleridir.", places:["Çambaşı Yaylası","Yason Burnu Kilisesi"] },
  "Osmaniye": { fact:"Yer fıstığı üretimiyle bilinir; Karatepe-Aslantaş ve Kastabala çevresinde önemli tarihî miras barındırır.", places:["Toprakkale Kalesi","Osmaniye Kent Müzesi"] },
  "Rize": { fact:"Türkiye'de çay üretiminin merkezidir; yağışlı iklimi, yaylaları ve Kaçkar Dağları'yla tanınır.", places:["Fırtına Vadisi","Şenyuva (Çinçiva) Köprüsü"] },
  "Sakarya": { fact:"Sapanca Gölü, longoz ormanları ve güçlü gastronomi kültürüyle İstanbul çevresinin sevilen kaçış rotalarındandır.", places:["Justinianus Köprüsü","Maden Deresi"] },
  "Samsun": { fact:"Bandırma Vapuru ve Millî Mücadele tarihindeki yeriyle anılır; deltaları önemli kuş yaşam alanlarıdır.", places:["Amazon Köyü","Bafra Kızılırmak Deltası"] },
  "Siirt": { fact:"Büryan kebabı ve Siirt fıstığıyla tanınır; Botan Vadisi'nin derin manzaralarıyla da öne çıkar.", places:["Siirt Ulu Camii","Tillo İsmail Fakirullah Türbesi"] },
  "Sinop": { fact:"Türkiye'nin en kuzey ucundaki Sinop, korunaklı limanı, koyları ve tarihî cezaeviyle tanınır.", places:["İnceburun Feneri","Boyabat Kalesi"] },
  "Sivas": { fact:"Selçuklu eserleri, Kangal köpeği ve geniş bozkır coğrafyasıyla tanınır.", places:["Buruciye Medresesi","Tödürge Gölü"] },
  "Şanlıurfa": { fact:"Göbeklitepe'nin bulunduğu şehir; sıra geceleri, isot biberi ve zengin inanç mirasıyla tanınır.", places:["Harran Ören Yeri","Halfeti"] },
  "Şırnak": { fact:"Cudi Dağı ve Mezopotamya'ya açılan dağ geçitleriyle belirgin, sarp bir coğrafyaya sahiptir.", places:["Cizre Ulu Camii","Kırmızı Medrese"] },
  "Tekirdağ": { fact:"Tekirdağ köftesi ve üzüm bağlarıyla tanınır; Marmara kıyısında plaj ve yamaç rotaları sunar.", places:["Namık Kemal Evi","Şarköy Sahili"] },
  "Tokat": { fact:"Yazmacılık geleneği, bağ yaprağı ve tarihî konaklarıyla bilinir; Ballıca Mağarası önemli doğa duraklarındandır.", places:["Tokat Mevlevihanesi","Kaz Gölü"] },
  "Trabzon": { fact:"Sümela Manastırı, yaylaları ve hamsi ağırlıklı mutfağıyla tanınan bir Karadeniz şehridir.", places:["Atatürk Köşkü","Sera Gölü"] },
  "Tunceli": { fact:"Munzur Vadisi'nin korunan doğası, akarsuları ve dağlarıyla doğa tutkunları için öne çıkar.", places:["Pertek Kalesi","Pülümür Çayı"] },
  "Uşak": { fact:"Ulubey Kanyonu, halı-kilim dokumacılığı ve tarihî Blaundos kentiyle tanınır.", places:["Cilandras Köprüsü","Uşak Arkeoloji Müzesi"] },
  "Van": { fact:"Van Gölü, Akdamar'ın taş kabartmaları, otlu peyniri ve Van kedisiyle tanınır.", places:["Muradiye Şelalesi","Van Kedi Villası"] },
  "Yalova": { fact:"Termal kaynakları, kıyı şeridi ve İstanbul'a yakınlığıyla kısa doğa kaçamakları için tercih edilir.", places:["Karaca Arboretumu","Yürüyen Köşk"] },
  "Yozgat": { fact:"Türkiye'nin ilk millî parkı olan Çamlık'ın yanı sıra Sarıkaya'daki Roma hamamıyla da tanınır.", places:["Sarıkaya Basilica Therma","Kerkenes Harabeleri"] },
  "Zonguldak": { fact:"Taş kömürü madenciliğiyle özdeşleşir; mağaraları ve Filyos kıyısındaki antik kalıntılarıyla da bilinir.", places:["Filyos Kalesi","Cehennemağzı Mağaraları"] }
};

const additionalLandmarks = {
  "Adana":["Büyük Saat Kulesi","Ramazanoğlu Konağı"],
  "Adıyaman":["Kahta Kalesi","Yeni Kale"],
  "Afyonkarahisar":["Ayazini Ören Yeri","Kocatepe Anıtı"],
  "Ağrı":["Diyadin Kaplıcaları","Balık Gölü"],
  "Aksaray":["Eğri Minare","Acemhöyük"],
  "Amasya":["Amasya Kalesi","II. Bayezid Külliyesi"],
  "Ankara":["Augustus Tapınağı","Roma Hamamı"],
  "Antalya":["Termessos Antik Kenti","Phaselis Antik Kenti"],
  "Ardahan":["Akçakale Adası","Yalnızçam Kayak Merkezi"],
  "Artvin":["Hatila Vadisi Millî Parkı","Barhal Kilisesi"],
  "Aydın":["Nysa Antik Kenti","Tralleis Antik Kenti"],
  "Balıkesir":["Antandros Antik Kenti","Tahtakuşlar Etnografya Müzesi"],
  "Bartın":["Kuşkayası Yol Anıtı","Amasra Müzesi"],
  "Batman":["Hasankeyf Arkeoparkı","Mor Aho Manastırı"],
  "Bayburt":["Sırakayalar Şelaleleri","Kenan Yavuz Etnografya Müzesi"],
  "Bilecik":["Bilecik Müzesi","Harmankaya Kanyonu"],
  "Bingöl":["Zağ Mağarası","Kığı Kalesi"],
  "Bitlis":["İhlasiye Medresesi","Bitlis Ulu Camii"],
  "Bolu":["Mudurnu Tarihî Çarşısı","Göynük Tarihî Evleri"],
  "Burdur":["Burdur Arkeoloji Müzesi","Milyos Antik Kenti"],
  "Bursa":["Yeşil Türbe","Bursa Panorama 1326 Fetih Müzesi"],
  "Çanakkale":["Çimenlik Kalesi","Apollon Smintheion Ören Yeri"],
  "Çankırı":["Taş Mescit","Çankırı Ulu Camii"],
  "Çorum":["Şapinuva Ören Yeri","Çorum Saat Kulesi"],
  "Denizli":["Tripolis Antik Kenti","Colossae Antik Kenti"],
  "Diyarbakır":["Diyarbakır Ulu Camii","İçkale Müze Kompleksi"],
  "Düzce":["Prusias ad Hypium Antik Kenti","Akçakoca Tarihî Evleri"],
  "Edirne":["Edirne Sarayı kalıntıları","Rüstem Paşa Kervansarayı"],
  "Elazığ":["Sarahatun Camii","Harput Musiki Müzesi"],
  "Erzincan":["Altıntepe Ören Yeri","Girlevik Şelalesi"],
  "Erzurum":["Üç Kümbetler","Çifte Minareli Medrese"],
  "Eskişehir":["Yazılıkaya-Midas Anıtı","Devrim Arabaları Müzesi"],
  "Gaziantep":["Rumkale","Belkıs Zeugma Antik Kenti"],
  "Giresun":["Giresun Adası","Kümbet Yaylası"],
  "Gümüşhane":["Santa Harabeleri","Limni Gölü Tabiat Parkı"],
  "Hakkari":["Cilo-Sat Dağları Millî Parkı","Meydan Medresesi"],
  "Hatay":["Habib-i Neccar Camii","Titus Tüneli ve Beşikli Mağara"],
  "Iğdır":["Koçbaşlı Mezar Taşları Açık Hava Müzesi","Meteor Çukuru"],
  "Isparta":["Pisidia Antiokheia Antik Kenti","Kovada Gölü Millî Parkı"],
  "İstanbul":["Topkapı Sarayı","Yerebatan Sarnıcı","Dolmabahçe Sarayı","Sultanahmet Camii"],
  "İzmir":["Smyrna Agorası","Kadifekale","Çeşme Kalesi","Teos Antik Kenti"],
  "Kahramanmaraş":["Maraş Kalesi","Kahramanmaraş Arkeoloji Müzesi"],
  "Karabük":["Hadrianopolis Antik Kenti","İncekaya Su Kemeri"],
  "Karaman":["İncesu Mağarası","Karaman Kalesi"],
  "Kars":["Kars Müzesi","Boğatepe Peynir Müzesi"],
  "Kastamonu":["Kastamonu Kalesi","Kasaba Köyü Mahmut Bey Camii"],
  "Kayseri":["Hunat Hatun Külliyesi","Soğanlı Vadisi"],
  "Kırıkkale":["Ceritkale Kaya Mezarları","Çeşnigir Köprüsü"],
  "Kırklareli":["Hızırbey Külliyesi","Dupnisa Mağarası"],
  "Kırşehir":["Mucur Yeraltı Şehri","Cacabey Medresesi"],
  "Kilis":["Neşet Efendi Konağı","Ravanda Kalesi"],
  "Kocaeli":["İzmit Saat Kulesi","Eskihisar Kalesi"],
  "Konya":["İnce Minareli Medrese","Kilistra Antik Kenti"],
  "Kütahya":["Dumlupınar Şehitliği","Aizanoi Zeus Tapınağı"],
  "Malatya":["Silahtar Mustafa Paşa Kervansarayı","Levent Vadisi"],
  "Manisa":["Akhisar Thyateira Antik Kenti","Sardes Antik Kenti"],
  "Mardin":["Zinciriye Medresesi","Kasımiye Medresesi"],
  "Mersin":["Soli Pompeipolis Antik Kenti","Adamkayalar"],
  "Muğla":["Bodrum Kalesi","Kayaköy Ören Yeri","Kaunos Antik Kenti","Akyaka Azmak Nehri"],
  "Muş":["Muş Ulu Camii","Malazgirt Tarihî Alanı"],
  "Nevşehir":["Kaymaklı Yeraltı Şehri","Zelve-Paşabağları Ören Yeri"],
  "Niğde":["Gümüşler Manastırı","Tyana Antik Kenti"],
  "Ordu":["Kurul Kalesi","Yoroz Kent Ormanı"],
  "Osmaniye":["Aslantaş Açık Hava Müzesi","Zorkun Yaylası"],
  "Rize":["Rize Kalesi","Fırtına Vadisi"],
  "Sakarya":["Taraklı Tarihî Evleri","Acarlar Longozu"],
  "Samsun":["Tekkeköy Mağaraları","Onur Anıtı"],
  "Siirt":["Veysel Karani Türbesi","İbrahim Hakkı Türbesi"],
  "Sinop":["Sinop Kalesi","Balatlar Kilisesi"],
  "Sivas":["Çifte Minareli Medrese","Divriği Ulu Camii ve Darüşşifası"],
  "Şanlıurfa":["Şanlıurfa Kalesi","Harran Ulu Camii"],
  "Şırnak":["Mem u Zin Türbesi","Cizre Kalesi"],
  "Tekirdağ":["Perinthos Antik Kenti","Tekirdağ Arkeoloji ve Etnografya Müzesi"],
  "Tokat":["Niksar Kalesi","Zile Kalesi"],
  "Trabzon":["Vazelon Manastırı","Trabzon Kalesi"],
  "Tunceli":["Pertek Kalesi","Munzur Gözeleri"],
  "Uşak":["Taşyaran Vadisi","Uşak Arkeoloji Müzesi"],
  "Van":["Hoşap Kalesi","Çavuştepe Kalesi"],
  "Yalova":["Yürüyen Köşk","Karaca Arboretumu"],
  "Yozgat":["Kerkenes Harabeleri","Sarıkaya Roma Hamamı"],
  "Zonguldak":["Cehennemağzı Mağaraları","Filyos Kalesi"]
};

destinations.forEach((item) => {
  const enrichment = cityEnrichment[item.city];
  if (!enrichment) throw new Error(`Şehir bilgisi eksik: ${item.city}`);
  item.fact = enrichment.fact;
  const landmarks = additionalLandmarks[item.city];
  if (!landmarks) throw new Error(`Gezilecek yer bilgisi eksik: ${item.city}`);
  const officialPlaces = officialAttractions[item.city];
  if (!Array.isArray(officialPlaces)) throw new Error(`Resmî gezilecek yer listesi eksik: ${item.city}`);
  const seenPlaces = new Set();
  item.places = [...item.places, ...enrichment.places, ...landmarks, ...officialPlaces].filter((place) => {
    if (typeof place !== "string" || !place.trim()) throw new Error(`Geçersiz gezilecek yer kaydı: ${item.city}`);
    const key = place.normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLocaleLowerCase("tr-TR")
      .replace(/ı/g, "i")
      .replace(/[^a-z0-9]/g, "");
    if (!key) throw new Error(`Gezilecek yer adı boş: ${item.city}`);
    if (seenPlaces.has(key)) return false;
    seenPlaces.add(key);
    return true;
  });
  item.season = item.region;
});

let currentLanguage = "tr";
let categoryNames = { nature: "Doğa", history: "Tarih", sea: "Deniz", food: "Lezzet" };
const uiText = {
  tr: {
    brand:"Yol Arkadaşım", nav:["Keşfet","Rotalar","Hava & harita","İletişim"], saved:"Kaydettiklerim", clock:"TÜRKİYE SAATİ", developer:"Geliştirici:",
    language:"Dil seçin", theme:"Temayı değiştir", warningTitle:"Güvenlik uyarısı", warning:"Sitede asla özel bilgilerinizi girmeyiniz, bu site sizlere tamamen ücretsiz bir şekilde kullanmanız için tasarlanmıştır.",
    metaDescription:"Türkiye'nin 81 ilinde rotaları, doğa harikalarını ve tarihî durakları keşfet.", heroKicker:"81 şehir, binlerce hikâye", heroTitle:"Yolun nereye<br>çıkarsa, <span>güzeldir.</span>", heroCopy:"Türkiye'nin saklı kalmış köşelerini, unutulmaz manzaralarını ve kendine özgü hikâyelerini keşfet.", search:"Bir şehir ya da yer ara...", explore:"Keşfet", searchHint:"Örnek: Kapadokya, İzmir, Pamukkale", sticker:"Her şehir<br>bir keşif.", scroll:"Aşağı kaydır", photoCaption:"İlham fotoğrafı",
    routesEyebrow:"KENDİ ROTANI BUL", routesTitle:"Türkiye seni <span>çağırıyor.</span>", routesNote:"İster hafta sonu kaçamağı, ister uzun bir yolculuk...<br>Bir sonraki güzel anın burada olabilir.",
    filters:["Tümü","Doğa","Tarih","Deniz","Lezzet"], sort:"Sırala", sortOptions:["Öne çıkanlar","İsim (A–Z)"], region:"Bölge", allRegions:"Tüm bölgeler", results:"İlham veren duraklar", noResults:"Bu aramayla eşleşen bir yer bulamadık.", noResultsHelp:"Başka bir şehir ya da gezi türü deneyebilirsin.", showAll:"81 ilin tamamını keşfet", showLess:"Daha az göster", showResults:"sonucun tamamını göster", featured:"Öne çıkan", save:"Kaydet", unsave:"Kaydedilenlerden çıkar", discover:"Keşfet", directions:"Yol tarifi", provinceCount:"il", savedResults:"Kaydettiğin duraklar", searchResults:"Arama sonuçları:", routesSuffix:"rotaları", country:"TÜRKİYE", location:"Konum", checkConnection:"İnternet bağlantınızı kontrol edip yeniden deneyin.",
    toolsEyebrow:"YOLCULUĞUNU PLANLA", toolsTitle:"Sana göre <span>keşif.</span>", toolsNote:"İl seç; hava durumuna, haritaya ve etkinlik aramalarına göz at.", contentNote:"Seçilen şehrin tanıtım metinleri çevrilir; özel adlar özgün yazımıyla korunur.", translationLoading:"Şehir bilgileri çevriliyor…", translationFallback:"Çeviri hizmeti kullanılamadı; şehir bilgisi Türkçe gösteriliyor.",
    preferenceEyebrow:"GEZİ TARZINI SEÇ", preferenceTitle:"Nasıl bir yolculuk istersin?", preferenceLabel:"İlgi alanın", preferences:["Doğa ve yaylalar","Deniz ve sahil","Tarih ve kültür","Yöresel lezzetler","Kış ve kayak"], recommend:"Şehir öner", recommendations:"Önerilen şehirler: ",
    weatherEyebrow:"CANLI HAVA DURUMU", weatherTitle:"Şehir hava durumu", weatherSelect:"Hava durumu için il seçin", weatherEmpty:"Bir il seçerek güncel hava durumunu yükle.", weatherLoading:"için hava durumu yükleniyor…", weatherSource:"Veri: Open-Meteo · İnternet bağlantısı gerekir.", weatherError:"Güncel veri alınamadı", feelsLike:"Hissedilen", rain:"Yağış", humidity:"Nem", wind:"Rüzgâr", sunrise:"Gün doğumu", sunset:"Gün batımı",
    eventsEyebrow:"ETKİNLİK & KONAKLAMA", eventsTitle:"Planını doğrula", eventsCopy:"Festival tarihleri ve otel iletişim bilgileri değişebilir. Güncel bilgi için seçtiğin ilin resmî kaynaklarını ve harita sonuçlarını kontrol et.", events:"Etkinlikleri ara", hotels:"Konaklama bul",
    mapEyebrow:"TÜRKİYE HARİTASI", mapTitle:"İl seçerek haritada keşfet", mapLayer:"Harita görünümü", layers:["Sokak","Arazi","Uydu"], mapUnavailable:"Harita servisi yüklenemedi. İnternet bağlantınızı kontrol edin.", mapNote:"Harita OpenStreetMap, arazi ve uydu katmanlarıyla sunulur. Yerel ilçe ve hava/radar detayları için harita bağlantısını açın.",
    factEyebrow:"BİLİYOR MUYDUNUZ?", factIntro:"Türkiye'den bir şehir bilgisi", factMore:"Başka bir il", factTitle:"Biliyor muydunuz?",
    quoteEyebrow:"BİRAZ MERAK, BOLCA YOL", quoteTitle:"En güzel hikâyeler,<br><span>yola çıkınca başlar.</span>", quoteLink:"Yeni bir yer bul", footerTagline:"Güzel yollar, güzel hikâyeler.",
    footerSources:'Kaynaklar ve lisanslar: <a href="https://www.kulturportali.gov.tr/turkiye/genel/gezilecekyer">T.C. Kültür ve Turizm Bakanlığı Kültür Portalı</a>, <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>, <a href="https://leafletjs.com/">Leaflet</a>, <a href="https://open-meteo.com/">Open-Meteo</a>, <a href="https://www.rainviewer.com/">RainViewer</a>, <a href="https://commons.wikimedia.org/">Wikimedia Commons</a> ve <a href="https://unsplash.com/">Unsplash</a> fotoğrafları.',
    privacyNote:"Gizlilik/KVKK: Open-Meteo, RainViewer, OpenStreetMap ve Google Fonts ile fotoğraf/harita sağlayıcılarına istek yapılır. Site kişisel veri toplamaz; bu sağlayıcılar bağlantı bilgilerini kendi politikalarına göre işleyebilir.",
    surprise:"Beni şaşırt", seasonTitle:"Ne zaman gidilmeli?", seasonMonths:"Öne çıkan aylar:", climateLabel:"İklim notu:", seasonDisclaimer:"Bölge geneli için yaklaşık öneri:",
    seasonRegions:{
      "Marmara":"Bölge geneli için ilkbahar ve sonbahar daha ılıman olabilir; hava kısa sürede değişebilir.",
      "Ege":"Kıyılar için ilkbahar ve sonbahar genellikle daha ılımandır; yazın sıcaklık artabilir.",
      "Akdeniz":"İlkbahar ve sonbahar sıcaklığın daha ılıman olduğu dönemlerdir; yazlar sıcak geçebilir.",
      "İç Anadolu":"İlkbahar ve sonbahar tercih edilebilir; mevsimler arası sıcaklık farkı belirgindir.",
      "Karadeniz":"İlkbahar sonu ve yaz daha elverişli olabilir; yağış yıl içinde görülebilir.",
      "Doğu Anadolu":"Yüksek rakım nedeniyle yaz dönemi daha elverişli olabilir; hava koşullarını önceden kontrol edin.",
      "Güneydoğu Anadolu":"İlkbahar ve sonbahar sıcaklığın daha ılıman olduğu dönemlerdir; yazlar çok sıcak olabilir."
    },
    emergencyTitle:"Acil durum ve faydalı bilgiler", emergencyNumbers:[["112","Polis, itfaiye ve sağlık dâhil tüm acil durumlar için tek numara."],["114","Ulusal Zehir Danışma Merkezi (UZEM)."]],
    packingTitle:"Yanına al", packingGroups:[
      {id:"winter",label:"Kış",items:["Sıcak tutan katmanlı giysiler","Su geçirmez mont ve ayakkabı","Eldiven, bere ve atkı"]},
      {id:"summer",label:"Yaz",items:["Su matarası","Şapka, güneş kremi ve güneş gözlüğü","Hafif ve nefes alan giysiler"]},
      {id:"mountain",label:"Dağ",items:["Bileği kavrayan yürüyüş ayakkabısı","Katmanlı giysiler ve yağmurluk","Su ve çevrimdışı harita"]},
      {id:"sea",label:"Deniz",items:["Mayo ve yedek giysi","Güneş koruyucu","Su geçirmez çanta"]}
    ],
    feedbackEyebrow:"BİZE YAZIN", feedbackTitle:"Bir önerin ya da şikâyetin mi var?", feedbackCopy:"Mesajınız e-posta uygulamanızda hazırlanır; göndermeden önce gözden geçirip onaylayabilirsiniz. Bu form özel bilgi istemez.", feedbackType:"Mesaj türü", feedbackTypes:["Öneri","Şikâyet","İstek"], feedbackMessage:"Mesajınız", feedbackPlaceholder:"Öneri, şikâyet veya isteğinizi yazın...", feedbackSubmit:"E-posta taslağı oluştur", feedbackEmail:"Alıcı adresi e-posta taslağında görüntülenir.",
    dialogFact:"Şehrin özelliği", dialogSpots:"Buradayken gör", routeNote:"Bir durak için yol tarifini aç; Google Haritalar'da başlangıç noktanı ve ulaşım şeklini seçebilirsin.", cityHotel:"Bu ilde otel ara", cityEvents:"Etkinlikleri ara", close:"Pencereyi kapat", previous:"Önceki fotoğraf", next:"Sonraki fotoğraf",
    weatherCodes:["Açık","Az bulutlu","Kapalı","Sisli","Çisenti","Yağmurlu","Karlı","Gök gürültülü","Değişken"], cardWeatherError:"Hava bilgisi alınamadı", radarLabel:"Canlı yağış radarı", radarPlay:"▶ Oynat", radarPause:"⏸ Durdur", radarLoading:"Radar verisi yükleniyor…", radarNoData:"Radar verisi şu anda alınamıyor.", radarNote:"Kaynak: RainViewer · Radar yaklaşık 10 dakikada bir güncellenir."
  },
  en: {
    brand:"Travel Companion", nav:["Explore","Routes","Weather & map","Contact"], saved:"Saved places", clock:"TURKEY TIME", developer:"Developer:",
    language:"Choose language", theme:"Change theme", warningTitle:"Safety notice", warning:"Never enter your private information on this site. It was designed for you to use completely free of charge.",
    metaDescription:"Discover routes, natural wonders and historic places across all 81 provinces of Türkiye.", heroKicker:"81 cities, thousands of stories", heroTitle:"Wherever the road leads,<br><span>it is beautiful.</span>", heroCopy:"Discover Türkiye's hidden corners, unforgettable views and unique stories.", search:"Search for a city or place...", explore:"Explore", searchHint:"For example: Cappadocia, İzmir, Pamukkale", sticker:"Every city<br>holds a discovery.", scroll:"Scroll down", photoCaption:"Inspiration photo",
    routesEyebrow:"FIND YOUR OWN ROUTE", routesTitle:"Türkiye is <span>calling.</span>", routesNote:"A weekend escape or a longer journey...<br>Your next great memory may be here.",
    filters:["All","Nature","History","Sea","Food"], sort:"Sort", sortOptions:["Featured","Name (A–Z)"], region:"Region", allRegions:"All regions", results:"Inspiring destinations", noResults:"We couldn't find a matching place.", noResultsHelp:"Try another city or travel style.", showAll:"Explore all 81 provinces", showLess:"Show less", showResults:"show all results", featured:"Featured", save:"Save", unsave:"Remove saved place", discover:"Discover", directions:"Directions", provinceCount:"provinces", savedResults:"Saved destinations", searchResults:"Search results for:", routesSuffix:"routes", country:"TÜRKIYE", location:"Location", checkConnection:"Check your internet connection and try again.",
    toolsEyebrow:"PLAN YOUR JOURNEY", toolsTitle:"Discover <span>your way.</span>", toolsNote:"Choose a province to explore weather, maps and event searches.", contentNote:"Selected city descriptions are translated; proper names keep their original spelling.", translationLoading:"Translating city information…", translationFallback:"Translation is unavailable; city information is shown in Turkish.",
    preferenceEyebrow:"CHOOSE YOUR TRAVEL STYLE", preferenceTitle:"What kind of trip would you like?", preferenceLabel:"Your interests", preferences:["Nature & highlands","Sea & beaches","History & culture","Local food","Winter & skiing"], recommend:"Suggest cities", recommendations:"Suggested cities: ",
    weatherEyebrow:"LIVE WEATHER", weatherTitle:"City weather", weatherSelect:"Choose a province for weather", weatherEmpty:"Choose a province to load current weather.", weatherLoading:"weather is loading for", weatherSource:"Data: Open-Meteo · Internet connection required.", weatherError:"Current data unavailable", feelsLike:"Feels like", rain:"Precipitation", humidity:"Humidity", wind:"Wind", sunrise:"Sunrise", sunset:"Sunset",
    eventsEyebrow:"EVENTS & STAYS", eventsTitle:"Verify your plans", eventsCopy:"Festival dates and hotel contact details can change. Check official provincial sources and map results for current information.", events:"Search events", hotels:"Find accommodation",
    mapEyebrow:"MAP OF TÜRKİYE", mapTitle:"Choose a province to explore the map", mapLayer:"Map view", layers:["Street","Terrain","Satellite"], mapUnavailable:"Map service unavailable. Check your internet connection.", mapNote:"Street, terrain and satellite layers are available. Open the map for local district and weather/radar details.",
    factEyebrow:"DID YOU KNOW?", factIntro:"A fact about a city in Türkiye", factMore:"Another city", factTitle:"Did you know?",
    quoteEyebrow:"A LITTLE CURIOSITY, A LOT OF ROAD", quoteTitle:"The best stories<br><span>begin when you set out.</span>", quoteLink:"Find a new place", footerTagline:"Beautiful roads, beautiful stories.",
    footerSources:'Sources and licenses: <a href="https://www.kulturportali.gov.tr/turkiye/genel/gezilecekyer">Ministry of Culture and Tourism Culture Portal</a>, <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>, <a href="https://leafletjs.com/">Leaflet</a>, <a href="https://open-meteo.com/">Open-Meteo</a>, <a href="https://www.rainviewer.com/">RainViewer</a>, <a href="https://commons.wikimedia.org/">Wikimedia Commons</a> and photos from <a href="https://unsplash.com/">Unsplash</a>.',
    privacyNote:"Privacy: Requests are made to Open-Meteo, RainViewer, OpenStreetMap, Google Fonts, and photo/map providers. The site does not collect personal data; providers may process connection data under their own policies.",
    surprise:"Surprise me", seasonTitle:"When to visit?", seasonMonths:"Recommended months:", climateLabel:"Climate note:", seasonDisclaimer:"General regional guidance:",
    seasonRegions:{
      "Marmara":"Spring and autumn are generally milder across the region; weather can change quickly.",
      "Ege":"Spring and autumn are generally milder on the coast; summer temperatures can rise.",
      "Akdeniz":"Spring and autumn are milder; summers can be hot.",
      "İç Anadolu":"Spring and autumn can be good choices; seasonal temperature differences are pronounced.",
      "Karadeniz":"Late spring and summer can be favorable; rain is possible throughout the year.",
      "Doğu Anadolu":"Summer may be more favorable due to high elevations; check local conditions in advance.",
      "Güneydoğu Anadolu":"Spring and autumn are milder; summers can be very hot."
    },
    emergencyTitle:"Emergency and useful information", emergencyNumbers:[["112","Unified number for all emergencies, including police, fire and medical services."],["114","National Poison Information Center (UZEM)."]],
    packingTitle:"Packing checklist", packingGroups:[
      {id:"winter",label:"Winter",items:["Warm layers","Waterproof coat and shoes","Gloves, hat and scarf"]},
      {id:"summer",label:"Summer",items:["Water bottle","Hat, sunscreen and sunglasses","Light, breathable clothing"]},
      {id:"mountain",label:"Mountain",items:["Supportive walking shoes","Layers and a rain jacket","Water and an offline map"]},
      {id:"sea",label:"Sea",items:["Swimwear and a change of clothes","Sun protection","Waterproof bag"]}
    ],
    feedbackEyebrow:"CONTACT US", feedbackTitle:"Have a suggestion or complaint?", feedbackCopy:"Your message is prepared in your email app so you can review it before sending. This form does not ask for private information.", feedbackType:"Message type", feedbackTypes:["Suggestion","Complaint","Request"], feedbackMessage:"Your message", feedbackPlaceholder:"Write your suggestion, complaint or request...", feedbackSubmit:"Create email draft", feedbackEmail:"The recipient address is shown in your email draft.",
    dialogFact:"About this city", dialogSpots:"Places to see", routeNote:"Open directions for a stop, then choose your starting point and travel method in Google Maps.", cityHotel:"Search hotels in this province", cityEvents:"Search events", close:"Close dialog", previous:"Previous photo", next:"Next photo",
    weatherCodes:["Clear","Partly cloudy","Overcast","Foggy","Drizzle","Rainy","Snowy","Thunderstorm","Variable"], cardWeatherError:"Weather unavailable", radarLabel:"Live rain radar", radarPlay:"▶ Play", radarPause:"⏸ Pause", radarLoading:"Loading radar data…", radarNoData:"Radar data is currently unavailable.", radarNote:"Source: RainViewer · Radar updates about every 10 minutes."
  },
  ru: {
    brand:"Попутчик", nav:["Открыть","Маршруты","Погода и карта","Контакты"], saved:"Сохранённое", clock:"ВРЕМЯ ТУРЦИИ", developer:"Разработчик:",
    language:"Выберите язык", theme:"Сменить тему", warningTitle:"Предупреждение", warning:"Никогда не вводите на сайте свои личные данные. Сайт создан для бесплатного использования.",
    metaDescription:"Откройте маршруты, природные чудеса и исторические места во всех 81 провинциях Турции.", heroKicker:"81 город, тысячи историй", heroTitle:"Куда бы ни вела дорога,<br><span>там красиво.</span>", heroCopy:"Откройте для себя скрытые уголки Турции, незабываемые пейзажи и уникальные истории.", search:"Найти город или место...", explore:"Открыть", searchHint:"Например: Каппадокия, Измир, Памуккале", sticker:"В каждом городе<br>своё открытие.", scroll:"Прокрутите вниз", photoCaption:"Фото для вдохновения",
    routesEyebrow:"НАЙДИТЕ СВОЙ МАРШРУТ", routesTitle:"Турция <span>зовёт.</span>", routesNote:"Поездка на выходные или долгое путешествие...<br>Ваши новые впечатления начинаются здесь.",
    filters:["Все","Природа","История","Море","Еда"], sort:"Сортировка", sortOptions:["Рекомендуемые","По названию (А–Я)"], region:"Регион", allRegions:"Все регионы", results:"Интересные места", noResults:"Подходящих мест не найдено.", noResultsHelp:"Попробуйте другой город или тип поездки.", showAll:"Открыть все 81 провинцию", showLess:"Показать меньше", showResults:"показать все результаты", featured:"Рекомендуем", save:"Сохранить", unsave:"Удалить из сохранённого", discover:"Открыть", directions:"Маршрут", provinceCount:"провинций", savedResults:"Сохранённые места", searchResults:"Результаты поиска:", routesSuffix:"маршруты", country:"ТУРЦИЯ", location:"Место", checkConnection:"Проверьте интернет-подключение и попробуйте снова.",
    toolsEyebrow:"ПЛАНИРУЙТЕ ПОЕЗДКУ", toolsTitle:"Открывайте <span>по-своему.</span>", toolsNote:"Выберите провинцию, чтобы узнать погоду, посмотреть карту и найти события.", contentNote:"Описания выбранного города переводятся; имена собственные сохраняются в оригинальном написании.", translationLoading:"Перевод информации о городе…", translationFallback:"Перевод недоступен; сведения о городе показаны на турецком.",
    preferenceEyebrow:"ВЫБЕРИТЕ СТИЛЬ ПОЕЗДКИ", preferenceTitle:"Какое путешествие вам нравится?", preferenceLabel:"Ваши интересы", preferences:["Природа и плато","Море и побережье","История и культура","Местная кухня","Зима и лыжи"], recommend:"Подобрать города", recommendations:"Рекомендуемые города: ",
    weatherEyebrow:"ПОГОДА СЕЙЧАС", weatherTitle:"Погода в городе", weatherSelect:"Выберите провинцию для прогноза", weatherEmpty:"Выберите провинцию, чтобы загрузить текущую погоду.", weatherLoading:"загружается погода для", weatherSource:"Данные: Open-Meteo · Требуется интернет.", weatherError:"Не удалось получить текущие данные", feelsLike:"Ощущается как", rain:"Осадки", humidity:"Влажность", wind:"Ветер", sunrise:"Восход", sunset:"Закат",
    eventsEyebrow:"СОБЫТИЯ И ПРОЖИВАНИЕ", eventsTitle:"Проверьте планы", eventsCopy:"Даты фестивалей и контакты отелей могут меняться. Проверяйте актуальную информацию на официальных сайтах и картах.", events:"Найти события", hotels:"Найти жильё",
    mapEyebrow:"КАРТА ТУРЦИИ", mapTitle:"Выберите провинцию на карте", mapLayer:"Вид карты", layers:["Улицы","Рельеф","Спутник"], mapUnavailable:"Карта недоступна. Проверьте подключение к интернету.", mapNote:"Доступны уличный, рельефный и спутниковый слои. Откройте карту для сведений о районах и погодном радаре.",
    factEyebrow:"ЗНАЛИ ЛИ ВЫ?", factIntro:"Факт о городе Турции", factMore:"Другой город", factTitle:"Знали ли вы?",
    quoteEyebrow:"НЕМНОГО ЛЮБОПЫТСТВА, МНОГО ДОРОГ", quoteTitle:"Лучшие истории<br><span>начинаются в пути.</span>", quoteLink:"Найти новое место", footerTagline:"Красивые дороги, красивые истории.",
    footerSources:'Источники и лицензии: <a href="https://www.kulturportali.gov.tr/turkiye/genel/gezilecekyer">Культурный портал Министерства культуры и туризма Турции</a>, <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>, <a href="https://leafletjs.com/">Leaflet</a>, <a href="https://open-meteo.com/">Open-Meteo</a>, <a href="https://www.rainviewer.com/">RainViewer</a>, <a href="https://commons.wikimedia.org/">Wikimedia Commons</a> и фотографии <a href="https://unsplash.com/">Unsplash</a>.',
    privacyNote:"Конфиденциальность: запросы отправляются Open-Meteo, RainViewer, OpenStreetMap, Google Fonts и поставщикам карт/фотографий. Сайт не собирает персональные данные; поставщики могут обрабатывать данные соединения согласно своим правилам.",
    surprise:"Удивите меня", seasonTitle:"Когда лучше ехать?", seasonMonths:"Подходящие месяцы:", climateLabel:"Примечание о климате:", seasonDisclaimer:"Общая рекомендация для региона:",
    seasonRegions:{
      "Marmara":"В целом весной и осенью в регионе мягче; погода может быстро меняться.",
      "Ege":"На побережье весна и осень обычно мягче; летом температура может повышаться.",
      "Akdeniz":"Весной и осенью погода мягче; летом может быть жарко.",
      "İç Anadolu":"Подойдут весна и осень; перепады температуры между сезонами заметны.",
      "Karadeniz":"Конец весны и лето могут быть удобным временем; дожди возможны в течение года.",
      "Doğu Anadolu":"Из-за высоты лето может быть более подходящим временем; заранее проверьте местные условия.",
      "Güneydoğu Anadolu":"Весной и осенью мягче; летом может быть очень жарко."
    },
    emergencyTitle:"Экстренная помощь и полезная информация", emergencyNumbers:[["112","Единый номер всех экстренных служб, включая полицию, пожарных и медиков."],["114","Национальный центр консультаций по отравлениям (UZEM)."]],
    packingTitle:"Что взять с собой", packingGroups:[
      {id:"winter",label:"Зима",items:["Тёплая многослойная одежда","Непромокаемая куртка и обувь","Перчатки, шапка и шарф"]},
      {id:"summer",label:"Лето",items:["Бутылка для воды","Головной убор, солнцезащитный крем и очки","Лёгкая дышащая одежда"]},
      {id:"mountain",label:"Горы",items:["Удобная обувь для ходьбы","Одежда слоями и дождевик","Вода и офлайн-карта"]},
      {id:"sea",label:"Море",items:["Купальник и сменная одежда","Защита от солнца","Водонепроницаемая сумка"]}
    ],
    feedbackEyebrow:"НАПИШИТЕ НАМ", feedbackTitle:"Есть предложение или жалоба?", feedbackCopy:"Сообщение будет подготовлено в вашем почтовом приложении, чтобы вы могли проверить его перед отправкой. Форма не запрашивает личные данные.", feedbackType:"Тип сообщения", feedbackTypes:["Предложение","Жалоба","Запрос"], feedbackMessage:"Ваше сообщение", feedbackPlaceholder:"Напишите предложение, жалобу или запрос...", feedbackSubmit:"Создать письмо", feedbackEmail:"Адрес получателя будет показан в черновике письма.",
    dialogFact:"Об этом городе", dialogSpots:"Что посмотреть", routeNote:"Откройте маршрут до места и выберите начальную точку и способ передвижения в Google Картах.", cityHotel:"Найти отели в этой провинции", cityEvents:"Найти события", close:"Закрыть окно", previous:"Предыдущее фото", next:"Следующее фото",
    weatherCodes:["Ясно","Малооблачно","Пасмурно","Туман","Морось","Дождь","Снег","Гроза","Переменная погода"], cardWeatherError:"Погода недоступна", radarLabel:"Живой радар осадков", radarPlay:"▶ Воспроизвести", radarPause:"⏸ Пауза", radarLoading:"Загрузка данных радара…", radarNoData:"Данные радара сейчас недоступны.", radarNote:"Источник: RainViewer · Радар обновляется примерно каждые 10 минут."
  },
  az: {
    brand:"Yol yoldaşım", nav:["Kəşf et","Marşrutlar","Hava və xəritə","Əlaqə"], saved:"Yadda saxlanılanlar", clock:"TÜRKİYƏ SAATI", developer:"Tərtibatçı:",
    language:"Dil seçin", theme:"Mövzunu dəyiş", warningTitle:"Təhlükəsizlik xəbərdarlığı", warning:"Saytda şəxsi məlumatlarınızı heç vaxt daxil etməyin. Bu sayt sizə tamamilə pulsuz istifadə üçün hazırlanıb.",
    metaDescription:"Türkiyənin 81 ilində marşrutları, təbiət möcüzələrini və tarixi məkanları kəşf edin.", heroKicker:"81 şəhər, minlərlə hekayə", heroTitle:"Yol hara aparsa,<br><span>gözəldir.</span>", heroCopy:"Türkiyənin gizli guşələrini, unudulmaz mənzərələrini və özünəməxsus hekayələrini kəşf edin.", search:"Şəhər və ya məkan axtarın...", explore:"Kəşf et", searchHint:"Məsələn: Kapadokya, İzmir, Pamukkale", sticker:"Hər şəhərdə<br>bir kəşf var.", scroll:"Aşağı sürüşdürün", photoCaption:"İlham fotosu",
    routesEyebrow:"ÖZ MARŞRUTUNU TAP", routesTitle:"Türkiyə səni <span>çağırır.</span>", routesNote:"İstər həftəsonu gəzintisi, istər uzun səyahət...<br>Növbəti gözəl xatirən burada ola bilər.",
    filters:["Hamısı","Təbiət","Tarix","Dəniz","Dadlar"], sort:"Sırala", sortOptions:["Seçilənlər","Ad (A–Z)"], region:"Bölgə", allRegions:"Bütün bölgələr", results:"Maraqlı məkanlar", noResults:"Uyğun məkan tapılmadı.", noResultsHelp:"Başqa şəhər və ya səyahət növü seçin.", showAll:"81 ilin hamısını kəşf et", showLess:"Daha az göstər", showResults:"nəticənin hamısını göstər", featured:"Seçilən", save:"Yadda saxla", unsave:"Yadda saxlanılanlardan çıxar", discover:"Kəşf et", directions:"Marşrut", provinceCount:"il", savedResults:"Yadda saxlanılan məkanlar", searchResults:"Axtarış nəticələri:", routesSuffix:"marşrutları", country:"TÜRKİYƏ", location:"Məkan", checkConnection:"İnternet bağlantınızı yoxlayıb yenidən cəhd edin.",
    toolsEyebrow:"SƏYAHƏTİNİ PLANLA", toolsTitle:"Zövqünə uyğun <span>kəşf et.</span>", toolsNote:"Hava, xəritə və tədbirləri araşdırmaq üçün il seçin.", contentNote:"Seçilmiş şəhərin təsvirləri tərcümə olunur; xüsusi adlar orijinal yazılışında saxlanılır.", translationLoading:"Şəhər məlumatları tərcümə olunur…", translationFallback:"Tərcümə xidməti əlçatan deyil; şəhər məlumatı türkcə göstərilir.",
    preferenceEyebrow:"SƏYAHƏT TƏRZİNİ SEÇ", preferenceTitle:"Necə səyahət etmək istəyirsən?", preferenceLabel:"Maraqların", preferences:["Təbiət və yaylalar","Dəniz və sahil","Tarix və mədəniyyət","Yerli dadlar","Qış və xizək"], recommend:"Şəhər tövsiyə et", recommendations:"Tövsiyə edilən şəhərlər: ",
    weatherEyebrow:"CANLI HAVA", weatherTitle:"Şəhər havası", weatherSelect:"Hava üçün il seçin", weatherEmpty:"Cari hava məlumatı üçün il seçin.", weatherLoading:"üçün hava yüklənir", weatherSource:"Mənbə: Open-Meteo · İnternet bağlantısı tələb olunur.", weatherError:"Cari məlumat alınmadı", feelsLike:"Hiss edilən", rain:"Yağıntı", humidity:"Rütubət", wind:"Külək", sunrise:"Gün çıxımı", sunset:"Gün batımı",
    eventsEyebrow:"TƏDBİRLƏR VƏ QALACAQ YER", eventsTitle:"Planı dəqiqləşdir", eventsCopy:"Festival tarixləri və otel əlaqə məlumatları dəyişə bilər. Yenilənmiş məlumatı rəsmi mənbələrdən və xəritələrdən yoxlayın.", events:"Tədbirləri axtar", hotels:"Qalacaq yer tap",
    mapEyebrow:"TÜRKİYƏ XƏRİTƏSİ", mapTitle:"Xəritədə araşdırmaq üçün il seçin", mapLayer:"Xəritə görünüşü", layers:["Küçə","Ərazi","Peyk"], mapUnavailable:"Xəritə yüklənmədi. İnternet bağlantınızı yoxlayın.", mapNote:"Küçə, relyef və peyk qatları mövcuddur. Rayon və hava/radar məlumatları üçün xəritəni açın.",
    factEyebrow:"BİLİRDİNİZ?", factIntro:"Türkiyənin bir şəhəri haqqında məlumat", factMore:"Başqa il", factTitle:"Bilirdinizmi?",
    quoteEyebrow:"BİRAZ MARAQ, ÇOX YOL", quoteTitle:"Ən gözəl hekayələr<br><span>yola çıxanda başlayır.</span>", quoteLink:"Yeni yer tap", footerTagline:"Gözəl yollar, gözəl hekayələr.",
    footerSources:'Mənbələr və lisenziyalar: <a href="https://www.kulturportali.gov.tr/turkiye/genel/gezilecekyer">Türkiyə Mədəniyyət və Turizm Nazirliyinin Mədəniyyət Portalı</a>, <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>, <a href="https://leafletjs.com/">Leaflet</a>, <a href="https://open-meteo.com/">Open-Meteo</a>, <a href="https://www.rainviewer.com/">RainViewer</a>, <a href="https://commons.wikimedia.org/">Wikimedia Commons</a> və <a href="https://unsplash.com/">Unsplash</a> fotoları.',
    privacyNote:"Məxfilik: Open-Meteo, RainViewer, OpenStreetMap, Google Fonts, xəritə və foto provayderlərinə sorğular göndərilir. Sayt şəxsi məlumat toplamır; provayderlər bağlantı məlumatlarını öz siyasətlərinə uyğun emal edə bilər.",
    surprise:"Məni təəccübləndir", seasonTitle:"Nə vaxt getmək yaxşıdır?", seasonMonths:"Uyğun aylar:", climateLabel:"İqlim qeydi:", seasonDisclaimer:"Bölgə üçün ümumi tövsiyə:",
    seasonRegions:{
      "Marmara":"Ümumilikdə yaz və payız bölgədə daha mülayim keçir; hava tez dəyişə bilər.",
      "Ege":"Sahildə yaz və payız adətən daha mülayim olur; yayda temperatur yüksələ bilər.",
      "Akdeniz":"Yaz və payız daha mülayim keçir; yay isti ola bilər.",
      "İç Anadolu":"Yaz və payız uyğun ola bilər; fəsillər arasında temperatur fərqi nəzərə çarpır.",
      "Karadeniz":"Yazın sonu və yay əlverişli ola bilər; il ərzində yağış mümkündür.",
      "Doğu Anadolu":"Yüksəkliyə görə yay daha əlverişli ola bilər; yerli şəraiti əvvəlcədən yoxlayın.",
      "Güneydoğu Anadolu":"Yaz və payız daha mülayim keçir; yay çox isti ola bilər."
    },
    emergencyTitle:"Təcili yardım və faydalı məlumat", emergencyNumbers:[["112","Polis, yanğınsöndürmə və tibbi yardım daxil bütün təcili hallar üçün vahid nömrə."],["114","Milli Zəhərlənmə Məlumat Mərkəzi (UZEM)."]],
    packingTitle:"Özünlə götür", packingGroups:[
      {id:"winter",label:"Qış",items:["İsti, qat-qat geyim","Su keçirməyən gödəkçə və ayaqqabı","Əlcək, papaq və şərf"]},
      {id:"summer",label:"Yay",items:["Su qabı","Papaq, günəş kremi və eynək","Yüngül, nəfəs alan geyim"]},
      {id:"mountain",label:"Dağ",items:["Rahat yürüş ayaqqabısı","Qat-qat geyim və yağışlıq","Su və oflayn xəritə"]},
      {id:"sea",label:"Dəniz",items:["Çimərlik geyimi və ehtiyat paltar","Günəşdən qoruyucu","Su keçirməyən çanta"]}
    ],
    feedbackEyebrow:"BİZƏ YAZIN", feedbackTitle:"Təklif və ya şikayətiniz var?", feedbackCopy:"Mesaj e-poçt tətbiqinizdə hazırlanır; göndərməzdən əvvəl yoxlayıb təsdiqləyə bilərsiniz. Bu forma şəxsi məlumat istəmir.", feedbackType:"Mesaj növü", feedbackTypes:["Təklif","Şikayət","İstək"], feedbackMessage:"Mesajınız", feedbackPlaceholder:"Təklif, şikayət və ya istəyinizi yazın...", feedbackSubmit:"E-poçt qaralaması yarat", feedbackEmail:"Alıcının ünvanı e-poçt qaralamasında göstərilir.",
    dialogFact:"Şəhər haqqında", dialogSpots:"Görməli yerlər", routeNote:"Məkan üçün marşrutu açın, Google Xəritədə başlanğıc nöqtəsi və nəqliyyat növünü seçin.", cityHotel:"Bu il üçün otel axtar", cityEvents:"Tədbirləri axtar", close:"Pəncərəni bağla", previous:"Əvvəlki şəkil", next:"Növbəti şəkil",
    weatherCodes:["Açıq","Az buludlu","Buludlu","Dumanlı","Çiskin","Yağışlı","Qarlı","Şimşəkli","Dəyişkən"], cardWeatherError:"Hava məlumatı yoxdur", radarLabel:"Canlı yağıntı radarı", radarPlay:"▶ Oynat", radarPause:"⏸ Dayandır", radarLoading:"Radar məlumatları yüklənir…", radarNoData:"Radar məlumatı hazırda əlçatan deyil.", radarNote:"Mənbə: RainViewer · Radar təxminən 10 dəqiqədən bir yenilənir."
  }
};
const translatedRegions = {
  en: { Ege: "Aegean", Akdeniz: "Mediterranean", "İç Anadolu": "Central Anatolia", Karadeniz: "Black Sea", "Doğu Anadolu": "Eastern Anatolia", "Güneydoğu Anadolu": "Southeastern Anatolia" },
  ru: { Marmara: "Мраморный", Ege: "Эгейский", Akdeniz: "Средиземноморский", "İç Anadolu": "Центральная Анатолия", Karadeniz: "Черноморский", "Doğu Anadolu": "Восточная Анатолия", "Güneydoğu Anadolu": "Юго-Восточная Анатолия" },
  az: { Marmara: "Mərmərə", Ege: "Egey", Akdeniz: "Aralıq dənizi", "İç Anadolu": "Mərkəzi Anadolu", Karadeniz: "Qara dəniz", "Doğu Anadolu": "Şərqi Anadolu", "Güneydoğu Anadolu": "Cənub-Şərqi Anadolu" }
};

function localizedRegion(region) {
  return translatedRegions[currentLanguage]?.[region] || region;
}

const feedbackAddress = ["n.muhammed.2006", "gmail.com"].join("@");
const localizeCount = (value) => value.replace(/\b81\b/g, String(destinations.length));

function updateFilterChipState() {
  document.querySelectorAll(".filter-chip").forEach((chip) => {
    const isSelected = chip.dataset.category === selectedCategory;
    chip.classList.toggle("selected", isSelected);
    chip.setAttribute("aria-pressed", String(isSelected));
  });
}

const grid = document.querySelector("#destination-grid");
const searchInput = document.querySelector("#city-search");
const emptyState = document.querySelector("#empty-state");
const loadMoreButton = document.querySelector("#load-more");
const savedCount = document.querySelector("#saved-count");
const savedToggle = document.querySelector("#saved-toggle");
const dialog = document.querySelector("#detail-dialog");
const pageSize = 12;
const regionSelect = document.querySelector("#region-select");
const weatherCitySelect = document.querySelector("#weather-city");
const weatherResult = document.querySelector("#weather-result");
const mapLayerSelect = document.querySelector("#map-layer");
const detailGallery = [];
const translationCache = new Map();
const weatherCache = new Map();
const weatherRequests = new Map();
const locationRequests = new Map();
const weatherQueue = [];
const queuedWeatherCities = new Set();
const weatherMapMarkers = new Map();
let activeWeatherTasks = 0;
let radarFrames = [];
let radarFrameLayers = [];
let activeRadarLayer = null;
let activeRadarIndex = -1;
let radarPlaybackTimer = null;
const fallbackPhotos = [
  "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=80"
];
const photoCache = new Map();
const locationCache = new Map();
let activeGalleryIndex = 0;
let activeHeroIndex = 0;
let activeMap = null;
let activeMapMarker = null;
let mapLayers = null;
let activeWeatherRequest = 0;
let activeTextTranslationRequest = 0;
let activeFactTranslationRequest = 0;
let userTheme = null;
let activeFactItem = null;

let selectedCategory = "all";
let query = "";
let sortMode = "featured";
let selectedRegion = "all";
let showAll = false;
let savedOnly = false;
let activeDestination = null;
let savedCities = new Set();
let packingState = {};

try {
  const stored = JSON.parse(localStorage.getItem("yolarkadasim-saved") || "[]");
  if (Array.isArray(stored)) savedCities = new Set(stored.filter((city) => destinations.some((item) => item.city === city)));
} catch (error) {
  console.warn("Kaydedilen yerler yüklenemedi.", error);
}
try {
  const storedPackingState = JSON.parse(localStorage.getItem("yolarkadasim-packing") || "{}");
  if (storedPackingState && typeof storedPackingState === "object" && !Array.isArray(storedPackingState)) {
    packingState = Object.fromEntries(Object.entries(storedPackingState).filter(([, checked]) => typeof checked === "boolean"));
  }
} catch (error) {
  console.warn("Hazırlık listesi yüklenemedi.", error);
}

function getFilteredDestinations() {
  const normalizedQuery = query.trim().toLocaleLowerCase("tr-TR").replace(/[.,!?]+/g, " ");
  const queryTokens = normalizedQuery.split(/\s+/).filter(Boolean);
  const filtered = destinations.filter((item) => {
    const searchableText = [item.city, item.region, item.fact, item.blurb, ...item.places]
      .join(" ").toLocaleLowerCase("tr-TR");
    const matchesQuery = queryTokens.every((token) => searchableText.includes(token));
    const matchesCategory = selectedCategory === "all" || item.tags.includes(selectedCategory);
    const matchesRegion = selectedRegion === "all" || item.region === selectedRegion;
    const matchesSaved = !savedOnly || savedCities.has(item.city);
    return matchesQuery && matchesCategory && matchesRegion && matchesSaved;
  });

  if (sortMode === "az") {
    return filtered.sort((a, b) => a.city.localeCompare(b.city, "tr"));
  }
  if (!normalizedQuery && selectedCategory === "all" && !savedOnly) {
    return filtered.sort((a, b) => Number(b.featured) - Number(a.featured) || a.city.localeCompare(b.city, "tr"));
  }
  return filtered;
}

function getDirectionsUrl(item, place) {
  const destination = `${place}, ${item.city}, ${item.region}, Türkiye`;
  return `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(destination)}`;
}

function createCard(item, index) {
  const card = document.createElement("article");
  card.className = "destination-card";
  card.style.animationDelay = `${Math.min(index, 9) * 25}ms`;
  const queryTokens = query.trim().toLocaleLowerCase("tr-TR").split(/\s+/).filter(Boolean);
  const matchingPlace = item.places.find((place) => {
    const normalizedPlace = place.toLocaleLowerCase("tr-TR");
    const searchableTarget = `${item.city} ${place}`.toLocaleLowerCase("tr-TR");
    return queryTokens.some((token) => normalizedPlace.includes(token))
      && queryTokens.every((token) => searchableTarget.includes(token));
  });
  const discoverAction = matchingPlace
    ? `<a class="discover-link" data-directions href="${getDirectionsUrl(item, matchingPlace)}" target="_blank" rel="noopener noreferrer" aria-label="${matchingPlace} ${uiText[currentLanguage].directions}"> ${uiText[currentLanguage].directions} <span aria-hidden="true">↗</span></a>`
    : `<button class="discover-link" type="button" data-detail="${item.city}">${uiText[currentLanguage].discover} <span aria-hidden="true">→</span></button>`;
  card.innerHTML = `
    <div class="card-art" style="--card-color:${item.color}">
      <span class="landscape" aria-hidden="true"></span>
      <span class="card-region">${localizedRegion(item.region)}</span>
      ${item.featured ? `<span class="popular-badge">${uiText[currentLanguage].featured}</span>` : ""}
      <button class="save-button${savedCities.has(item.city) ? " saved" : ""}" type="button" data-save="${item.city}" aria-label="${savedCities.has(item.city) ? uiText[currentLanguage].unsave : uiText[currentLanguage].save}" aria-pressed="${savedCities.has(item.city)}"><span aria-hidden="true">${savedCities.has(item.city) ? "♥" : "♡"}</span></button>
      <span class="card-emoji" aria-hidden="true">${item.emoji}</span>
    </div>
    <div class="card-body">
      <div class="card-title-row"><h3 class="card-title">${item.city}</h3><span class="card-arrow" aria-hidden="true">↗</span></div>
      <p class="card-location"><span class="location-mark" aria-hidden="true">⌖</span>${item.city}, ${localizedRegion(item.region)}</p>
      <p class="card-weather" data-weather-city="${item.city}" aria-label="${item.city} hava durumu"><span class="card-weather-icon" aria-hidden="true">◌</span><span>${uiText[currentLanguage].weatherLoading}</span></p>
      <p class="card-place">${item.places.slice(0, 2).join(" · ")}</p>
      <div class="card-footer">
        <div class="card-tags">${item.tags.slice(0, 2).map((tag) => `<span class="card-tag">${categoryNames[tag]}</span>`).join("")}</div>
        ${discoverAction}
      </div>
    </div>`;
  card.addEventListener("click", (event) => {
    if (event.target.closest("[data-save]")) {
      event.stopPropagation();
      toggleSaved(item.city);
    } else if (event.target.closest("[data-directions]")) {
      event.stopPropagation();
    } else {
      openDetails(item);
    }
  });
  return card;
}

function render() {
  updateFilterChipState();
  const filtered = getFilteredDestinations();
  const isInitialFeatured = !query && selectedCategory === "all" && selectedRegion === "all" && !savedOnly && sortMode === "featured";
  const visible = showAll || !isInitialFeatured
    ? filtered.slice(0, showAll ? filtered.length : pageSize)
    : filtered.filter((item) => item.featured).slice(0, pageSize);

  grid.replaceChildren(...visible.map(createCard));
  visible.forEach(queueCardWeather);
  document.querySelector("#all-city-count").textContent = String(destinations.length);
  emptyState.hidden = filtered.length !== 0;
  grid.hidden = filtered.length === 0;
  document.querySelector("#results-count").textContent = `${filtered.length} ${uiText[currentLanguage].provinceCount}`;
  document.querySelector("#results-label").textContent = savedOnly
    ? uiText[currentLanguage].savedResults
    : query ? `${uiText[currentLanguage].searchResults} "${query}"` : selectedCategory === "all" ? uiText[currentLanguage].results : `${categoryNames[selectedCategory]} ${uiText[currentLanguage].routesSuffix}`;

  const showingFeatured = isInitialFeatured && !showAll;
  const hasMore = !showAll && (showingFeatured ? filtered.length > visible.length : filtered.length > pageSize);
  loadMoreButton.hidden = !hasMore && !showAll;
  const moreLabel = showingFeatured ? localizeCount(uiText[currentLanguage].showAll) : `${filtered.length} ${uiText[currentLanguage].showResults}`;
  loadMoreButton.innerHTML = `<span id="load-more-label">${showAll ? uiText[currentLanguage].showLess : moreLabel}</span> <span aria-hidden="true">${showAll ? "↑" : "↓"}</span>`;
}

function persistSaved() {
  localStorage.setItem("yolarkadasim-saved", JSON.stringify([...savedCities]));
}

function toggleSaved(city) {
  if (savedCities.has(city)) savedCities.delete(city);
  else savedCities.add(city);
  try {
    persistSaved();
  } catch (error) {
    console.warn("Kaydedilen yerler saklanamadı.", error);
  }
  savedCount.textContent = savedCities.size;
  if (activeDestination?.city === city) updateDialogSaveButton();
  render();
}

function updateDialogSaveButton() {
  const isSaved = savedCities.has(activeDestination.city);
  const button = document.querySelector("#dialog-save");
  button.setAttribute("aria-pressed", String(isSaved));
  const icon = document.createElement("span");
  icon.setAttribute("aria-hidden", "true");
  icon.textContent = isSaved ? "♥" : "♡";
  button.replaceChildren(icon, document.createTextNode(`  ${isSaved ? uiText[currentLanguage].unsave : uiText[currentLanguage].save}`));
}

function citySlug(city) {
  return city.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/ı/g, "i")
    .toLocaleLowerCase("en").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

function cityFromHash() {
  const slug = new URLSearchParams(window.location.hash.slice(1)).get("sehir");
  return destinations.find((item) => citySlug(item.city) === slug);
}

function renderPackingList() {
  const container = document.querySelector("#packing-list");
  const fragment = document.createDocumentFragment();
  uiText[currentLanguage].packingGroups.forEach((group) => {
    const section = document.createElement("section");
    section.className = "packing-group";
    const heading = document.createElement("h4");
    heading.textContent = group.label;
    section.append(heading);
    group.items.forEach((item, index) => {
      const key = `${group.id}-${index}`;
      const label = document.createElement("label");
      label.className = "packing-check";
      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.checked = Boolean(packingState[key]);
      checkbox.addEventListener("change", () => {
        packingState[key] = checkbox.checked;
        try {
          localStorage.setItem("yolarkadasim-packing", JSON.stringify(packingState));
        } catch (error) {
          console.warn("Hazırlık listesi saklanamadı.", error);
        }
      });
      const text = document.createElement("span");
      text.textContent = item;
      label.append(checkbox, text);
      section.append(label);
    });
    fragment.append(section);
  });
  container.replaceChildren(fragment);
}

function openDetails(item, updateAddress = true) {
  if (updateAddress) {
    const cityHash = `#sehir=${citySlug(item.city)}`;
    if (window.location.hash !== cityHash) window.location.hash = cityHash;
  }
  activeDestination = item;
  document.querySelector("#dialog-emoji").hidden = false;
  document.querySelector("#dialog-visual").style.backgroundImage = "";
  document.querySelector("#dialog-region").textContent = `${localizedRegion(item.region)} · ${uiText[currentLanguage].country}`;
  document.querySelector("#dialog-location").textContent = `${uiText[currentLanguage].location}: ${item.city}, ${localizedRegion(item.region)}`;
  document.querySelector("#dialog-title").textContent = item.city;
  document.querySelector("#dialog-fact").textContent = item.fact;
  document.querySelector("#dialog-description").textContent = item.blurb;
  const season = uiText[currentLanguage].seasonRegions[item.season];
  const locale = { tr: "tr-TR", en: "en-GB", ru: "ru-RU", az: "az-AZ" }[currentLanguage];
  const monthNames = new Intl.DateTimeFormat(locale, { month: "long", timeZone: "UTC" });
  const months = { Marmara: [4, 5, 6, 9, 10], Ege: [4, 5, 6, 9, 10], Akdeniz: [4, 5, 6, 9, 10], "İç Anadolu": [4, 5, 9, 10], Karadeniz: [5, 6, 7, 8, 9], "Doğu Anadolu": [6, 7, 8, 9], "Güneydoğu Anadolu": [4, 5, 9, 10] }[item.season];
  document.querySelector("#season-months").textContent = months
    .map((month) => monthNames.format(new Date(Date.UTC(2020, month - 1, 1))))
    .join(", ");
  document.querySelector("#season-climate").textContent = `${uiText[currentLanguage].seasonDisclaimer} ${season}`;
  const emergencyList = document.querySelector("#emergency-list");
  emergencyList.replaceChildren(...uiText[currentLanguage].emergencyNumbers.map(([number, description]) => {
    const itemElement = document.createElement("li");
    const link = document.createElement("a");
    link.href = `tel:${number}`;
    link.textContent = number;
    const detail = document.createElement("span");
    detail.textContent = description;
    itemElement.append(link, detail);
    return itemElement;
  }));
  renderPackingList();
  document.querySelector("#dialog-emoji").textContent = item.emoji;
  document.querySelector("#dialog-visual").style.setProperty("--card-color", item.color);
  document.querySelector("#city-hotel-link").href = `https://www.google.com/maps/search/${encodeURIComponent(`otel ${item.city} Türkiye`)}`;
  document.querySelector("#city-event-link").href = `https://www.google.com/search?q=${encodeURIComponent(`${item.city} festival etkinlik resmi`)}`;
  document.querySelector("#gallery-credit").textContent = "Görseller: Wikimedia Commons (temsili görsel kullanılırsa belirtilir)";
  loadCityGallery(item);
  if ([...weatherCitySelect.options].some((option) => option.value === item.city)) {
    weatherCitySelect.value = item.city;
    updateCityLinks(item);
    loadCityWeather(item);
  }
  const spotList = document.querySelector("#spot-list");
  spotList.replaceChildren(...item.places.map((place) => {
    const li = document.createElement("li");
    const name = document.createElement("span");
    name.className = "spot-name";
    name.textContent = place;
    const directions = document.createElement("a");
    directions.className = "spot-directions";
    directions.href = getDirectionsUrl(item, place);
    directions.target = "_blank";
    directions.rel = "noopener noreferrer";
    directions.setAttribute("aria-label", `${place} · ${uiText[currentLanguage].directions}`);
    directions.innerHTML = `${uiText[currentLanguage].directions} <span aria-hidden="true">↗</span>`;
    li.append(name, directions);
    return li;
  }));
  updateDialogSaveButton();
  if (!dialog.open) dialog.showModal();
  translateCityDetails(item);
}

function syncDetailsWithAddress() {
  const item = cityFromHash();
  if (item) {
    if (!dialog.open || activeDestination !== item) openDetails(item, false);
  } else if (dialog.open) {
    dialog.close();
  }
}

async function translateText(text, language) {
  if (language === "tr") return text;
  const cacheKey = `${language}:${text}`;
  if (translationCache.has(cacheKey)) return translationCache.get(cacheKey);
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 10000);
  try {
    const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=tr&tl=${language}&dt=t&q=${encodeURIComponent(text)}`;
    const response = await fetch(url, { signal: controller.signal });
    if (!response.ok) throw new Error(`Çeviri servisi yanıt vermedi (${response.status}).`);
    const data = await response.json();
    const translated = Array.isArray(data[0]) ? data[0].map((part) => part[0]).join("") : "";
    if (!translated) throw new Error("Çeviri servisi boş yanıt verdi.");
    translationCache.set(cacheKey, translated);
    return translated;
  } finally {
    clearTimeout(timeout);
  }
}

async function translateCityDetails(item) {
  const requestId = ++activeTextTranslationRequest;
  const language = currentLanguage;
  const note = document.querySelector("#language-content-note");
  if (language === "tr") {
    note.textContent = uiText.tr.contentNote;
    return;
  }
  note.textContent = uiText[language].translationLoading;
  try {
    const [fact, description] = await Promise.all([
      translateText(item.fact, language),
      translateText(item.blurb, language)
    ]);
    if (requestId !== activeTextTranslationRequest || activeDestination !== item || currentLanguage !== language) return;
    document.querySelector("#dialog-fact").textContent = fact;
    document.querySelector("#dialog-description").textContent = description;
    note.textContent = uiText[language].contentNote;
  } catch (error) {
    if (requestId !== activeTextTranslationRequest || activeDestination !== item || currentLanguage !== language) return;
    note.textContent = uiText[language].translationFallback;
    console.warn("Şehir bilgileri çevrilemedi.", error);
  }
}

async function translateFactOfDay(item) {
  const requestId = ++activeFactTranslationRequest;
  const language = currentLanguage;
  const factText = document.querySelector("#fact-text");
  factText.textContent = item.fact;
  if (language === "tr") return;
  try {
    const translated = await translateText(item.fact, language);
    if (requestId === activeFactTranslationRequest && activeFactItem === item && currentLanguage === language) {
      factText.textContent = translated;
    }
  } catch (error) {
    if (requestId === activeFactTranslationRequest && activeFactItem === item) {
      document.querySelector("#language-content-note").textContent = uiText[language].translationFallback;
      console.warn("Şehir bilgisi çevrilemedi.", error);
    }
  }
}

function getCommonsPhotos(term) {
  if (photoCache.has(term)) return photoCache.get(term);
  const request = fetch(`https://commons.wikimedia.org/w/api.php?action=query&generator=search&gsrsearch=${encodeURIComponent(term)}&gsrnamespace=6&gsrlimit=5&prop=imageinfo&iiprop=url&iiurlwidth=1200&format=json&origin=*`)
    .then((response) => {
      if (!response.ok) throw new Error(`Fotoğraf servisi yanıt vermedi (${response.status}).`);
      return response.json();
    })
    .then((data) => Object.values(data.query?.pages || {})
      .filter((page) => page.imageinfo?.[0]?.thumburl)
      .map((page) => ({
        url: page.imageinfo[0].thumburl,
        title: page.title.replace(/^File:/, ""),
        source: page.imageinfo[0].descriptionurl
      })))
    .catch((error) => {
      console.warn("Şehir fotoğrafları yüklenemedi.", error);
      return [];
    });
  photoCache.set(term, request);
  return request;
}

function showGalleryPhoto(index) {
  if (!detailGallery.length) return;
  activeGalleryIndex = (index + detailGallery.length) % detailGallery.length;
  const photo = detailGallery[activeGalleryIndex];
  const visual = document.querySelector("#dialog-visual");
  visual.style.backgroundImage = `linear-gradient(180deg, transparent 70%, rgba(15,25,20,.36)), url("${photo.url}")`;
  document.querySelector("#dialog-emoji").hidden = true;
  const credit = document.querySelector("#gallery-credit");
  credit.textContent = photo.title;
  if (photo.source) {
    const source = document.createElement("a");
    source.href = photo.source;
    source.target = "_blank";
    source.rel = "noopener noreferrer";
    source.textContent = " Wikimedia Commons ↗";
    credit.replaceChildren(document.createTextNode(photo.title), source);
  }
}

async function loadCityGallery(item) {
  detailGallery.splice(0, detailGallery.length);
  let photos = await getCommonsPhotos(`${item.city} ${item.places[0]}`);
  if (!photos.length) photos = await getCommonsPhotos(`${item.city} Türkiye`);
  if (activeDestination !== item) return;
  if (photos.length) {
    detailGallery.push(...photos);
  } else {
    detailGallery.push(...fallbackPhotos.slice(0, 3).map((url, index) => ({
      url,
      title: `Temsili Türkiye manzarası ${index + 1}`,
      source: ""
    })));
  }
  showGalleryPhoto(0);
}

async function updateHeroImage(index) {
  activeHeroIndex = (index + destinations.length) % destinations.length;
  const item = destinations[activeHeroIndex];
  const heroImage = document.querySelector(".hero-image");
  document.querySelector("#hero-city").textContent = item.city;
  document.querySelector(".hero-art").setAttribute("aria-label", `${uiText[currentLanguage].photoCaption}: ${item.city}`);
  document.querySelector("#hero-region").textContent = `${uiText[currentLanguage].photoCaption} · ${localizedRegion(item.region)}`;
  document.querySelector("#hero-slide-count").textContent = `${String(activeHeroIndex + 1).padStart(2, "0")} / ${destinations.length}`;
  heroImage.style.backgroundImage = `url("${fallbackPhotos[activeHeroIndex % fallbackPhotos.length]}")`;
  const photos = await getCommonsPhotos(`${item.city} Türkiye`);
  if (activeHeroIndex === index && photos.length) {
    heroImage.style.backgroundImage = `url("${photos[0].url}")`;
    document.querySelector("#hero-region").textContent = `Wikimedia Commons · ${localizedRegion(item.region)}`;
  }
}

function fillCitySelectors() {
  const options = destinations.slice().sort((a, b) => a.city.localeCompare(b.city, "tr"))
    .map((item) => new Option(item.city, item.city));
  weatherCitySelect.replaceChildren(...options);
}

async function getCityCoordinates(city) {
  if (locationCache.has(city)) return locationCache.get(city);
  if (locationRequests.has(city)) return locationRequests.get(city);
  const request = (async () => {
    const url = `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(city)}&count=10&language=tr&format=json`;
    const response = await fetch(url);
    if (!response.ok) throw new Error(`Konum servisi yanıt vermedi (${response.status}).`);
    const data = await response.json();
    const location = (data.results || []).find((result) => result.country_code === "TR");
    if (!location) throw new Error(`${city} için konum bulunamadı.`);
    const coords = { latitude: location.latitude, longitude: location.longitude, name: location.name };
    locationCache.set(city, coords);
    return coords;
  })();
  locationRequests.set(city, request);
  try {
    return await request;
  } finally {
    locationRequests.delete(city);
  }
}

function weatherDescription(code) {
  const descriptions = uiText[currentLanguage].weatherCodes;
  if (code === 0) return descriptions[0];
  if ([1, 2].includes(code)) return descriptions[1];
  if (code === 3) return descriptions[2];
  if ([45, 48].includes(code)) return descriptions[3];
  if ([51, 53, 55, 56, 57].includes(code)) return descriptions[4];
  if ([61, 63, 65, 66, 67, 80, 81, 82].includes(code)) return descriptions[5];
  if ([71, 73, 75, 77, 85, 86].includes(code)) return descriptions[6];
  if ([95, 96, 99].includes(code)) return descriptions[7];
  return descriptions[8];
}

function weatherIcon(code) {
  if (code === 0) return "☀️";
  if ([1, 2].includes(code)) return "🌤️";
  if (code === 3) return "☁️";
  if ([45, 48].includes(code)) return "🌫️";
  if ([51, 53, 55, 56, 57].includes(code)) return "🌦️";
  if ([61, 63, 65, 66, 67, 80, 81, 82].includes(code)) return "🌧️";
  if ([71, 73, 75, 77, 85, 86].includes(code)) return "❄️";
  if ([95, 96, 99].includes(code)) return "⛈️";
  return "🌡️";
}

async function getCurrentWeather(item) {
  const cached = weatherCache.get(item.city);
  if (cached && Date.now() - cached.fetchedAt < 5 * 60 * 1000) return cached;
  if (weatherRequests.has(item.city)) return weatherRequests.get(item.city);

  const request = (async () => {
    const coords = await getCityCoordinates(item.city);
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${coords.latitude}&longitude=${coords.longitude}&current=temperature_2m,relative_humidity_2m,apparent_temperature,precipitation,weather_code,wind_speed_10m&daily=sunrise,sunset&forecast_days=1&timezone=auto`;
    const response = await fetch(url);
    if (!response.ok) throw new Error(`Hava durumu servisi yanıt vermedi (${response.status}).`);
    const data = await response.json();
    const result = { coords, data, fetchedAt: Date.now() };
    weatherCache.set(item.city, result);
    return result;
  })();
  weatherRequests.set(item.city, request);
  try {
    return await request;
  } finally {
    weatherRequests.delete(item.city);
  }
}

function updateWeatherCard(item, weather) {
  const current = weather.data.current;
  document.querySelectorAll(".card-weather").forEach((element) => {
    if (element.dataset.weatherCity !== item.city) return;
    element.replaceChildren();
    const icon = document.createElement("span");
    icon.className = "card-weather-icon";
    icon.setAttribute("aria-hidden", "true");
    icon.textContent = weatherIcon(current.weather_code);
    const summary = document.createElement("span");
    summary.textContent = `${Math.round(current.temperature_2m)}°C · ${weatherDescription(current.weather_code)}`;
    element.append(icon, summary);
    element.setAttribute("aria-label", `${item.city}: ${summary.textContent}`);
    element.classList.remove("is-loading", "has-error");
  });
}

function updateWeatherCardError(item, error) {
  document.querySelectorAll(".card-weather").forEach((element) => {
    if (element.dataset.weatherCity !== item.city) return;
    element.textContent = uiText[currentLanguage].cardWeatherError;
    element.classList.remove("is-loading");
    element.classList.add("has-error");
    element.setAttribute("aria-label", `${item.city}: ${uiText[currentLanguage].cardWeatherError}`);
  });
  console.warn(`${item.city} kartının hava durumu yüklenemedi.`, error);
}

function updateWeatherMapMarker(item, weather) {
  if (!activeMap || !window.L) return;
  const current = weather.data.current;
  const point = [weather.coords.latitude, weather.coords.longitude];
  const icon = L.divIcon({
    className: "weather-marker-host",
    html: `<span class="weather-map-marker">${weatherIcon(current.weather_code)}</span>`,
    iconSize: [34, 34],
    iconAnchor: [17, 17]
  });
  const popup = document.createElement("div");
  const title = document.createElement("strong");
  title.textContent = item.city;
  const summary = document.createElement("div");
  summary.textContent = `${weatherDescription(current.weather_code)} · ${Math.round(current.temperature_2m)}°C`;
  popup.append(title, summary);
  let marker = weatherMapMarkers.get(item.city);
  if (!marker) {
    marker = L.marker(point, { icon, title: item.city }).addTo(activeMap);
    weatherMapMarkers.set(item.city, marker);
  } else {
    marker.setLatLng(point).setIcon(icon);
  }
  marker.bindPopup(popup);
}

function queueCardWeather(item) {
  const cached = weatherCache.get(item.city);
  if (cached && Date.now() - cached.fetchedAt < 5 * 60 * 1000) {
    updateWeatherCard(item, cached);
    updateWeatherMapMarker(item, cached);
    return;
  }
  if (queuedWeatherCities.has(item.city)) return;
  queuedWeatherCities.add(item.city);
  weatherQueue.push(item);
  processWeatherQueue();
}

function processWeatherQueue() {
  while (activeWeatherTasks < 4 && weatherQueue.length) {
    const item = weatherQueue.shift();
    activeWeatherTasks += 1;
    getCurrentWeather(item)
      .then((weather) => {
        updateWeatherCard(item, weather);
        updateWeatherMapMarker(item, weather);
      })
      .catch((error) => updateWeatherCardError(item, error))
      .finally(() => {
        activeWeatherTasks -= 1;
        queuedWeatherCities.delete(item.city);
        processWeatherQueue();
      });
  }
}

async function loadCityWeather(item) {
  const requestId = ++activeWeatherRequest;
  weatherResult.textContent = `${item.city} ${uiText[currentLanguage].weatherLoading}…`;
  try {
    const weather = await getCurrentWeather(item);
    if (requestId !== activeWeatherRequest) return;
    const current = weather.data.current;
    const sunrise = weather.data.daily?.sunrise?.[0]?.slice(11, 16) || "—";
    const sunset = weather.data.daily?.sunset?.[0]?.slice(11, 16) || "—";
    weatherResult.replaceChildren();
    const summary = document.createElement("strong");
    summary.textContent = `${weatherDescription(current.weather_code)} · ${Math.round(current.temperature_2m)}°C`;
    const details = document.createElement("span");
    details.textContent = `${uiText[currentLanguage].feelsLike} ${Math.round(current.apparent_temperature)}° · ${uiText[currentLanguage].rain} ${current.precipitation} mm · ${uiText[currentLanguage].humidity} ${current.relative_humidity_2m}% · ${uiText[currentLanguage].wind} ${Math.round(current.wind_speed_10m)} km/h · ${uiText[currentLanguage].sunrise} ${sunrise} / ${uiText[currentLanguage].sunset} ${sunset}`;
    weatherResult.append(summary, details);
    updateWeatherCard(item, weather);
    updateWeatherMapMarker(item, weather);
    updateMap(item, weather.coords);
  } catch (error) {
    if (requestId !== activeWeatherRequest) return;
    weatherResult.textContent = `${uiText[currentLanguage].weatherError}: ${error.message} ${uiText[currentLanguage].checkConnection}`;
    console.warn("Hava durumu yüklenemedi.", error);
  }
}

function updateCityLinks(item) {
  document.querySelector("#events-link").href = `https://www.google.com/search?q=${encodeURIComponent(`${item.city} güncel festival etkinlik takvimi`)}`;
  document.querySelector("#hotels-link").href = `https://www.google.com/maps/search/${encodeURIComponent(`otel ${item.city} Türkiye`)}`;
}

function initializeMap() {
  const mapElement = document.querySelector("#turkey-map");
  if (!window.L) {
    mapElement.textContent = uiText[currentLanguage].mapUnavailable;
    return;
  }
  activeMap = L.map(mapElement).setView([39.0, 35.2], 5);
  const street = L.layerGroup();
  const cartoStreet = L.tileLayer("https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png", {
    maxZoom: 19, attribution: '&copy; OpenStreetMap contributors &copy; CARTO'
  });
  const osmFallback = L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19, attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  });
  let streetFallbackActive = false;
  cartoStreet.on("tileerror", () => {
    if (streetFallbackActive || !activeMap.hasLayer(street)) return;
    streetFallbackActive = true;
    street.clearLayers();
    street.addLayer(osmFallback);
  });
  street.addLayer(cartoStreet);
  const terrain = L.tileLayer("https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png", {
    maxZoom: 17, attribution: 'Map data: &copy; OpenStreetMap contributors, SRTM | Map style: &copy; OpenTopoMap'
  });
  const satellite = L.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}", {
    maxZoom: 19, attribution: 'Tiles &copy; Esri'
  });
  mapLayers = { street, terrain, satellite };
  street.addTo(activeMap);
  activeMapMarker = L.marker([39.0, 35.2]).addTo(activeMap).bindPopup(uiText[currentLanguage].country);
  const radarPane = activeMap.createPane("radarPane");
  radarPane.style.zIndex = "350";
  radarPane.style.pointerEvents = "none";
  loadRadarFrames();
}

function updateRadarFrame(index) {
  if (!activeMap || !radarFrames.length) return;
  activeRadarIndex = (index + radarFrames.length) % radarFrames.length;
  if (activeRadarLayer) activeMap.removeLayer(activeRadarLayer);
  const frame = radarFrames[activeRadarIndex];
  const tileUrl = `${frame.host}${frame.path}/256/{z}/{x}/{y}/2/1_1.png`;
  activeRadarLayer = L.tileLayer(tileUrl, {
    pane: "radarPane",
    opacity: 0.62,
    maxNativeZoom: 7,
    maxZoom: 19,
    attribution: '<a href="https://www.rainviewer.com/">RainViewer radar</a>'
  });
  if (document.querySelector("#rain-radar-toggle").checked) activeRadarLayer.addTo(activeMap);
  document.querySelector("#radar-timeline").max = String(radarFrames.length - 1);
  document.querySelector("#radar-timeline").value = String(activeRadarIndex);
  const locale = { tr: "tr-TR", en: "en-GB", ru: "ru-RU", az: "az-AZ" }[currentLanguage];
  document.querySelector("#radar-time").textContent = new Intl.DateTimeFormat(locale, {
    hour: "2-digit", minute: "2-digit"
  }).format(new Date(frame.time * 1000));
}

function setRadarPlayback(playing) {
  if (radarPlaybackTimer) clearInterval(radarPlaybackTimer);
  radarPlaybackTimer = null;
  const isPlaying = playing && radarFrames.length > 1;
  if (isPlaying) {
    radarPlaybackTimer = setInterval(() => updateRadarFrame(activeRadarIndex + 1), 900);
  }
  document.querySelector("#radar-play-label").textContent = isPlaying
    ? uiText[currentLanguage].radarPause.replace(/^[^\s]+\s*/, "")
    : uiText[currentLanguage].radarPlay.replace(/^[^\s]+\s*/, "");
  document.querySelector("#radar-play-icon").textContent = isPlaying ? "⏸" : "▶";
  document.querySelector("#radar-play").setAttribute("aria-pressed", String(isPlaying));
}

async function loadRadarFrames() {
  const timeLabel = document.querySelector("#radar-time");
  timeLabel.textContent = uiText[currentLanguage].radarLoading;
  try {
    const response = await fetch("https://api.rainviewer.com/public/weather-maps.json", { cache: "no-store" });
    if (!response.ok) throw new Error(`Radar servisi yanıt vermedi (${response.status}).`);
    const payload = await response.json();
    if (!/^https:\/\/tilecache\.rainviewer\.com$/.test(payload.host || "")) {
      throw new Error("Radar servisi geçersiz bir tile adresi döndürdü.");
    }
    const frames = [...(payload.radar?.past || []), ...(payload.radar?.nowcast || [])]
      .filter((frame) => Number.isFinite(frame.time) && /^\/v2\/radar\/[A-Za-z0-9]+$/.test(frame.path || ""))
      .sort((a, b) => a.time - b.time)
      .map((frame) => ({ host: payload.host, path: frame.path, time: frame.time }));
    if (!frames.length) throw new Error("Kullanılabilir radar karesi bulunamadı.");
    radarFrames = frames;
    updateRadarFrame(radarFrames.length - 1);
    setRadarPlayback(true);
  } catch (error) {
    timeLabel.textContent = uiText[currentLanguage].radarNoData;
    console.warn("Canlı yağış radarı yüklenemedi.", error);
  }
}

function updateMap(item, coords) {
  if (!activeMap || !coords) return;
  const point = [coords.latitude, coords.longitude];
  activeMap.setView(point, 9);
  activeMapMarker.setLatLng(point).setPopupContent(`${item.city}, ${localizedRegion(item.region)}`).openPopup();
  document.querySelector("#map-title").textContent = `${item.city} · ${localizedRegion(item.region)}`;
}

function refreshVisibleWeather() {
  const cityNames = new Set([...document.querySelectorAll(".card-weather")].map((element) => element.dataset.weatherCity));
  if (weatherCitySelect.value) cityNames.add(weatherCitySelect.value);
  cityNames.forEach((city) => weatherCache.delete(city));
  destinations.filter((item) => cityNames.has(item.city)).forEach(queueCardWeather);
  const selected = destinations.find((item) => item.city === weatherCitySelect.value);
  if (selected) loadCityWeather(selected);
}

function updateClockAndTheme() {
  const now = new Date();
  const clockLocales = { tr: "tr-TR", en: "en-GB", ru: "ru-RU", az: "az-AZ" };
  document.querySelector("#turkey-clock").textContent = new Intl.DateTimeFormat(clockLocales[currentLanguage], {
    timeZone: "Europe/Istanbul", hour: "2-digit", minute: "2-digit", second: "2-digit"
  }).format(now);
  if (userTheme) return;
  const hour = Number(new Intl.DateTimeFormat("en-US", { timeZone: "Europe/Istanbul", hour: "numeric", hour12: false }).format(now));
  document.body.dataset.time = hour >= 6 && hour < 8 ? "sunrise" : hour >= 18 && hour < 20 ? "sunset" : hour >= 20 || hour < 6 ? "night" : "day";
  updateThemeButton(hour >= 20 || hour < 6);
}

function applyTheme(theme) {
  userTheme = theme;
  document.body.dataset.theme = theme;
  document.body.dataset.time = "";
  updateThemeButton(theme === "night");
  try {
    localStorage.setItem("yolarkadasim-theme", theme);
  } catch (error) {
    console.warn("Tema tercihi saklanamadı.", error);
  }
}

function updateThemeButton(isNight) {
  document.querySelector("#theme-icon").textContent = isNight ? "☾" : "☼";
  document.querySelector("#theme-toggle").setAttribute("aria-pressed", String(isNight));
}

function recommendCities() {
  const preference = document.querySelector("#preference-select").value;
  const candidates = destinations.filter((item) => {
    if (preference === "winter") return item.places.some((place) => /kayak|palandöken|erciyes|uludağ|kartalkaya|davraz|çıldır/i.test(place));
    return item.tags.includes(preference);
  }).sort((a, b) => Number(b.featured) - Number(a.featured));
  const result = document.querySelector("#recommendation-result");
  result.replaceChildren();
  const label = document.createElement("span");
  label.textContent = uiText[currentLanguage].recommendations;
  result.append(label);
  candidates.slice(0, 5).forEach((item, index) => {
    const link = document.createElement("a");
    link.href = "#rotalar";
    link.textContent = item.city;
    link.addEventListener("click", () => {
      searchInput.value = item.city;
      query = item.city;
      selectedCategory = "all";
      selectedRegion = "all";
      regionSelect.value = "all";
      render();
    });
    result.append(link, document.createTextNode(index < 4 ? " · " : ""));
  });
}

function showNextFact() {
  const candidates = destinations.filter((item) => item.city !== activeFactItem?.city);
  activeFactItem = candidates[Math.floor(Math.random() * candidates.length)];
  document.querySelector("#fact-city").textContent = `${uiText[currentLanguage].factTitle} ${activeFactItem.city}`;
  translateFactOfDay(activeFactItem);
}

function applyLanguage(language) {
  currentLanguage = uiText[language] ? language : "tr";
  const text = uiText[currentLanguage];
  const setText = (selector, value) => {
    const element = document.querySelector(selector);
    if (element) element.textContent = value;
  };
  const setHtml = (selector, value) => {
    const element = document.querySelector(selector);
    if (element) element.innerHTML = value;
  };

  document.documentElement.lang = currentLanguage;
  document.title = `${text.brand} — ${text.nav[0]}`;
  document.querySelector('meta[name="description"]').content = localizeCount(text.metaDescription);
  document.querySelector('meta[property="og:title"]').content = document.title;
  document.querySelector('meta[property="og:description"]').content = localizeCount(text.metaDescription);
  document.querySelector('meta[property="og:url"]').content = document.querySelector('link[rel="canonical"]').href;
  document.querySelector('meta[property="og:locale"]').content = { tr: "tr_TR", en: "en_GB", ru: "ru_RU", az: "az_AZ" }[currentLanguage];
  setText("#brand-name", text.brand);
  setText("#footer-brand-name", text.brand);
  document.querySelectorAll(".brand").forEach((brand) => brand.setAttribute("aria-label", text.brand));
  document.querySelector(".main-nav").setAttribute("aria-label", text.nav[0]);
  document.querySelectorAll(".main-nav .nav-link").forEach((link, index) => { link.textContent = text.nav[index]; });
  setText("#saved-label", text.saved);
  setText("#clock-label", text.clock);
  setText("#developer-label", text.developer);
  setText("#language-label", text.language);
  document.querySelector("#theme-toggle").setAttribute("aria-label", text.theme);
  document.querySelector("#city-search").setAttribute("aria-label", text.search);
  setHtml("#notice-title", `<span aria-hidden="true">⚠</span> ${text.warningTitle}`);
  setText("#notice-copy", text.warning);

  setText("#hero-kicker", localizeCount(text.heroKicker));
  setHtml("#hero-title", text.heroTitle);
  setText("#hero-copy", text.heroCopy);
  document.querySelector("#city-search").placeholder = text.search;
  document.querySelector('label[for="city-search"]').textContent = text.search;
  setText("#search-button-label", text.explore);
  setText("#search-hint", text.searchHint);
  setHtml("#hero-sticker", text.sticker);
  setText("#scroll-label", text.scroll);
  document.querySelector("#hero-prev").setAttribute("aria-label", text.previous);
  document.querySelector("#hero-next").setAttribute("aria-label", text.next);

  setText("#routes-eyebrow", text.routesEyebrow);
  setHtml("#routes-title", text.routesTitle);
  setHtml("#routes-note", text.routesNote);
  document.querySelector("#category-filters").setAttribute("aria-label", text.preferenceEyebrow);
  document.querySelectorAll(".filter-label").forEach((label, index) => { label.textContent = text.filters[index]; });
  const sortLabel = document.querySelector("#sort-label");
  sortLabel.firstChild.textContent = `${text.sort} `;
  document.querySelectorAll("#sort-select option").forEach((option, index) => { option.textContent = text.sortOptions[index]; });
  const regionLabel = document.querySelector("#region-label");
  regionLabel.firstChild.textContent = `${text.region} `;
  const regionNames = {
    tr:["Tüm bölgeler","Marmara","Ege","Akdeniz","İç Anadolu","Karadeniz","Doğu Anadolu","Güneydoğu Anadolu"],
    en:["All regions","Marmara","Aegean","Mediterranean","Central Anatolia","Black Sea","Eastern Anatolia","Southeastern Anatolia"],
    ru:["Все регионы","Мраморный","Эгейский","Средиземноморский","Центральная Анатолия","Черноморский","Восточная Анатолия","Юго-Восточная Анатолия"],
    az:["Bütün bölgələr","Mərmərə","Egey","Aralıq dənizi","Mərkəzi Anadolu","Qara dəniz","Şərqi Anadolu","Cənub-Şərqi Anadolu"]
  };
  document.querySelectorAll("#region-select option").forEach((option, index) => { option.textContent = regionNames[currentLanguage][index]; });
  setText("#empty-title", text.noResults);
  setText("#empty-copy", text.noResultsHelp);
  setText("#load-more-label", localizeCount(text.showAll));
  setText("#surprise-label", text.surprise);

  setText("#tools-eyebrow", text.toolsEyebrow);
  setHtml("#tools-title", text.toolsTitle);
  setText("#tools-note", text.toolsNote);
  setText("#language-content-note", text.contentNote);
  setText("#preference-eyebrow", text.preferenceEyebrow);
  setText("#preference-title", text.preferenceTitle);
  setText("#preference-label", text.preferenceLabel);
  document.querySelectorAll("#preference-select option").forEach((option, index) => { option.textContent = text.preferences[index]; });
  setText("#recommend-button", text.recommend);
  document.querySelector("#preference-select").setAttribute("aria-label", text.preferenceLabel);
  setText("#weather-eyebrow", text.weatherEyebrow);
  setText("#weather-title", text.weatherTitle);
  document.querySelector("#weather-city").setAttribute("aria-label", text.weatherSelect);
  document.querySelector('label[for="weather-city"]').textContent = text.weatherSelect;
  if (!weatherResult.textContent || weatherResult.textContent === "Bir il seçerek güncel hava durumunu yükle."
    || Object.values(uiText).some((entry) => weatherResult.textContent === entry.weatherEmpty)) {
    setText("#weather-result", text.weatherEmpty);
  }
  setText("#weather-source", text.weatherSource);
  setText("#events-eyebrow", text.eventsEyebrow);
  setText("#events-title", text.eventsTitle);
  setText("#events-copy", text.eventsCopy);
  setText("#events-link-label", text.events);
  setText("#hotels-link-label", text.hotels);
  setText("#map-eyebrow", text.mapEyebrow);
  setText("#map-title", activeDestination ? `${activeDestination.city} · ${localizedRegion(activeDestination.region)}` : text.mapTitle);
  const mapLabel = document.querySelector("#map-layer-label");
  mapLabel.firstChild.textContent = `${text.mapLayer} `;
  document.querySelectorAll("#map-layer option").forEach((option, index) => { option.textContent = text.layers[index]; });
  document.querySelector("#map-layer").setAttribute("aria-label", text.mapLayer);
  setText("#radar-label", text.radarLabel);
  document.querySelector("#radar-timeline").setAttribute("aria-label", text.radarLabel);
  setText("#radar-play-label", (radarPlaybackTimer ? text.radarPause : text.radarPlay).replace(/^\S+\s*/, ""));
  document.querySelector("#radar-play-icon").textContent = radarPlaybackTimer ? "⏸" : "▶";
  document.querySelector("#radar-play").setAttribute("aria-pressed", String(Boolean(radarPlaybackTimer)));
  setText("#radar-note", text.radarNote);
  document.querySelector("#turkey-map").setAttribute("aria-label", text.mapEyebrow);
  if (!window.L) setText("#turkey-map", text.mapUnavailable);
  setText("#map-note", text.mapNote);
  setText("#fact-eyebrow", text.factEyebrow);
  setText("#fact-city", activeFactItem ? `${text.factTitle} ${activeFactItem.city}` : text.factIntro);

  setText("#quote-eyebrow", text.quoteEyebrow);
  setHtml("#quote-title", text.quoteTitle);
  setText("#quote-link-label", text.quoteLink);
  setText("#footer-tagline", text.footerTagline);
  setHtml("#footer-sources", text.footerSources);
  setText("#privacy-note", text.privacyNote);
  setText("#feedback-eyebrow", text.feedbackEyebrow);
  setText("#feedback-title", text.feedbackTitle);
  setText("#feedback-copy", text.feedbackCopy);
  setText("#feedback-type-label", text.feedbackType);
  setText("#feedback-message-label", text.feedbackMessage);
  document.querySelectorAll("#feedback-type option").forEach((option, index) => { option.textContent = text.feedbackTypes[index]; });
  document.querySelector("#feedback-message").placeholder = text.feedbackPlaceholder;
  setText("#feedback-submit-label", text.feedbackSubmit);
  setText("#feedback-email-note", text.feedbackEmail);

  setText("#dialog-fact-title", text.dialogFact);
  setText("#dialog-spots-title", text.dialogSpots);
  setText("#dialog-route-note", text.routeNote);
  setText("#dialog-season-title", text.seasonTitle);
  setText("#season-months-label", text.seasonMonths);
  setText("#season-climate-label", text.climateLabel);
  setText("#emergency-title", text.emergencyTitle);
  setText("#packing-title", text.packingTitle);
  renderPackingList();
  setText("#city-hotel-label", text.cityHotel);
  setText("#city-event-label", text.cityEvents);
  document.querySelector(".dialog-close").setAttribute("aria-label", text.close);
  document.querySelector("#gallery-prev").setAttribute("aria-label", text.previous);
  document.querySelector("#gallery-next").setAttribute("aria-label", text.next);
  document.querySelector(".hero-art").setAttribute("aria-label", `${text.photoCaption}: ${document.querySelector("#hero-city").textContent}`);

  categoryNames = { nature: text.filters[1], history: text.filters[2], sea: text.filters[3], food: text.filters[4] };
  render();
  updateHeroImage(activeHeroIndex);
  if (weatherCitySelect.value) {
    const item = destinations.find((destination) => destination.city === weatherCitySelect.value);
    if (item) loadCityWeather(item);
  }
  if (dialog.open && activeDestination) openDetails(activeDestination);
  if (activeFactItem) translateFactOfDay(activeFactItem);
  if (document.querySelector("#recommendation-result").childElementCount) recommendCities();
}

document.querySelector("#language-select").addEventListener("change", (event) => {
  applyLanguage(event.target.value);
  try {
    localStorage.setItem("yolarkadasim-language", currentLanguage);
  } catch (error) {
    console.warn("Dil tercihi saklanamadı.", error);
  }
});

searchInput.addEventListener("input", () => {
  query = searchInput.value;
  showAll = false;
  if (query) {
    savedOnly = false;
    savedToggle.setAttribute("aria-pressed", "false");
    savedToggle.classList.remove("is-active");
  }
  render();
});

document.querySelector("#search-form").addEventListener("submit", (event) => {
  event.preventDefault();
  document.querySelector("#rotalar").scrollIntoView({ behavior: "smooth" });
});

document.querySelectorAll(".filter-chip").forEach((button) => {
  button.addEventListener("click", () => {
    selectedCategory = button.dataset.category;
    showAll = false;
    document.querySelectorAll(".filter-chip").forEach((chip) => chip.classList.toggle("selected", chip === button));
    render();
  });
});

regionSelect.addEventListener("change", () => {
  selectedRegion = regionSelect.value;
  showAll = false;
  render();
});

document.querySelector("#sort-select").addEventListener("change", (event) => {
  sortMode = event.target.value;
  render();
});

loadMoreButton.addEventListener("click", () => {
  showAll = !showAll;
  render();
});

savedToggle.addEventListener("click", () => {
  savedOnly = !savedOnly;
  query = "";
  searchInput.value = "";
  showAll = false;
  savedToggle.setAttribute("aria-pressed", String(savedOnly));
  savedToggle.classList.toggle("is-active", savedOnly);
  render();
  document.querySelector("#rotalar").scrollIntoView({ behavior: "smooth" });
});

document.querySelector("#dialog-save").addEventListener("click", () => {
  if (activeDestination) toggleSaved(activeDestination.city);
});
document.querySelector(".dialog-close").addEventListener("click", () => dialog.close());
dialog.addEventListener("close", () => {
  if (new URLSearchParams(window.location.hash.slice(1)).has("sehir")) {
    history.replaceState(history.state, "", `${window.location.pathname}${window.location.search}`);
  }
});
window.addEventListener("popstate", syncDetailsWithAddress);
window.addEventListener("hashchange", syncDetailsWithAddress);
document.querySelector("#gallery-prev").addEventListener("click", () => showGalleryPhoto(activeGalleryIndex - 1));
document.querySelector("#gallery-next").addEventListener("click", () => showGalleryPhoto(activeGalleryIndex + 1));
dialog.addEventListener("click", (event) => {
  if (event.target === dialog) dialog.close();
});

weatherCitySelect.addEventListener("change", () => {
  const item = destinations.find((destination) => destination.city === weatherCitySelect.value);
  if (!item) return;
  updateCityLinks(item);
  loadCityWeather(item);
});
mapLayerSelect.addEventListener("change", () => {
  if (!activeMap || !mapLayers) return;
  Object.values(mapLayers).forEach((layer) => activeMap.removeLayer(layer));
  mapLayers[mapLayerSelect.value].addTo(activeMap);
});
document.querySelector("#rain-radar-toggle").addEventListener("change", (event) => {
  if (!activeMap || !activeRadarLayer) return;
  if (event.target.checked) activeRadarLayer.addTo(activeMap);
  else activeMap.removeLayer(activeRadarLayer);
});
document.querySelector("#radar-play").addEventListener("click", () => setRadarPlayback(!radarPlaybackTimer));
document.querySelector("#radar-timeline").addEventListener("input", (event) => {
  if (radarFrames.length) updateRadarFrame(Number(event.target.value));
});
document.querySelector("#recommend-button").addEventListener("click", recommendCities);
document.querySelector("#surprise-button").addEventListener("click", () => {
  const item = destinations[Math.floor(Math.random() * destinations.length)];
  openDetails(item);
});
document.querySelector("#hero-prev").addEventListener("click", () => updateHeroImage(activeHeroIndex - 1));
document.querySelector("#hero-next").addEventListener("click", () => updateHeroImage(activeHeroIndex + 1));
document.querySelector("#theme-toggle").addEventListener("click", () => {
  applyTheme(document.body.dataset.theme === "night" ? "day" : "night");
});
document.querySelector("#feedback-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const typeSelect = document.querySelector("#feedback-type");
  const type = uiText[currentLanguage].feedbackTypes[typeSelect.selectedIndex];
  const message = document.querySelector("#feedback-message").value.trim();
  if (!message) return;
  const subject = encodeURIComponent(`${uiText[currentLanguage].brand} - ${type}`);
  const body = encodeURIComponent(`${uiText[currentLanguage].feedbackType}: ${type}\n\n${message}`);
  window.location.href = `mailto:${feedbackAddress}?subject=${subject}&body=${body}`;
});
try {
  const storedTheme = localStorage.getItem("yolarkadasim-theme");
  if (storedTheme === "day" || storedTheme === "night") applyTheme(storedTheme);
} catch (error) {
  console.warn("Tema tercihi yüklenemedi.", error);
}

savedCount.textContent = savedCities.size;
let initialLanguage = "tr";
try {
  const storedLanguage = localStorage.getItem("yolarkadasim-language");
  if (uiText[storedLanguage]) initialLanguage = storedLanguage;
} catch (error) {
  console.warn("Dil tercihi yüklenemedi.", error);
}
document.querySelector("#language-select").value = initialLanguage;
applyLanguage(initialLanguage);
fillCitySelectors();
weatherCitySelect.value = "İstanbul";
initializeMap();
updateHeroImage(Math.floor(Math.random() * destinations.length));
updateClockAndTheme();
setInterval(updateClockAndTheme, 1000);
setInterval(() => updateHeroImage(Math.floor(Math.random() * destinations.length)), 10000);
setInterval(refreshVisibleWeather, 5 * 60 * 1000);
setInterval(loadRadarFrames, 10 * 60 * 1000);
updateCityLinks(destinations.find((item) => item.city === weatherCitySelect.value));
loadCityWeather(destinations.find((item) => item.city === weatherCitySelect.value));
showNextFact();
setInterval(showNextFact, 10000);
render();
syncDetailsWithAddress();
