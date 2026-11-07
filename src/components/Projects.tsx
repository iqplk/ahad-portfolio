import { motion, useReducedMotion } from 'motion/react'
import { ArrowUpRight } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

type ProjectsProps = {
  darkMode: boolean
}

type Project = {
  id: 'rihal' | 'faseelah'
  name: string
  categoryAr: string
  categoryEn: string
  descriptionAr: string
  descriptionEn: string
  technologies: string[]
  images: [string, string, string]
  demo?: string
}

const projects: Project[] = [
  {
    id: 'rihal',
    name: 'Rihal',
    categoryAr: 'تطبيق سياحي',
    categoryEn: 'Travel Application',
    descriptionAr:
      'تجربة تفاعلية لاستكشاف الوجهات السياحية وتنظيم الرحلات بسهولة.',
    descriptionEn:
      'An interactive experience for exploring destinations and planning trips.',
    technologies: ['Flutter', 'Dart', 'UI/UX'],
    images: [
      '/projects/rihal/interactive-map.jpg',
      '/projects/rihal/home-trip-setup.jpg',
      '/projects/rihal/itinerary-day-one.jpg',
    ],
    demo: 'https://rihal-fc413.web.app',
  },
  {
    id: 'faseelah',
    name: 'Faseelah',
    categoryAr: 'تطبيق زراعي',
    categoryEn: 'Agricultural Application',
    descriptionAr:
      'تجربة رقمية تجمع بين التعرف على النباتات وتحليل التربة والإرشادات الزراعية.',
    descriptionEn:
      'A digital experience combining plant identification, soil analysis, and gardening guidance.',
    technologies: ['UI Design', 'UX Design', 'Figma'],
    images: [
      '/projects/Faseelah/home.jpg',
      '/projects/Faseelah/plant-result.jpg',
      '/projects/Faseelah/soil-result.jpg',
    ],
  },
]

export default function Projects({ darkMode }: ProjectsProps) {
  const { i18n } = useTranslation()

  const isArabic = i18n.resolvedLanguage === 'ar'
  const reduceMotion = useReducedMotion()

  const fontFamily = isArabic
    ? "'IBM Plex Sans Arabic', 'Noto Sans Arabic', sans-serif"
    : "'Outfit', sans-serif"

  const reveal = (delay = 0) => ({
    initial: reduceMotion ? false : { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.15 },
    transition: {
      duration: 0.6,
      delay,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  })

  return (
    <section
      id="projects"
      dir={isArabic ? 'rtl' : 'ltr'}
      className="relative mx-auto max-w-7xl scroll-mt-24 px-5 py-16 sm:px-8 sm:py-20 lg:px-12"
      style={{ fontFamily }}
    >
      {/* SECTION HEADING */}

      <motion.div {...reveal()} className="mb-9 max-w-3xl">
        <p className="mb-4 text-[11px] font-semibold tracking-[0.2em] text-violet-400">
          {isArabic ? 'أعمال مختارة' : 'SELECTED WORK'}
        </p>

        <h2
          className={`font-semibold ${
            isArabic
              ? 'text-[clamp(2rem,4vw,3.8rem)] leading-[1.5]'
              : 'text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.12] tracking-[-0.055em]'
          }`}
        >
          {isArabic ? 'مشاريعي المميزة' : 'Featured Projects'}
        </h2>

        <p
          className={`mt-5 max-w-2xl text-[14px] leading-[2] sm:text-[15px] ${
            darkMode ? 'text-[#a5a3b9]' : 'text-[#686477]'
          }`}
        >
          {isArabic
            ? 'مجموعة من أعمالي في تصميم واجهات المستخدم وتطوير تجارب رقمية تفاعلية.'
            : 'A selection of my work in interface design and interactive digital experiences.'}
        </p>
      </motion.div>

      {/* PROJECT CARDS */}

      <div className="grid gap-4 md:grid-cols-2">
        {projects.map((project, index) => {
          const isRihal = project.id === 'rihal'

          return (
            <motion.article
              key={project.id}
              {...reveal(index * 0.1)}
              className={`group min-w-0 overflow-hidden rounded-2xl border transition-colors duration-300 ${
                darkMode
                  ? 'border-white/[0.09] bg-white/[0.025] hover:border-violet-500/30'
                  : 'border-[#171426]/[0.09] bg-white hover:border-violet-400/40'
              }`}
            >
              {/* INTERACTIVE PROJECT PREVIEW */}

              <div
                className={`relative h-[220px] overflow-hidden sm:h-[260px] ${
                  isRihal
                    ? 'bg-gradient-to-br from-[#3d287c] via-[#29215c] to-[#161633]'
                    : 'bg-gradient-to-br from-[#205640] via-[#194b3c] to-[#102f29]'
                }`}
              >
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_25%,rgba(255,255,255,0.12),transparent_65%)]"
                />

                {/* LEFT PHONE */}

                <motion.div
                  whileHover={
                    reduceMotion
                      ? undefined
                      : { y: -10, rotate: -7, scale: 1.04 }
                  }
                  className="absolute bottom-[-38%] left-[13%] z-10 w-[27%] max-w-[130px] -rotate-12 overflow-hidden rounded-[15px] border-[4px] border-[#252638] bg-[#252638] shadow-xl transition-transform duration-300 group-hover:-translate-y-2 sm:left-[16%]"
                >
                  <img
                    src={project.images[0]}
                    alt={`${project.name} screen 1`}
                    loading="lazy"
                    className="block aspect-[9/19] w-full object-cover object-top"
                  />
                </motion.div>

                {/* CENTER PHONE */}

                <motion.div
                  whileHover={
                    reduceMotion
                      ? undefined
                      : { y: -12, scale: 1.05 }
                  }
                  className="absolute bottom-[-32%] left-1/2 z-30 w-[30%] max-w-[145px] -translate-x-1/2 overflow-hidden rounded-[16px] border-[4px] border-[#252638] bg-[#252638] shadow-2xl transition-transform duration-300 group-hover:-translate-y-2"
                >
                  <img
                    src={project.images[1]}
                    alt={`${project.name} screen 2`}
                    loading="lazy"
                    className="block aspect-[9/19] w-full object-cover object-top"
                  />
                </motion.div>

                {/* RIGHT PHONE */}

                <motion.div
                  whileHover={
                    reduceMotion
                      ? undefined
                      : { y: -10, rotate: 7, scale: 1.04 }
                  }
                  className="absolute bottom-[-38%] right-[13%] z-10 w-[27%] max-w-[130px] rotate-12 overflow-hidden rounded-[15px] border-[4px] border-[#252638] bg-[#252638] shadow-xl transition-transform duration-300 group-hover:-translate-y-2 sm:right-[16%]"
                >
                  <img
                    src={project.images[2]}
                    alt={`${project.name} screen 3`}
                    loading="lazy"
                    className="block aspect-[9/19] w-full object-cover object-top"
                  />
                </motion.div>

                {/* NUMBER */}

                <span
                  dir="ltr"
                  className="absolute left-4 top-4 z-40 rounded-full border border-white/20 bg-black/15 px-3 py-1 text-[11px] font-semibold text-white backdrop-blur-md"
                >
                  {String(index + 1).padStart(2, '0')}
                </span>
              </div>

              {/* PROJECT DETAILS */}

              <div className="p-5 sm:p-6">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <h3
                    dir="ltr"
                    className="text-[21px] font-semibold tracking-[-0.03em]"
                  >
                    {project.name}
                  </h3>

                  <span className="text-[12px] font-medium text-violet-400">
                    {isArabic
                      ? project.categoryAr
                      : project.categoryEn}
                  </span>
                </div>

                <p
                  className={`mt-3 text-[13px] leading-[1.9] ${
                    darkMode ? 'text-[#a5a3b9]' : 'text-[#686477]'
                  }`}
                >
                  {isArabic
                    ? project.descriptionAr
                    : project.descriptionEn}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      dir="ltr"
                      className={`rounded-lg border px-2.5 py-1 text-[11px] font-medium ${
                        darkMode
                          ? 'border-white/[0.09] bg-white/[0.035] text-[#bcb9cf]'
                          : 'border-[#171426]/[0.09] bg-[#f7f6fb] text-[#625d74]'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div
                  className={`mt-5 flex flex-wrap items-center gap-5 border-t pt-4 ${
                    darkMode
                      ? 'border-white/[0.09]'
                      : 'border-[#171426]/[0.09]'
                  }`}
                >
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-[13px] font-semibold text-violet-400 transition hover:text-violet-300"
                    >
                      {isArabic ? 'تجربة المشروع' : 'Live Demo'}
                      <ArrowUpRight size={16} />
                    </a>
                  )}

                  <Link
                    to={`/projects/${project.id}`}
                    className="inline-flex items-center gap-2 text-[13px] font-semibold text-violet-400 transition hover:text-violet-300"
                  >
                    {isArabic
                      ? 'عرض تفاصيل المشروع'
                      : 'View Case Study'}
                    <ArrowUpRight size={16} />
                  </Link>
                </div>
              </div>
            </motion.article>
          )
        })}
      </div>
    </section>
  )
}