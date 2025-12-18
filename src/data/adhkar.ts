import type { DhikrItem } from '../types';

export const BASMALLAH = "بِسْمِ اللَّـهِ الرَّحْمَـٰنِ الرَّحِيمِ";

export const ADHKAR_DATA: DhikrItem[] = [
  {
    title: "Ta'awudz",
    repeat: 1,
    tags: ["pagi", "petang", "sughro", "kubro"],
    children: [
      {
        arabic:
          "أَعُوذُ بِاللَّهِ السَّمِيعِ الْعَلِيمِ مِنَ الشَّيْطَانِ الرَّجِيمِ",
        transliteration:
          "A‘ūdzu billāhi as-samī‘ al-‘alīm min ash-shayṭānir-rajīm.",
        translation:
          "Aku berlindung kepada Allah Yang Maha Mendengar lagi Maha Mengetahui dari godaan syaitan yang terkutuk.",
      },
    ],
  },
  {
    title: "Surat Al-Fātiḥah",
    repeat: 1,
    tags: ["pagi", "petang", "sughro", "kubro"],
    children: [
      {
        arabic: "بِسْمِ اللَّـهِ الرَّحْمَـٰنِ الرَّحِيمِ ١",
        transliteration: "Bismi llāhi ar-raḥmāni ar-raḥīm.",
        translation: "Dengan nama Allah Yang Maha Pengasih, Maha Penyayang.",
      },
      {
        arabic: "ٱلۡحَمۡدُ لِلَّهِ رَبِّ ٱلۡعَٰلَمِينَ ٢",
        transliteration: "Al-ḥamdu lillāhi rabbi al-‘ālamīn.",
        translation: "Segala puji bagi Allah, Tuhan semesta alam.",
      },
      {
        arabic: "ٱلرَّحۡمَٰنِ ٱلرَّحِيمِ ٣",
        transliteration: "Ar-raḥmāni ar-raḥīm.",
        translation: "Yang Maha Pengasih, Maha Penyayang.",
      },
      {
        arabic: "مَٰلِكِ يَوۡمِ ٱلدِّينِ ٤",
        transliteration: "Māliki yawmi ad-dīn.",
        translation: "Yang Menguasai di Hari Pembalasan.",
      },
      {
        arabic: "إِيَّاكَ نَعۡبُدُ وَإِيَّاكَ نَسۡتَعِينُ ٥",
        transliteration: "Iyyāka na‘budu wa iyyāka nasta‘īn.",
        translation:
          "Hanya kepada Engkaulah kami menyembah dan hanya kepada Engkaulah kami meminta pertolongan.",
      },
      {
        arabic: "ٱهۡدِنَا ٱلصِّرَٰطَ ٱلۡمُسۡتَقِيمَ ٦",
        transliteration: "Ihdinā aṣ-ṣirāṭa al-mustaqīm.",
        translation: "Tunjukilah kami jalan yang lurus.",
      },
      {
        arabic:
          "صِرَٰطَ ٱلَّذِينَ أَنۡعَمۡتَ عَلَيۡهِمۡ غَيۡرِ ٱلۡمَغۡضُوبِ عَلَيۡهِمۡ وَلَا ٱلضَّآلِّينَ ٧",
        transliteration:
          "Ṣirāṭa alladhīna an‘amta ‘alayhim ghayri al-maghḍūbi ‘alayhim wa laḍ-ḍāllīn.",
        translation:
          "Yaitu jalan orang-orang yang telah Engkau beri nikmat kepada mereka; bukan (jalan) mereka yang dimurkai dan bukan (pula jalan) mereka yang sesat.",
      },
    ],
  },
  {
    title: "Surat Al-Baqarah Ayat 1-5",
    repeat: 1,
    hasPrefixBasmallah: true,
    tags: ["pagi", "petang", "sughro", "kubro"],
    children: [
      {
        arabic: "الٓمٓ ١",
        transliteration: "Alif lām mīm.",
        translation: "Alif lam mim.",
      },
      {
        arabic: "ذَٰلِكَ ٱلۡكِتَٰبُ لَا رَيۡبَۛ فِيهِۛ هُدٗى لِّلۡمُتَّقِينَ ٢",
        transliteration: "Dhālika al-kitābu lā rayba fīh hudan lil-muttaqīn.",
        translation:
          "Kitab (Al-Qur'an) ini tidak ada keraguan padanya; petunjuk bagi mereka yang bertakwa.",
      },
      {
        arabic:
          "ٱلَّذِينَ يُؤۡمِنُونَ بِٱلۡغَيۡبِ وَيُقِيمُونَ ٱلصَّلَوٰةَ وَمِمَّا رَزَقۡنَٰهُمۡ يُنفِقُونَ ۙ ٣",
        transliteration:
          "Alladhīna yu’minūna bil-ghaybi wa yuqīmūna aṣ-ṣalāta wa mimmā razaqnāhum yunfiqūn.",
        translation:
          "Yaitu orang-orang yang beriman kepada yang ghaib, mendirikan shalat, dan menafkahkan sebagian rezeki yang Kami berikan kepada mereka.",
      },
      {
        arabic:
          "وَٱلَّذِينَ يُؤۡمِنُونَ بِمَآ أُنزِلَ إِلَيۡكَ وَمَآ أُنزِلَ مِن قَبۡلِكَ وَبِٱلۡأٓخِرَةِ هُمۡ يُوقِنُونَ ٤",
        transliteration:
          "Wa alladhīna yu’minūna bimā unzila ilayka wa mā unzila min qablika wa bil-ākhirati hum yūqinūn.",
        translation:
          "Dan orang-orang yang beriman kepada Al-Qur'an dan kitab-kitab yang terdahulu, mereka yakin akan adanya hari akhir.",
      },
      {
        arabic:
          "أُوْلَٰٓئِكَ عَلَىٰ هُدٗى مِّن رَّبِّهِمۡۖ وَأُوْلَٰٓئِكَ هُمُ ٱلۡمُفۡلِحُونَ ٥",
        transliteration:
          "Ulā’ika ‘alā hudan min rabbihim wa ulā’ika humul-mufliḥūn.",
        translation:
          "Mereka itu adalah orang-orang yang mendapat petunjuk dari Tuhannya, dan mereka itulah orang-orang yang beruntung.",
      },
    ],
  },
  {
    title: "Surat Al-Baqarah Ayat 255-257",
    repeat: 1,
    tags: ["pagi", "petang", "sughro", "kubro"],
    children: [
      {
        arabic:
          "ٱللَّهُ لَآ إِلَـٰهَ إِلَّا هُوَ ٱلْحَىُّ ٱلْقَيُّومُ ۚ لَا تَأْخُذُهُۥ سِنَةٌ وَلَا نَوْمٌ ۚ لَّهُۥ مَا فِى ٱلسَّمَـٰوَٰتِ وَمَا فِى ٱلْأَرْضِ ۗ مَن ذَا ٱلَّذِى يَشْفَعُ عِندَهُۥٓ إِلَّا بِإِذْنِهِۦ ۚ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ ۖ وَلَا يُحِيطُونَ بِشَىْءٍۢ مِّنْ عِلْمِهِۦٓ إِلَّا بِمَا شَآءَ ۚ وَسِعَ كُرْسِيُّهُ ٱلسَّمَـٰوَٰتِ وَٱلْأَرْضَ ۖ وَلَا يَـُٔودُهُۥ حِفْظُهُمَا ۚ وَهُوَ ٱلْعَلِىُّ ٱلْعَظِيمُ ٢٥٥",
        transliteration:
          "Allāhu lā ilāha illā huwal-ḥayyu al-qayyūm lā ta’khudhuhū sinatun walā nawm, lahu mā fī as-samāwāti wa mā fī al-arḍ, man dhā alladhī yashfa'u 'indahu illā bi-idhnih ya'lamu mā bayna aydīhim wa mā khalfahum walā yuḥīṭūna bishay'in min 'ilmihī illā bimā shā’, wasi’a kursiyyuhus-samāwāti wal-arḍ, walā ya'ūduhū ḥifẓuhumā, wahuwal-'aliyyul-'aẓīm.",
        translation:
          "Allah, tidak ada Tuhan (yang berhak disembah) melainkan Dia Yang Hidup kekal lagi terus menerus mengurus (makhluk-Nya); tidak mengantuk dan tidak tidur. Kepunyaan-Nya apa yang di langit dan di bumi. Tiada yang dapat memberi syafaat di sisi Allah tanpa izin-Nya. Allah mengetahui apa-apa yang di hadapan mereka dan di belakang mereka, dan mereka tidak mengetahui apa-apa dari ilmu Allah melainkan apa yang dikehendaki-Nya. Kursi Allah meliputi langit dan bumi. Dan Allah tidak merasa berat memelihara keduanya, dan Allah Maha Tinggi lagi Maha Besar.",
      },
      {
        arabic:
          "لَآ إِكْرَاهَ فِى ٱلدِّينِ ۖ قَد تَّبَيَّنَ ٱلرُّشْدُ مِنَ ٱلۡغَىِّ ۚ فَمَن يَكْفُرْ بِٱلطَّـٰغُوتِ وَيُؤْمِنۢ بِٱللَّهِ فَقَدِ ٱسْتَمْسَكَ بِٱلۡعُرْوَةِ ٱلۡوُثۡقَىٰ لَا ٱنفِصَامَ لَهَا ۗ وَٱللَّهُ سَمِيعٌ عَلِيمٌ ٢٥٦",
        transliteration:
          "Lā ikrāha fī ad-dīn qad tabayyana ar-rushdu minal-ghayyi faman yakfur biṭ-ṭāghūti wa yu’min billāhi faqad istamsaka bil-‘urwati al-wuthqā lā infiṣāma lahā, wal-lāhu samī'un ‘alīm.",
        translation:
          "Tidak ada paksaan untuk (memasuki) agama (Islam); sesungguhnya telah jelas jalan yang benar daripada yang sesat. Karena itu barangsiapa yang ingkar kepada Thaghut dan beriman kepada Allah, maka sesungguhnya ia telah berpegang kepada tali yang amat kokoh yang tidak akan putus. Dan Allah Maha Mendengar lagi Maha Mengetahui.",
      },
      {
        arabic:
          "ٱللَّهُ وَلِىُّ ٱلَّذِينَ ءَامَنُوا يُخْرِجُهُم مِّنَ ٱلظُّلُمَـٰتِ إِلَى ٱلنُّورِ ۖ وَٱلَّذِينَ كَفَرُوٓا أَوْلِيَآؤُهُمُ ٱلطَّـٰغُوتُ يُخْرِجُونَهُم مِّنَ ٱلنُّورِ إِلَى ٱلظُّلُمَـٰتِ ۗ أُولَـٰٓئِكَ أَصْحَـٰبُ ٱلنَّارِ ۖ هُمْ فِيهَا خَـٰلِدُونَ ٢٥٧",
        transliteration:
          "Allāhu waliyyu alladhīna āmanū yukhrijuhum mina aẓ-ẓulumāti ilan-nūr, walladhīna kafarū awliyāuhumu aṭ-ṭāghūtu yukhrijūnahum mina an-nūri ilā aẓ-ẓulumāt, ulā’ika aṣḥābu an-nār, hum fīhā khālidūn.",
        translation:
          "Allah Pelindung orang-orang yang beriman; Dia mengeluarkan mereka dari kegelapan (kekafiran) kepada cahaya (iman). Dan orang-orang yang kafir, pelindung-pelindungnya ialah setan, yang mengeluarkan mereka dari cahaya kepada kegelapan (kekafiran). Mereka itu adalah penghuni neraka; mereka kekal di dalamnya.",
      },
    ],
  },
  {
    title: "Surat Al-Baqarah Ayat 284-286",
    repeat: 1,
    tags: ["pagi", "petang", "sughro", "kubro"],
    children: [
      {
        arabic:
          "لِّلَّهِ مَا فِى ٱلسَّمَـٰوَٰتِ وَمَا فِى ٱلْأَرْضِ ۗ وَإِن تُبْدُوا مَا فِىٓ أَنفُسِكُمْ أَوْ تُخْفُوهُ يُحَاسِبْكُم بِهِ ٱللَّهُ ۖ فَيَغْفِرُ لِمَن يَشَآءُ وَيُعَذِّبُ مَن يَشَآءُ ۗ وَٱللَّهُ عَلَىٰ كُلِّ شَىْءٍ قَدِيرٌ ٢٨٤",
        transliteration:
          "Lillāhi mā fī as-samāwāti wa mā fī al-arḍi, wa in tubdū mā fī anfusikum aw tukhfūhu yuḥāsibkum bihillāh, fa-yaghfiru liman yashā'u wa yu‘adhdhibu man yashā'u, wa-Allāhu ‘alā kulli shay'in qadīr.",
        translation:
          "Kepunyaan Allah-lah segala apa yang ada di langit dan apa yang ada di bumi. Dan jika kamu melahirkan apa yang ada di dalam hatimu atau kamu menyembunyikannya, niscaya Allah akan membuat perhitungan dengan kamu tentang perbuatanmu itu. Maka Allah mengampuni siapa yang dikehendaki-Nya dan menyiksa siapa yang dikehendaki-Nya; dan Allah Maha Kuasa atas segala sesuatu.",
      },
      {
        arabic:
          "ءَامَنَ ٱلرَّسُولُ بِمَآ أُنزِلَ إِلَيْهِ مِن رَّبِّهِۦ وَٱلْمُؤْمِنُونَ ۚ كُلٌّ ءَامَنَ بِٱللَّهِ وَمَلَـٰٓئِكَتِهِۦ وَكُتُبِهِۦ وَرُسُلِهِۦ لَا نُفَرِّقُ بَيْنَ أَحَدٍ مِّن رُّسُلِهِۦ ۚ وَقَالُوا سَمِعْنَا وَأَطَعْنَا ۖ غُفْرَانَكَ رَبَّنَا وَإِلَيْكَ ٱلْمَصِيرُ ٢٨٥",
        transliteration:
          "Aamana ar rusulu bimaa unzila ilaihi mir rabbihii wal mu'minuun kullun aamana billahi wa mala-ikatihi wa kutubihi wa rusulihi laa nufarriqu baina ahadim mir rusulihii wa qalu sami'na wa atho'na ghufranaka rabbana wa ilaikal masiir.",
        translation:
          "Rasul telah beriman kepada Al Qur'an yang diturunkan kepadanya dari Tuhannya, demikian pula orang-orang yang beriman. Semuanya beriman kepada Allah, malaikat-malaikat-Nya, kitab-kitab-Nya dan rasul-rasul-Nya. (Mereka mengatakan): 'Kami tidak membeda-bedakan antara seorang pun (dengan yang lain) dari rasul-rasul-Nya', dan mereka mengatakan: 'Kami dengar dan kami taat'. (Mereka berdoa): 'Ampunilah kami ya Tuhan kami dan kepada Engkaulah tempat kembali'.",
      },
      {
        arabic:
          "لَا يُكَلِّفُ ٱللَّهُ نَفْسًا إِلَّا وُسْعَهَا ۚ لَهَا مَا كَسَبَتْ وَعَلَيْهَا مَا ٱكْتَسَبَتْ ۗ رَبَّنَا لَا تُؤَاخِذْنَآ إِن نَّسِينَآ أَوْ أَخْطَأْنَا ۚ رَبَّنَا وَلَا تَحْمِلْ عَلَيْنَآ إِصْرًا كَمَا حَمَلْتَهُۥ عَلَى ٱلَّذِينَ مِن قَبْلِنَا ۚ رَبَّنَا وَلَا تُحَمِّلْنَا مَا لَا طَاقَةَ لَنَا بِهِۦ ۖ وَٱعْفُ عَنَّا وَٱغْفِرْ لَنَا وَٱرْحَمْنَآ ۚ أَنتَ مَوْلَىٰنَا فَٱنصُرْنَا عَلَى ٱلْقَوْمِ ٱلْكَـٰفِرِينَ ٢٨٦",
        transliteration:
          "Laa yukallifullahu nafsan illaa wus'ahaa lahaa maa kasabat wa 'alaihaa maa iktasabat rabbanaa laa tu'aakhidznaaa in nasiinaa aw akhtho'naa rabbanaa wa laa tahmil 'alainaaa isron kamaa hamaltahuu 'alal ladziina min qablinaa rabbanaa wa laa tuhammilnaa maa laa taaqata lanaa bihii wa'fu 'annaa waghfir lanaa warhamnaa anta maulaanaa fanshurnaa 'alal qawmil kaafiriin.",
        translation:
          "Allah tidak membebani seseorang melainkan sesuai dengan kesanggupannya. Ia mendapat pahala (dari kebajikan) yang diusahakannya dan ia mendapat siksa (dari kejahatan) yang dikerjakannya. (Mereka berdoa): 'Ya Tuhan kami, janganlah Engkau hukum kami jika kami lupa atau kami tersalah. Ya Tuhan kami, janganlah Engkau bebankan kepada kami beban yang berat sebagaimana Engkau bebankan kepada orang-orang yang sebelum kami. Ya Tuhan kami, janganlah Engkau pikulkan kepada kami apa yang tak sanggup kami memikulnya. Beri maaflah kami; ampunilah kami; dan rahmatilah kami. Engkaulah Penolong kami, maka tolonglah kami terhadap kaum yang kafir'.",
      },
    ],
  },
  {
    title: "Surat Al-Imran Ayat 1-2",
    repeat: 1,
    tags: ["pagi", "petang", "kubro"],
    children: [
      {
        arabic: "الٓمٓ ١",
        transliteration: "Alif Laam Meem.",
        translation: "Alif Laam Meem.",
      },
      {
        arabic: "ٱللَّهُ لَآ إِلَـٰهَ إِلَّا هُوَ ٱلْحَىُّ ٱلْقَيُّومُ ٢",
        transliteration: "Allāhu lā ilāha illā huwal-ḥayyul-qayyụm.",
        translation:
          "Allah, tidak ada Tuhan (yang berhak disembah) melainkan Dia. Yang hidup kekal lagi terus menerus mengurus makhluk-Nya.",
      },
    ],
  },
  {
    title: "Surat Thoha Ayat 111-112",
    repeat: 1,
    tags: ["pagi", "petang", "kubro"],
    children: [
      {
        arabic:
          "وَعَنَتِ ٱلْوُجُوهُ لِلْحَىِّ ٱلْقَيُّومِ ۖ وَقَدْ خَابَ مَنْ حَمَلَ ظُلْمًا ١١١",
        transliteration:
          "Wa 'anatil-wujụhu lil-ḥayyil-qayyụm, wa qad khāba man ḥamala ẓulmā.",
        translation:
          "Dan tunduklah semua muka (dengan berendah diri) kepada Tuhan Yang Hidup Kekal lagi senantiasa mengurus (makhluk-Nya). Dan sesungguhnya telah merugilah orang yang melakukan kezaliman.",
      },
      {
        arabic:
          "وَمَن يَعْمَلْ مِنَ ٱلصَّـٰلِحَـٰتِ وَهُوَ مُؤْمِنٌ فَلَا يَخَافُ ظُلْمًا وَلَا هَضْمًا ١١٢",
        transliteration:
          "Wa may ya'mal minaṣ-ṣāliḥāti wa huwa mu'minun fa lā yakhāfu ẓulman wa lā haḍmā.",
        translation:
          "Dan barangsiapa mengerjakan amal-amal yang saleh dan ia dalam keadaan beriman, maka ia tidak khawatir akan perlakuan yang tidak adil (terhadapnya) dan tidak (pula) akan pengurangan haknya.",
      },
    ],
  },
  {
    title: "Surat At-Taubah Ayat 129",
    repeat: 1,
    tags: ["pagi", "petang", "kubro"],
    children: [
      {
        arabic:
          "فَإِن تَوَلَّوْا فَقُلْ حَسْبِىَ ٱللَّهُ لَآ إِلَـٰهَ إِلَّا هُوَ ۖ عَلَيْهِ تَوَكَّلْتُ ۖ وَهُوَ رَبُّ ٱلْعَرْشِ ٱلْعَظِيمِ ١٢٩",
        transliteration:
          "Fa in tawallaw fa qul ḥasbiyallāhu lā ilāha illā huw, 'alaihi tawakkalt, wa huwa rabbul-'arsyil-'aẓīm.",
        translation:
          'Jika mereka berpaling (dari keimanan), maka katakanlah: "Cukuplah Allah bagiku; tidak ada Tuhan selain Dia. Hanya kepada-Nya aku bertawakkal dan Dia adalah Tuhan yang memiliki \'Arsy yang agung".',
      },
    ],
  },
  {
    title: "Surat Al-Isra' Ayat 110-111",
    repeat: 1,
    tags: ["pagi", "petang", "kubro"],
    children: [
      {
        arabic:
          "قُلِ ادْعُوا اللّٰهَ اَوِ ادْعُوا الرَّحْمٰنَۗ اَيًّا مَّا تَدْعُوْا فَلَهُ الْاَسْمَاۤءُ الْحُسْنٰىۚ وَلَا تَجْهَرْ بِصَلَاتِكَ وَلَا تُخَافِتْ بِهَا وَابْتَغِ بَيْنَ ذٰلِكَ سَبِيْلً ١١٠",
        transliteration:
          "Qulid‘ullāha awid‘ur-raḥmān(a), ayyam mā tad‘ū fa lahul-asmā'ul-ḥusnā, wa lā tajhar biṣalātika wa lā tukhāfit bihā wabtagi baina żālika sabīlā(n).",
        translation:
          'Katakanlah (Nabi Muhammad), “Serulah ‘Allah’ atau serulah ‘Ar-Raḥmān’! Nama mana saja yang kamu seru, (maka itu baik) karena Dia mempunyai nama-nama yang terbaik (Asmaulhusna). Janganlah engkau mengeraskan (bacaan) salatmu dan janganlah (pula) merendahkannya. Usahakan jalan (tengah) di antara (kedua)-nya!”.',
      },
      {
        arabic:
          "وَقُلِ الْحَمْدُ لِلّٰهِ الَّذِيْ لَمْ يَتَّخِذْ وَلَدًا وَّلَمْ يَكُنْ لَّهٗ شَرِيْكٌ فِى الْمُلْكِ وَلَمْ يَكُنْ لَّهٗ وَلِيٌّ مِّنَ الذُّلِّ وَكَبِّرْهُ تَكْبِيْرًا ١١١ ࣖ",
        transliteration:
          "Wa qulil-ḥamdu lillāhil-lażī lam yattakhiż waladaw wa lam yakul lahū syarīkun fil-mulki wa lam yakul lahū waliyyum minaż-żulli wa kabbirhu takbīrā(n).",
        translation:
          'Katakanlah, “Segala puji bagi Allah yang tidak mengangkat seorang anak, tidak mempunyai sekutu dalam kerajaan-Nya, dan tidak memerlukan penolong dari kehinaan! Agungkanlah Dia setinggi-tingginya!”.',
      },
    ],
  },
  {
    title: "Surat Al-Mu'minun Ayat 115-118",
    repeat: 1,
    tags: ["pagi", "petang", "kubro"],
    children: [
      {
        arabic:
          "أَفَحَسِبْتُمْ أَنَّمَا خَلَقْنَـٰكُمْ عَبَثًا وَأَنَّكُمْ إِلَيْنَا لَا تُرْجَعُونَ ١١٥",
        transliteration:
          "Afa ḥasibtum annamā khalaqnākum 'abaṡan wa annakum ilainā lā turja'ụn.",
        translation:
          "Maka apakah kamu mengira, bahwa sesungguhnya Kami menciptakan kamu secara main-main (saja), dan bahwa kamu tidak akan dikembalikan kepada Kami?.",
      },
      {
        arabic:
          "فَتَعَـٰلَى ٱللَّهُ ٱلْمَلِكُ ٱلْحَقُّ ۖ لَآ إِلَـٰهَ إِلَّا هُوَ رَبُّ ٱلْعَرْشِ ٱلْكَرِيمِ ١١٦",
        transliteration:
          "Fa ta'ālallāhul-malikul-ḥaqq, lā ilāha illā huwa rabbul-'arsyil-karīm.",
        translation:
          "Maka Maha Tinggi Allah, Raja Yang Sebenarnya; tidak ada Tuhan selain Dia, Tuhan (Yang mempunyai) 'Arsy yang mulia.",
      },
      {
        arabic:
          "وَمَن يَدْعُ مَعَ ٱللَّهِ إِلَـٰهًا ءَاخَرَ لَا بُرْهَـٰنَ لَهُۥ بِهِۦ فَإِنَّمَا حِسَابُهُۥ عِندَ رَبِّهِۦٓ ۚ إِنَّهُۥ لَا يُفْلِحُ ٱلْكَـٰفِرُونَ ١١٧",
        transliteration:
          "Wa may yad'u ma'allāhi ilāhan ākhara lā burhāna lahụ bihī fa innamā ḥisābuhụ 'inda rabbih, innahụ lā yufliḥul-kāfirụn.",
        translation:
          "Dan barangsiapa menyembah tuhan yang lain di samping Allah, padahal tidak ada suatu dalilpun baginya tentang itu, maka sesungguhnya perhitungannya di sisi Tuhannya. Sesungguhnya orang-orang yang kafir itu tiada beruntung.",
      },
      {
        arabic:
          "وَقُل رَّبِّ ٱغْفِرْ وَٱرْحَمْ وَأَنتَ خَيْرُ ٱلرَّٰحِمِينَ ١١٨",
        transliteration: "Wa qur rabbighfir warḥam wa anta khairur-rāḥimīn.",
        translation:
          'Dan katakanlah: "Ya Tuhanku berilah ampun dan berilah rahmat, dan Engkau adalah Pemberi rahmat Yang Paling baik".',
      },
    ],
  },
  {
    title: "Surat Ar-Rum Ayat 17-26",
    repeat: 1,
    tags: ["pagi", "petang", "kubro"],
    children: [
      {
        arabic: "فَسُبْحَـٰنَ ٱللَّهِ حِينَ تُمْسُونَ وَحِينَ تُصْبِحُونَ ١٧",
        transliteration: "Fa subḥāna llāhi ḥīna tumsūna wa ḥīna tuṣbiḥūn.",
        translation:
          "Maka bertasbihlah kepada Allah di waktu kamu berada di petang hari dan waktu kamu berada di pagi hari.",
      },
      {
        arabic:
          "وَلَهُ ٱلْحَمْدُ فِى ٱلسَّمَـٰوَٰتِ وَٱلْأَرْضِ وَعَشِيًّا وَحِينَ تُظْهِرُونَ ١٨",
        transliteration:
          "Wa lahu l-ḥamdu fī s-samāwāti wa l-arḍi wa ʿashiyyaw wa ḥīna tuẓhirūn.",
        translation:
          "Dan bagi-Nya lah segala puji di langit dan di bumi, dan di waktu petang hari serta ketika kamu berada di waktu zuhur.",
      },
      {
        arabic:
          "يُخْرِجُ ٱلْحَىَّ مِنَ ٱلْمَيِّتِ وَيُخْرِجُ ٱلْمَيِّتَ مِنَ ٱلْحَىِّ وَيُحْىِ ٱلْأَرْضَ بَعْدَ مَوْتِهَا ۚ وَكَذَٰلِكَ تُخْرَجُونَ ١٩",
        transliteration:
          "Yukh’riju l-ḥayya mina l-mayyiti wa yukh’riju l-mayyita mina l-ḥayyi wa yuḥyi l-arḍa baʿda mawtihā, wa kadhālika tukh’rajūn.",
        translation:
          "Dia mengeluarkan yang hidup dari yang mati dan mengeluarkan yang mati dari yang hidup, serta menghidupkan bumi setelah matinya. Dan demikian pula kamu akan dikeluarkan (dari kubur).",
      },
      {
        arabic:
          "وَمِنْ ءَايَـٰتِهِۦٓ أَنْ خَلَقَكُم مِّن تُرَابٍۢ ثُمَّ إِذَآ أَنتُم بَشَرٌ تَنتَشِرُونَ ٢٠",
        transliteration:
          "Wa min āyātihi an khalaqakum min turābin thumma idhā antum basharun tantashirūn.",
        translation:
          "Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan kamu dari tanah, kemudian tiba-tiba kamu menjadi manusia yang berkembang biak.",
      },
      {
        arabic:
          "وَمِنْ ءَايَـٰتِهِۦٓ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَٰجًا لِّتَسْكُنُوٓا إِلَيْهَا وَجَعَلَ بَيْنَكُم مَّوَدَّةً وَرَحْمَةً ۚ إِنَّ فِى ذَٰلِكَ لَـَٔايَـٰتٍۢ لِّقَوْمٍۢ يَتَفَكَّرُونَ ٢١",
        transliteration:
          "Wa min āyātihi an khalaqa lakum min anfusikum azwājan litaskunū ilaihā wa jaʿala baynakum mawaddatan wa raḥmah, inna fī dhālika laāyātin liqawmin yatafakkarūn.",
        translation:
          "Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan untukmu istri-istri dari jenismu sendiri, supaya kamu cenderung dan merasa tenteram kepadanya, dan dijadikan-Nya di antaramu rasa kasih dan sayang. Sesungguhnya pada yang demikian itu benar-benar terdapat tanda-tanda bagi kaum yang berpikir.",
      },
      {
        arabic:
          "وَمِنْ ءَايَـٰتِهِۦ خَلْقُ ٱلسَّمَـٰوَٰتِ وَٱلْأَرْضِ وَٱخْتِلَـٰفُ أَلْسِنَتِكُمْ وَأَلْوَٰنِكُمْ ۚ إِنَّ فِى ذَٰلِكَ لَـَٔايَـٰتٍۢ لِّلْعَـٰلِمِينَ ٢٢",
        transliteration:
          "Wa min āyātihi khalqu s-samāwāti wa l-arḍi wa ikhtilāfu alsinatikum wa alwānikum, inna fī dhālika laāyātin lilʿālamīn.",
        translation:
          "Dan di antara tanda-tanda kekuasaan-Nya ialah penciptaan langit dan bumi, serta berlain-lainan bahasamu dan warna kulitmu. Sesungguhnya pada yang demikian itu benar-benar terdapat tanda-tanda bagi orang-orang yang mengetahui.",
      },
      {
        arabic:
          "وَمِنْ ءَايَـٰتِهِۦ مَنَامُكُم بِٱلَّيْلِ وَٱلنَّهَارِ وَٱبْتِغَآؤُكُم مِّن فَضْلِهِۦٓ ۚ إِنَّ فِى ذَٰلِكَ لَـَٔايَـٰتٍۢ لِّقَوْمٍۢ يَسْمَعُونَ ٢٣",
        transliteration:
          "Wa min āyātihi manāmukum bi-l-layli wa-n-nahāri wa ibtighā’ukum min faḍlihi, inna fī dhālika laāyātin liqawmin yasmaʿūn.",
        translation:
          "Dan di antara tanda-tanda kekuasaan-Nya ialah tidurmu di waktu malam dan siang hari dan usahamu mencari sebagian dari karunia-Nya. Sesungguhnya pada yang demikian itu benar-benar terdapat tanda-tanda bagi kaum yang mendengarkan.",
      },
      {
        arabic:
          "وَمِنْ ءَايَـٰتِهِۦ يُرِيكُمُ ٱلْبَرْقَ خَوْفًا وَطَمَعًا وَيُنَزِّلُ مِنَ ٱلسَّمَآءِ مَآءً فَيُحْىِۦ بِهِ ٱلْأَرْضَ بَعْدَ مَوْتِهَآ ۚ إِنَّ فِى ذَٰلِكَ لَـَٔايَـٰتٍۢ لِّقَوْمٍۢ يَعْقِلُونَ ٢٤",
        transliteration:
          "Wa min āyātihi yurīkum al-barqa khawfan wa ṭamaʿan wa yunazzilu mina s-samā’i mā’an fa-yuḥyī bihī al-arḍa baʿda mawtihā, inna fī dhālika laāyātin liqawmin yaʿqilūn.",
        translation:
          "Dan di antara tanda-tanda kekuasaan-Nya ialah Dia memperlihatkan kepadamu kilat untuk (menimbulkan) ketakutan dan harapan, dan Dia menurunkan air dari langit, lalu menghidupkan bumi dengan air itu sesudah matinya. Sesungguhnya pada yang demikian itu benar-benar terdapat tanda-tanda bagi kaum yang mempergunakan akalnya.",
      },
      {
        arabic:
          "وَمِنْ ءَايَـٰتِهِۦٓ أَن تَقُومَ ٱلسَّمَآءُ وَٱلْأَرْضُ بِأَمْرِهِۦ ۚ ثُمَّ إِذَا دَعَاكُمْ دَعْوَةً مِّنَ ٱلْأَرْضِ إِذَآ أَنتُمْ تَخْرُجُونَ ٢٥",
        transliteration:
          "Wa min āyātihi an taqūma s-samā’u wa-l-arḍu bi-amrihī thumma idhā daʿākum daʿwatan mina l-arḍi idhā antum takhrujūn.",
        translation:
          "Dan di antara tanda-tanda kekuasaan-Nya ialah tegaknya langit dan bumi dengan perintah-Nya. Kemudian apabila Dia memanggil kamu sekali panggil dari bumi, seketika itu (juga) kamu keluar (dari kubur).",
      },
      {
        arabic:
          "وَلَهُۥ مَن فِى ٱلسَّمَـٰوَٰتِ وَٱلْأَرْضِ ۖ كُلٌّ لَّهُۥ قَـٰنِتُونَ ٢٦",
        transliteration:
          "Wa lahu man fī s-samāwāti wa-l-arḍi kullun lahu qānitūn.",
        translation:
          "Dan milik-Nya lah siapa yang ada di langit dan di bumi. Semua hanya tunduk kepada-Nya.",
      },
    ],
  },
  {
    title: "Surat Ghafir Ayat 1-3",
    repeat: 1,
    tags: ["pagi", "petang", "kubro"],
    children: [
      {
        arabic: "حمٓ ١",
        transliteration: "Ḥā Mīm.",
        translation: "Ha Mim.",
      },
      {
        arabic: "تَنزِيلُ ٱلْكِتَـٰبِ مِنَ ٱللَّهِ ٱلْعَزِيزِ ٱلْعَلِيمِ ٢",
        transliteration: "Tanzīlu l-kitābi mina llāhi l-ʿazīzi l-ʿalīm.",
        translation:
          "Diturunkan Kitab ini (Al-Qur'an) dari Allah Yang Maha Perkasa lagi Maha Mengetahui.",
      },
      {
        arabic:
          "غَافِرِ ٱلذَّنبِ وَقَابِلِ ٱلتَّوْبِ شَدِيدِ ٱلْعِقَابِ ذِى ٱلطَّوْلِ ۖ لَآ إِلَـٰهَ إِلَّا هُوَ ۖ إِلَيْهِ ٱلْمَصِيرُ ٣",
        transliteration:
          "Ghāfiri dh-dhanbi wa qābili t-tawbi shadīdi l-ʿiqābi dhī ṭ-ṭawli lā ilāha illā huwa ilayhi l-maṣīr.",
        translation:
          "Yang Mengampuni dosa dan Menerima taubat, yang keras hukuman-Nya, yang mempunyai karunia. Tidak ada Tuhan selain Dia. Hanya kepada-Nya lah (semua makhluk) akan kembali.",
      },
    ],
  },
  {
    title: "Surat Al-Hasyr Ayat 22-24",
    repeat: 1,
    tags: ["pagi", "petang", "kubro"],
    children: [
      {
        arabic:
          "هُوَ ٱللَّهُ ٱلَّذِى لَآ إِلَـٰهَ إِلَّا هُوَ ۖ عَـٰلِمُ ٱلْغَيْبِ وَٱلشَّهَـٰدَةِ ۖ هُوَ ٱلرَّحْمَـٰنُ ٱلرَّحِيمُ ٢٢",
        transliteration:
          "Huwa llāhu lladhī lā ilāha illā huwa ʿālīmu l-ghaybi wa sh-shahādati huwa r-raḥmānu r-raḥīm.",
        translation:
          "Dialah Allah, tidak ada Tuhan selain Dia. Yang mengetahui yang ghaib dan yang nyata. Dialah Yang Maha Pengasih lagi Maha Penyayang.",
      },
      {
        arabic:
          "هُوَ ٱللَّهُ ٱلَّذِى لَآ إِلَـٰهَ إِلَّا هُوَ ٱلْمَلِكُ ٱلْقُدُّوسُ ٱلسَّلَـٰمُ ٱلْمُؤْمِنُ ٱلْمُهَيْمِنُ ٱلْعَزِيزُ ٱلْجَبَّارُ ٱلْمُتَكَبِّرُ ۚ سُبْحَـٰنَ ٱللَّهِ عَمَّا يُشْرِكُونَ ٢٣",
        transliteration:
          "Huwa llāhu lladhī lā ilāha illā huwa l-malikul-quddūsu s-salāmu l-muʾminu l-muhayminu l-ʿazīzu l-jabbāru l-mutakabbir subḥāna llāhi ʿammā yushrikūn.",
        translation:
          "Dialah Allah, tidak ada Tuhan selain Dia. Raja, Yang Maha Suci, Yang Maha Sejahtera, Yang Mengaruniakan Keamanan, Yang Maha Memelihara, Yang Maha Perkasa, Yang Maha Kuasa, Yang Memiliki segala keagungan. Maha Suci Allah dari apa yang mereka persekutukan.",
      },
      {
        arabic:
          "هُوَ ٱللَّهُ ٱلْخَـٰلِقُ ٱلْبَارِئُ ٱلْمُصَوِّرُ ۖ لَهُ ٱلْأَسْمَآءُ ٱلْحُسْنَىٰ ۚ يُسَبِّحُ لَهُۥ مَا فِى ٱلسَّمَـٰوَٰتِ وَٱلْأَرْضِ ۖ وَهُوَ ٱلْعَزِيزُ ٱلْحَكِيمُ ٢٤",
        transliteration:
          "Huwa llāhu l-khāliqu l-bāriʾu l-muṣawwir lahu l-asmāʾu l-ḥusnā yusabbiḥu lahu mā fī s-samāwāti wa l-arḍi wa huwa l-ʿazīzu l-ḥakīm.",
        translation:
          "Dialah Allah, Yang Menciptakan, Yang Mengadakan, Yang Membentuk rupa, yang memiliki nama-nama yang paling baik. Bertasbih kepada-Nya apa yang di langit dan di bumi. Dan Dialah Yang Maha Perkasa lagi Maha Bijaksana.",
      },
    ],
  },
  {
    title: "Surat Al-Zalzalah",
    repeat: 1,
    hasPrefixBasmallah: true,
    tags: ["pagi", "petang", "kubro"],
    children: [
      {
        arabic: "إِذَا زُلْزِلَتِ ٱلْأَرْضُ زِلْزَالَهَا ١",
        transliteration: "Idhā zulzilati l-arḍu zilzālahā.",
        translation: "Apabila bumi digoncangkan dengan goncangan yang dahsyat.",
      },
      {
        arabic: "وَأَخْرَجَتِ ٱلْأَرْضُ أَثْقَالَهَا ٢",
        transliteration: "Wa akhrajati l-arḍu athqālahā.",
        translation:
          "Dan bumi telah mengeluarkan beban-beban berat (yang dikandung)nya.",
      },
      {
        arabic: "وَقَالَ ٱلْإِنسَـٰنُ مَا لَهَا ٣",
        transliteration: "Wa qāla l-insānu mā lahā.",
        translation: "Dan manusia bertanya: 'Mengapa bumi (jadi begini)?'.",
      },
      {
        arabic: "يَوْمَئِذٍۢ تُحَدِّثُ أَخْبَارَهَا ٤",
        transliteration: "Yawmaʾidhin tuḥaddithu akhbārahā.",
        translation: "Pada hari itu bumi menceritakan beritanya.",
      },
      {
        arabic: "بِأَنَّ رَبَّكَ أَوْحَىٰ لَهَا ٥",
        transliteration: "Biʾanna rabbaka awḥā lahā.",
        translation:
          "Karena sesungguhnya Tuhanmu telah memerintahkan (yang sedemikian itu) kepadanya.",
      },
      {
        arabic:
          "يَوْمَئِذٍۢ يَصْدُرُ ٱلنَّاسُ أَشْتَاتًا لِّيُرَوْا أَعْمَـٰلَهُمْ ٦",
        transliteration:
          "Yawmaʾidhin yaṣduru n-nāsu ashtātan liyuraw aʿmālahum.",
        translation:
          "Pada hari itu manusia keluar dari kuburnya dalam keadaan yang bermacam-macam, supaya diperlihatkan kepada mereka (balasan) pekerjaan mereka.",
      },
      {
        arabic: "فَمَن يَعْمَلْ مِثْقَالَ ذَرَّةٍ خَيْرًا يَرَهُۥ ٧",
        transliteration: "Faman yaʿmal mithqāla dharratin khayran yarah.",
        translation:
          "Barangsiapa yang mengerjakan kebaikan sebesar zarrah, niscaya dia akan melihat (balasan)nya.",
      },
      {
        arabic: "وَمَن يَعْمَلْ مِثْقَالَ ذَرَّةٍۢ شَرًّا يَرَهُۥ ٨",
        transliteration: "Wa man yaʿmal mithqāla dharratin sharran yarah.",
        translation:
          "Dan barangsiapa yang mengerjakan kejahatan sebesar zarrah, niscaya dia akan melihat (balasan)nya.",
      },
    ],
  },
  {
    title: "Surat Al-Kafirun",
    repeat: 1,
    hasPrefixBasmallah: true,
    tags: ["pagi", "petang", "kubro"],
    children: [
      {
        arabic: "قُلْ يَـٰٓأَيُّهَا ٱلْكَـٰفِرُونَ ١",
        transliteration: "Qul yā ayyuhā l-kāfirūn.",
        translation: "Katakanlah: 'Hai orang-orang kafir.'.",
      },
      {
        arabic: "لَآ أَعْبُدُ مَا تَعْبُدُونَ ٢",
        transliteration: "Lā aʿbudu mā taʿbudūn.",
        translation: "Aku tidak akan menyembah apa yang kamu sembah.",
      },
      {
        arabic: "وَلَآ أَنتُمْ عَـٰبِدُونَ مَآ أَعْبُدُ ٣",
        transliteration: "Wa lā antum ʿābidūna mā aʿbud.",
        translation: "Dan kamu bukan penyembah Tuhan yang aku sembah.",
      },
      {
        arabic: "وَلَآ أَنَا۠ عَابِدٌ مَّا عَبَدتُّمْ ٤",
        transliteration: "Wa lā anā ʿābidum mā ʿabadtum.",
        translation:
          "Dan aku tidak pernah menjadi penyembah apa yang kamu sembah.",
      },
      {
        arabic: "وَلَآ أَنتُمْ عَـٰبِدُونَ مَآ أَعْبُدُ ٥",
        transliteration: "Wa lā antum ʿābidūna mā aʿbud.",
        translation:
          "Dan kamu tidak pernah (pula) menjadi penyembah Tuhan yang aku sembah.",
      },
      {
        arabic: "لَكُمْ دِينُكُمْ وَلِىَ دِينِ ٦",
        transliteration: "Lakum dīnukum wa liya dīn.",
        translation: "Untukmu agamamu, dan untukku agamaku.",
      },
    ],
  },
  {
    title: "Surat An-Nashr",
    repeat: 1,
    hasPrefixBasmallah: true,
    tags: ["pagi", "petang", "kubro"],
    children: [
      {
        arabic: "إِذَا جَآءَ نَصْرُ ٱللَّهِ وَٱلْفَتْحُ ١",
        transliteration: "Idhā jāʾa naṣru llāhi wa l-fatḥ.",
        translation: "Apabila telah datang pertolongan Allah dan kemenangan.",
      },
      {
        arabic:
          "وَرَأَيْتَ ٱلنَّاسَ يَدْخُلُونَ فِى دِينِ ٱللَّهِ أَفْوَاجًا ٢",
        transliteration: "Wa raʾayta n-nāsa yadkhulūna fī dīni llāhi afwājā.",
        translation:
          "Dan kamu lihat manusia masuk agama Allah dengan berbondong-bondong.",
      },
      {
        arabic:
          "فَسَبِّحْ بِحَمْدِ رَبِّكَ وَٱسْتَغْفِرْهُۚ إِنَّهُۥ كَانَ تَوَّابًۢا ٣",
        transliteration:
          "Fa sabbiḥ biḥamdi rabbika wa staghfirh innahu kāna tawwābā.",
        translation:
          "Maka bertasbihlah dengan memuji Tuhanmu dan mohonlah ampun kepada-Nya. Sesungguhnya Dia adalah Maha Penerima taubat.",
      },
    ],
  },
  {
    title: "Surat Al-Ikhlās",
    repeat: 3,
    hasPrefixBasmallah: true,
    tags: ["pagi", "petang", "sughro", "kubro"],
    children: [
      {
        arabic: "قُلۡ هُوَ ٱللَّهُ أَحَدٌ ١",
        transliteration: "Qul huwa Allāhu aḥad.",
        translation: 'Katakanlah: "Dia-lah Allah, Yang Maha Esa".',
      },
      {
        arabic: "ٱللَّهُ ٱلصَّمَدُ ٢",
        transliteration: "Allāhu ṣ-ṣamad.",
        translation: "Allah tempat meminta segala sesuatu.",
      },
      {
        arabic: "لَمْ يَلِدْ وَلَمْ يُولَدْ ٣",
        transliteration: "Lam yalid wa lam yūlad.",
        translation: "Dia tidak beranak dan tidak pula diperanakkan.",
      },
      {
        arabic: "وَلَمۡ يَكُن لَّهُۥ كُفُوًا أَحَدُۢ ٤",
        transliteration: "Wa lam yakun lahu kufuwan aḥad.",
        translation: "Dan tidak ada seorang pun yang setara dengan Dia.",
      },
    ],
  },
  {
    title: "Surat Al-Falaq",
    repeat: 3,
    hasPrefixBasmallah: true,
    tags: ["pagi", "petang", "sughro", "kubro"],
    children: [
      {
        arabic: "قُلۡ أَعُوذُ بِرَبِّ ٱلۡفَلَقِ ١",
        transliteration: "Qul a‘ūdhu birabbi al-falaq.",
        translation:
          'Katakanlah: "Aku berlindung kepada Tuhan yang menguasai subuh (waktu fajar)".',
      },
      {
        arabic: "مِن شَرِّ مَا خَلَقَ ٢",
        transliteration: "Min sharri mā khalaq.",
        translation: "Dari kejahatan makhluk-Nya.",
      },
      {
        arabic: "وَمِن شَرِّ غَاسِقٍ إِذَا وَقَبَ ٣",
        transliteration: "Wa min sharri ghāsiqin idhā waqab.",
        translation: "Dan dari kejahatan malam apabila telah gelap gulita.",
      },
      {
        arabic: "وَمِن شَرِّ ٱلنَّفَّـٰثَـٰتِ فِى ٱلۡعُقَدِ ٤",
        transliteration: "Wa min sharri an-naffāthāti fī al-‘uqad.",
        translation:
          "Dan dari kejahatan wanita-wanita tukang sihir yang meniup pada buhul-buhul (talinya).",
      },
      {
        arabic: "وَمِن شَرِّ حَاسِدٍ إِذَا حَسَدَ ٥",
        transliteration: "Wa min sharri ḥāsidin idhā ḥasad.",
        translation: "Dan dari kejahatan orang yang dengki apabila ia dengki.",
      },
    ],
  },
  {
    title: "Surat An-Nās",
    repeat: 3,
    hasPrefixBasmallah: true,
    tags: ["pagi", "petang", "sughro", "kubro"],
    children: [
      {
        arabic: "قُلۡ أَعُوذُ بِرَبِّ ٱلنَّاسِ ١",
        transliteration: "Qul a‘ūdhu birabbi an-nās.",
        translation:
          'Katakanlah: "Aku berlindung kepada Tuhan (yang memelihara dan menguasai) manusia".',
      },
      {
        arabic: "مَلِكِ ٱلنَّاسِ ٢",
        transliteration: "Maliki an-nās.",
        translation: "Raja manusia.",
      },
      {
        arabic: "إِلَـٰهِ ٱلنَّاسِ ٣",
        transliteration: "Ilāhi an-nās.",
        translation: "Sembahan manusia.",
      },
      {
        arabic: "مِن شَرِّ ٱلۡوَسۡوَاسِ ٱلۡخَنَّاسِ ٤",
        transliteration: "Min sharri al-waswāsi al-khannās.",
        translation: "Dari kejahatan (bisikan) setan yang biasa bersembunyi.",
      },
      {
        arabic: "ٱلَّذِى يُوَسۡوِسُ فِى صُدُورِ ٱلنَّاسِ ٥",
        transliteration: "Alladhī yuwaswisu fī ṣudūri an-nās.",
        translation: "Yang membisikkan (kejahatan) ke dalam dada manusia.",
      },
      {
        arabic: "مِنَ ٱلۡجِنَّةِ وَٱلنَّاسِ ٦",
        transliteration: "Mina al-jinnati wa an-nās.",
        translation: "Dari (golongan) jin dan manusia.",
      },
    ],
  },
  {
    title: "Doa Al-Ma'tsurat",
    repeat: 3,
    tags: ["pagi", "sughro", "kubro"],
    children: [
      {
        arabic:
          "اَصْبَحْنَا وَاَصْبَحَ الْمُلْكُ لِلّٰهِ وَالْحَمْدُ لِلّٰهِ لَا شَرِيْكَ لَهُ. لَآ اِلٰهَ اِلَّا هُوَ وَاِلَيْهِ النُّشُوْرُ",
        transliteration:
          "Ash-baḥnā wa ash-baḥal-mulku lillāhi wal-ḥamdulillāhi lā syarīka lahū lā ilāha illāhuwa wa ilaihi an-nusyūr.",
        translation:
          "Kami berpagi hari dan berpagi hari pula kerajaan milik Allah. Segala puji bagi Allah, tiada sekutu bagi-Nya, tiada Tuhan melainkan Dia dan kepada-Nya tempat kembali.",
      },
    ],
  },
  {
    title: "Doa Al-Ma'tsurat",
    repeat: 3,
    tags: ["petang", "sughro", "kubro"],
    children: [
      {
        arabic:
          "أَمْسَيْنَا وَأَمْسَى الْمُلْكُ لِلّٰهِ وَالْحَمْدُ لِلّٰهِ لَا شَرِيْكَ لَهُ. لَآ إِلٰهَ اِلاَّ هُوَ وَاِلَيْهِ النُّشُوْرُ",
        transliteration:
          "Amsainaa wa amsal-mulku lillahi walhamdu lillahi laa syarika lahu, laa ilaaha illaahu wa ilaihinnusyuur.",
        translation:
          "Kami telah memasuki waktu petang dan kerajaan hanyalah milik Allah, segala puji bagi Allah. Tidak ada sekutu bagi-Nya, tidak ada Tuhan selain Dia, dan kepada-Nya tempat kembali.",
      },
    ],
  },
  {
    title: "Doa Al-Ma'tsurat",
    repeat: 3,
    tags: ["pagi", "sughro", "kubro"],
    children: [
      {
        arabic:
          "اَصْبَحْنَا عَلَى فِطْرَةِ الإِْسْلَامِ. وَكَلِمَةِ الْإِحْلَاصِ. وَعَلَى دِيْنِ نَبِيِّنَا مُحَمَّدٍ صَلَّى اللّهُ عَلَيْهِ وَسَلَّمَ. وَعَلَى مِلَّةِ أَبِيْنَا إِبْرَاهِيْمَ حَنِيْفًا. وَمَا كَانَ مِنَ الْمُشْرِكِيْنَ",
        transliteration:
          "Ash-baḥnā ‘alā fiṭratil-islāmi wa ‘alā kalimatil-ikhlas wa ‘alā dīni nabiyyinā muḥammadin ṣallallāhu ‘alaihi wa sallam wa ‘alā millati abīnā ibrahīma ḥanīfan musliman wa mā kāna minal-musyrikīn.",
        translation:
          "Kami berpagi hari dalam keadaan fitrah Islam, dalam kalimat ikhlas, dalam agama Nabi kami Muhammad shallallahu ‘alaihi wa sallam, dalam agama ayah kami Ibrahim yang lurus, seorang muslim, dan tidaklah termasuk orang-orang musyrik.",
      },
    ],
  },
  {
    title: "Doa Al-Ma'tsurat",
    repeat: 3,
    tags: ["petang", "sughro", "kubro"],
    children: [
      {
        arabic:
          "أَمْسَيْنَا عَلَى فِطْرَةِ الْإِسْلَامِ. وَكَلِمَةِ الإِخْلَاصِ. وَعَلَى دِيْنِ  نَبِيِّنَا مُحَمَّدٍ صَلَّى اللّهُ عَلَيْهِ وَسَلَّمَ. وَعَلَى مِلَّةِ أَبِيْنَا إِبْرَاهِيْمَ حَنِيْفًا. وَمَا كَانَ مِنَ الْمُشْرِكِيْنَ",
        transliteration:
          "Amsainaa ‘alaa fithrotis-slaam wa ‘alaa kalimatil-ikhlaas wa ‘alaa diini nabiyyinaa Muhammad shallallahu ‘alaihi wa sallam wa ‘alaa millati abiinaa Ibraahiima haniifam musliman wa maa kaana minal-musyrikiin.",
        translation:
          "Kami telah memasuki waktu petang dalam keadaan fitrah Islam, dalam keadaan kalimat ikhlas, dalam agama Nabi kami Muhammad shallallahu ‘alaihi wa sallam, dalam agama bapak kami Ibrahim yang lurus, seorang muslim, dan tidaklah termasuk orang-orang musyrik.",
      },
    ],
  },
  {
    title: "Doa Al-Ma'tsurat",
    repeat: 3,
    tags: ["pagi", "sughro", "kubro"],
    children: [
      {
        arabic:
          "اللَّهُمَّ إِنِّي اَصْبَحْتُ مِنْكَ فِى نِعْمَةٍ وَعَافِيَةٍ وَسِتْرٍ. فَأَتِمَّ عَلَيَّ نِعْمَتَكَ وَعَافِيَتَكَ وَسِتْرَكَ فِي الدُّنْيَا وَ الْأَخِرَةِ",
        transliteration:
          "Allāhumma innī ash-baḥtu minka fī ni‘matin wa ‘āfiyatins-sitr fa-atimm ‘alayya ni‘matak wa ‘āfiyatika wa sitraka fīd-dunyā wal-ākhirah.",
        translation:
          "Ya Allah, sesungguhnya aku telah memasuki waktu pagi dalam keadaan mendapat nikmat, sehat dan dalam keadaan tertutup. Maka sempurnakanlah atas diriku nikmat, kesehatan dan perlindungan-Mu di dunia dan akhirat.",
      },
    ],
  },
  {
    title: "Doa Al-Ma'tsurat",
    repeat: 3,
    tags: ["petang", "sughro", "kubro"],
    children: [
      {
        arabic:
          "اللُّهُمَّ إِنِّى أَمْسَيْتُ مِنْكَ فِى نِعْمَةٍ وَعَافِيَةٍ وَسِتْرٍ. فَأَتِمَّ عَلَيَّ نِعْمَتَكَ وَعَافِيَتَكَ وَسِتْرَكَ فِي الدُّنْيَا وَالأَخِرَةِ",
        transliteration:
          "Allāhumma innī amsaitu minka fī ni‘matin wa ‘āfiyatins-sitr fa-atimm ‘alayya ni‘matak wa ‘āfiyatika wa sitraka fī ad-dunyā wal-ākhirah.",
        translation:
          "Ya Allah, sesungguhnya aku telah memasuki waktu petang dengan nikmat, kesehatan, dan perlindungan dari-Mu. Maka sempurnakanlah atas diriku nikmat, kesehatan, dan perlindungan-Mu di dunia dan akhirat.",
      },
    ],
  },
  {
    title: "Doa Al-Ma'tsurat",
    repeat: 3,
    tags: ["pagi", "sughro", "kubro"],
    children: [
      {
        arabic:
          "اللُّهُمَّ مَآ أَصْبَحَ بِي مِنْ نِعْمَةٍ أَوْ بِأَحَدٍ مِنْ خَلْقِكَ فَمِنْكَ وَحْدَكَ لَا شَرِيْكَ لَكَ. فَلَكَ الْحَمْدُ وَلَكَ الشُّكْرُ",
        transliteration:
          "Allāhumma mā ash-baha bī min ni‘matin aw bi-ahadin min khalqika faminka waḥdaka lā syarīka laka falaka al-ḥamdu wa laka ash-shukr.",
        translation:
          "Ya Allah, apa saja nikmat yang aku rasakan pagi ini atau yang diperoleh oleh salah seorang makhluk-Mu, maka semuanya datang dari-Mu semata, tiada sekutu bagi-Mu. Bagi-Mu segala puji dan syukur.",
      },
    ],
  },
  {
    title: "Doa Al-Ma'tsurat",
    repeat: 3,
    tags: ["petang", "sughro", "kubro"],
    children: [
      {
        arabic:
          "اللَّهُمَّ مَآ أَمْسَىْ بِي مِنْ نِعْمَةٍ أَوْ بِأَحَدٍ مِنْ خَلْقِكَ فَمِنْكَ وَحْدَكَ لَا شَرِيْكَ لَكَ. فَلَكَ الْحَمْدُ وَلَكَ الشُّكْرُ",
        transliteration:
          "Allāhumma mā amsa bī min ni‘matin aw bi-ahadin min khalqika faminka wahdaka lā syarīka laka falakal-ḥamdu walakasy-syukr.",
        translation:
          "Ya Allah, segala nikmat yang telah aku rasakan atau yang diperoleh oleh salah seorang makhluk-Mu, semuanya berasal dari-Mu semata, tidak ada sekutu bagi-Mu. Maka bagi-Mu segala puji dan syukur.",
      },
    ],
  },
  {
    title: "Doa Al-Ma'tsurat",
    repeat: 3,
    tags: ["pagi", "petang", "sughro", "kubro"],
    children: [
      {
        arabic:
          "يَارَبِّي لَكَ الْحَمْدُ كَمَا يَنْبِغِي لِجَلاَلِ وَجْهِكَ وَ عَظِيْمِ سُلْطَانِكَ",
        transliteration:
          "Yā rabbī laka al-ḥamdu kamā yanbaghī li jalāli wajhika wa li ‘aẓīmi sulṭānik.",
        translation:
          "Ya Tuhanku, bagi-Mu segala puji, sebagaimana semestinya bagi keagungan wajah-Mu dan kebesaran kekuasaan-Mu.",
      },
    ],
  },
  {
    title: "Doa Al-Ma'tsurat",
    repeat: 3,
    tags: ["pagi", "petang", "sughro", "kubro"],
    children: [
      {
        arabic:
          "رَضِيتُ بِاللّهِ رَبًّا. وَبِالْإِسْلَامِ دِيْنًا. وَ بِمُحَمَّدٍ نَبِيَّا وَرَسُوْلاً",
        transliteration:
          "Raḍītu billāhi rabban wa bil-islāmi dīnan wa bi-muḥammadin nabiyyan wa rasūlan.",
        translation:
          "Aku ridha Allah sebagai Tuhanku, Islam sebagai agamaku, dan Muhammad sebagai Nabi dan Rasul.",
      },
    ],
  },
  {
    title: "Doa Al-Ma'tsurat",
    repeat: 3,
    tags: ["pagi", "petang", "sughro", "kubro"],
    children: [
      {
        arabic:
          "سُبْحَانَ اللّهِ وَبِحَمْدِه. عَدَدَ خَلْقِهِ وَرِضَا نَفْسِهِ. وَزِنَةَ عَرْشِهِ وَمِدَادَ كَلِمَاتِهِ",
        transliteration:
          "Subḥānallāhi wa biḥamdih ‘adada khalqihī wa riḍā nafsihī wa zinata ‘arsyihī wa mīdāda kalimātihī.",
        translation:
          "Maha Suci Allah, aku memuji-Nya sebanyak makhluk-Nya, sebagaimana keridhaan-Nya, seberat timbangan ‘Arsy-Nya dan sebanyak tinta kalimat-Nya.",
      },
    ],
  },
  {
    title: "Doa Al-Ma'tsurat",
    repeat: 3,
    tags: ["pagi", "petang", "sughro", "kubro"],
    children: [
      {
        arabic:
          "بِسْمِ اللّهِ الَّذِي لَا يَضُرُّ مَعَ اسْمِهِ شَيْءٌ فِى الْأَرْضِ وَلَا فِى السَّمَاءِ وَهُوَ السَّمِيْعُ الْعَلِيْمُ",
        transliteration:
          "Bismillāhil-ladhī lā yaḍurru ma‘a ismihi syai-un fī al-arḍi wa lā fī as-samā’i wa huwa as-samī‘ul-‘alīm.",
        translation:
          "Dengan menyebut nama Allah yang bila disebut, segala sesuatu di bumi dan di langit tidak akan berbahaya, dan Dia-lah Yang Maha Mendengar lagi Maha Mengetahui.",
      },
    ],
  },
  {
    title: "Doa Al-Ma'tsurat",
    repeat: 3,
    tags: ["pagi", "petang", "sughro", "kubro"],
    children: [
      {
        arabic:
          "اللَّهُمَّ إِنَّا نَعُوْذُبِكَ مِنْ أَنْ نُشْرِكَ بِكَ شَيْئًا نَعْلَمُهُ. وَنَسْتَغْفِرُكَ لِمَا لَا نَعْلَمُهُ",
        transliteration:
          "Allāhumma innā na‘ūdzu bika min an nusyrika bika syai-an na‘lamuhu wa nastaghfiruka limā lā na‘lamuhu.",
        translation:
          "Ya Allah, sesungguhnya kami berlindung kepada-Mu dari syirik kepada-Mu, sedangkan kami mengetahuinya, dan kami memohon ampun kepada-Mu atas apa-apa yang tidak kami ketahui.",
      },
    ],
  },
  {
    title: "Doa Al-Ma'tsurat",
    repeat: 3,
    tags: ["pagi", "petang", "sughro", "kubro"],
    children: [
      {
        arabic:
          "أَعُوْذُ بِكَلِمَاتِ اللّهِ التَّامَّاتِ مِنْ شَرِّ مَا خَلَقَ",
        transliteration:
          "A‘ūdhu bikalimātil-lāhit-tāmmāti min syarri mā khalaq.",
        translation:
          "Aku berlindung dengan kalimat-kalimat Allah yang sempurna dari kejahatan makhluk yang diciptakan-Nya.",
      },
    ],
  },
  {
    title: "Doa Al-Ma'tsurat",
    repeat: 3,
    tags: ["pagi", "petang", "sughro", "kubro"],
    children: [
      {
        arabic:
          "اللَّهُمَّ إِنِّى أَعُوْذُبِكَ مِنَ الْهَمِّ وَ الْحَزَن. وَأَعُوْذُبِكَ مِنَ الْعَجْزِ وَالْكَسَلِ. وَأَعُوْذُبِكَ مِنَ الْجُبْنِ وَالْبُخْلِ. وَأَعُوْذُ بِكَ مِنْ غَلَبَةِ الدَّيْنِ وَقَهْرِ الرِّجَالِ",
        transliteration:
          "Allāhumma innī a‘ūdzu bika minal-hammil-wal-ḥazan, wa a‘ūdzu bika minal-‘ajzi wal-kasal, wa a‘ūdzu bika minal-jubni wal-bukhl, wa a‘ūdzu bika min ghalabatid-daini wa qahrir-rijāl.",
        translation:
          "Ya Allah, aku berlindung kepada-Mu dari kesusahan dan kesedihan, aku berlindung kepada-Mu dari kelemahan dan kemalasan, aku berlindung kepada-Mu dari sifat pengecut dan bakhil, aku berlindung kepada-Mu dari hutang yang menindas dan dari kekuasaan manusia.",
      },
    ],
  },
  {
    title: "Doa Al-Ma'tsurat",
    repeat: 3,
    tags: ["pagi", "petang", "sughro", "kubro"],
    children: [
      {
        arabic:
          "اللَّهُمَّ عَافِنِي فِي بَدَنِي. اللَّهُمَّ عَافِنِي فِي سَمْعِي. اللَّهُمَّ عَافِنِي فِي بَصَرِي. لَآ إِلٰهَ إِلَّآ أَنْتَ",
        transliteration:
          "Allāhumma ‘āfinī fī badanī, allāhumma ‘āfinī fī sam‘ī, allāhumma ‘āfinī fī baṣarī.",
        translation:
          "Ya Allah, berilah aku kesehatan pada badanku, berilah aku kesehatan pada pendengaranku, berilah aku kesehatan pada penglihatanku.",
      },
    ],
  },
  {
    title: "Doa Al-Ma'tsurat",
    repeat: 3,
    tags: ["pagi", "petang", "sughro", "kubro"],
    children: [
      {
        arabic:
          "اللَّهُمَّ إِنِّى أَعُوْذُ بِكَ مِنَ الْكُفْرِ وَالْفَقْرِ. وَأَعُوْذُ بِكَ مِنْ عَذَابِ الْقَبْرِ. لَا إِلٰهَ إِلَّآ أَنْتَ",
        transliteration:
          "Allāhumma innī a‘ūdzu bika minal-kufri wal-faqri, wa a‘ūdzu bika min ‘adzābil-qabr, lā ilāha illā anta.",
        translation:
          "Ya Allah, aku berlindung kepada-Mu dari kekufuran dan kefakiran, aku berlindung kepada-Mu dari siksa kubur, tidak ada Tuhan selain Engkau.",
      },
    ],
  },
  {
    title: "Doa Al-Ma'tsurat",
    repeat: 3,
    tags: ["pagi", "petang", "sughro", "kubro"],
    children: [
      {
        arabic:
          "اللَّهُمَّ أَنْتَ رَبِّي لَآ إلٰهَ إِلَّآ أنْتَ خَلَقْتَنِي وَأَنَا عَبْدُكَ. وَأَنَا عَلَى عَهْدِكَ وَوَعْدِكَ مَاسْتَطَعْتُ. أَعُوْذُبِكَ مِنْ شَرِّمَا صَنَعْتُ أَبُوْءُ لَكَ بِنِعْمَتِكَ عَلَيَّ. وَأَبُوْءُ بِذَنْبِى. فَاغْفِرْ لِى فَإِنَّهُوْ لَا يَغْفِرُ الذُّنُوْبَ إِلَّآ أَنْتَ",
        transliteration:
          "Allāhumma anta rabbī lā ilāha illā anta khalaqtanī wa anā ‘abduka wa anā ‘alā ‘ahdika wa wa‘dika mā astaṭa‘tu a‘ūdzu bika min syarri mā ṣana‘tu abū‘u laka bini‘matika ‘alayya wa abū‘u bidzambī faghfir lī fa innahu lā yaghfirudz-dzunūba illā anta.",
        translation:
          "Ya Allah, Engkau adalah Tuhanku, tidak ada Tuhan selain Engkau, Engkau telah menciptakanku dan aku adalah hamba-Mu, aku akan setia pada janji dan perjanjian-Mu selama aku mampu, aku berlindung kepada-Mu dari kejahatan yang aku lakukan, aku mengakui nikmat-Mu yang telah Engkau berikan kepadaku dan aku mengakui dosaku, maka ampunilah aku, karena tidak ada yang dapat mengampuni dosa kecuali Engkau.",
      },
    ],
  },
  {
    title: "Doa Al-Ma'tsurat",
    repeat: 3,
    tags: ["pagi", "petang", "sughro", "kubro"],
    children: [
      {
        arabic:
          "أَسْتَغْفِرُ اللّهَ الَّذِي لَآ إِلٰهَ إِلاَّ هُوَ الْحَيُّ الْقَيُّوْمُ وَأَتُوْبُ إِلَيْهِ",
        transliteration:
          "Astaghfirullāhal-‘aẓīmal-ladhī lā ilāha illā huwal-ḥayyul-qayyūma wa atūbu ilaih.",
        translation:
          "Aku memohon ampun kepada Allah yang Maha Agung, tidak ada Tuhan selain Dia, yang Maha Hidup dan Maha Berdiri Sendiri, dan aku bertaubat kepada-Nya.",
      },
    ],
  },
  {
    title: "Doa Al-Ma'tsurat",
    repeat: 10,
    tags: ["pagi", "petang", "sughro", "kubro"],
    children: [
      {
        arabic:
          "اللَّهُمَّ صَلِّ عَلَى مُحَمَّدٍ وَعَلَى اٰلِ مُحَمَّدٍ. كَمَا صَلَّيْتَ عَلَى إِبْرَاهِيْمَ وَعَلَى اٰلِ إِبْرَاهِيْمَ. وَبَارِكْ عَلَى مُحَمَّدٍ وَعَلَى اٰلِ مُحَمَّدٍ. كَمَا بَارَكْتَ عَلَى إِبْرَاهِيْمَ وَعَلٰى اٰلِ إِبْرَاهِيْمَ. فِي الْعَالَمِيْنَ إِنَّكَ حَمِيْدٌ مَجيْدٌ",
        transliteration:
          "Allāhumma shalli ‘alā sayyidinā muḥammadin wa ‘alā āli sayyidinā muḥammadin kamā shallayta ‘alā sayyidinā ibrahīma wa ‘alā āli sayyidinā ibrahīma wa bārik ‘alā sayyidinā muḥammadin wa ‘alā āli sayyidinā muḥammadin kamā bārakta ‘alā sayyidinā ibrahīma wa ‘alā āli sayyidinā ibrahīma fil-‘ālamīna innaka ḥamīdun majīd.",
        translation:
          "Ya Allah, limpahkanlah shalawat kepada junjungan kami Nabi Muhammad dan keluarga junjungan kami Nabi Muhammad, sebagaimana Engkau limpahkan shalawat kepada junjungan kami Nabi Ibrahim dan keluarga junjungan kami Nabi Ibrahim, serta berkahilah kepada junjungan kami Nabi Muhammad dan keluarga junjungan kami Nabi Muhammad, sebagaimana Engkau berkahi kepada junjungan kami Nabi Ibrahim dan keluarga junjungan kami Nabi Ibrahim di seluruh alam, sesungguhnya Engkau Maha Terpuji lagi Maha Mulia.",
      },
    ],
  },
  {
    title: "Doa Al-Ma'tsurat",
    repeat: 100,
    tags: ["pagi", "petang", "sughro", "kubro"],
    children: [
      {
        arabic:
          "سُبْحَانَ اللّهِ. وَالْحَمْدُ لِلّٰهِ. وَلَآ إِلٰهَ إِلَّا اللّهُ. وَاللّهُ أَكْبَرُ",
        transliteration:
          "Subḥānallāhi wal-ḥamdulillāhi wa lā ilāha illallāhu wallāhu akbar.",
        translation:
          "Maha Suci Allah, segala puji bagi Allah, tidak ada Tuhan selain Allah, dan Allah Maha Besar.",
      },
    ],
  },
  {
    title: "Doa Al-Ma'tsurat",
    repeat: 10,
    tags: ["pagi", "petang", "sughro", "kubro"],
    children: [
      {
        arabic:
          "لَا إِلٰهَ إِلَّا اللّهُ وَحْدَهُو لَاشَرِيْكَ لَه. لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيْرٌ",
        transliteration:
          "Lā ilāha illallāhu waḥdahu lā syarīka lahu lahul-mulku wa lahul-ḥamdu wa huwa ‘alā kulli syai-in qadīr.",
        translation:
          "Tidak ada Tuhan selain Allah, Yang Maha Esa, tidak ada sekutu bagi-Nya, bagi-Nya kerajaan dan bagi-Nya segala puji, dan Dia Maha Kuasa atas segala sesuatu.",
      },
    ],
  },
  {
    title: "Doa Al-Ma'tsurat",
    repeat: 3,
    tags: ["pagi", "petang", "sughro", "kubro"],
    children: [
      {
        arabic:
          "سُبْحَانَكَ اللّٰهُمَّ وَبِحَمْدِكَ. أَشْهَدُ أَنْ لَآ إِلٰهَ إِلاَّ أَنْتَ أَسْتَغْفِرُكَ وَأَتُوْبُ إِلَيْكَ",
        transliteration:
          "Subḥānaka allāhumma wa biḥamdika asyhadu allā ilāha illā anta astaghfiruka wa atūbu ilaika.",
        translation:
          "Maha Suci Engkau, ya Allah, dengan memuji-Mu, aku bersaksi bahwa tidak ada Tuhan selain Engkau, aku memohon ampun kepada-Mu dan bertaubat kepada-Mu.",
      },
    ],
  },
  {
    title: "Doa Al-Ma'tsurat",
    repeat: 3,
    tags: ["pagi", "petang", "sughro", "kubro"],
    children: [
      {
        arabic:
          "للَّهُمَّ صَلِّ عَلَى مُحَمَّدٍ عَبْدِكَ وَنَبِيِّكَ وَرَسُوْلِكَ النَّبِيِّ الْأُمِّيِّ وَعَلَى اٰلِهِ وَصَحْبِهِ وَ سَلِّمْ تَسْلِيْمًا. عَدَدَمَآ أَحَاطَ بِهِ عِلْمُكَ. وَخَطَّ بِهِ قَلَمُكَ. وَأَحْصَاهُ كِتَابُكَ. وَارْضَ اللَّهُمَّ عَنْ سَادَاتِنَا أَبِى بَكْرِ وَعُمَرَ وَعُثْمَانَ وَعَلِيٍّ وَعَنِ الصَّحَابَةِ أَجْمَعِيْنَ. وَعَنِ التَّابِعِيْنَ وَ تَابِعِيْهِمْ بِإِحْسَانٍ إِلَى يَوْمِ الدِّيْنِ",
        transliteration:
          "Allāhumma shalli ‘alā sayyidinā muḥammadin ‘abduka wa nabiyyika wa rasūlika n-nabīl-ummiyyi wa ‘alā ālihi wa ṣaḥbihi wa sallim taslīman ‘adadamā aḥada bihi ‘ilmuka wa khaṭṭa bihi qalamuka wa akhsāhu kitābuka wa arḍallāhumma ‘an ṣadātinā abī bakrin wa ‘umar wa ‘utsman wa ‘alīyyin.",
        translation:
          "Ya Allah, limpahkanlah shalawat kepada junjungan kami Nabi Muhammad, hamba dan Rasul-Mu, Nabi yang ummi, dan kepada keluarga serta sahabatnya, semoga keselamatan tercurah sebanyak ilmu-Mu, sebanyak pena-Mu menulis, sebanyak isi kitab-Mu, dan ridhoilah Engkau kepada para pemimpin kami, Abu Bakar, Umar, Utsman, Ali, kepada seluruh sahabat, kepada tabi’in dan pengikut mereka dengan sebaik-baiknya hingga hari kiamat.",
      },
    ],
  },
  {
    title: "Surat Ash-Shaffat Ayat 180-182",
    repeat: 3,
    tags: ["pagi", "petang", "sughro", "kubro"],
    children: [
      {
        arabic:
          "سُبْحٰنَ رَبِّكَ رَبِّ الْعِزَّةِ عَمَّا يَصِفُوْنَ ١٨٠ وَسَلٰمٌ عَلَى الْمُرْسَلِيْنَ ١٨١ وَالْحَمْدُ لِلّٰهِ رَبِّ الْعٰلَمِيْنَ ١٨٢",
        transliteration:
          "Subḥānaka rabbika rabbil-‘izzati ‘ammā yashifūna wa sallāmu ‘alal-mursalīna wal-ḥamdu lillāhi rabbil-‘ālamīn.",
        translation:
          "Maha Suci Engkau, Tuhanmu, Tuhan yang memiliki keagungan dari apa yang mereka katakan, dan keselamatan tercurah kepada para Rasul, segala puji bagi Allah, Tuhan semesta alam.",
      },
    ],
  },
  {
    title: "Surat Al-Imran Ayat 26-27",
    repeat: 1,
    tags: ["pagi", "petang", "sughro", "kubro"],
    children: [
      {
        arabic:
          "قُلِ اللّٰهُمَّ مٰلِكَ الْمُلْكِ تُؤْتِى الْمُلْكَ مَنْ تَشَآءُ وَتَنْزِعُ الْمُلْكَ مِمَّنْ تَشَآءُۖ وَتُعِزُّ مَنْ تَشَآءُ وَتُذِلُّ مَنْ تَشَآءُۗ بِيَدِكَ الْخَيْرُۗ اِنَّكَ عَلٰى كُلِّ شَيْءٍ قَدِيْرٌ ٢٦ ",
        transliteration:
          "Quli allāhumma mālika al-mulki tu'tī al-mulka man tashā'u wa tanzi‘u al-mulka mimman tashā'u wa tu‘izzu man tashā'u wa tudhillu man tashā'u biyadika al-khayru innaka ‘alā kulli shay'in qadīr.",
        translation:
          "Katakanlah (Muhammad), 'Wahai Tuhan Yang mempunyai kerajaan, Engkau berikan kerajaan kepada siapa yang Engkau kehendaki dan Engkau cabut kerajaan dari siapa yang Engkau kehendaki. Engkau muliakan siapa yang Engkau kehendaki dan Engkau hinakan siapa yang Engkau kehendaki. Di tangan-Mu lah segala kebajikan. Sungguh, Engkau Maha Kuasa atas segala sesuatu.'.",
      },
      {
        arabic:
          "تُوْلِجُ الَّيْلَ فِى النَّهَارِ وَتُوْلِجُ النَّهَارَ فِى الَّيْلِ وَتُخْرِجُ الْحَيَّ مِنَ الْمَيِّتِ وَتُخْرِجُ الْمَيِّتَ مِنَ الْحَيِّ وَتَرْزُقُ مَنْ تَشَآءُ بِغَيْرِ حِسَابٍ٢٧",
        transliteration:
          "Tūliju al-layla fī an-nahāri wa tūliju an-nahāra fī al-layli wa tukh'riju al-ḥayya mina al-mayyiti wa tukh'riju al-mayyita mina al-ḥayyi wa tarzuqu man tashā'u bighayri ḥisāb.",
        translation:
          "Engkau masukkan malam ke dalam siang dan Engkau masukkan siang ke dalam malam. Engkau keluarkan yang hidup dari yang mati, dan Engkau keluarkan yang mati dari yang hidup. Dan Engkau beri rezeki kepada siapa yang Engkau kehendaki tanpa perhitungan.",
      },
    ],
  },
  {
    title: "Doa Robitoh",
    repeat: 1,
    tags: ["pagi", "sughro", "kubro"],
    children: [
      {
        arabic:
          "اللَّهُمَّ إِنَّ هٰذَا إِقْبَالُ نَهَارِكَ وَإِدْبَارُ لَيْلِكَ وَأَصْوَاتُ دُعَاتِكَ فَاغْفِرْلِيْ",
        transliteration:
          "Allāhumma innahā iqbālun nahārika wa idbārul laili wa aṣwātud du‘ātika faghfirlī.",
        translation:
          "Ya Allah, sesungguhnya ini adalah siang-Mu yang telah menjelang dan malam-Mu yang telah berlalu, serta suara-suara dari para penyeru-Mu, maka ampunilah aku.",
      },
    ],
  },
  {
    title: "Doa Robitoh",
    repeat: 1,
    tags: ["petang", "sughro", "kubro"],
    children: [
      {
        arabic:
          "اللَّهُمَّ إِنَّ هٰذَا إِقْبَالُ لَيْلِكَ وَإِدْبَارُ نَهَارِكَ وَأَصْوَاتُ دُعَاتِكَ فَاغْفِرْلِيْ",
        transliteration:
          "Allāhumma innahā iqbālun nahārika wa idbārul laili wa aṣwātud du‘ātika faghfirlī.",
        translation:
          "Ya Allah, sesungguhnya ini adalah malam-Mu yang telah menjelang dan siang-Mu yang telah berlalu, serta suara-suara dari para penyeru-Mu, maka ampunilah aku.",
      },
    ],
  },
  {
    title: "Doa Robitoh",
    repeat: 1,
    tags: ["pagi", "petang", "sughro", "kubro"],
    children: [
      {
        arabic:
          "اللَّهُمَّ إِنَّكَ تَعْلَمُ أَنَّ هٰذِهِ الْقُلُوْبَ قَدِ اجْتَمَعَتْ عَلَى مَحَبَّتِكَ. وَالْتَقَتْ عَلَى طَاعَتِكَ. وَتَوَحَّدَتْ عَلَى دَعْوَتِكَ. وَتَعَاهَدَتْ عَلَى نُصْرَةِ شَرِيْعَتِكَ. فَوَثِّقِ اللّٰهُمَّ رَابِطَتَهَا وَأَدِمْ وُدَّهَا وَاهْدِهَا سُبُلَهَا وَامْلَأْهَا بُنُوْرِكَ الَّذِي لَا يَخْبُو وَاشْرَحْ صُدُوْرَهَا. بِفَيْضِ الإِيْمَانِ بِكَ وَجَمِيْلِ التَّوَكُّلِ عَلَيْكَ وَأَحْيِهَا بِمَعْرِفَتِكَ وَأَمِتْهَا عَلَى الشَّهَادَةِ فِى سَبِيْلِكَ إِنَّكَ نِعْمَ الْمَوْلَى وَنِعْمَ النَّصِيْرُ. اللّٰهُمَّ اَمِيْن. وَصَلَّى اللّهُ عَلَى سَيِّدِنَا مُحَمَّدٍ وَعَلَى اٰلِهِ وَصَحْبِهِ وَسَلَّمَ",
        transliteration:
          "Allāhumma innaka ta‘lamu anna hādihil qulūba qadij-tama‘at ‘alā maḥabbatika wa at-taqat ‘alā ṭā‘atika wa tawwaḥadat ‘alā da‘watika wa ta‘āhadat ‘alā nuṣrati syarī‘atika fawaththiqillāhumma rābiṭatahā wa adim wuddahā wa ahdiha subulahā wa amla’ahā binūrikalladhī lā yakhbū wa asyrah ṣudūrahā bifayḍil īmānibika wa jamīlittawakkuli ‘alayka wa aḥyihā bima‘rifatika wa amithhā ‘alasyahādati fī sabīlik, innaka ni‘mal mawlā wa ni‘man naṣīr. Allāhumma amīn. Wa shalli allāhumma ‘alā sayyidinā muḥammadin wa ‘alā ālihi wa ṣaḥbihi wa sallim.",
        translation:
          "Ya Allah, sesungguhnya Engkau mengetahui bahwa hati-hati ini telah berkumpul dalam cinta kepada-Mu, bersatu dalam ketaatan kepada-Mu, bersatu dalam doa kepada-Mu, dan bersatu dalam membela syariat-Mu. Maka kuatkanlah, ya Allah, ikatan hati-hati ini, pertahankanlah kasih sayang di antara mereka, berikanlah petunjuk kepada jalan-jalan mereka, penuhilah mereka dengan cahaya-Mu yang tidak akan padam, lapangkanlah dadanya dengan limpahan iman kepada-Mu, keindahan tawakkal kepada-Mu, hidupkanlah mereka dengan pengetahuan-Mu, matikanlah mereka dalam kesaksian di jalan-Mu. Sungguh, Engkau adalah Pemelihara yang baik dan Penolong yang baik. Ya Allah, Amin. Dan limpahkanlah shalawat kepada junjungan kami Nabi Muhammad dan keluarganya serta sahabat-sahabatnya.",
      },
    ],
  },
];

