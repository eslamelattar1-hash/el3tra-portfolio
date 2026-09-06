// App State
let currentLang = localStorage.getItem('el3tra_lang') || 'en';

document.addEventListener('DOMContentLoaded', () => {
  // Ensure Light mode is enforced
  document.documentElement.classList.remove('dark');
  localStorage.removeItem('el3tra_theme');

  initLanguage();
  renderProfileData();
  renderSpecialties();
  renderFeaturedVideos();
  renderTools();
  renderExperience();
  setupEventListeners();
  setupScrollObserver();
  if (window.lucide) {
    lucide.createIcons();
  }
});

// Language Switcher Logic
function initLanguage() {
  setLanguage(currentLang);
}

function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('el3tra_lang', lang);
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  document.documentElement.lang = lang;

  // Toggle button texts
  const langToggleBtn = document.getElementById('lang-toggle-btn');
  if (langToggleBtn) {
    langToggleBtn.innerText = lang === 'ar' ? 'English' : 'العربية';
  }

  // Update static translated elements
  const dict = PORTFOLIO_DATA.translations[lang];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) {
      el.innerText = dict[key];
    }
  });

  // Re-render dynamic sections with new language
  renderProfileData();
  renderSpecialties();
  renderFeaturedVideos();
  renderTools();
  renderExperience();

  if (window.lucide) {
    lucide.createIcons();
  }
}

// Render Profile Header & Hero Metrics
function renderProfileData() {
  const isAr = currentLang === 'ar';
  const profile = PORTFOLIO_DATA.profile;

  const heroTitle = document.getElementById('hero-title');
  const heroBadge = document.getElementById('hero-badge-text');
  const heroSubtitle = document.getElementById('hero-subtitle');

  if (heroTitle) heroTitle.innerText = isAr ? profile.titleAr : profile.title;
  if (heroBadge) heroBadge.innerText = isAr ? profile.heroBadgeAr || profile.marketsAr : profile.markets;
  if (heroSubtitle) heroSubtitle.innerText = PORTFOLIO_DATA.translations[currentLang].heroSubtitle;

  // Render Stats
  const statsContainer = document.getElementById('hero-stats-container');
  if (statsContainer) {
    statsContainer.innerHTML = profile.stats.map(s => `
      <div class="p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-sm text-center transition-transform hover:-translate-y-1">
        <div class="text-2xl lg:text-3xl font-extrabold text-zinc-900 dark:text-white mb-1">${s.number}</div>
        <div class="text-xs lg:text-sm font-medium text-zinc-500 dark:text-zinc-400">${isAr ? s.labelAr : s.labelEn}</div>
      </div>
    `).join('');
  }
}

// Render Specialties / Services
function renderSpecialties() {
  const isAr = currentLang === 'ar';
  const container = document.getElementById('specialties-container');
  if (!container) return;

  const items = [
    {
      icon: "layout",
      titleEn: "UI-Style Video Specialist",
      titleAr: "تصميم فيديوهات UI-Style",
      descEn: "Crafting realistic 2.5D & 3D app walkthroughs, web mockup animations, glassmorphic UI interactions, and SaaS feature demos.",
      descAr: "تحريك واجهات التطبيقات والمواقع باحترافية وتأثيرات زجاجية ثلاثية الأبعاد تنبض بالحياة لاستعراض خصائص منتجك الرقمي."
    },
    {
      icon: "sparkles",
      titleEn: "Motion Graphics 2D & 3D",
      titleAr: "موشن جرافيك 2D & 3D",
      descEn: "Kinetic typography, brand intro stinger reveals, vector animations, isometric visual breakdowns, and title sequences.",
      descAr: "انيميشن شعارات وفيديوهات توضيحية، نصوص متحركة، ورسومات متجهية مبتكرة تخدم هوية براندك."
    },
    {
      icon: "video",
      titleEn: "Commercial & Reel Editing",
      titleAr: "مونتاج الإعلانات والريلز",
      descEn: "High-paced hooks engineered for TikTok, Instagram Reels, YouTube Shorts, and TV commercials across the Gulf region.",
      descAr: "مونتاج سريع يضمن خطف انتباه الجمهور في أول ثوانٍ، مناسب للإعلانات التجارية ومنصات التواصل الاجتماعي."
    },
    {
      icon: "wand2",
      titleEn: "VFX & Color Grading",
      titleAr: "خدع بصرية وتلوين سينمائي",
      descEn: "Screen replacements, tracking, green screen keying, skin tone mapping, and DaVinci Resolve color passes.",
      descAr: "معالجة بصرية متكاملة: تتبع الشاشات والعناصر، دمج الخلفيات، وتعديل الألوان بنمط سينمائي جذاب."
    }
  ];

  container.innerHTML = items.map(item => `
    <div class="ui-card p-6 lg:p-8 flex flex-col justify-between group">
      <div>
        <div class="w-12 h-12 rounded-xl bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-blue-600 dark:group-hover:bg-blue-600 dark:group-hover:text-white transition-all duration-300">
          <i data-lucide="${item.icon}" class="w-6 h-6"></i>
        </div>
        <h3 class="text-xl font-bold text-zinc-900 dark:text-white mb-3 group-hover:text-blue-600 transition-colors">${isAr ? item.titleAr : item.titleEn}</h3>
        <p class="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">${isAr ? item.descAr : item.descEn}</p>
      </div>
      <div class="mt-6 pt-4 border-t border-zinc-100 dark:border-zinc-800 flex items-center text-xs font-semibold text-zinc-900 dark:text-white group-hover:text-blue-600">
        <span>${isAr ? "استكشف الخدمة" : "Explore Specialty"}</span>
        <i data-lucide="${isAr ? 'arrow-left' : 'arrow-right'}" class="w-4 h-4 mx-1 transition-transform group-hover:translate-x-1"></i>
      </div>
    </div>
  `).join('');
}

// Render 3 Featured Videos Grid (30 Years in Center)
function renderFeaturedVideos() {
  const isAr = currentLang === 'ar';
  const container = document.getElementById('featured-videos-grid');
  if (!container) return;

  const sorted = [
    PORTFOLIO_DATA.featuredVideos.find(v => v.id === 'alrazi-final'),
    PORTFOLIO_DATA.featuredVideos.find(v => v.id === '30-years'),
    PORTFOLIO_DATA.featuredVideos.find(v => v.id === 'exir-motion')
  ];

  container.innerHTML = sorted.map(v => `
    <div class="ui-card p-4 flex flex-col justify-between cursor-pointer group ${v.isCenter ? 'ring-2 ring-zinc-900 dark:ring-white shadow-2xl scale-[1.02] bg-white dark:bg-zinc-900 z-10' : ''}" onclick="openFeaturedVideoModal('${v.id}')">
      
      <div class="ui-frame aspect-[9/16] relative mb-4 rounded-xl overflow-hidden shadow-inner">
        
        <div class="ui-frame-dots justify-between">
          <span class="text-[10px] text-pink-400 font-mono font-bold">@el3tra_content</span>
          <span class="text-[10px] ${v.isCenter ? 'text-amber-400 font-extrabold' : 'text-zinc-400'} font-mono">
            ${v.isCenter ? (isAr ? '⭐ الفيديو الرئيسي' : '⭐ Featured Video') : (isAr ? 'فيديو مميز' : 'Featured Slot')}
          </span>
        </div>

        <video src="${v.videoSrc}#t=0.5" preload="metadata" muted class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"></video>
        
        <div class="absolute inset-0 bg-black/40 flex flex-col items-center justify-center p-4 text-center group-hover:bg-black/20 transition-all">
          <div class="play-btn-overlay mb-2 ${v.isCenter ? '!w-16 !h-16 shadow-2xl !bg-zinc-900 !text-white dark:!bg-white dark:!text-zinc-900' : ''}">
            <i data-lucide="play" class="w-8 h-8 fill-current ml-0.5"></i>
          </div>
          <span class="text-xs font-bold text-white bg-black/70 px-3 py-1 rounded-full backdrop-blur-md border border-white/20">
            ${isAr ? "انقر للمشاهدة مع الصوت" : "Click to Play with Audio"}
          </span>
        </div>

      </div>

      <div>
        <div class="flex items-center justify-between gap-2 mb-2">
          <span class="ui-badge text-xs font-bold ${v.isCenter ? 'ui-badge-primary' : ''}">${isAr ? v.clientAr : v.clientEn}</span>
          <span class="text-xs text-zinc-500 dark:text-zinc-400 font-mono flex items-center gap-1">
            <i data-lucide="eye" class="w-3.5 h-3.5"></i> ${v.views}
          </span>
        </div>
        <h4 class="font-extrabold text-zinc-900 dark:text-white text-lg mb-1.5 group-hover:text-blue-600 transition-colors">${isAr ? v.titleAr : v.titleEn}</h4>
        <p class="text-zinc-600 dark:text-zinc-400 text-xs mb-4 leading-relaxed font-medium">${isAr ? v.descAr : v.descEn}</p>
        <div class="flex flex-wrap gap-1.5">
          ${v.tags.map(t => `<span class="px-2 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 text-[11px] font-semibold">${t}</span>`).join('')}
        </div>
      </div>

    </div>
  `).join('');

  if (window.lucide) lucide.createIcons();
}

// Render Tools
function renderTools() {
  const container = document.getElementById('tools-container');
  if (!container) return;

  container.innerHTML = PORTFOLIO_DATA.tools.map(tool => `
    <div class="p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 flex items-center gap-3 shadow-xs hover:border-zinc-400 hover:shadow-md transition-all duration-300">
      <div class="w-10 h-10 rounded-lg bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 flex items-center justify-center">
        <i data-lucide="${tool.icon}" class="w-5 h-5"></i>
      </div>
      <div>
        <div class="font-bold text-sm text-zinc-900 dark:text-white">${tool.name}</div>
        <div class="text-xs text-zinc-500 dark:text-zinc-400">${tool.category}</div>
      </div>
    </div>
  `).join('');

  if (window.lucide) lucide.createIcons();
}

// Dynamic Render Experience Timeline (2020 - 2026)
function renderExperience() {
  const isAr = currentLang === 'ar';
  const container = document.getElementById('experience-timeline');
  if (!container) return;

  container.innerHTML = PORTFOLIO_DATA.experiencesTimeline.map(exp => `
    <div class="relative pl-6 border-l-2 border-zinc-200 dark:border-zinc-800 ${isAr ? 'pr-6 pl-0 border-l-0 border-r-2 border-zinc-900 dark:border-white' : 'border-zinc-900 dark:border-white'} space-y-1">
      <div class="absolute top-0 ${isAr ? '-right-[7px]' : '-left-[7px]'} w-3.5 h-3.5 rounded-full bg-zinc-900 dark:bg-white ring-4 ring-white dark:ring-zinc-900 shadow-xs"></div>
      <span class="inline-block px-3 py-1 rounded-full bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 text-xs font-mono font-bold mb-2 shadow-xs">${isAr ? exp.periodAr : exp.period}</span>
      <h3 class="text-lg font-extrabold text-zinc-900 dark:text-white">${isAr ? exp.roleAr : exp.roleEn}</h3>
      <div class="text-xs font-extrabold text-blue-600 dark:text-blue-400 mb-2">${isAr ? exp.companyAr : exp.companyEn}</div>
      <p class="text-zinc-600 dark:text-zinc-400 text-xs leading-relaxed font-medium">${isAr ? exp.descAr : exp.descEn}</p>
    </div>
  `).join('');
}

// Scroll Intersection Observer for Reveal Effect
function setupScrollObserver() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.reveal-on-scroll').forEach(el => {
    observer.observe(el);
  });
}

// Event Listeners & Keyboard Shortcuts
function setupEventListeners() {
  const langToggleBtn = document.getElementById('lang-toggle-btn');
  if (langToggleBtn) {
    langToggleBtn.addEventListener('click', () => {
      setLanguage(currentLang === 'ar' ? 'en' : 'ar');
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeVideoModal();
    }
  });

  const modalBackdrop = document.getElementById('video-modal');
  if (modalBackdrop) {
    modalBackdrop.addEventListener('click', (e) => {
      if (e.target === modalBackdrop) {
        closeVideoModal();
      }
    });
  }
}

// Interactive Video Modal Player with Audio Support & Prominent Close Controls
function openFeaturedVideoModal(videoId) {
  const video = PORTFOLIO_DATA.featuredVideos.find(v => v.id === videoId);
  if (!video) return;

  const isAr = currentLang === 'ar';
  const modal = document.getElementById('video-modal');
  const modalContainer = document.getElementById('modal-video-container');

  if (modal && modalContainer) {
    modalContainer.innerHTML = `
      <div class="bg-white dark:bg-zinc-900 rounded-2xl overflow-hidden shadow-2xl border border-zinc-200 dark:border-zinc-800 max-w-4xl w-full mx-4 relative" onclick="event.stopPropagation()">
        
        <button onclick="closeVideoModal()" title="${isAr ? 'إغلاق المشغل' : 'Close Player'}" class="absolute top-3 ${isAr ? 'left-3' : 'right-3'} z-30 w-10 h-10 rounded-full bg-zinc-900/90 text-white hover:bg-red-600 flex items-center justify-center shadow-2xl transition-all hover:scale-110 border border-white/20">
          <i data-lucide="x" class="w-6 h-6"></i>
        </button>

        <div class="ui-frame bg-black aspect-video relative flex items-center justify-center">
          <div class="ui-frame-dots absolute top-0 left-0 right-0 justify-between z-10 bg-black/60 backdrop-blur-md px-4 py-2">
            <div class="flex items-center gap-1.5 cursor-pointer" onclick="closeVideoModal()">
              <div class="ui-frame-dot red shadow-xs hover:scale-125 transition-transform" title="إغلاق"></div>
              <div class="ui-frame-dot yellow"></div>
              <div class="ui-frame-dot green"></div>
            </div>
            <span class="text-[11px] font-mono text-zinc-300 font-bold">
              ${isAr ? video.titleAr : video.titleEn}
            </span>
          </div>

          <video id="modal-active-video-player" src="${video.videoSrc}" controls autoplay class="w-full h-full max-h-[75vh] object-contain"></video>
        </div>

        <div class="p-6 bg-white dark:bg-zinc-900 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-zinc-100 dark:border-zinc-800">
          <div>
            <div class="flex items-center gap-2 mb-1">
              <span class="ui-badge text-xs font-bold ui-badge-primary">${isAr ? video.clientAr : video.clientEn}</span>
              <span class="text-xs text-zinc-500 dark:text-zinc-400 font-mono flex items-center gap-1">
                <i data-lucide="eye" class="w-3.5 h-3.5"></i> ${video.views}
              </span>
            </div>
            <h3 class="text-xl font-bold text-zinc-900 dark:text-white">${isAr ? video.titleAr : video.titleEn}</h3>
            <p class="text-zinc-600 dark:text-zinc-400 text-xs mt-1 leading-relaxed">${isAr ? video.descAr : video.descEn}</p>
          </div>

          <button onclick="closeVideoModal()" class="w-full sm:w-auto px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-xl font-bold text-sm transition-all shadow-md flex items-center justify-center gap-2">
            <i data-lucide="x-circle" class="w-5 h-5"></i>
            <span>${isAr ? "إغلاق المشغل (Esc)" : "Close Player (Esc)"}</span>
          </button>
        </div>

      </div>
    `;
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    if (window.lucide) lucide.createIcons();
  }
}

// Close Video Modal and Immediately Stop Sound & Video Playback
function closeVideoModal() {
  const modal = document.getElementById('video-modal');
  if (modal) {
    const videoElem = document.getElementById('modal-active-video-player');
    if (videoElem) {
      videoElem.pause();
      videoElem.src = "";
    }
    modal.classList.add('hidden');
    modal.classList.remove('flex');
    const modalContainer = document.getElementById('modal-video-container');
    if (modalContainer) modalContainer.innerHTML = '';
  }
}
