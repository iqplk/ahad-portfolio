import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

const savedLanguage = localStorage.getItem('ahad-language')

const defaultLanguage =
  savedLanguage === 'ar' ? 'ar' : 'en'

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          nav: {
            home: 'Home',
            about: 'About',
            projects: 'Projects',
            contact: 'Contact',
          },

          hero: {
            greeting: "Hello, I'm",
            role: 'Frontend & UI Developer',
            headline1: 'Designing interfaces.',
            headline2: 'Building experiences.',
            description:
              'I create thoughtful digital experiences that bring together clean design, smooth interactions, and modern frontend development.',
            projectsButton: 'Explore My Work',
            contactButton: "Let's Connect",
          },

          about: {
            subtitle: 'GET TO KNOW ME',
            title: 'About Me',
            headline:
              'Passionate about creating meaningful digital experiences.',
            description:
              'I am a Computer Science graduate from Taibah University, focused on Frontend Development and User Interface Design. I enjoy transforming ideas into visually engaging, responsive, and user-friendly digital experiences. My experience includes designing application interfaces, working with Flutter and Dart, and contributing to collaborative software projects.',
            educationLabel: 'EDUCATION',
            degree: 'Bachelor of Science in Computer Science',
            university: 'Taibah University',
            graduation: 'Graduated in 2026',
            viewWork: 'Explore My Projects',
            frontendTitle: 'Frontend Development',
            frontendDescription:
              'Building responsive and interactive application interfaces.',
            uiTitle: 'UI Design',
            uiDescription:
              'Designing visually appealing and intuitive user interfaces.',
            experienceTitle: 'User Experience',
            experienceDescription:
              'Creating thoughtful interactions that improve usability.',
          },

          projects: {
            subtitle: 'SELECTED WORK',
            title: 'Featured Projects',
            description:
              'A selection of projects highlighting modern user interfaces, interactive application experiences, and thoughtful UI design.',

            rihalCategory: 'Tourism Application',
            rihalDescription:
              'Rihal is a smart tourism application that helps travelers discover destinations through an interactive map and create personalized itineraries based on their interests and available time. Its intuitive interfaces make exploring attractions and planning trips easier and more engaging.',

            faseelahCategory: 'Agricultural Application',
            faseelahDescription:
              'Faseelah is a smart agricultural application that encourages planting and environmental awareness. Users can analyze soil images to discover suitable plants, identify plants through photos, and receive care instructions. The app also features interactive maps for agricultural trips, community planting activities, plant naming and storytelling, short-video Reels, and digital achievement badges.',

            liveDemo: 'Live Demo',
          },
        },
      },

      ar: {
        translation: {
          nav: {
            home: 'الرئيسية',
            about: 'نبذة عني',
            projects: 'المشاريع',
            contact: 'التواصل',
          },

          hero: {
            greeting: 'مرحبًا، أنا',
            role: 'مطوّرة واجهات أمامية ومصممة واجهات مستخدم',
            headline1: 'أصمم واجهات مميزة.',
            headline2: 'وأطوّر تجارب تفاعلية.',
            description:
              'أطوّر تجارب رقمية تجمع بين التصميم الأنيق والتفاعل السلس وتقنيات تطوير الواجهات الحديثة.',
            projectsButton: 'استعرض أعمالي',
            contactButton: 'تواصل معي',
          },

          about: {
            subtitle: 'تعرّف عليّ',
            title: 'نبذة عني',
            headline: 'شغوفة بتطوير تجارب رقمية مميزة.',
            description:
              'أنا خريجة علوم الحاسب من جامعة طيبة، أركز على تطوير الواجهات الأمامية وتصميم واجهات المستخدم. أستمتع بتحويل الأفكار إلى تجارب رقمية جذابة ومتجاوبة وسهلة الاستخدام. تشمل خبرتي تصميم واجهات التطبيقات، والعمل باستخدام Flutter وDart، والمساهمة في مشاريع برمجية جماعية.',
            educationLabel: 'التعليم',
            degree: 'بكالوريوس العلوم في علوم الحاسب',
            university: 'جامعة طيبة',
            graduation: 'تخرجت عام 2026',
            viewWork: 'استعرض مشاريعي',
            frontendTitle: 'تطوير الواجهات الأمامية',
            frontendDescription:
              'تطوير واجهات تطبيقات تفاعلية ومتجاوبة مع مختلف الأجهزة.',
            uiTitle: 'تصميم واجهات المستخدم',
            uiDescription:
              'تصميم واجهات جذابة وواضحة وسهلة الاستخدام.',
            experienceTitle: 'تجربة المستخدم',
            experienceDescription:
              'تطوير تفاعلات مدروسة لتحسين سهولة الاستخدام.',
          },

          projects: {
            subtitle: 'أعمال مختارة',
            title: 'مشاريعي المميزة',
            description:
              'مجموعة من المشاريع التي تبرز تصميم واجهات المستخدم الحديثة والتجارب التفاعلية وسهولة استخدام التطبيقات.',

            rihalCategory: 'تطبيق سياحي',
            rihalDescription:
              'رحال تطبيق سياحي ذكي يساعد المستخدمين على استكشاف الوجهات والمعالم السياحية من خلال خريطة تفاعلية، وإنشاء خطط رحلات مخصصة بناءً على اهتماماتهم والوقت المتاح لديهم. ويتميز بواجهات سهلة الاستخدام وتجربة تنقل سلسة تجعل استكشاف الأماكن وتخطيط الرحلات أكثر سهولة ومتعة.',

            faseelahCategory: 'تطبيق زراعي',
            faseelahDescription:
              'فسيلة تطبيق زراعي ذكي يهدف إلى تشجيع الزراعة وتعزيز الوعي البيئي. يتيح للمستخدم تحليل صور التربة لمعرفة النباتات المناسبة لها، والتعرف على النباتات من خلال تصويرها والحصول على إرشادات العناية بها. كما يوفر خريطة تفاعلية لإنشاء الرحلات الزراعية والمشاركة في أنشطة الزراعة المجتمعية، مع إمكانية تسمية النبتة وتوثيق سبب زراعتها ومشاركة التجارب عبر مقاطع الريلز، بالإضافة إلى أوسمة رقمية تشجع المستخدمين على الزراعة.',

            liveDemo: 'تجربة المشروع',
          },
        },
      },
    },

    lng: defaultLanguage,
    fallbackLng: 'en',

    interpolation: {
      escapeValue: false,
    },
  })

document.documentElement.lang = defaultLanguage
document.documentElement.dir =
  defaultLanguage === 'ar' ? 'rtl' : 'ltr'

i18n.on('languageChanged', (language) => {
  const selectedLanguage = language === 'ar' ? 'ar' : 'en'

  localStorage.setItem('ahad-language', selectedLanguage)

  document.documentElement.lang = selectedLanguage
  document.documentElement.dir =
    selectedLanguage === 'ar' ? 'rtl' : 'ltr'
})

export default i18n