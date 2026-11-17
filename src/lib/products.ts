export type Product = {
  slug: string;
  name: string;
  nameAr: string;
  family: "valves" | "flow-piping" | "rotating";
  type: string;
  typeAr: string;
  image: string;
  description: string;
  descriptionAr: string;
  source: string;
};

export const products: Product[] = [
  {
    slug: "soft-seated-ball-valves", name: "Soft seated ball valves", nameAr: "محابس الكرة ذات المقاعد اللينة", family: "valves", type: "Manual valves", typeAr: "محابس يدوية", image: "ball-valves.jpg",
    description: "Explore soft seated ball valves from Ahram’s static equipment collection. Discuss your process requirements with the team to identify the appropriate configuration.",
    descriptionAr: "اكتشف محابس الكرة ذات المقاعد اللينة ضمن مجموعة المعدات الثابتة للأهرام. ناقش متطلبات التشغيل مع الفريق لاختيار التكوين المناسب لتطبيقك.",
    source: "https://www.ahramvalves.com/AR/products?i=1&n=3",
  },
  {
    slug: "gate-valves", name: "Gate valves", nameAr: "محابس البوابة", family: "valves", type: "Manual valves", typeAr: "محابس يدوية", image: "gate-valves.jpg",
    description: "Gate valves from Ahram’s manual valve collection. Contact the team to discuss the required size, connection, material and operating conditions for your project.",
    descriptionAr: "محابس البوابة من مجموعة المحابس اليدوية للأهرام. تواصل مع الفريق لمناقشة المقاس والوصلات والخامات وظروف التشغيل المطلوبة لمشروعك.",
    source: "https://www.ahramvalves.com/products?i=1&n=2",
  },
  {
    slug: "automated-valves", name: "Automated valves", nameAr: "المحابس الأوتوماتيكية", family: "valves", type: "Actuated solutions", typeAr: "حلول التشغيل الآلي", image: "automated-valves.jpg",
    description: "Discover Ahram’s automated valve collection. Start a technical discussion about actuation, process conditions and integration with your existing equipment.",
    descriptionAr: "اكتشف مجموعة المحابس الأوتوماتيكية للأهرام. ابدأ مناقشة فنية حول وسيلة التشغيل وظروف العملية والتكامل مع معداتك الحالية.",
    source: "https://www.ahramvalves.com/products?i=1",
  },
  {
    slug: "mechanical-seals", name: "Mechanical seals", nameAr: "موانع التسرب الميكانيكية", family: "rotating", type: "Rotating equipment", typeAr: "معدات دوّارة", image: "mechanical-seals.jpg",
    description: "Mechanical seals are part of Ahram’s rotating equipment portfolio. Share your equipment information and operating conditions for application-specific selection.",
    descriptionAr: "موانع التسرب الميكانيكية ضمن مجموعة المعدات الدوّارة للأهرام. شارك بيانات معداتك وظروف التشغيل لاختيار الحل المناسب للتطبيق.",
    source: "https://www.ahramvalves.com/products?i=6",
  },
  {
    slug: "globe-valves", name: "Globe valves", nameAr: "المحابس الجلوبية", family: "valves", type: "Manual valves", typeAr: "محابس يدوية", image: "globe-valves.jpg",
    description: "Explore globe valves in Ahram’s manual valve range. The team can review your service conditions and help define a suitable supply requirement.",
    descriptionAr: "اكتشف المحابس الجلوبية ضمن مجموعة المحابس اليدوية للأهرام. يمكن للفريق مراجعة ظروف الخدمة والمساعدة في تحديد متطلبات التوريد المناسبة.",
    source: "https://www.ahramvalves.com/products?i=1&n=2",
  },
  {
    slug: "check-valves", name: "Non-return check valves", nameAr: "محابس عدم الرجوع", family: "valves", type: "Static equipment", typeAr: "معدات ثابتة", image: "check-valves.jpg",
    description: "Non-return check valves from Ahram’s static equipment collection. Enquire about the available configurations for your piping system.",
    descriptionAr: "محابس عدم الرجوع من مجموعة المعدات الثابتة للأهرام. استفسر عن التكوينات المتاحة المناسبة لنظام المواسير لديك.",
    source: "https://www.ahramvalves.com/products?i=1",
  },
  {
    slug: "flow-meters", name: "Flow meters", nameAr: "أجهزة قياس التدفق", family: "flow-piping", type: "Measurement", typeAr: "أجهزة القياس", image: "valve-4.jpg",
    description: "Flow measurement equipment featured in Ahram’s static equipment range. Share the medium, pipe size and measurement requirements with the team.",
    descriptionAr: "معدات قياس التدفق المعروضة ضمن مجموعة المعدات الثابتة للأهرام. شارك نوع السائل ومقاس المواسير ومتطلبات القياس مع الفريق.",
    source: "https://www.ahramvalves.com/products?i=1",
  },
  {
    slug: "piping-and-fittings", name: "Piping & fittings", nameAr: "المواسير والوصلات", family: "flow-piping", type: "Piping systems", typeAr: "أنظمة المواسير", image: "valve-3.jpg",
    description: "Standard and specialized piping and fittings are included in Ahram’s static equipment portfolio. Discuss your project’s material and connection requirements.",
    descriptionAr: "تشمل مجموعة المعدات الثابتة للأهرام المواسير والوصلات القياسية والمتخصصة. ناقش متطلبات الخامات والوصلات الخاصة بمشروعك.",
    source: "https://www.ahramvalves.com/products?i=1",
  },
  {
    slug: "expansion-joints", name: "Expansion joints", nameAr: "وصلات التمدد", family: "flow-piping", type: "Piping systems", typeAr: "أنظمة المواسير", image: "valve-7.jpg",
    description: "Explore expansion joints in Ahram’s static equipment range. Contact the team to discuss installation details and the requirements of your system.",
    descriptionAr: "اكتشف وصلات التمدد ضمن مجموعة المعدات الثابتة للأهرام. تواصل مع الفريق لمناقشة تفاصيل التركيب ومتطلبات نظامك.",
    source: "https://www.ahramvalves.com/products?i=1",
  },
];

export const categories = [
  { id: "all", en: "All products", ar: "كل المنتجات" },
  { id: "valves", en: "Industrial valves", ar: "المحابس الصناعية" },
  { id: "flow-piping", en: "Flow & piping", ar: "التدفق والمواسير" },
  { id: "rotating", en: "Rotating equipment", ar: "المعدات الدوّارة" },
] as const;
