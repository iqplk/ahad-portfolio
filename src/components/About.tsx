import { motion, useReducedMotion } from 'motion/react'
import {
  Code2,
  Palette,
  GraduationCap,
  BookOpen,
  CalendarDays,
  
} from 'lucide-react'
import { useTranslation } from 'react-i18next'

type AboutProps = {
  darkMode: boolean
}

export default function About({ darkMode }: AboutProps) {
  const { i18n } = useTranslation()
  const reduceMotion = useReducedMotion()

  const isArabic = i18n.resolvedLanguage === 'ar'

  const fontFamily = isArabic
    ? "'IBM Plex Sans Arabic', 'Noto Sans Arabic', sans-serif"
    : "'Outfit', sans-serif"

  const content = isArabic
    ? {
        label: 'نبذة عني',
        title: 'أصمّم تجارب رقمية تجمع بين الجمال وسهولة الاستخدام.',
        description:
          'أهتم بتصميم وتطوير واجهات المواقع والتطبيقات، وأسعى إلى تقديم تجارب رقمية واضحة وتفاعلية، مع التركيز على التفاصيل التي تجعل تجربة المستخدم أكثر سلاسة وتميزًا.',
        expertiseLabel: 'مجالات اهتمامي',
        expertise: [
          {
            title: 'تطوير الواجهات الأمامية',
            description:
              'بناء واجهات ويب حديثة ومتجاوبة مع مختلف أحجام الشاشات.',
            icon: Code2,
          },
          {
            title: 'تصميم UI/UX',
            description:
              'تصميم واجهات جذابة وتجارب استخدام واضحة وسهلة.',
            icon: Palette,
          },
        ],
        educationLabel: 'المسيرة الأكاديمية',
        educationTitle: 'التعليم',
        university: 'جامعة طيبة',
        bachelor: 'العلوم في علوم الحاسب',
        diploma: 'البرمجة ونظم المعلومات',
        bachelorType: 'بكالوريوس',
        diplomaType: 'دبلوم متوسط',
        graduation: 'سنة التخرج',
      }
    : {
        label: 'ABOUT ME',
        title:
          'Designing digital experiences where aesthetics meet usability.',
        description:
          'I focus on designing and developing web and application interfaces, creating thoughtful, responsive, and engaging digital experiences with attention to usability and detail.',
        expertiseLabel: 'WHAT I DO',
        expertise: [
          {
            title: 'Frontend Development',
            description:
              'Building modern, responsive interfaces across different screen sizes.',
            icon: Code2,
          },
          {
            title: 'UI/UX Design',
            description:
              'Creating visually engaging interfaces and intuitive user experiences.',
            icon: Palette,
          },
        ],
        educationLabel: 'ACADEMIC BACKGROUND',
        educationTitle: 'Education',
        university: 'Taibah University',
        bachelor: ' Computer Science',
        diploma: 'Programming and Information Systems',
        bachelorType: "Bachelor's Degree",
        diplomaType: 'Intermediate Diploma',
        graduation: 'Graduated',
      }

  const education = [
    {
      id: 'bachelor',
      icon: GraduationCap,
      type: content.bachelorType,
      degree: content.bachelor,
      year: '2026',
    },
    {
      id: 'diploma',
      icon: BookOpen,
      type: content.diplomaType,
      degree: content.diploma,
      year: '2022',
    },
  ]

  const reveal = (delay = 0) => ({
    initial: reduceMotion
      ? false
      : { opacity: 0, y: 22 },
    whileInView: {
      opacity: 1,
      y: 0,
    },
    viewport: {
      once: true,
      amount: 0.15,
    },
    transition: {
      duration: 0.65,
      delay,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  })

  return (
    <section
      id="about"
      dir={isArabic ? 'rtl' : 'ltr'}
      className="relative mx-auto max-w-7xl scroll-mt-24 px-5 py-16 sm:px-8 sm:py-20 lg:px-12"
      style={{ fontFamily }}
    >
      {/* SECTION INTRO */}

      <motion.div
        {...reveal()}
        className="max-w-4xl"
      >
        <p className="mb-5 text-[11px] font-semibold tracking-[0.2em] text-violet-400">
          {content.label}
        </p>

        <h2
          className={`max-w-4xl font-semibold ${
            isArabic
              ? 'text-[clamp(1.8rem,4vw,3.3rem)] leading-[1.65]'
              : 'text-[clamp(2.2rem,4.5vw,4rem)] leading-[1.15] tracking-[-0.055em]'
          }`}
        >
          {content.title}
        </h2>

        <p
          className={`mt-6 max-w-2xl text-[14px] leading-[2] sm:text-[16px] ${
            darkMode
              ? 'text-[#a5a3b9]'
              : 'text-[#686477]'
          }`}
        >
          {content.description}
        </p>
      </motion.div>

      {/* EXPERTISE - NO CARDS */}

      <motion.div
        {...reveal(0.1)}
        className={`mt-12 border-t pt-8 sm:mt-16 ${
          darkMode
            ? 'border-white/10'
            : 'border-[#171426]/10'
        }`}
      >
        <p className="mb-6 text-[11px] font-semibold tracking-[0.15em] text-violet-400">
          {content.expertiseLabel}
        </p>

        <div className="grid gap-7 md:grid-cols-2 md:gap-12">
          {content.expertise.map((item, index) => (
            <motion.div
              key={item.title}
              {...reveal(index * 0.1)}
              className="flex items-start gap-4"
            >
              <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-violet-500/10 text-violet-400">
                <item.icon size={20} strokeWidth={1.7} />
              </div>

              <div>
                <h3 className="text-[16px] font-semibold sm:text-[18px]">
                  {item.title}
                </h3>

                <p
                  className={`mt-2 max-w-sm text-[13px] leading-[1.9] sm:text-[14px] ${
                    darkMode
                      ? 'text-[#9290a8]'
                      : 'text-[#777386]'
                  }`}
                >
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* EDUCATION */}

      <motion.div
        {...reveal(0.15)}
        className={`mt-14 border-t pt-9 sm:mt-16 ${
          darkMode
            ? 'border-white/10'
            : 'border-[#171426]/10'
        }`}
      >
        <div className="mb-7">
          <p className="mb-2 text-[11px] font-semibold tracking-[0.15em] text-violet-400">
            {content.educationLabel}
          </p>

          <h3 className="text-2xl font-semibold sm:text-3xl">
            {content.educationTitle}
          </h3>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {education.map((item, index) => (
            <motion.article
              key={item.id}
              {...reveal(0.1 + index * 0.1)}
              className={`relative rounded-2xl border p-5 transition-colors duration-300 sm:p-6 ${
                darkMode
                  ? 'border-white/[0.09] bg-white/[0.025] hover:border-violet-500/30'
                  : 'border-[#171426]/[0.09] bg-white hover:border-violet-400/40'
              }`}
            >
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-violet-500/10 text-violet-400">
                  <item.icon size={21} strokeWidth={1.7} />
                </div>

                <div className="min-w-0">
                  <p className="text-[12px] font-medium text-violet-400">
                    {item.type}
                  </p>

                  <h4
                    className={`mt-1 font-semibold ${
                      isArabic
                        ? 'text-[16px] leading-[1.9]'
                        : 'text-[17px] leading-[1.5]'
                    }`}
                  >
                    {item.degree}
                  </h4>

                  <p
                    className={`mt-2 text-[13px] ${
                      darkMode
                        ? 'text-[#a5a3b9]'
                        : 'text-[#686477]'
                    }`}
                  >
                    {content.university}
                  </p>

                  <div
                    className={`mt-4 flex items-center gap-2 text-[12px] ${
                      darkMode
                        ? 'text-[#77758e]'
                        : 'text-[#898496]'
                    }`}
                  >
                    <CalendarDays size={14} />

                    <span>
                      {content.graduation} {item.year}
                    </span>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </section>
  )
}