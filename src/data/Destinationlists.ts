import { count } from "console";

export const destinationLists = {
    uzbekistan: [
        {
            id: 1,
            country: "O'zbekiston",
            city: "Toshkent viloyati",
            name: "Axtam Sahoba (Adhamsahoba)",
            description: "To'ytepashahridagi shu nom bilan yuritiladigan qabristonda joylashgan",
            image: ""
        },
        {
            id: 2,
            country: "O'zbekiston",
            city: "Toshkent viloyati",
            name: "Anjirli ota",
            description: "Anjirli ota davri aniqlanmagan, qadimdan u shaxs to'g'risida xar xil rivoyatlar bor",
            image: ""
        },
        {
            id: 3,
            country: "O'zbekiston",
            city: "Sirdaryo viloyati",
            name: "Ko'hna Xovos me'moriy majmuasi",
            description: "Bugungi kungacha erishilgan tadqiqotlar natijalariga asosan, Xovos kamida 2500 yoshda ekanligi eʼtirof etilmoqda",
            image: ""
        },
        {
            id: 4,
            city: "Toshkent shahri",
            name: "Orifjonboy masjidi",
            description: "Toshkent shahrida joylashgan tarixiy masjid 20-asr boshlarida Toshkentda Art Nouveau uslubida barpo etilgan birinchi binolardan biridir",
            image: ""
        },
        {
            id: 5,
            country: "O'zbekiston",
            city: "Navoiy viloyati",
            name: "Ayteki bobo ziyoratgohi",
            description: "Vaqt o'tishi bilan xalqning tarixiy ongini shakillantirishdagi roli ortib boradi",
            image: ""
        },
        {
            id: 6,
            country: "O'zbekiston",
            city: "Toshkent shahri",
            name: "Baroqxon madrasasi",
            description: "Toshkent shahrida joylashgan tarixiy madrasa 20-asr boshlarida Toshkentda Art Nouveau uslubida barpo etilgan birinchi binolardan biridirXVI asrda Mirzo Ulug‘bekning nevarasi – o‘sha davrda xalq orasida «Baroqxon» nomi bilan mashhur bo‘lgan – Navro‘z Ahmadxon tomonidan barpo etilgan",
            image: ""
        },
        {
            id: 7,
            country: "O'zbekiston",
            city: "Navoiy viloyati",
            name: "Bargsuz masjidi",
            description: "Nurota shahrida XX asr boshlarida homiylar va aholi tomonida hashar yo‘li bilan fuqarolarning namoz o‘qishlari uchun qurilgan",
            image: ""
        },
        {
            id: 8,
            country: "O'zbekiston",
            city: "Navoiy viloyati",
            name: "Boyazid Bastomiy masjidi",
            description: "Boyazid Bistomiy (801-875) Eronning Bistom shaxrida tug‘ilgan. Boyazid Bistomiy 113 pirdan saboq olgan ekanlar",
            image: ""
        },
        {
            id: 9,
            country: "O'zbekiston",
            city: "Navoiy viloyati",
            name: "Bedir ota majmuasi",
            description: "XIX asrda boshlarida bunyod etilib foydalanishga topshililgan Bedir ota majmuasi qozoz  xalkining musulmon dunyosidagi mutaffakkiri, faylasuf, shoir va hattot - hunarmand sifatida namayon bo‘ladi",
            image: ""
        },
        {
            id: 10,
            country: "O'zbekiston",
            city: "Toshkent viloyati",
            name: "Buzruk ota",
            description: "Bekobod tumanining “Hamza” mahallasida joylashgan",
            image: ""
        },
        {
            id: 11,
            country: "O'zbekiston",
            city: "Navoiy viloyati",
            name: "Chilustun masjidi",
            description: "“Chilustun” jomeʼ masjidining tashqi ko‘rinishi to‘rtburchak shaklda bo‘lib, uning mehrobi g‘arbiy devorga tutashtirilgan",
            image: ""
        },
        {
            id: 12,
            country: "O'zbekiston",
            city: "Qoraqalpog'iston Respublikasi",
            name: "Dovud ota maqbarasi",
            description: "Dovud ota maqbarasi -O‘zbekiston Respublikasi Vazirlar Mahkamasining  2019 yil 4-oktabrdagi 846-sonli qarori bilan O‘zbekistondagi milliy madaniy meros ob’ektlari ro‘yxatiga qayta kiritilgan",
            image: ""
        },
        {
            id: 13,
            country: "O'zbekiston",
            city: "Namangan viloyati",
            name: "O‘n bir ahmad ziyoratgohi",
            description: "Bu maqbara hamda unga yondosh bo‘lgan qabriston haqida haligacha to‘liq ma'lumotlar to‘plangan emas",
            image: ""
        },
        {
            id: 14,
            country: "O'zbekiston",
            city: "Navoiy viloyati",
            name: "Ellor ota majmuasi",
            description: "XIX asrda bunyod etilib foydalanishga topshililgan Ellor ota majmuasi qozoq xalkining etuk diniy va dunyoviy namoyondasi hisoblanada",
            image: ""
        },{
            id: 15,
            country: "O'zbekiston",
            city: "Navoiy viloyati",
            name: "Qanarboy ota ziyoratgohi",
            description: "Navoiy shahri markazidan 420 kilometr olisda Uchquduq tumani «Uzunquduq» ovuli yaqinida Qizilqum cho‘li bag‘rida joylashgan «Qanarboy ota» ziyoratgohi viloyatimizdagi mavjud tarixiy qadamjolardan biri hisoblanadi",
            image: ""
        },{
            id: 16,
            country: "O'zbekiston",
            city: "Toshkent viloyati",
            name: "G‘ubur ota",
            description: "Bu yerdan Kandirsoyga, katta karvon yo‘liga chiqish mumkin edi",
            image: ""
        },{
            id: 17,
            country: "O'zbekiston",
            city: "Surxondaryo viloyati",
            name: "Al-Hakim at-Termiziy ziyoratgohi",
            description: "Termizdan uncha uzoq boʻlmagan joyda Hakim at-Termiziy meʼmoriy majmuasi joylashgan",
            image: ""
        },{
            id: 18,
            country: "O'zbekiston",
            city: "Surxondaryo viloyati",
            name: "Abu Iso Imom Termiziy ziyoratgohi",
            description: "To‘liq ismi Abu Iso Muhammad ibn Iso ibn Savra ibn Muso ibn Zahhok Sullamiy Bug‘iy Termiziydir",
            image: ""
        },{
            id: 19,
            country: "O'zbekiston",
            city: "Samarqand viloyati",
            name: "Hazrati Dovud ziyoratgohi",
            description: "Hazrati Dovud (Dovud alayhissalom) hakida 13-asrning oxiri va 14-asrning boshlarida yashab o‘tgan Nosiruddin Burxonuddin Rabg‘o‘ziyning “Qissai Rabg‘o‘ziy” asarida batafsil ma’lumot berilgan",
            image: ""
        },{
            id: 20,
            country: "O'zbekiston",
            city: "Samarqand viloyati",
            name: "Hazrati Xizr masjidi",
            description: "Samarqand shahri qadim zamonlardan butun dunyoga ma’lum va mashhur",
            image: ""
        },{
            id: 21,
            country: "O'zbekiston",
            city: "Toshkent viloyati",
            name: "Hazrati Rushnoy xo‘ja buva",
            description: "XV asrlarga taaluqli",
            image: ""
        },{
            id: 22,
            country: "O'zbekiston",
            city: "Toshkent shahri",
            name: "Novza jome masjidi",
            description: "Masjidning “Novza” deb nomlanishligining sababi, o‘tmishda Bo‘zsuv soyining bir irmog‘iga to‘g‘on qo‘yilib, balandlikdagi ekinzor dalalarga nov orqali suv chiqarilgan ekan",
            image: ""
        },{
            id: 23,
            country: "O'zbekiston",
            city: "Xorazm viloyati",
            name: "Juma masjidi",
            description: "Juma masjid o‘rta asrlarda shaharning ko‘zga ko‘ringan binolaridan biri edi. O‘ziga xos qurilishi va hajmi bilan ajralib turgan",
            image: ""
        },{
            id: 24,
            country: "O'zbekiston",
            city: "Toshkent shahri",
            name: "Qaffol ash-Shoshiy",
            description: "Abu Bakr Qaffol Shoshiy hayoti va faoliyati haqida so‘zlashdan oldin, ungacha ham Shosh vohasida yuksak ilmiy muhit yaratgan olimlar haqida muxtasar gapirmasak, adolatdan bo‘lmaydi",
            image: ""
        },{
            id: 25,
            country: "O'zbekiston",
            city: "Toshkent shahri",
            name: "Qaldirg‘ochbiy maqbarasi",
            description: "Poytaxt markazida, g‘aroyib me’morchilik yodgorligi – Qaldirg‘ochbiy maqbarasi joylashgan",
            image: ""
        },{
            id: 26,
            country: "O'zbekiston",
            city: "Navoiy viloyati",
            name: "Qosim-Shayx masjidi",
            description: "XVI asr maʼnaviy hayotida o‘chmas iz qoldirgan Qosim Shayx Azizonning butun faoliyati ezgu va xayrli ishlariga qaratilgan",
            image: ""
        }
    ],
    turkey: [
        {
            id: 1,
            country: "Turkiya",
            city: "Istanbul",
            name: "Amir Ahmad Buxoriy masjidi",
            description: "Amir Ahmad Buxoriy O‘zbekistonning Buxoro shahrida tug‘ilgan. Hz. Muhammad alayhissalomning nabiralari amir Buxoriy tasavvufga qiziqqan o‘z davrining yetakchi islom ulamolaridan biri edi",
            image: ""
        },{
            id: 2,
            country: "Turkiya",
            city: "Istanbul",
            name: "Beylerbeyi saroyi",
            description: "Beylerbeyi saroyi Istanbulning Üsküdar tumanidagi Beylerbeyi tumanida joylashgan muhim turk-islom inshootidir",
            image: ""
        },{
            id: 3,
            country: "Turkiya",
            city: "Istanbul",
            name: "Memar Sinan maqbarasi",
            description: "Memar Sinon maqbarasi Turkiyaning Istanbul viloyatida joylashgan",
            image: ""
        },{
            id: 4,
            country: "Turkiya",
            city: "Istanbul",
            name: "Mulla Guroniy hazratlarining maqbarasi",
            description: "Asl ismi Shamseddin Ahmad bin Ismoil bo'lgan Molla G'uroniy Usmonlilar imperiyasining muhim diniy ulamolaridan biri bo'lib, tafsir, fiqh va hadis ilmida chuqur bilimga ega edi",
            image: ""
        },{
            id: 5,
            country: "Turkiya",
            city: "Istanbul",
            name: "Mihrima Sulton jome masjidi",
            description: "Mihrimah Sulton masjidi Turkiyaning Istanbul shahrining Üsküdar tumanida joylashgan",
            image: ""
        },
        {
            id: 6,
            country: "Turkiya",
            city: "Istanbul",
            name: "Nalli masjidi",
            description: "Bob-i Ali masjidi nomi bilan ham tanilgan bu asar Fatih Sulton Mehmet davrida Imom Ali Afandi tomonidan qurilgan",
            image: ""
        },
        {
            id: 7,
            country: "Turkiya",
            city: "Istanbul",
            name: "Sulaymon Muhtasham ko'prigi",
            description: "Bu ko‘prik Sulaymon podshoning yurishlari paytida qo‘shinlarning o‘tishini osonlashtirish, ya’ni jarayonni tezlashtirish maqsadida qurilgan",
            image: ""
        },
        {
            id: 8,
            country: "Turkiya",
            city: "Istanbul",
            name: "Amir Buxoriy masjidi va maqbarasi",
            description: "Amir Buxoriy masjidi XVI asrda hazratlari Sayyid Amir Ahmad Buxoriy uchun qurilgan. Asr boshlarida Usmonli imperiyasining sultoni II",
            image: ""
        },
        {
            id: 9,
            country: "Turkiya",
            city: "Istanbul",
            name: "Anadolu qal'asi",
            description: "Anadolu Hisarı (Guzelce Hisarı) Turkiyaning Istanbul viloyatida joylashgan",
            image: ""
        },
        {
            id: 10,
            country: "Turkiya",
            city: "Istanbul",
            name: "Bobo Haydar Samarqandiy qabri",
            description: "Bugungi kunda Baba Haydar Semekandi maqbarasi Turkiyaning Istanbul viloyatida joylashgan boʻlib, tashrif buyurilgan eng muhim diniy inshootlardan biridir",
            image: ""
        },
        {
            id: 11,
            country: "Turkiya",
            city: "Istanbul",
            name: "Boyazid masjidi",
            description: "Boyazid masjidi Istanbulning Fotih tumanida oʻz nomini olgan Beyazit maydonida joylashgan",
            image: ""
        },
        {
            id: 12,
            country: "Turkiya",
            city: "Istanbul",
            name: "Beyazit davlat kutubxonasi",
            description: "Beyazit davlat kutubxonasi Turkiyaning Istanbul viloyatidagi Tarixiy yarim orolda joylashgan",
            image: ""
        },
        {
            id: 13,
            country: "Turkiya",
            city: "Istanbul",
            name: "Beylerbeyi masjidi",
            description: "Beylerbeyi masjidi Istanbulning Üsküdar tumanidagi Beylerbeyi tumanida joylashgan",
            image: ""
        },{
            id: 14,
            country: "Turkiya",
            city: "Istanbul",
            name: "Buxoro o'zbeklari uyi",
            description: "“Buxoro Oʻzbeklar” lojasi 1692-yilda Istanbul gʻaznachisi Ismoil afandi tomonidan Istanbulning Kadirga shahrida qurilgan",
            image: ""
        },{
            id: 15,
            country: "Turkiya",
            city: "Istanbul",
            name: "Eyüp Sulton jome masjidi",
            description: "Eyüp Sulton masjidi Turkiyaning Istanbul viloyatida joylashgan",
            image: ""
        }
    ],
    turkmanistan: [
        {
            id: 1,
            country: "Turkmanistan",
            city: "Mari viloyati",
            name: "Abiverd Peshtak",
            description: "Abiverd Peshtak - Atekning eng yirik markazi (Ahal va Merv vohalari orasidagi hudud)",
            image: ""
        },
        {
            id: 2,
            country: "Turkmanistan",
            city: "Mari viloyati",
            name: "Said Jamoliddin arxitektura majmuasi",
            description: "Said Jamol ad-Din - masjidlar xarobalari va o'rta asrlardagi Anau shaharchasi o'rnida joylashgan muqaddas joy. Jo .fasad va ichki qismidagi yozuvlarda aytilishicha, masjid Xurosonda Abu al-Qsim Bobir Bahodurxon (1446-1457) davrida qurilgan",
            image: ""
        },
        {
            id: 3,
            country: "Turkmanistan",
            city: "Mari viloyati",
            name: "Karvonsaroy darvozasi",
            description: "«Karvonsaroy» (13—14-asrlar) — shartli nom, mahalliy ekvivalenti: nomaʼlum monumental binoning peshtoq (old arch, portal).",
            image: ""
        },
        {
            id: 4,
            country: "Turkmanistan",
            city: "Mari viloyati",
            name: "Dayahatin karvonsaroyi",
            description: "Dayahatın (Bayhatin) — Amudaryo boʻyida, Amuldan Xorazmgacha boʻlgan qadimiy savdo yoʻlida joylashgan oʻrta asr karvonsaroyi",
            image: ""
        },
        {
            id: 5,
            country: "Turkmanistan",
            city: "Mari viloyati",
            name: "Katta va kichik qiz qal'asi",
            description: "“Qadimgi Marv” davlat tarixiy-madaniy bog‘i hududiga kiraverishda, yo‘lning o‘ng tomonida tashrif buyuruvchilar Buyuk va Kichik Qiz qal’adagi o‘rta asr qishloq qal’alarining gofrirovka qilingan devorlarini ko‘rishlari mumkin",
            image: ""
        },
        {
            id: 6,
            country: "Turkmanistan",
            city: "Mari viloyati",
            name: "Izmikshir",
            description: "Izmikshir (Zamaxshar) — Toshhovuzdan 30 km janubi-gʻarbda joylashgan oʻrta asr shahar xarobalari. Qal'a devorlari singan konturli ovalni (taxminan 500 x 650 m) qoplagan bo'lsa, tashqarida, ehtimol, shahar atrofi bo'lgan",
            image: ""
        },
        {
            id: 7,
            country: "Turkmanistan",
            city: "Mari viloyati",
            name: "Meana-baba maqbarasi va masjidi",
            description: "Meana-bobo (Abu Said Mehney maqbarasi va masjidi) — XI—XV asrlarga oid meʼmoriy majmua, Dushak qishlogʻidan (Ahal velayati) 40 km janubi-gʻarbda",
            image: ""
        },
        {
            id: 8,
            country: "Turkmanistan",
            city: "Mari viloyati",
            name: "Najmiddin al-Kubro maqbarasi",
            description: "Najm ad-din al-Kubro maqbarasi-xonaka (14-asr) toʻrtta gumbazli xonadan: vestibyul (dehliz), chap va oʻng tomonida 6x6 m oʻlchamdagi ikkita bir xil xona va q. markaziy o'q (9,3 x 9,3 m)",
            image: ""
        },
        {
            id: 9,
            country: "Turkmanistan",
            city: "Mari viloyati",
            name: "Abu Fazl ziyoratgohi",
            description: "Abul Fazl maqbarasi (Seraxs-boba) 111-asr boshlariga oid meʼmoriy yodgorlikdir",
            image: ""
        },
        {
            id: 10,
            country: "Turkmanistan",
            city: "Mari viloyati",
            name: "Alamberdar maqbarasi",
            description: "Alamberdor (Alamdar-tugʻchi) — Ostona-boba qishlogʻidagi (hozirgi Kerki shahridan 12 km gʻarbda joylashgan) 1-asr boshlaridagi diqqatga sazovor joy",
            image: ""
        }
    ],
    kazakistan: [
        {
            id: 1,
            country: "Qozog'iston",
            city: "Jambul viloyati",
            name: "Aqirtas saroy majmuasi",
            description: "Oqirtas - 70 dan ortiq xona va 15 ustunli galereyadan iborat boʻlgan, sirlarga toʻla, oʻrta asrlarda qurib bitkazilmagan saroy majmuasi. Majmua qayta ishlangan yirik tosh bloklardan qurilgan",
            image: ""
        },
        {
            id: 2,
            country: "Qozog'iston",
            city: "Chimkent shahri",
            name: "Chimkentning qadimiy qal'asi",
            description: "'Chimkentning eski shaharchasi' (Qal'a) - mahalliy ahamiyatga ega bo'lgan tarix va madaniyat yodgorliklari davlat ro'yxatiga kiritilgan mamlakatning arxeologik yodgorligi",
            image: ""
        },
        {
            id: 3,
            country: "Qozog'iston",
            city: "Turkiston viloyati",
            name: "O‘trar shahri",
            description: "Oʻtror — Oʻrta Osiyodagi eng qadimiy shaharlardan biri. Arab manbalarida shahar Forob deb ataladi. Shahar o'rnida birinchi aholi punktlari 8-asrda paydo bo'lgan",
            image: ""
        },
        {
            id: 4,
            country: "Qozog'iston",
            city: "Jambul viloyati",
            name: "Qadimgi Taraz shaharchasi",
            description: "Taraz (Talas) shahri - Buyuk ipak yoʻlidagi tarixiy-madaniy markaz miloddan avvalgi 40-36-yillarda barpo etilgan. 568 yilda shahar birinchi marta Vizantiya manbalarida tilga olingan",
            image: ""
        },
        {
            id: 5,
            country: "Qozog'iston",
            city: "Jambul viloyati",
            name: "Auliebastau qadimiy aholi punkti",
            description: "Rus sharqshunosi V.V. Bartold Oʻrta Osiyoga qilgan sayohati haqidagi maʼruzasida “Abdurrahmon” deb nomlangan Auliebastau joyini eslatib oʻtadi",
            image: ""
        },
        {
            id: 6,
            country: "Qozog'iston",
            city: "Jambul viloyati",
            name: "Balasagun aholi punkti",
            description: "Balasagun shaharchasi Buyuk Turk xoqonligi davrida - Buyuk Ipak yo'lidagi eng yirik aholi punkti bo'lgan",
            image: ""
        },
        {
            id: 7,
            country: "Qozog'iston",
            city: "Jambul viloyati",
            name: "Qulan aholi punkti",
            description: "Qulan manzilgohi birinchi marta VII asrning birinchi yarmidagi manbalarda qayd etilgan",
            image: ""
        },
        {
            id: 8,
            country: "Qozog'iston",
            city: "Jambul viloyati",
            name: "Merke aholi punkti",
            description: "Merke aholi punkti o'zining o'rta asrlardagi nomini saqlab qolgan kam sonli aholi punktlaridan biridir",
            image: ""
        },
        {
            id: 9,
            country: "Qozog'iston",
            city: "Jambul viloyati",
            name: "Ornek aholi punkti",
            description: "Ornek qishlogʻi turkiy shahar madaniyatining oʻrta asrlardagi yirik manzilgohlaridan biridir",
            image: ""
        },
        {
            id: 10,
            country: "Qozog'iston",
            city: "Jambul viloyati",
            name: "Saudakent aholi punkti",
            description: "Saudakent shaharchasi turkiy dunyo maʼnaviy madaniyati markazi, Buyuk ipak yoʻli yoʻl tizimidagi yirik savdo markazi hisoblanadi",
            image: ""
        },
    ],
    kirgizistan: [
        {
            id: 1,
            country: "Qirg'iziston",
            city: "O‘sh viloyati",
            name: "Buraninskiy tarixiy - madaniy majmuasi",
            description: "Burana minorasi (Buranin minorasi) — Qirgʻizistonning Toʻqmoq shahridan 12 km janubi-gʻarbda, Chu daryosining chap qirgʻogʻida, Buraninskiy aholi punkti xarobalari orasida joylashgan arxeologik va meʼmoriy yodgorlik",
            image: ""
        },
        {
            id: 2,
            country: "Qirg'iziston",
            city: "O‘sh viloyati",
            name: "Chil-Ustun g'ori",
            description: "Chil-ustun gʻori — Oʻsh viloyatining shimoli-gʻarbiy qismida, Aravon qishlogʻi yaqinida joylashgan gʻorlardan biri",
            image: ""
        },
        {
            id: 3,
            country: "Qirg'iziston",
            city: "O‘sh viloyati",
            name: "Tarixiy, madaniy va tabiiy muzey - Sulaymon-Too qo'riqxonasi",
            description: "Sulaymon togʻi (Sulaymon togʻi) Qirgʻizistondagi eng muhim madaniy diqqatga sazovor joy boʻlib, Oʻsh shahrining markazida joylashgan mamlakatning YuNESKO madaniy merosi roʻyxatiga kiritilgan birinchi obyektidir",
            image: ""
        },
        {
            id: 4,
            country: "Qirg'iziston",
            city: "Botken viloyati",
            name: "Xon qal'asi (Xudoyorxon qal'asi)",
            description: "Qal’a Turkiston tizmasi yon bag‘irlarida qariyb yarim kilometrga cho‘zilgan",
            image: ""
        },
        {
            id: 5,
            country: "Qirg'iziston",
            city: "O‘sh viloyati",
            name: "Kojo Kelenning libosi",
            description: "Bu hududda qirgʻiz xalqi uchun ahamiyatli tarixiy va sayyohlik maskani, oʻrta asrlarning mashhur tarixiy shaxsi, jasur sarkarda, Boburning doʻsti, oʻz davri faylasufi, shoir buyuk Kojo Kelen maqbarasi joylashgan. Buyuk Mug'allar imperiyasining asoschisi",
            image: ""
        },
        {
            id: 6,
            country: "Qirg'iziston",
            city: "Jalol-Obod viloyati",
            name: "Kumbez Padysha ota",
            description: "“Padisha ota” g‘ishtdan chiroyli tarzda qurilgan, uning ichida sahoba (Muhammad payg‘ambarni ko‘rgan odam) jasadi, uning ismi Said Kamoloddin Salmoniy Forsiy edi",
            image: ""
        }
    ],
    vengriya: [
        {
            id: 1,
            country: "Vengriya",
            city: "Veszprem",
            name: "Abdurahmon Arnavut qabri",
            description: "Bunga Dyordji Szaboning avlodlari da'vo qilishgan. U rassom Zsille Kalmanning dizayni asosida yaratilgan",
            image: ""
        },
        {
            id: 2,
            country: "Vengriya",
            city: "Veszprem",
            name: "Rustem Posho hammomi",
            description: "Bu yerda 19-asr turk hammomi qoldiqlari topilgan. Yozuvlarga ko'ra, u Budaning Güzeldzse (Szép) Rüsztem Posho poydevoridan qurilgan",
            image: ""
        },
        {
            id: 3,
            country: "Vengriya",
            city: "Veszprem",
            name: "Soltszentim uchun Csonka minora",
            description: "Soltszentim va Csengod o'rtasidagi chegarada Csonka minorasi joylashgan bo'lib, Arpad davridagi cherkov xarobasi, uning qurilishining aniq sanasi noma'lum",
            image: ""
        },
        {
            id: 4,
            country: "Vengriya",
            city: "Veszprem",
            name: "Qirol hammomi Kakaskapu, Horoz Kapi Ilijeszi",
            description: "Agar siz o'ziga xos atmosferaga ega bo'lgan tarixiy joylarni ziyorat qilishni yaxshi ko'rsangiz, Vengriya qirollari o'rniga turk posholari Buda qal'asini boshqargan va Buda tepaliklari ostidagi geotermal buloq suvlaridan foydalangan holda o'rta asrlarga boradigan vaqt sayohatidan bahramand bo'lasiz",
            image: ""
        },
        {
            id: 5,
            country: "Vengriya",
            city: "Veszprem",
            name: "Erd minorasi",
            description: "Minora (qulagan Hamza beg masjidining minorasi) 16-asrda Soskutdagi qoʻpol ohaktoshdan qurilgan",
            image: ""
        },
        {
            id: 6,
            country: "Vengriya",
            city: "Veszprem",
            name: "Ali Posho masjidi",
            description: "Szigetvar, shuningdek, saqlanib qolgan ikkita masjid bilan maqtanishi mumkin: biri qal'a ichida joylashgan, ikkinchisi esa Pecs masjidi kabi hozirda katolik cherkovidir",
            image: ""
        }
    ]
}
