import { motion, useReducedMotion } from 'motion/react'
import {
  Code2,
  Palette,
  Wrench,
  Sparkles,
  ArrowUpRight,
} from 'lucide-react'
import { useTranslation } from 'react-i18next'

type SkillsProps = {
  darkMode: boolean
}

type Category = {
  id: string
  icon: typeof Code2
  number: string
  title: string
  titleAr: string
  description: string
  descriptionAr: string
  skills: string[]
  accent: 'violet' | 'pink' | 'cyan'
}

export default function Skills({ darkMode }: SkillsProps) {
  const { i18n } = useTranslation()
  const isArabic = i18n.resolvedLanguage === 'ar'
  const reduceMotion = useReducedMotion()

  const categories: Category[] = [
    {
      id: 'frontend',
      icon: Code2,
      number: '01',
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
      accent: 'violet',
    },
    {
      id: 'design',
      icon: Palette,
      number: '02',
      title: 'Mobile Development & UI/UX',
      titleAr: 'تطوير التطبيقات وتصميم الواجهات',
      description:
        'Developing mobile applications and designing intuitive user experiences.',
      descriptionAr:
        'تطوير تطبيقات الجوال وتصميم واجهات وتجارب مستخدم جذابة وسهلة الاستخدام.',
      skills: [
        'Flutter',
        'Dart',
        'Figma',
        'UI Design',
        'UX Design',
      ],
      accent: 'pink',
    },
    {
      id: 'tools',
      icon: Wrench,
      number: '03',
      title: 'Development Tools',
      titleAr: 'أدوات التطوير',
      description:
        'Tools I use to build, manage, and organize software projects.',
      descriptionAr:
        'أدوات أستخدمها لتطوير المشاريع البرمجية وإدارتها وتنظيمها.',
      skills: [
        'Git',
        'GitHub',
        'VS Code',
      ],
      accent: 'cyan',
    },
  ]

  const accentStyles = {
    violet: {
      icon: 'text-violet-400 bg-violet-500/10',
      border: 'hover:border-violet-500/40',
      badge:
        'hover:border-violet-400/40 hover:text-violet-400',
      glow: 'bg-violet-500/10',
    },
    pink: {
      icon: 'text-pink-400 bg-pink-500/10',
      border: 'hover:border-pink-500/40',
      badge:
        'hover:border-pink-400/40 hover:text-pink-400',
      glow: 'bg-pink-500/10',
    },
    cyan: {
      icon: 'text-cyan-400 bg-cyan-500/10',
      border: 'hover:border-cyan-500/40',
      badge:
        'hover:border-cyan-400/40 hover:text-cyan-400',
      glow: 'bg-cyan-500/10',
    },
  }

  return (
    <section
      id="skills"
      className="relative mx-auto max-w-7xl scroll-mt-24 px-6 py-28 lg:px-12"
    >
      {/* Section Heading */}
      <motion.div
        initial={
          reduceMotion
            ? false
            : { opacity: 0, y: 30 }
        }
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-14"
      >
        <div className="mb-4 flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.25em] text-violet-400">
          <Sparkles size={17} />
          {isArabic ? 'مهاراتي التقنية' : 'MY EXPERTISE'}
        </div>

        <h2 className="text-4xl font-bold tracking-tight md:text-6xl">
          {isArabic
            ? 'المهارات والتقنيات'
            : 'Skills & Technologies'}

          <span className="text-violet-500">.</span>
        </h2>

        <p
          className={`mt-6 max-w-2xl text-base leading-8 ${
            darkMode
              ? 'text-slate-400'
              : 'text-slate-600'
          }`}
        >
          {isArabic
            ? 'مجموعة من التقنيات والأدوات التي أستخدمها لتطوير التطبيقات وتصميم واجهات مستخدم حديثة وتفاعلية.'
            : 'A selection of technologies and tools I use to develop applications and create modern, interactive user interfaces.'}
        </p>
      </motion.div>

      {/* Skill Categories */}
      <div className="grid items-stretch gap-6 lg:grid-cols-3">
        {categories.map((category, index) => {
          const Icon = category.icon
          const styles = accentStyles[category.accent]

          return (
            <motion.article
              key={category.id}
              initial={
                reduceMotion
                  ? false
                  : { opacity: 0, y: 35 }
              }
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{
                once: true,
                amount: 0.15,
              }}
              transition={{
                duration: 0.6,
                delay: index * 0.12,
              }}
              whileHover={
                reduceMotion
                  ? undefined
                  : { y: -7 }
              }
              className={`group relative flex h-full flex-col overflow-hidden rounded-3xl border p-7 transition-colors duration-300 sm:p-8 ${
                darkMode
                  ? 'border-white/10 bg-[#151b2c]/70'
                  : 'border-slate-200 bg-white'
              } ${styles.border}`}
            >
              {/* Background Glow */}
              <div
                className={`pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full blur-3xl ${styles.glow}`}
              />

              {/* Header */}
              <div className="relative flex items-start justify-between">
                <div
                  className={`flex h-14 w-14 items-center justify-center rounded-2xl ${styles.icon}`}
                >
                  <Icon size={25} />
                </div>

                <span
                  className={`text-sm font-medium ${
                    darkMode
                      ? 'text-slate-600'
                      : 'text-slate-400'
                  }`}
                >
                  {category.number}
                </span>
              </div>

              {/* Content */}
              <div className="relative mt-9">
                <h3 className="text-xl font-bold tracking-tight">
                  {isArabic
                    ? category.titleAr
                    : category.title}
                </h3>

                <p
                  className={`mt-3 min-h-[56px] text-sm leading-7 ${
                    darkMode
                      ? 'text-slate-400'
                      : 'text-slate-600'
                  }`}
                >
                  {isArabic
                    ? category.descriptionAr
                    : category.description}
                </p>
              </div>

              {/* Divider */}
              <div
                className={`my-7 h-px ${
                  darkMode
                    ? 'bg-white/10'
                    : 'bg-slate-200'
                }`}
              />

              {/* Skills */}
              <div className="relative flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className={`rounded-xl border px-3.5 py-2.5 text-sm font-semibold transition-all duration-300 ${
                      darkMode
                        ? 'border-white/10 bg-white/5 text-slate-300'
                        : 'border-slate-200 bg-slate-50 text-slate-700'
                    } ${styles.badge}`}
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* Bottom Icon */}
              <div className="relative mt-auto flex justify-end pt-8">
                <ArrowUpRight
                  size={19}
                  className={`transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 ${
                    darkMode
                      ? 'text-slate-600'
                      : 'text-slate-400'
                  }`}
                />
              </div>
            </motion.article>
          )
        })}
      </div>
    </section>
  )
}