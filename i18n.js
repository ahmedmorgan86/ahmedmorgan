/**
 * i18n Translation & Localization Engine
 * Supports seamless toggling between Arabic (RTL) and English (LTR)
 */
(function(window) {
  'use strict';

  const LANG_STORAGE_KEY = 'ahmedmorgan_portfolio_lang';

  const UI_STRINGS = {
    en: {
      // Nav
      nav_brand: 'Ahmed Morgan',
      nav_about: 'About',
      nav_skills: 'Skills',
      nav_projects: 'Projects',
      nav_experience: 'Experience',
      nav_services: 'Services',
      nav_approach: 'Approach',
      nav_contact: 'Contact',
      nav_hire: 'Hire Me',
      nav_admin: 'Admin',

      // Hero
      hero_scroll: 'SCROLL',
      hero_cta_work: 'Explore Work',
      hero_cta_contact: 'Initiate Contact',
      hero_cta_cv: 'Download CV',
      hero_frame_label: 'AM // FULL-STACK · AI · ARCHITECTURE',

      // About
      about_eyebrow: '01 / ABOUT',
      about_title: 'Systems that hold up<br>under real use.',

      // Skills
      skills_eyebrow: '02 / STACK',
      skills_title: 'The Core.',
      skills_sub: 'Every technology orbiting one architecture. Hover to inspect, click for detail.',
      skills_center: 'Ahmed<br>Morgan',
      skills_hint: '14 technologies · click a node for details',
      skills_modal_role: 'Role / Focus',

      // Projects
      projects_eyebrow: '03 / SELECTED WORK',
      projects_title: 'Six systems.<br>Real constraints.',
      projects_sub: 'Enterprise desktop software, commerce platforms and client sites — each built for the constraints it actually has to survive.',
      projects_challenge: 'Challenge',
      projects_architecture: 'Architecture',
      projects_live_demo: 'Live Site',

      // Experience
      exp_eyebrow: '04 / BUILD LOG',
      exp_title: 'How it was built,<br>in order.',

      // Services
      services_eyebrow: '05 / SERVICES',
      services_title: 'Where I help.',

      // Approach
      approach_eyebrow: '06 / APPROACH',
      approach_title: 'How I actually work.',

      // Contact
      contact_eyebrow: '07 / CONTACT',
      contact_title: "Let's build something<br>that holds up.",
      contact_name_placeholder: 'Your name',
      contact_email_placeholder: 'Your email address',
      contact_msg_placeholder: 'Tell me about the system you need built...',
      contact_send_btn: 'Send Transmission',
      contact_sending: 'Encrypting &amp; Sending...',
      contact_sent: 'Transmission received. I will reply within 24 hours.',

      // Terminal lines
      term_l1: '&gt; visitor@portfolio ~ hire Ahmed',
      term_l2: 'Searching available slots...',
      term_l3: 'Connecting to Ahmed Morgan...',
      term_l4: 'Encrypting channel...',
      term_l5: 'Ready. <span class="ok">Form unlocked.</span>',

      // Footer
      footer_engineered: 'Engineered with precision.',
      back_to_top: 'TOP'
    },
    ar: {
      // Nav
      nav_brand: 'أحمد مرجان',
      nav_about: 'نبذة عني',
      nav_skills: 'المهارات',
      nav_projects: 'الأعمال والمشاريع',
      nav_experience: 'سجل الخبرات',
      nav_services: 'الخدمات',
      nav_approach: 'منهجية العمل',
      nav_contact: 'تواصل معي',
      nav_hire: 'اطلب مشروعاً',
      nav_admin: 'لوحة التحكم',

      // Hero
      hero_scroll: 'مرر لأسفل',
      hero_cta_work: 'استكشف الأعمال',
      hero_cta_contact: 'تواصل معي',
      hero_cta_cv: 'تحميل السيرة الذاتية',
      hero_frame_label: 'أحمد مرجان // تطوير متكامل · ذكاء اصطناعي · معمارية برمجيات',

      // About
      about_eyebrow: '01 / نبذة عني',
      about_title: 'أنظمة تصمد وتعمل بكفاءة<br>تحت ضغط الاستخدام الفعلي.',

      // Skills
      skills_eyebrow: '02 / حزمة التقنيات',
      skills_title: 'النواة البرمجية.',
      skills_sub: 'كل تقنية تدور في فلك معمارية متماسكة. مرر للمعاينة، واضغط للتفاصيل.',
      skills_center: 'أحمد<br>مرجان',
      skills_hint: '14 تقنية أساسية · اضغط على أي عنصر للتفاصيل',
      skills_modal_role: 'الدور والتخصص',

      // Projects
      projects_eyebrow: '03 / أعمال مختارة',
      projects_title: 'ستة أنظمة متكاملة.<br>تحت قيود وتحديات واقعية.',
      projects_sub: 'برمجيات مكتبية للمؤسسات، منصات تجارة إلكترونية، ومواقع كبرى — صُممت وفق المتطلبات والتحديات الواقعية التي تواجهها.',
      projects_challenge: 'التحدي الهندسي',
      projects_architecture: 'المعمارية التقنية',
      projects_live_demo: 'معاينة مباشرة',

      // Experience
      exp_eyebrow: '04 / سجل البناء والخبرات',
      exp_title: 'كيف بُنيت الخبرة،<br>محطة تلو الأخرى.',

      // Services
      services_eyebrow: '05 / الخدمات',
      services_title: 'مجالات القوة والخدمات.',

      // Approach
      approach_eyebrow: '06 / منهجية العمل',
      approach_title: 'فلسفة العمل الهندسية.',

      // Contact
      contact_eyebrow: '07 / تواصل معي',
      contact_title: 'دعنا نبني نظاماً<br>يثبت جدارته ويصمد طويلاً.',
      contact_name_placeholder: 'الاسم الكريم',
      contact_email_placeholder: 'عنوان بريدك الإلكتروني',
      contact_msg_placeholder: 'أخبرني عن النظام أو المشروع الذي ترغب في بنائه...',
      contact_send_btn: 'إرسال الرسالة',
      contact_sending: 'جاري التشفير والإرسال...',
      contact_sent: 'تم استلام رسالتك بنجاح. سأتواصل معك خلال 24 ساعة.',

      // Terminal lines
      term_l1: '&gt; visitor@portfolio ~ طلب تعاقد مع أحمد مرجان',
      term_l2: 'جاري البحث عن المواعيد المتاحة...',
      term_l3: 'الاتصال بأحمد مرجان...',
      term_l4: 'تشفير القناة...',
      term_l5: 'جاهز. <span class="ok">تم فتح نموذج المراسلة.</span>',

      // Footer
      footer_engineered: 'صُمم وهُندس بكل دقة.',
      back_to_top: 'للأعلى'
    }
  };

  const PortfolioI18n = {
    getLang: function() {
      const saved = localStorage.getItem(LANG_STORAGE_KEY);
      if (saved === 'ar' || saved === 'en') return saved;
      return 'ar'; // Default to Arabic if user requested Arabic!
    },

    setLang: function(lang) {
      if (lang !== 'ar' && lang !== 'en') lang = 'ar';
      localStorage.setItem(LANG_STORAGE_KEY, lang);
      this.applyLangToDocument(lang);
      window.dispatchEvent(new CustomEvent('portfolioLanguageChanged', { detail: { lang } }));
      return lang;
    },

    toggleLang: function() {
      const current = this.getLang();
      const next = current === 'ar' ? 'en' : 'ar';
      return this.setLang(next);
    },

    applyLangToDocument: function(lang) {
      document.documentElement.lang = lang;
      document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
      if (lang === 'ar') {
        document.body.classList.add('is-arabic');
      } else {
        document.body.classList.remove('is-arabic');
      }
    },

    t: function(key) {
      const lang = this.getLang();
      if (UI_STRINGS[lang] && UI_STRINGS[lang][key]) {
        return UI_STRINGS[lang][key];
      }
      return (UI_STRINGS.ar && UI_STRINGS.ar[key]) || (UI_STRINGS.en && UI_STRINGS.en[key]) || key;
    },

    getText: function(item, field) {
      if (!item) return '';
      const lang = this.getLang();
      if (lang === 'ar') {
        return item[field + '_ar'] || item[field] || '';
      }
      return item[field + '_en'] || item[field] || item[field + '_ar'] || '';
    },

    getArray: function(item, field) {
      if (!item) return [];
      const lang = this.getLang();
      if (lang === 'ar' && item[field + '_ar'] && item[field + '_ar'].length) {
        return item[field + '_ar'];
      }
      if (item[field + '_en'] && item[field + '_en'].length) {
        return item[field + '_en'];
      }
      return item[field] || [];
    }
  };

  window.PortfolioI18n = PortfolioI18n;
})(window);
