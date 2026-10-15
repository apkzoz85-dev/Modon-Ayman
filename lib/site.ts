// ─────────────────────────────────────────────────────────────
//  كل بيانات الصفحة من هنا. عدّل هنا فقط.
// ─────────────────────────────────────────────────────────────

export const site = {
  url: "https://www.modonraselhikmaa.org", // ← غيّرها بالدومين الفعلي
  agency: "Nurline",
  project: "مدن رأس الحكمة",
  projectEn: "Modon Ras El Hekma",
  phase: "وادي يم",
  phaseEn: "Wadi Yemm",
  developer: "مدن القابضة الإماراتية",
  developerEn: "Modon Holding",

  phone: "01202220383",
  phoneIntl: "+201202220383",
  phoneDisplay: "01202220383",
  whatsapp: "201202220383",
  email: "",

  // ← ضع مفتاح Web3Forms هنا قبل النشر
  web3forms: "8eb13b87-e5e9-4dd4-86b3-7ea70235387e",

  // ← Google Ads: ضع الـ tag و labels قبل النشر
  gtag: "",
  conv: {
    form: "",
    whatsapp: "",
    call: "",
  },
} as const;

export const waLink = (msg: string) =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(msg)}`;

// ─────────────────────────────  المشروع  ─────────────────────────────

export const facts = [
  { value: "44", unit: "كم", label: "واجهة على البحر المتوسط" },
  { value: "1.3", unit: "كم", label: "بوليفارد ريتيل ومطاعم" },
  { value: "2", unit: "ملعب", label: "جولف بمعايير دولية" },
  { value: "50+", unit: "فندق", label: "ضيافة عالمية مخططة" },
];

export const location = {
  headline: "سيدي حنيش — رأس الحكمة",
  body:
    "المشروع ممتد من الكيلو 170 حتى الكيلو 220 على طريق الإسكندرية / مطروح، بالقرب من طريق الضبعة الجديد، في قلب رأس الحكمة على البحر المتوسط مباشرة.",
  points: [
    { name: "مطار العلمين الدولي", detail: "نحو 50 دقيقة" },
    { name: "القاهرة", detail: "أقل من 90 دقيقة عبر طريق الضبعة" },
    { name: "الإسكندرية", detail: "نحو 200 كم — ساعتان" },
    { name: "مرسى مطروح", detail: "نحو 85 كم" },
    { name: "العلمين الجديدة", detail: "نحو 90 كم غرب المشروع" },
    { name: "الشاطئ", detail: "44 كم من الشواطئ الرملية واللاجونز" },
  ],
};

// البنية التحتية داخل الماستر بلان
export const infrastructure = [
  { title: "مطار دولي", body: "مطار ضمن المخطط العام يخدم المدينة مباشرة." },
  { title: "محطة قطار فائق السرعة", body: "ربط سريع بالقاهرة والساحل والعلمين." },
  { title: "ميناء بحري ومحطة كروز", body: "4 مارينا دولية تستوعب نحو 1,860 يخت ومحطة كروز." },
  { title: "تاكسي مائي", body: "تنقل داخلي بين مناطق المدينة عبر الممرات المائية." },
];

// لماذا الاستثمار
export const investment = [
  {
    stat: "17",
    unit: "منطقة",
    title: "وادي يم أولى مناطق الماستر بلان",
    body:
      "الدخول في المرحلة الأولى من مخطط يضم 17 منطقة يعني سعر تأسيس قبل اكتمال المدينة وخدماتها.",
  },
  {
    stat: "2029",
    unit: "التسليم",
    title: "أفق زمني واضح",
    body: "موعد التسليم المعلن للمراحل الحالية داخل وادي يم.",
  },
  {
    stat: "8",
    unit: "سنوات",
    title: "سداد ممتد بمقدم 5%",
    body:
      "دخول بنسبة مقدم منخفضة مقارنة بمشروعات الساحل التي تبدأ من 15% إلى 30%.",
  },
  {
    stat: "44",
    unit: "كم",
    title: "طلب تشغيلي طوال العام",
    body:
      "فنادق ومارينا وجولف وخدمات دائمة تصنع طلبًا إيجاريًا ممتدًا خارج موسم الصيف.",
  },
];

export const amenities = [
  { title: "بوليفارد 1.3 كم", body: "ريتيل ومطاعم وكافيهات في الأدوار الأرضية على ممرات مشاة مشجّرة." },
  { title: "حمامات سباحة وأفنية", body: "حمامات سباحة بين المباني وأفنية داخلية مزروعة بالزيتون والنباتات المتوسطية." },
  { title: "شاطئ 2.5 كم", body: "شاطئ رملي طبيعي وممشى بحري بطول 1.6 كم ولاجونز طبيعية 25 ألف م²." },
  { title: "نادي رياضي 31 ألف م²", body: "كنتري كلوب ومنشآت رياضية متكاملة داخل وادي يم." },
  { title: "ملعبا جولف 18 حفرة", body: "ملعبان بمعايير البطولات الدولية مع كلوب هاوس لكل منهما." },
  { title: "مركز فروسية ومسرح", body: "مركز فروسية 108 ألف م² ومسرح مكشوف يتسع 10,000 شخص." },
  { title: "6 فنادق عالمية", body: "فنادق تديرها علامات ضيافة دولية داخل وادي يم." },
  { title: "حديقة ساحلية 230 ألف م²", body: "مساحات خضراء مفتوحة ومسارات دراجات ومشي متصلة." },
];


// ─────────────────────────────  المشروعات  ─────────────────────────────

export type ProjectId = "boulevard" | "wadi-east";

export type Project = {
  id: ProjectId;
  name: string;
  nameEn: string;
  eyebrow: string;
  tagline: string;
  intro: string;
  highlights: string[];
  images: [string, string, string];
};

export const projects: Project[] = [
  {
    id: "boulevard",
    name: "يم بوليفارد",
    nameEn: "YEMM BOULEVARD",
    eyebrow: "Yemm Boulevard Apartments",
    tagline: "شاليهات غرفتين و3 غرف على المحور الرئيسي لوادي يم",
    intro:
      "على البوليفارد الرئيسي لوادي يم بطول 1.3 كم: ريتيل ومطاعم في الأدوار الأرضية، ممرات مشاة مشجّرة، وتراسات واسعة تطل على الحدائق وحمامات السباحة. مجتمع للمعيشة طوال السنة، مش للصيف بس.",
    highlights: [
      "على البوليفارد الرئيسي — 1.3 كم ريتيل ومطاعم",
      "غرفة مربية بحمام في كل شاليه",
      "تراسات خاصة حتى 31 م² وماستر بغرفة ملابس",
      "حمامات سباحة وأفنية داخلية مشجّرة",
    ],
    images: ["/images/blvd-street.webp", "/images/blvd-pool.webp", "/images/blvd-terrace.webp"],
  },
  {
    id: "wadi-east",
    name: "وادي إيست",
    nameEn: "WADI EAST",
    eyebrow: "Wadi East Villas & Townhouses",
    tagline: "تاون هاوس وفلل مستقلة بحمام سباحة خاص",
    intro:
      "مجتمع سكني هادئ داخل الماستر بلان لوادي يم، بيوت محاطة بمساحات خضراء وشوارع مخصصة للمشاة، وقريب من اللاجون والشاطئ. الفلل بتصميمين معماريين: Spanish و Mediterranean.",
    highlights: [
      "فلل مستقلة بحمام سباحة خاص وحديقة",
      "تصميمان معماريان: Spanish و Mediterranean",
      "غرفة سائق وغرفة مربية وغرفة ضيوف بالدور الأرضي",
      "تاون هاوس بجراج سيارتين وحديقة خلفية ومكتب",
    ],
    images: ["/images/we-aerial.webp", "/images/villa-4br-spanish.webp", "/images/th-3br.webp"],
  },
];

export const projectById = (id: ProjectId) => projects.find((p) => p.id === id)!;

export const plan = { down: 5, years: 8, delivery: "2029" };

export type Category = "chalet" | "townhouse" | "villa";

export const categories: { id: Category; label: string; plural: string }[] = [
  { id: "chalet", label: "شاليه", plural: "شاليهات" },
  { id: "townhouse", label: "تاون هاوس", plural: "تاون هاوس" },
  { id: "villa", label: "فيلا", plural: "فلل" },
];

export type Layout = {
  name: string;
  nameEn: string;
  total: number;
  interior?: number;
  terrace?: number;
  plan: string;
};

export type Unit = {
  id: string;
  project: ProjectId;
  category: Category;
  title: string;      // شاليه غرفتين
  titleEn: string;    // 2 BEDROOM APARTMENT
  beds: number;
  count: number;
  price: number;
  image: string;
  rooms: string[];
  layouts: Layout[];
};

export const units: Unit[] = [
  {
    id: "blvd-2br",
    project: "boulevard",
    category: "chalet",
    title: "شاليه غرفتين",
    titleEn: "2 BEDROOM APARTMENT",
    beds: 2,
    count: 26,
    price: 24_800_000,
    image: "/images/int-2br-living.webp",
    rooms: [
      "ماستر 3.8×3.6 م + غرفة ملابس وحمام",
      "غرفة نوم ثانية 3.8×3.6 م",
      "غرفة مربية بحمام + لاندري",
      "ريسيبشن وسفرة ومطبخ بجزيرة",
      "تراس على الليفينج",
    ],
    layouts: [
      { name: "قياسي", nameEn: "STANDARD", interior: 135, terrace: 10, total: 145, plan: "/images/plan-2br-std.webp" },
      { name: "كورنر", nameEn: "CORNER", interior: 137, terrace: 22, total: 159, plan: "/images/plan-2br-corner.webp" },
    ],
  },
  {
    id: "blvd-3br",
    project: "boulevard",
    category: "chalet",
    title: "شاليه 3 غرف",
    titleEn: "3 BEDROOM APARTMENT",
    beds: 3,
    count: 46,
    price: 33_300_000,
    image: "/images/int-3br-living.webp",
    rooms: [
      "ماستر 3.9×3.5 م بتراس خاص + غرفة ملابس",
      "غرفتا نوم 4.4×3.4 م",
      "غرفة مربية بحمام + لاندري",
      "ريسيبشن واسع وسفرة ومطبخ",
      "تراس ليفينج حتى 9.5 م طول (الكورنر)",
    ],
    layouts: [
      { name: "قياسي", nameEn: "STANDARD", interior: 175, terrace: 19, total: 194, plan: "/images/plan-3br-std.webp" },
      { name: "كورنر", nameEn: "CORNER", interior: 176, terrace: 31, total: 207, plan: "/images/plan-3br-corner.webp" },
    ],
  },
  {
    id: "th-middle-3br",
    project: "wadi-east",
    category: "townhouse",
    title: "تاون هاوس ميدل 3 غرف",
    titleEn: "TOWNHOUSE MIDDLE · 3 BEDROOM",
    beds: 3,
    count: 29,
    price: 47_200_000,
    image: "/images/th-3br.webp",
    rooms: [
      "دورين: ريسيبشن وسفرة ومطبخ + لاونج علوي",
      "ماستر بحمام وبلكونة + غرفتين بحمامات",
      "مكتب بالدور الأرضي",
      "غرفة مربية بحمام + لاندري + مخزن",
      "جراج سيارتين وحديقة خلفية",
    ],
    layouts: [{ name: "ميدل", nameEn: "MIDDLE", total: 248, plan: "/images/plan-th3.webp" }],
  },
  {
    id: "th-corner-4br",
    project: "wadi-east",
    category: "townhouse",
    title: "تاون هاوس كورنر 4 غرف",
    titleEn: "TOWNHOUSE CORNER · 4 BEDROOM",
    beds: 4,
    count: 17,
    price: 56_100_000,
    image: "/images/th-4br.webp",
    rooms: [
      "غرفة نوم بحمام في الدور الأرضي",
      "ماستر 4.7×3.6 م بغرفة ملابس وحمام وبلكونة",
      "غرفتين + لاونج في الدور الأول",
      "غرفة مربية بحمام + لاندري + مخزن",
      "جراج سيارتين وحديقة على 3 جهات",
    ],
    layouts: [{ name: "كورنر", nameEn: "CORNER", total: 255, plan: "/images/plan-th4.webp" }],
  },
  {
    id: "villa-3br",
    project: "wadi-east",
    category: "villa",
    title: "فيلا 3 غرف",
    titleEn: "VILLA · 3 BEDROOM",
    beds: 3,
    count: 11,
    price: 73_300_000,
    image: "/images/villa-3br-spanish.webp",
    rooms: [
      "حمام سباحة خاص وحديقة",
      "ماستر بتراس + غرفتين بحمامات وغرف ملابس",
      "ريسيبشن وسفرة وديسبلاي كيتشن + مطبخ مغلق",
      "غرفة سائق بحمام + غرفة مربية بحمام",
    ],
    layouts: [
      { name: "Spanish", nameEn: "SPANISH", total: 262, plan: "/images/plan-v3-sp.webp" },
      { name: "Mediterranean", nameEn: "MEDITERRANEAN", total: 248, plan: "/images/plan-v3-med.webp" },
    ],
  },
  {
    id: "villa-4br",
    project: "wadi-east",
    category: "villa",
    title: "فيلا 4 غرف",
    titleEn: "VILLA · 4 BEDROOM",
    beds: 4,
    count: 1,
    price: 88_100_000,
    image: "/images/villa-4br-spanish.webp",
    rooms: [
      "حمام سباحة خاص وحديقة",
      "غرفة ضيوف بحمام في الدور الأرضي",
      "ماستر 4.5×4 م بتراس + غرفتين بحمامات",
      "ليفينج 4×5.9 م وسفرة وديسبلاي كيتشن",
      "غرفة سائق بحمام + غرفة مربية بحمام",
    ],
    layouts: [
      { name: "Spanish", nameEn: "SPANISH", total: 310, plan: "/images/plan-v4-sp.webp" },
      { name: "Mediterranean", nameEn: "MEDITERRANEAN", total: 301, plan: "/images/plan-v4-med.webp" },
    ],
  },
  {
    id: "villa-5br",
    project: "wadi-east",
    category: "villa",
    title: "فيلا 5 غرف",
    titleEn: "VILLA · 5 BEDROOM",
    beds: 5,
    count: 5,
    price: 118_900_000,
    image: "/images/villa-5br-spanish.webp",
    rooms: [
      "حمام سباحة خاص وحديقة",
      "غرفة ضيوف بحمام في الدور الأرضي",
      "ماستر 4.75×3.7 م بتراس + 3 غرف بحمامات وغرف ملابس",
      "ليفينج 5×7.8 م وسفرة وديسبلاي كيتشن",
      "غرفة سائق بحمام + غرفة مربية بحمام",
    ],
    layouts: [
      { name: "Spanish", nameEn: "SPANISH", total: 384, plan: "/images/plan-v5-sp.webp" },
      { name: "Mediterranean", nameEn: "MEDITERRANEAN", total: 368, plan: "/images/plan-v5-med.webp" },
    ],
  },
];

export const minPrice = Math.min(...units.map((u) => u.price));
export const areaRange = (u: Unit) => {
  const t = u.layouts.map((l) => l.total);
  const lo = Math.min(...t), hi = Math.max(...t);
  return lo === hi ? `${lo}` : `${lo}–${hi}`;
};
export const countBy = (c: Category) =>
  units.filter((u) => u.category === c).reduce((n, u) => n + u.count, 0);

// ─────────────────────────────  الأسئلة  ─────────────────────────────

export const faqs = [
  {
    q: "إيه الوحدات المطروحة حاليًا في وادي يم؟",
    a: "شاليهات يم بوليفارد (غرفتين و3 غرف)، وفي وادي إيست تاون هاوس ميدل 3 غرف وتاون هاوس كورنر 4 غرف وفلل مستقلة 3 و4 و5 غرف بحمام سباحة خاص.",
  },
  {
    q: "كم سعر شاليهات يم بوليفارد؟",
    a: "شاليه الغرفتين من 24,800,000 جنيه (145–159 م²)، وشاليه الـ3 غرف من 33,300,000 جنيه (194–207 م²).",
  },
  {
    q: "كم سعر التاون هاوس في وادي إيست؟",
    a: "التاون هاوس الميدل 3 غرف (248 م²) من 47,200,000 جنيه، والكورنر 4 غرف (255 م²) من 56,100,000 جنيه. الاتنين بجراج سيارتين وحديقة.",
  },
  {
    q: "كم سعر الفلل المستقلة؟",
    a: "فيلا 3 غرف من 73,300,000 جنيه، فيلا 4 غرف من 88,100,000 جنيه (وحدة واحدة متاحة)، وفيلا 5 غرف من 118,900,000 جنيه. كل الفلل بحمام سباحة خاص وبتصميمين Spanish و Mediterranean.",
  },
  {
    q: "ما هو نظام السداد؟",
    a: "مقدم يبدأ من 5% وتقسيط الباقي على 8 سنوات. جدول السداد الرسمي الصادر من مدن هو المعتمد.",
  },
  {
    q: "أين يقع وادي يم؟",
    a: "أولى مناطق رأس الحكمة السبعة عشر، بشاطئ 2.5 كم وممشى بحري 1.6 كم وحديقة ساحلية 230 ألف م² ولاجونز طبيعية، على طريق الإسكندرية / مطروح.",
  },
  {
    q: "من هو المطور؟",
    a: "مدن القابضة الإماراتية (Modon Holding)، ضمن الشراكة الاستثمارية بين مصر والإمارات في رأس الحكمة.",
  },
];

export const fmt = (n: number) => n.toLocaleString("en-US");
