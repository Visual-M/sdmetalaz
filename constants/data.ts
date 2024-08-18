// /constants/data.ts

// Steel products
export const steelProducts = [
  {
    id: 501,
    title: "Polad borular",
    url: "/steel/steel_pipes",
    image: "/images/steel_pipes.png",
    description: "Hər çeşiddə polad borular və profillər",
    alterSubcategories: [
      {
        id: 5011,
        title: "Tikişsiz polad borular",
        standart: "ГОСТ 10704-91",
        url: "/steel/steel_pipes/black_steel_pipes",
        image: "/images/welded_steel_pipes.png",
        description:
          "Tikişsiz polad boruların istifadəsi müxtəlif sahələri əhatə edir: boru kəmərlərinin inşası, maşın elementlərinin, mexanizmlərin, konstruksiya hissələrinin istehsalı, yol təmir-tikinti işlərinin aparılması və s.",
      },
      {
        id: 5012,
        title: "Qara borular",
        standart: "ГОСТ 10704-91",
        url: "/steel/steel_pipes/galvanized_steel_pipes",
        image: "/images/welded_steel_pipes.png",
        description: "Qara borular.",
      },
      {
        id: 5013,
        title: "Qara dəmir borular",
        standart: "ГОСТ 10704-91",
        url: "/steel/steel_pipes/black_steel_pipes",
        image: "/images/welded_steel_pipes.png",
        description: "Qara dəmir borular.",
      },
      {
        id: 5014,
        title: "Polad profil borular",
        standart: "ГОСТ 10704-91",
        url: "/steel/steel_pipes/black_steel_pipes",
        image: "/images/welded_steel_pipes.png",
        description: "Polad profil borular.",
      },
      {
        id: 5015,
        title: "Düzbucaqlı polad profil borular",
        standart: "ГОСТ 10704-91",
        url: "/steel/steel_pipes/galvanized_steel_pipes",
        image: "/images/welded_steel_pipes.png",
        description: "Düzbucaqlı polad profil borular.",
      },
    ],
  },
  {
    id: 502,
    title: "Polad məhsulları",
    url: "/steel/steel_products",
    image: "/images/welded_steel_pipes.png",
    description: "Poladdan hazırlanan müxtəlif növ məhsullar",
    alterSubcategories: [
      {
        id: 5021,
        title: "İkitavr",
        standart: "ГОСТ 10704-91",
        url: "/steel/steel_products/black_steel_products",
        image: "/images/welded_steel_pipes.png",
        description: "İkitavr.",
      },
      {
        id: 5022,
        title: "Künclük",
        standart: "ГОСТ 10704-91",
        url: "/steel/steel_products/galvanized_steel_products",
        image: "/images/welded_steel_pipes.png",
        description: "Künclük.",
      },
      {
        id: 5023,
        title: "Polad şveller",
        standart: "ГОСТ 10704-91",
        url: "/steel/steel_products/black_steel_products",
        image: "/images/welded_steel_pipes.png",
        description: "Polad şveller.",
      },
      {
        id: 5024,
        title: "Metal təbəqələr",
        standart: "ГОСТ 10704-91",
        url: "/steel/steel_products/black_steel_products",
        image: "/images/welded_steel_pipes.png",
        description: "Metal təbəqələr.",
      },
      {
        id: 5025,
        title: "Polad dairə",
        standart: "ГОСТ 10704-91",
        url: "/steel/steel_products/galvanized_steel_products",
        image: "/images/welded_steel_pipes.png",
        description: "Polad dairə.",
      },
      {
        id: 5026,
        title: "Armatur",
        standart: "ГОСТ 10704-91",
        url: "/steel/steel_products/black_steel_products",
        image: "/images/welded_steel_pipes.png",
        description: "Armatur.",
      },
      {
        id: 5027,
        title: "Katanka",
        standart: "ГОСТ 10704-91",
        url: "/steel/steel_products/black_steel_products",
        image: "/images/welded_steel_pipes.png",
        description: "Katanka.",
      },
    ],
  },
];

// Plastic products
export const plasticProducts = [
  {
    id: 504,
    title: "Gipskarton lövhələr",
    url: "/plastic/polypropylene_pipes",
    image: "/images/welded_steel_pipes.png",
    description: "Gipskarton lövhələr.",
    alterSubcategories: [
      {
        id: 6021,
        title: "KNAUF-SuperLövhə, nəmədavamlı kiçik ölçülü",
        url: "/plastic/polypropylene_pipes/fiber",
        image: "/images/welded_steel_pipes.png",
        description:
          "Kiçikformatlı nəmədavamlı KNAUF-superlövhə (GLLNK) düzbucaqlı formalı lövhəvi bəzək-tamamlama materialıdır. DÜİST P 51829-2001 üzrə, büzücü gips və açıq tullantı liflərin qarışığının bütün lövhə boyu bərabər şəkildə paylanaraq sıxılması yolu ilə hazırlanır. KNAUF–superlövhənin uz və arxa tərəfləri effektli hidrofobizatorla işlənmiş, çökməyə qarşı xüsusi hopdurma ilə cilalanmışdır. Lövhənin uzunlugu 2500 mm, eni 1200 mm və qalınlığı 10 mm-dir",
      },
      {
        id: 6022,
        title: "KNAUF-Lövhə, nəmə və odadavamlı (GKLNO)",
        url: "/plastic/polypropylene_pipes/flexible",
        image: "/images/welded_steel_pipes.png",
        description:
          "Nəmə-odadavamlı KNAUF-lövhə (GKLNO) düzbucaqlı formaya malik olmaqla arasında armaturlaşdırıcı əlavələrli gips xəmiri olan iki qatı olan xüsusi kartondan ibarətdir, özü də, xəttin yan kənarları kartonun kənarları (üz qatı) ilə bükülür. Nəmə-odadavamlı KNAUF-lövhələr (GKL) müxtəlif kənar-haşiyələrlə istehsal olunur. Onlardan ən əsasları: Düz (DK), nazikləşdirilmış (NK), yarımdairəvi və üz tərəfdən nazikləşdirilmış (NYK). Lövhələrin Uzunluğu 2500 mm, eni 1200 mm və qalınlığı 12,5 mm-dir.",
      },
      {
        id: 6023,
        title: "KNAUF-Lövhə, odadavamlı (GKLO)",
        url: "/plastic/polypropylene_pipes/flexible",
        image: "/images/welded_steel_pipes.png",
        description:
          "Odadavamlı KNAUF-gipskarton lövhə (GKLO) düzbucaqlı formaya malik olmaqla arasında armaturlaşdırıcı əlavələrli gips özəyi olan iki qatı olan xüsusi kartondan ibarətdir,  xəttin yan kənarları isə kartonun kənarları (üz qatı) ilə bükülür. Odadavamlı KNAUF-gipskarton lövhələr (GKLO) müxtəlif kənar-haşiyələrlə istehsal olunur. Onlardan ən əsasları: Düz (DK), nazikləşdirilmış (NK), yarımdairəvi və üz tərəfdən nazikləşdirilmış (NYK). Lövhənin uzunluğu 2500 mm, eni 1200 mm və qalınlığı 12,5 mm-dir.",
      },
    ],
  },
  {
    id: 505,
    title: "Metal Profillər",
    url: "/plastic/polyethylene_pipes",
    image: "/images/welded_steel_pipes.png",
    description: "Metal Profillər.",
    alterSubcategories: [
      {
        id: 6025,
        title: "Dekorativ künc KNAUF-metal profili 22/22",
        url: "/plastic/polyethylene_pipes/plastic",
        image: "/images/welded_steel_pipes.png",
        description: "Dekorativ künc KNAUF–metal profili 22/22 ТŞ 1121–004–04001508–2003-ə uyğun olaraq soyuq yayma üsülü ilə müasir profiləymə dəzgahında yerinə yetirilən nazik lent şəklində alüminium ərintisindən alınmış uzunölçülü element olaraq hazırlanır. Ağ rəngli dekorativ örtüyə malikdir.",
      },
      {
        id: 6026,
        title: "Doldurucu KNAUF-metal profili DP 16/11",
        url: "/plastic/polyethylene_pipes/design",
        image: "/images/welded_steel_pipes.png",
        description: "Doldurucu KNAUF–metal profili DP 16/11 ТŞ 1121–004–04001508–2003-ə uyğun olaraq soyuq yayma üsülü ilə müasir profiləymə dəzgahında yerinə yetirilən nazik lent şəklində alüminium ərintisindən alınmış uzunölçülü element olaraq hazırlanır.",
      },
      {
        id: 6027,
        title: "Reykavari KNAUF-metal profili RP 84/1 2 tip B",
        url: "/plastic/polyethylene_pipes/plastic",
        image: "/images/welded_steel_pipes.png",
        description: "Reykavari B tipli metal KNAUF–profil TP 84/12 ТŞ 1121–004–04001508–2003-ə uyğun olaraq soyuq yayma üsülü ilə müasir profiləymə dəzgahında yerinə yetirilən nazik lent şəklində alüminium ərintisindən alınmış uzunölçülü element olaraq hazırlanır.",
      },
      {
        id: 6028,
        title: "Reykavari KNAUF-metal profili RP 84/1 2 tip A",
        url: "/plastic/polyethylene_pipes/design",
        image: "/images/welded_steel_pipes.png",
        description: "Reykavari A tipli metal KNAUF–profil TP 84/12 ТŞ 1121–004–04001508–2003-ə uyğun olaraq soyuq yayma üsülü ilə müasir profiləymə dəzgahında yerinə yetirilən nazik lent şəklində alüminium ərintisindən alınmış uzunölçülü element olaraq hazırlanır.",
      },
      {
        id: 6029,
        title: "Dekorativ künc KNAUF-metal profili",
        url: "/plastic/polyethylene_pipes/plastic",
        image: "/images/welded_steel_pipes.png",
        description: "Dekorativ künc metal profili ТŞ 1121–004–04001508–2003-ə uyğun olaraq soyuq yayma üsülü ilə müasir profiləymə dəzgahında yerinə yetirilən nazik lent şəklində alüminium ərintisindən alınmış uzunölçülü element olaraq hazırlanır. Ağ rəngli dekorativ örtüyə malikdir.",
      },
      {
        id: 6030,
        title: "Uzununa metal KNAUF T-profili 24/38",
        url: "/plastic/polyethylene_pipes/design",
        image: "/images/welded_steel_pipes.png",
        description: "Uzununa metal KNAUF T-profili 24/38 ТŞ 1121–004–04001508–2003-ə uyğun olaraq alüminium arintisindən alınmış uzunölçülü element olaraq hazırlanır. Görünən hissəsi ağ rəngli dekorativ örtüyə malikdir.",
      },
      {
        id: 6031,
        title: "Eninə metal Knauf T-profili 24/38",
        url: "/plastic/polyethylene_pipes/plastic",
        image: "/images/welded_steel_pipes.png",
        description: "Eninə metal Knauf T–profili 24/38 ТŞ 1121–004–04001508–2003-ə uyğun olaraq alüminium ərintisindən alınmış uzunölçülü element olaraq hazırlanır. Görünən hissəsi ağ rəngli dekorativ örtüyə malikdir.",
      },
      {
        id: 6032,
        title: "Əsas metal KNAUF T-profili 24/38",
        url: "/plastic/polyethylene_pipes/design",
        image: "/images/welded_steel_pipes.png",
        description: "Əsas metal Knauf T–profili 24/38 ТŞ 1121–004–04001508–2003-ə uyğun olaraq alüminium ərintisindən alınmış uzunölçülü element olaraq hazırlanır. Görünən hissəsi ağ rəngli dekorativ örtüyə malikdir.",
      },
      {
        id: 6033,
        title: "Mayak KNAUF-metal profili (MP)",
        url: "/plastic/polyethylene_pipes/plastic",
        image: "/images/welded_steel_pipes.png",
        description: "Mayak metal KNAUF–profili (MP) TŞ 1121-004-04001508-2003 texniki şərtinə uyğun olaraq soyuq yayma üsülü ilə müasir profiləymə dəzgahında yerinə yetirilən nazik polad lent şəklində uzunölçülü element olaraq hazırlanır.",
      },
      {
        id: 6034,
        title: "Xüsusi KNAUF-metal profili TP 35/30",
        url: "/plastic/polyethylene_pipes/design",
        image: "/images/welded_steel_pipes.png",
        description: "Xüsusi KNAUF-metal profili TP 35/30 ТŞ 1121–004–04001508–2003-ə uyğun olaraq soyuq yayma üsülü ilə müasir profiləymə dəzgahında yerinə yetirilən nazik lent şəklində alüminium ərintisindən alınmış uzunölçülü element olaraq hazırlanır.",
      },
      {
        id: 6035,
        title: "Tağşəkilli KNAUF-metal profili (TP)",
        url: "/plastic/polyethylene_pipes/plastic",
        image: "/images/welded_steel_pipes.png",
        description: "Tağşəkilli metal KNAUF–profil (TP) TŞ 1121-004-04001508-2003 texniki şərtinə uyğun olaraq soyuq yayma üsülü ilə müasir profiləymə dəzgahında yerinə yetirilən nazik polad lent şəklində uzunölçülü element olaraq hazırlanır.",
      },
      {
        id: 6036,
        title: "Künc suvaq KNAUF metal profili (KP)",
        url: "/plastic/polyethylene_pipes/design",
        image: "/images/welded_steel_pipes.png",
        description: "Künc suvaq KNAUF metal profili (KP) TŞ 1121-004-04001508-2003 texniki şərtinə uyğun olaraq soyuq yayma üsülü ilə müasir profiləymə dəzgahında yerinə yetirilən nazik polad lent şəklində uzunölçülü element olaraq hazırlanır.",
      },
      {
        id: 6037,
        title: "Künc qoruyucu KNAUF-metal profili (KP)",
        url: "/plastic/polyethylene_pipes/plastic",
        image: "/images/welded_steel_pipes.png",
        description: "Müdafiəedici künc metal KNAUF–profil (KP) TŞ 1121-004-04001508-2003 texniki şərtinə uyğun olaraq soyuq yayma üsülü ilə müasir profiləymə dəzgahında yerinə yetirilən nazik polad lent şəklində uzunölçülü element olaraq hazırlanır.",
      },
      {
        id: 6038,
        title: "İstiqamətləndirici KNAUF- tavan metal profili (TU)",
        url: "/plastic/polyethylene_pipes/design",
        image: "/images/welded_steel_pipes.png",
        description: "İstiqamətləndirici tavan metal KNAUF–profil (TU) TŞ 1121-004-04001508-2003 texniki şərtinə uyğun olaraq soyuq yayma üsülü ilə müasir profiləymə dəzgahında yerinə yetirilən nazik polad lent şəklində uzunölçülü element olaraq hazırlanır.",
      },
      {
        id: 6039,
        title: "Tavan KNAUF-metal profili (TC)",
        url: "/plastic/polyethylene_pipes/plastic",
        image: "/images/welded_steel_pipes.png",
        description: "Tavan metal KNAUF–profil (TC) TŞ 1121-004-04001508-2003 texniki şərtinə uyğun olaraq soyuq yayma üsülü ilə müasir profiləymə dəzgahında yerinə yetirilən nazik polad lent şəklində uzunölçülü element olaraq hazırlanır.",
      },
      {
        id: 6040,
        title: "Dayaq metal KNAUF-profil (DC)",
        url: "/plastic/polyethylene_pipes/design",
        image: "/images/welded_steel_pipes.png",
        description: "Dayaq metal KNAUF–profil (DC) TŞ 1121-004-04001508-2003 texniki şərtinə uyğun olaraq soyuq yayma üsülü ilə müasir profiləymə dəzgahında yerinə yetirilən nazik polad lent şəklində uzunölçülü element olaraq hazırlanır.",
      },
      {
        id: 6041,
        title: "İstiqamətləndirici KNAUF-metal profili (DU)",
        url: "/plastic/polyethylene_pipes/design",
        image: "/images/welded_steel_pipes.png",
        description: "İstiqamətləndirici metal KNAUF–profil (DU) TŞ 1121-004-04001508-2003 texniki şərtinə uyğun olaraq soyuq yayma üsülü ilə müasir profiləymə dəzgahında yerinə yetirilən nazik polad lent şəklində uzunölçülü element olaraq hazırlanır.",
      },
      {
        id: 6042,
        title: "Künc qoruyucu KNAUF-metal profili (KP)",
        url: "/plastic/polyethylene_pipes/plastic",
        image: "/images/welded_steel_pipes.png",
        description: "Müdafiəedici künc metal KNAUF–profil (KP) TŞ 1121-004-04001508-2003 texniki şərtinə uyğun olaraq soyuq yayma üsülü ilə müasir profiləymə dəzgahında yerinə yetirilən nazik polad lent şəklində uzunölçülü element olaraq hazırlanır.",
      },
      {
        id: 6043,
        title: "İstiqamətləndirici KNAUF- tavan metal profili (TU)",
        url: "/plastic/polyethylene_pipes/design",
        image: "/images/welded_steel_pipes.png",
        description: "İstiqamətləndirici tavan metal KNAUF–profil (TU) TŞ 1121-004-04001508-2003 texniki şərtinə uyğun olaraq soyuq yayma üsülü ilə müasir profiləymə dəzgahında yerinə yetirilən nazik polad lent şəklində uzunölçülü element olaraq hazırlanır.",
      },
      {
        id: 6044,
        title: "Tavan KNAUF-metal profili (TC)",
        url: "/plastic/polyethylene_pipes/plastic",
        image: "/images/welded_steel_pipes.png",
        description: "Tavan metal KNAUF–profil (TC) TŞ 1121-004-04001508-2003 texniki şərtinə uyğun olaraq soyuq yayma üsülü ilə müasir profiləymə dəzgahında yerinə yetirilən nazik polad lent şəklində uzunölçülü element olaraq hazırlanır.",
      },
      {
        id: 6045,
        title: "Dayaq metal KNAUF-profil (DC)",
        url: "/plastic/polyethylene_pipes/design",
        image: "/images/welded_steel_pipes.png",
        description: "Dayaq metal KNAUF–profil (DC) TŞ 1121-004-04001508-2003 texniki şərtinə uyğun olaraq soyuq yayma üsülü ilə müasir profiləymə dəzgahında yerinə yetirilən nazik polad lent şəklində uzunölçülü element olaraq hazırlanır.",
      },
      {
        id: 6046,
        title: "İstiqamətləndirici metal KNAUF–profil (DU) TŞ 1121-004-04001508-2003 texniki şərtinə uyğun olaraq soyuq yayma üsülü ilə müasir profiləymə dəzgahında yerinə yetirilən nazik polad lent şəklində uzunölçülü element olaraq hazırlanır.",
        url: "/plastic/polyethylene_pipes/design",
        image: "/images/welded_steel_pipes.png",
        description: "İstiqamətləndirici metal KNAUF–profil (DU) TŞ 1121-004-04001508-2003 texniki şərtinə uyğun olaraq soyuq yayma üsülü ilə müasir profiləymə dəzgahında yerinə yetirilən nazik polad lent şəklində uzunölçülü element olaraq hazırlanır.",
      },
    ],
  },
];

// Navigation
export const navigation = {
  home: {
    title: "Ana Səhifə",
    url: "/",
  },
  company: {
    title: "Şirkət",
    categories: [
      {
        title: "Haqqımızda",
        url: "/about",
      },
      {
        title: "Sertifikatlarimiz",
        url: "/certificates",
      },
      {
        title: "Tariximiz",
        url: "/history",
      },
    ],
  },
  products: {
    title: "Məhsullar",
    categories: [
      {
        title: "Polad",
        url: "/steel",
        subcategories: steelProducts,
      },
      {
        title: "Alçıpan",
        url: "/plastic",
        subcategories: plasticProducts,
      },
    ],
  },
  contacts: {
    title: "Əlaqə",
    url: "/contact",
  },
  metalSatisi: {
    title: "Metal Satisi",
    url: "/selling",
  },
};

// Contact information
export const contactInfo = {
  url: "/contacts",
  title: "Əlaqə",
  paragraph: "2018-ci ildən xidmətinizdəyik.",
  rights: "Bütün hüquqlar qorunur.",
  description: "Bizimlə əlaqə saxlayın.",
  image: "/images/contact.png",
  address: "Xocəsən yolu, Lökbatan dairəsinin yaxınlığı",
  phone: "+994502116635",
  email: "sdmetal@gmail.com",
  facebook: "https://www.facebook.com/example",
  instagram: "https://www.instagram.com/example",
  twitter: "https://www.twitter.com/example",
  location: "Ünvan",
  telephone: "Telefon",
  mail: "E-poçt",

  sellingMetal: "Metal Satışı",
  sellingMetalPhone: "+994509995999",
  alcipanSellings: "Alçıpan Satışı",
  alcipanSellingsPhone: "+994554710003",
  corpSellings: "Korporativ Satışlar",
  corpSellingsPhone: "+994519995999",
};

//Home page
export const homePage = {
  title: "SDMetal",
  image: "/images/sdmetalhomepage.jpg",
  button: "Bizimlə əlaqə saxlayin",
  startedInd:
    "Biz fəaliyyətə 1997-ci ildə başlamış “METAK” ölkəmizin ən nüfuzlu şirkətlərindən biri olub, istehlakçıların böyük etibarını qazana bilmişdir",
  workArea: "Fəaliyyət sahələri",
  workAreaDesc:
    "Şirkətimiz əsasən dəmir və polad məhsullarının satışı ilə məşğuldur. Bununla yanaşı, plastik məhsullarının satışı da aparırıq",
  selling: "Satış",
  sellingDesc:
    "Şirkətimiz əsasən dəmir və polad məhsullarının satışı ilə məşğuldur. Bununla yanaşı, plastik məhsullarının satışı da aparırıq",
  delivery: "Çatdırılma",
  deliveryDesc:
    "Şirkətimiz əsasən dəmir və polad məhsullarının satışı ilə məşğuldur. Bununla yanaşı, plastik məhsullarının satışı da aparırıq",
  quality: "Keyfiyyət",
  qualityDesc:
    "Şirkətimiz əsasən dəmir və polad məhsullarının satışı ilə məşğuldur. Bununla yanaşı, plastik məhsullarının satışı da aparırıq",
  products: "Məhsullarımız",
  firstProduct: "Polad",
  firstProductImage: "/images/steel-pic-for.jpg",
  secondProduct: "Plastik",
  secondProductImage: "/images/plastic-pic-for.jpg",
  thirdProduct: "Alçıpan",
  thirdProductImage: "/images/alcipan_olculeri-3.jpg",
  fourthProduct: "Əlaqəli elementlər",
  fourthProductImage: "/images/elaqeli-elementler.jpeg",
  map: "Ünvanımız",
  mapDes:
    "Hər hansı bir məsələ ilə bağlı aşağıdakı düyməyə basaraq əməkdaşlarımızla əlaqə saxlaya bilərsiniz",
  workingHours:
    "Həftənin 7 günü, səhər saat 09:00-dan axşam saat 18:00-dək xidmətinizdəyik.",
};

// similar words for products
export const similarParagraphs = {
  otherProducts: "Digər məhsullar",
  otherProductsSameCategory: "Eyni kateqoriyadakı digər məhsullar",
};

// About page
export const aboutPage = {
  title: "Haqqımızda",
  image: "/images/about.png",
  header: "Şirkət haqqında",
  firstDescription:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vestibulum, risus vel tincidunt ultricies, purus turpis ultricies mauris, nec vehicula erat nunc sed purus. Nullam sit amet vestibulum lorem. Nullam auctor, turpis nec ultricies ultricies, purus mi lobortis nunc, eget ultricies risus nisl nec nunc. Nullam sit amet vestibulum lorem. Nullam auctor, turpis nec ultricies ultricies, purus mi lobortis nunc, eget ultricies risus nisl nec nunc. Nullam sit amet vestibulum lorem. Nullam auctor, turpis nec ultricies ultricies, purus mi lobortis nunc, eget ultricies risus nisl nec nunc.",
  secondDescription:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vestibulum, risus vel tincidunt ultricies, purus turpis ultricies mauris, nec vehicula erat nunc sed purus. Nullam sit amet vestibulum lorem. Nullam auctor, turpis nec ultricies ultricies, purus mi lobortis nunc, eget ultricies risus nisl nec nunc. Nullam sit amet vestibulum lorem. Nullam auctor, turpis nec ultricies ultricies, purus mi lobortis nunc, eget ultricies risus nisl nec nunc. Nullam sit amet vestibulum lorem. Nullam auctor, turpis nec ultricies ultricies, purus mi lobortis nunc, eget ultricies risus nisl nec nunc.",
  firstImage: "/images/about1.jpg",
  secondImage: "/images/about2.jpg",
};

export const sellingMetalPage = {
  title: "Metal Satışı",
  workers: "Əməkdaşlarımız",
  description: "Əməkdaşlarımızla əlaqə saxlayın",
  image: "/images/selling_metal.png",
  coWorkers: [
    {
      id: 1,
      name: "Səttar Dadaşov",
      image: "/images/selling.png",
      phone: "+994509995999",
      email: "sdmetal@gmail.com",
    },
    {
      id: 2,
      name: "Xəyal Dadaşov",
      image: "/images/selling.png",
      phone: "+994519995999",
      email: "sdmetal@gmail.com",
    },
    {
      id: 3,
      name: "Rafət Əsədov",
      image: "/images/selling.png",
      phone: "+994554710003",
      email: "sdmetal@gmail.com",
    },
    {
      id: 4,
      name: "Anar Dadaşov",
      image: "/images/selling.png",
      phone: "+994554818227",
      email: "sdmetal@gmail.com",
    },
    {
      id: 5,
      name: "İxtiyar Mirzəyev",
      image: "/images/selling.png",
      phone: "+994779009000",
      email: "sdmetal@gmail.com",
    },
    {
      id: 6,
      name: "Hikmət Nağızadə",
      image: "/images/selling.png",
      phone: "+994502070440",
      email: "sdmetal@gmail.com",
    },
  ],
};
