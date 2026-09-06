const PORTFOLIO_DATA = {
  profile: {
    fullName: "Eslam Ali Fahmy Elattar",
    nameAr: "إسلام علي فهمي العطار",
    brandName: "El3tra Content",
    brandNameAr: "العترة كونتنت",
    title: "Senior Video Editor | Motion Graphics Designer",
    titleAr: "مونتير أول | مصمم موشن جرافيك",
    phone: "+20 112 586 4424",
    email: "eslamelattar1@gmail.com",
    educationEn: "Graduate of Computer Institute - Bachelor of Management Information Systems",
    educationAr: "خريج معهد الحاسبات - بكالوريوس نظم معلومات إدارية",
    experience: "5+ Years",
    experienceAr: "+5 سنوات خبرة",
    markets: "UAE & Arab Markets",
    marketsAr: "الإمارات والسوق العربي",
    instagram: "https://www.instagram.com/el3tra_content/",
    instagramHandle: "@el3tra_content",
    drivePortfolio: "https://drive.google.com/drive/u/1/folders/1RXbF7pfRgxLCROmLE9jHVlgyJXf-Mnvm",
    avatar: "assets/images/profile.jpg",
    stats: [
      { number: "+5", labelEn: "Years Experience", labelAr: "سنوات خبرة في الخليج ومصر" },
      { number: "+250", labelEn: "Projects Delivered", labelAr: "مشروع وفيديو احترافي" },
      { number: "+50M", labelEn: "Total Organic Views", labelAr: "مشاهدة على السوشيال ميديا" },
      { number: "100%", labelEn: "Client Satisfaction", labelAr: "نسبة رضا العملاء والشركات" }
    ]
  },

  summaryEn: "Motion Graphics & Animation-focused Video Editor with over 5+ years of experience in creating high-quality animations, kinetic typography, and cinematic motion content. Strong expertise in timing, easing, animation curves, and visual rhythm, with a deep focus on After Effects–driven workflows for ads, social media, and branded content.",
  summaryAr: "مونتير ومصمم موشن جرافيك بخبرة تزيد عن 5 سنوات متراكمة في إنشاء الرسوم المتحركة عالية الجودة، الكيناتيك تيبوجرافي، والمحتوى السينمائي التفاعلي. خبرة عميقة في الضبط الزمني (Timing & Easing)، المنحنيات الحركية، والإيقاع البصري مع تركيز خاص على بيئة إفتر إفكتس للإعلانات ومحتوى السوشيال ميديا والهويات التجارية.",

  featuredVideos: [
    {
      id: "alrazi-final",
      position: "left",
      titleEn: "Al-Razi Company Commercial",
      titleAr: "شركة الرازي",
      clientEn: "Al-Razi Company",
      clientAr: "شركة الرازي",
      videoSrc: "assets/videos/alrazi_final.mp4",
      tags: ["Chroma Keying", "Green Screen", "DaVinci Color", "Full VFX"],
      views: "2.1M",
      duration: "1:00",
      descEn: "Full post-production pipeline: green screen chroma keying, background compositing, DaVinci Resolve color grading, and final video editing ready for launch.",
      descAr: "إنتاج ومعالجة إعلانية شاملة: من تفريغ الكروما (Green Screen) ودمج الخلفيات إلى التلوين السينمائي وإخراج الفيديو النهائي بحرفية."
    },
    {
      id: "30-years",
      position: "center",
      isCenter: true,
      titleEn: "30 Years Solutions Commercial",
      titleAr: "إعلان 30 سنة خبرة - حلول",
      clientEn: "Solutions Brand",
      clientAr: "شركة حلول",
      videoSrc: "assets/videos/30_years.mp4",
      tags: ["Commercial Editing", "Motion Graphics", "Sound Design"],
      views: "3.5M",
      duration: "1:15",
      descEn: "Modern commercial video editing leveraging cutting-edge pacing, visual storytelling, dynamic transitions, and high-impact motion graphics.",
      descAr: "إخراج ومونتاج إعلاني حديث يعتمد على أحدث تقنيات السرد البصري، الانتقالات السريعة، وتأثيرات الموشن جرافيك فائقة الجودة."
    },
    {
      id: "exir-motion",
      position: "right",
      titleEn: "Exir Motion Graphics Video",
      titleAr: "فيديو موشن جرافيك - إكسير",
      clientEn: "Exir Brand",
      clientAr: "مشروع إكسير",
      videoSrc: "assets/videos/exir_motion.mp4",
      tags: ["Voiceover Sync", "Motion Graphics", "After Effects"],
      views: "1.2M",
      duration: "0:45",
      descEn: "End-to-end Motion Graphics production built from scratch—from professional voiceover recording to storyboarding, vector animation, and sound design.",
      descAr: "صناعة فيديو موشن جرافيك متكامل من الصفر، بدءاً من هندسة وإخراج التعليق الصوتي (Voiceover) وحتى التخطيط، التحريك، والمؤثرات البصرية."
    }
  ],

  experiencesTimeline: [
    {
      period: "2025 - 2026",
      periodAr: "2025 - 2026",
      roleEn: "Senior Video Editor & Motion Graphics Specialist",
      roleAr: "خبير مونتاج وموشن جرافيك (عمل ثابت وفريلانس)",
      companyEn: "Full-Time & Freelance (Iraq, UAE & Arab Region)",
      companyAr: "العراق، الإمارات، وكبرى الأسواق العربية",
      descEn: "Leading post-production, commercial editing, and motion graphics for major agencies and corporate clients across Iraq, UAE, and the Arab region.",
      descAr: "قيادة مرحلة ما بعد الإنتاج والموشن جرافيك لكبرى الشركات والبراندات في العراق، الإمارات، ومختلف الدول العربية."
    },
    {
      period: "2024",
      periodAr: "2024",
      roleEn: "Motion Graphics Designer & Video Editor for Tech Companies",
      roleAr: "مصمم موشن جرافيك ومونتير لشركات البرمجة والتقنية",
      companyEn: "Software & Digital Tech Companies",
      companyAr: "شركات البرمجة والحلول الرقمية والمواقع",
      descEn: "Specialized in marketing web & mobile UI interactions, app walkthroughs, SaaS explainer videos, and software product commercials.",
      descAr: "متخصص في تسويق واستعراض واجهات البرامج والمواقع الإلكترونية والفيديوهات الإعلانية للمنصات والتطبيقات."
    },
    {
      period: "2023",
      periodAr: "2023",
      roleEn: "Motion Graphics & Viral Reels Specialist",
      roleAr: "مصمم موشن جرافيك وفيديوهات ريلز إعلانية",
      companyEn: "UAE Projects & Full-Time Role in Egypt",
      companyAr: "مشاريع الإمارات بجانب عمل ثابت في مصر",
      descEn: "Created high-converting motion graphics and Reels content for UAE clients alongside a full-time senior position in Egypt.",
      descAr: "إخراج فيديوهات الموشن جرافيك والـ Reels عالية التفاعل لمشاريع الإمارات، مع شغل منصب رئيسي ثابت في استوديوهات مصر."
    },
    {
      period: "2021",
      periodAr: "2021",
      roleEn: "Cinematic Video Editor & Post-Production Specialist",
      roleAr: "متخصص مونتاج وتلوين الفيديوهات السينمائية",
      companyEn: "UAE Cinematic Productions",
      companyAr: "دولة الإمارات العربية المتحدة (مشاريع سينمائية)",
      descEn: "Handled cinematic video editing, color grading in DaVinci Resolve, visual effects, and post-production for UAE commercial clients.",
      descAr: "العمل على الفيديوهات السينمائية، المعالجة البصرية، والتلوين السينمائي بعد الإنتاج لحساب مشاريع وشركات إماراتية."
    },
    {
      period: "2020",
      periodAr: "2020",
      roleEn: "Video Editor - Official Trading & Financial House",
      roleAr: "مونتير بشركة إنتاج لخدمات التداول والمالية",
      companyEn: "Official Trading Production Company (UAE)",
      companyAr: "الإمارات العربية المتحدة (شركة إنتاج معاملات التداول)",
      descEn: "Edited official trading promos, financial transaction walkthroughs, and commercial video assets in the UAE.",
      descAr: "إنتاج ومونتاج الفيديوهات الإعلانية والتوضيحية لمعاملات التداول الرسمية والمنصات المالية في الإمارات."
    }
  ],

  skillsListEn: [
    "Motion Graphics & Animation",
    "Kinetic Typography",
    "Animation Timing & Easing",
    "Visual Rhythm & Flow",
    "Cinematic Transitions",
    "Sound Sync & Animation Beats"
  ],
  skillsListAr: [
    "الموشن جرافيك والتحريك البصري",
    "الكيناتيك تيبوجرافي (تحريك النصوص)",
    "ضبط التوقيت والسرعات (Easing & Curves)",
    "الإيقاع البصري وتتابع المشاهد",
    "الانتسقالات والخدع السينمائية",
    "المزامنة الصوتية وهندسة المؤثرات"
  ],

  skills: [
    { name: "Motion Graphics 2D & 3D", category: "specialty", level: 95, descEn: "Vector animations, kinetic typography, 3D product elements", descAr: "تحريك النصوص والشعارات والعناصر ثلاثية وثنائية الأبعاد" },
    { name: "Commercial & Reel Editing", category: "editing", level: 96, descEn: "Fast-paced hooks, sound design, rhythmic pacing for TikTok & Reels", descAr: "مونتاج سريع، خطف انتباه الجمهور، هندسة صوتية متكاملة" },
    { name: "VFX & Compositing", category: "vfx", level: 90, descEn: "Green screen removal, object tracking, screen replacements", descAr: "تتبع العناصر، دمج المؤثرات البصرية، واستبدال الشاشات" },
    { name: "Color Grading", category: "vfx", level: 92, descEn: "Cinematic tone mapping, skin tone correction & brand color matching", descAr: "تعديل الألوان السينمائي والربط مع هوية البراند البصرية" }
  ],

  tools: [
    { name: "Adobe After Effects (Advanced)", icon: "sparkles", category: "Motion & VFX" },
    { name: "Adobe Premiere Pro", icon: "video", category: "Editing" },
    { name: "Adobe Photoshop", icon: "image", category: "Graphics" },
    { name: "DaVinci Resolve", icon: "palette", category: "Color & Post" },
    { name: "CapCut", icon: "scissors", category: "Short Form Content" }
  ],

  translations: {
    en: {
      navHome: "Home",
      navSpecialties: "Specialties",
      navFeatured: "Featured Videos",
      navTools: "Software",
      navExperience: "Experience",
      navContact: "Contact",
      btnInstagram: "Instagram (@el3tra_content)",
      btnDrivePortfolio: "Google Drive Portfolio",
      btnDownloadCv: "Download CV",
      btnViewPortfolio: "Featured Videos",
      heroBadge: "5+ Years Experience | MIS Bachelor",
      heroSubtitle: "Motion Graphics & Animation-focused Video Editor creating high-quality animations, kinetic typography, and cinematic motion content.",
      specialtiesTitle: "Core Specialties & Services",
      specialtiesSub: "Tailored visual solutions built for modern brands, agencies, and tech platforms.",
      featuredTitle: "Featured Commercial & Motion Showcase",
      featuredSub: "Click on any video to watch in full HD with complete sound.",
      toolsTitle: "Software Stack",
      toolsSub: "Tools powering every frame of high-quality motion graphics & post-production.",
      expTitle: "Professional Experience Timeline",
      expSub: "Chronological milestone timeline across UAE, Iraq, Egypt, and regional markets.",
      instaTitle: "Follow Content Creation on Instagram (@el3tra_content)",
      instaSub: "Directly embedded reels & video breakdowns straight from @el3tra_content.",
      cvModalTitle: "Curriculum Vitae Preview",
      closeModal: "Close Player",
      downloadPdf: "Download PDF Version",
      viewOnlineCv: "View Full Web CV"
    },
    ar: {
      navHome: "الرئيسية",
      navSpecialties: "التخصصات",
      navFeatured: "فيديوهات مميزة",
      navTools: "البرامج والمهارات",
      navExperience: "الخبرات",
      navContact: "تواصل معي",
      btnInstagram: "إنستغرام (@el3tra_content)",
      btnDrivePortfolio: "بورتفوليو جوجل درايف",
      btnDownloadCv: "تحميل الـ CV",
      btnViewPortfolio: "الفيديوهات المميزة",
      heroBadge: "خبرة +5 سنوات | بكالوريوس نظم معلومات إدارية",
      heroSubtitle: "إسلام علي فهمي العطار - مونتير أول ومصمم موشن جرافيك متخصص في صناعة المحتوى الإعلاني، الكيناتيك تيبوجرافي، والتلوين السينمائي.",
      specialtiesTitle: "التخصصات والخدمات الرئيسية",
      specialtiesSub: "حلول بصرية مصممة خصيصاً للبراندات الحديثة، الوكالات الإعلانية، والشركات الناشئة.",
      featuredTitle: "أحدث الأعمال والمشاريع المميزة",
      featuredSub: "انقر على أي فيديو لمشاهدته بالجودة الكاملة والصوت.",
      toolsTitle: "برامج وأدوات العمل",
      toolsSub: "أحدث البرامج والتقنيات العالمية المستخدمة لضمان أعلى جودة بعد الإنتاج.",
      expTitle: "الخبرات والمسار المهني التراكمي",
      expSub: "التسلسل الزمني المتناسق للخبرة في الإمارات، العراق، مصر، وكبرى الأسواق العربية.",
      instaTitle: "تابع جديد المحتوى على إنستغرام (@el3tra_content)",
      instaSub: "معاينة مباشرة للريلز وفيديوهات المونتاج المقتبسة من حساب @el3tra_content",
      cvModalTitle: "معاينة السيرة الذاتية (CV)",
      closeModal: "إغلاق المشغل",
      downloadPdf: "تحميل نسخة PDF",
      viewOnlineCv: "عرض الـ CV أونلاين"
    }
  }
};
