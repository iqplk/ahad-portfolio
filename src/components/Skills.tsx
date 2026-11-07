import { motion, useReducedMotion } from 'motion/react'
import { Code2, Palette, Wrench } from 'lucide-react'
import { useTranslation } from 'react-i18next'

type SkillsProps = {
  darkMode: boolean
}

type Category = {
  id: string
  icon: typeof Code2
  title: string
  titleAr: string
  description: string
  descriptionAr: string
  skills: string[]
}

export default function Skills({ darkMode }: SkillsProps) {
  const { i18n } = useTranslation()

  const isArabic = i18n.resolvedLanguage === 'ar'
  const reduceMotion = useReducedMotion()

  const fontFamily = isArabic
    ? "'IBM Plex Sans Arabic', 'Noto Sans Arabic', sans-serif"
    : "'Outfit', sans-serif"

  const categories: Category[] = [
    {
      id: 'frontend',
      icon: Code2,
      title: 'Frontend Development',
      titleAr: 'تطوير الواجهات الأمامية',
      description:
        'Building modern, responsive, and interactive web interfaces.',
      descriptionAr:
        'تطوير واجهات ويب حديثة وتفاعلية ومتجاوبة مع مختلف الأجهزة.',
      skills: [
        'HTML5',
        'CSS3',
        'JavaScript',
        'React',
        'TypeScript',
        'Tailwind CSS',
      ],
    },
    {
      id: 'design',
      icon: Palette,
      title: 'UI/UX Design',
      titleAr: 'تصميم واجهات وتجربة المستخدم',
      description:
        'Designing intuitive, visually engaging digital experiences.',
      descriptionAr:
        'تصميم واجهات جذابة وتجارب استخدام واضحة وسهلة.',
      skills: ['Figma', 'UI Design', 'UX Design'],
    },
    {
      id: 'tools',
      icon: Wrench,
      title: 'Development Tools',
      titleAr: 'أدوات التطوير',
      description:
        'Tools I use to develop and organize my projects.',
      descriptionAr:
        'الأدوات التي أستخدمها في تطوير المشاريع وتنظيمها.',
      skills: ['Git', 'GitHub', 'VS Code'],
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
      duration: 0.6,
      delay,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  })

  return (
    <section
      id="skills"
      dir={isArabic ? 'rtl' : 'ltr'}
      className="relative mx-auto max-w-7xl scroll-mt-24 px-5 py-16 sm:px-8 sm:py-20 lg:px-12"
      style={{ fontFamily }}
    >
      {/* SECTION HEADER */}

      <motion.div
        {...reveal()}
        className="mb-10 max-w-3xl"
      >
        <p className="mb-4 text-[11px] font-semibold tracking-[0.2em] text-violet-400">
          {isArabic ? 'مهاراتي التقنية' : 'MY EXPERTISE'}
        </p>

        <h2
          className={`font-semibold ${
            isArabic
              ? 'text-[clamp(2rem,4vw,3.8rem)] leading-[1.5]'
              : 'text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.12] tracking-[-0.055em]'
          }`}
        >
          {isArabic
            ? 'المهارات والتقنيات'
            : 'Skills & Technologies'}
        </h2>

        <p
          className={`mt-5 max-w-2xl text-[14px] leading-[2] sm:text-[15px] ${
            darkMode
              ? 'text-[#a5a3b9]'
              : 'text-[#686477]'
          }`}
        >
          {isArabic
            ? 'مجموعة من التقنيات والأدوات التي أستخدمها في تطوير الواجهات وتصميم تجارب مستخدم حديثة وتفاعلية.'
            : 'A selection of technologies and tools I use to develop modern interfaces and design engaging user experiences.'}
        </p>
      </motion.div>

      {/* SKILLS CARDS — SAME STYLE AS EDUCATION */}

      <div className="grid items-start gap-4 md:grid-cols-2">
        {categories.map((category, index) => {
          const Icon = category.icon

          return (
            <motion.article
              key={category.id}
              {...reveal(0.1 + index * 0.1)}
              className={`relative rounded-2xl border p-5 transition-colors duration-300 sm:p-6 ${
                darkMode
                  ? 'border-white/[0.09] bg-white/[0.025] hover:border-violet-500/30'
                  : 'border-[#171426]/[0.09] bg-white hover:border-violet-400/40'
              }`}
            >
              {/* ICON AND CONTENT */}

              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-violet-500/10 text-violet-400">
                  <Icon size={21} strokeWidth={1.7} />
                </div>

                <div className="min-w-0 flex-1">
                  <h3
                    className={`font-semibold ${
                      isArabic
                        ? 'text-[17px] leading-[1.9]'
                        : 'text-[18px] leading-[1.5]'
                    }`}
                  >
                    {isArabic
                      ? category.titleAr
                      : category.title}
                  </h3>

                  <p
                    className={`mt-2 text-[13px] leading-[1.9] ${
                      darkMode
                        ? 'text-[#a5a3b9]'
                        : 'text-[#686477]'
                    }`}
                  >
                    {isArabic
                      ? category.descriptionAr
                      : category.description}
                  </p>
                </div>
              </div>

              {/* DIVIDER */}

              <div
                className={`my-5 h-px ${
                  darkMode
                    ? 'bg-white/[0.08]'
                    : 'bg-[#171426]/[0.08]'
                }`}
              />

              {/* TECHNOLOGIES */}

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    dir="ltr"
                    className={`inline-flex items-center rounded-lg border px-3 py-1.5 text-[12px] font-medium transition-colors duration-300 ${
                      darkMode
                        ? 'border-white/[0.09] bg-white/[0.035] text-[#bcb9cf]'
                        : 'border-[#171426]/[0.09] bg-[#f7f6fb] text-[#625d74]'
                    }`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.article>
          )
        })}
      </div>
    </section>
  )
}