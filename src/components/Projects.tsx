import { motion, useReducedMotion } from 'motion/react'

import {
  ArrowUpRight,
  Sparkles,
} from 'lucide-react'

import { FaGithub } from 'react-icons/fa6'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

type ProjectsProps = {
  darkMode: boolean
}

type Project = {
  id: string
  number: string
  name: string
  category: string
  description: string
  technologies: string[]
  image?: string
  github?: string
  demo?: string
}

const rihalScreens = [
  {
    src: '/projects/rihal/interactive-map.jpg',
    alt: 'Rihal Interactive Map',
  },
  {
    src: '/projects/rihal/home-trip-setup.jpg',
    alt: 'Rihal Home Screen',
  },
  {
    src: '/projects/rihal/itinerary-day-one.jpg',
    alt: 'Rihal Trip Planner',
  },
]

const faseelahScreens = [
  {
    src: '/projects/Faseelah/home.jpg',
    alt: 'Faseelah Home Screen',
  },
  {
    src: '/projects/Faseelah/plant-result.jpg',
    alt: 'Faseelah Plant Recognition',
  },
  {
    src: '/projects/Faseelah/soil-result.jpg',
    alt: 'Faseelah Soil Analysis',
  },
]

export default function Projects({
  darkMode,
}: ProjectsProps) {
  const { t, i18n } = useTranslation()

  const isArabic = i18n.resolvedLanguage === 'ar'
  const reduceMotion = useReducedMotion()

  const projects: Project[] = [
    {
      id: 'rihal',
      number: '01',
      name: 'Rihal',
      category: t('projects.rihalCategory'),
      description: t('projects.rihalDescription'),
      technologies: [
        'Flutter',
        'Dart',
        'Interactive UI',
        'Responsive Design',
      ],
      demo: 'https://rihal-fc413.web.app',
    },
    {
      id: 'faseelah',
      number: '02',
      name: 'Faseelah',
      category: t('projects.faseelahCategory'),
      description: t('projects.faseelahDescription'),
      technologies: [
        'UI Design',
        'UX Design',
        'Figma',
      ],
    },
  ]

  return (
    <section
      id="projects"
      className="relative mx-auto max-w-7xl scroll-mt-24 px-6 py-28 lg:px-12"
    >
      {/* Section Heading */}
      <motion.div
        initial={
          reduceMotion
            ? false
            : { opacity: 0, y: 35 }
        }
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="mb-16"
      >
        <div className="mb-4 flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.25em] text-violet-400">
          <Sparkles size={17} />
          {t('projects.subtitle')}
        </div>

        <h2 className="text-4xl font-bold tracking-tight md:text-6xl">
          {t('projects.title')}
          <span className="text-violet-500">.</span>
        </h2>

        <p
          className={`mt-6 max-w-2xl text-base leading-8 ${
            darkMode
              ? 'text-slate-400'
              : 'text-slate-600'
          }`}
        >
          {t('projects.description')}
        </p>
      </motion.div>

      {/* Project Cards */}
      <div className="grid items-stretch gap-8 lg:grid-cols-2">
        {projects.map((project, index) => {
          const screens =
            project.id === 'rihal'
              ? rihalScreens
              : faseelahScreens

          return (
            <motion.article
              key={project.id}
              initial={
                reduceMotion
                  ? false
                  : { opacity: 0, y: 45 }
              }
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{
                once: true,
                amount: 0.15,
              }}
              transition={{
                duration: 0.65,
                delay: index * 0.12,
              }}
              whileHover={
                reduceMotion
                  ? undefined
                  : { y: -8 }
              }
              className={`group relative flex flex-col overflow-hidden rounded-3xl border transition-colors duration-300 ${
                darkMode
                  ? 'border-white/10 bg-[#151b2c]/70 hover:border-violet-500/40'
                  : 'border-slate-200 bg-white hover:border-violet-400/50'
              }`}
            >
              {/* Project Visual */}
              <div
                className={`relative flex h-80 items-center justify-center overflow-hidden sm:h-[390px] ${
                  project.id === 'faseelah'
                    ? 'bg-gradient-to-br from-[#194a38] via-[#235d44] to-[#102d27]'
                    : 'bg-gradient-to-br from-[#30205d] via-[#191a43] to-[#101a3e]'
                }`}
              >
                {/* Background Glow */}
                <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-violet-500/20 blur-3xl" />

                <div className="pointer-events-none absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-indigo-500/20 blur-3xl" />

                {/* Project Screens */}
                <div className="relative flex h-full w-full items-center justify-center">
                  {/* Left Screen */}
                  <motion.div
                    initial={
                      reduceMotion
                        ? false
                        : {
                            opacity: 0,
                            x: -45,
                            rotate: -14,
                          }
                    }
                    whileInView={{
                      opacity: 1,
                      x: 0,
                      rotate: -12,
                    }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.7,
                      delay: 0.2,
                    }}
                    whileHover={
                      reduceMotion
                        ? undefined
                        : {
                            y: -12,
                            rotate: -6,
                          }
                    }
                    className="absolute left-[13%] top-[17%] z-10 w-[31%] max-w-[155px] overflow-hidden rounded-[18px] border-[4px] border-[#25283a] bg-[#25283a] shadow-2xl sm:rounded-[22px]"
                  >
                    <img
                      src={screens[0].src}
                      alt={screens[0].alt}
                      loading="lazy"
                      className="aspect-[9/19] w-full object-cover object-top"
                    />
                  </motion.div>

                  {/* Right Screen */}
                  <motion.div
                    initial={
                      reduceMotion
                        ? false
                        : {
                            opacity: 0,
                            x: 45,
                            rotate: 14,
                          }
                    }
                    whileInView={{
                      opacity: 1,
                      x: 0,
                      rotate: 12,
                    }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.7,
                      delay: 0.3,
                    }}
                    whileHover={
                      reduceMotion
                        ? undefined
                        : {
                            y: -12,
                            rotate: 6,
                          }
                    }
                    className="absolute right-[13%] top-[17%] z-10 w-[31%] max-w-[155px] overflow-hidden rounded-[18px] border-[4px] border-[#25283a] bg-[#25283a] shadow-2xl sm:rounded-[22px]"
                  >
                    <img
                      src={screens[2].src}
                      alt={screens[2].alt}
                      loading="lazy"
                      className="aspect-[9/19] w-full object-cover object-top"
                    />
                  </motion.div>

                  {/* Main Center Screen */}
                  <motion.div
                    initial={
                      reduceMotion
                        ? false
                        : {
                            opacity: 0,
                            y: 60,
                            scale: 0.9,
                          }
                    }
                    whileInView={{
                      opacity: 1,
                      y: 0,
                      scale: 1,
                    }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.8,
                      delay: 0.4,
                    }}
                    whileHover={
                      reduceMotion
                        ? undefined
                        : {
                            y: -12,
                            scale: 1.04,
                          }
                    }
                    className="absolute top-[9%] z-20 w-[35%] max-w-[175px] overflow-hidden rounded-[20px] border-[5px] border-[#25283a] bg-[#25283a] shadow-[0_25px_60px_rgba(0,0,0,0.5)] sm:rounded-[26px]"
                  >
                    <img
                      src={screens[1].src}
                      alt={screens[1].alt}
                      loading="lazy"
                      className="aspect-[9/19] w-full object-cover object-top"
                    />
                  </motion.div>
                </div>

                {/* Project Number */}
                <span className="absolute left-6 top-6 z-30 rounded-full border border-white/20 bg-black/20 px-4 py-2 text-xs font-medium text-white backdrop-blur-xl">
                  {project.number}
                </span>

                {/* Rihal Live Demo Arrow */}
                {project.id === 'rihal' && project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Rihal Live Demo"
                    className="absolute bottom-6 right-6 z-30 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-xl transition hover:rotate-45 hover:bg-violet-500"
                  >
                    <ArrowUpRight size={21} />
                  </a>
                )}
              </div>

              {/* Project Information */}
              <div className="flex flex-1 flex-col p-7 sm:p-9">
                <div className="mb-4 flex flex-wrap items-center justify-between gap-4">
                  <h3 className="text-2xl font-bold tracking-tight">
                    {project.name}
                  </h3>

                  <span className="text-xs font-medium text-violet-400">
                    {project.category}
                  </span>
                </div>

                {/* Description */}
                <p
                  className={`text-sm leading-8 ${
                    darkMode
                      ? 'text-slate-400'
                      : 'text-slate-600'
                  }`}
                >
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className={`rounded-lg border px-3 py-1.5 text-xs font-medium ${
                        darkMode
                          ? 'border-white/10 bg-white/5 text-slate-300'
                          : 'border-slate-200 bg-slate-50 text-slate-600'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div
                  className={`mt-auto flex flex-wrap items-center gap-x-6 gap-y-4 pt-6 ${
                    darkMode
                      ? 'border-t border-white/10'
                      : 'border-t border-slate-200'
                  }`}
                  style={{ marginTop: 'auto' }}
                >
                  {/* Rihal Live Demo */}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-violet-400 transition hover:text-violet-300"
                    >
                      {t('projects.liveDemo')}
                      <ArrowUpRight size={17} />
                    </a>
                  )}

                  {/* Project Case Study */}
                  <Link
                    to={`/projects/${project.id}`}
                    className={`inline-flex items-center gap-2 text-sm font-semibold transition-colors ${
                      project.id === 'faseelah'
                        ? 'text-emerald-400 hover:text-emerald-300'
                        : 'text-violet-400 hover:text-violet-300'
                    }`}
                  >
                    {isArabic
                      ? 'عرض تفاصيل المشروع'
                      : 'View Case Study'}

                    <ArrowUpRight size={17} />
                  </Link>

                  {/* GitHub */}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-slate-400 transition hover:text-violet-400"
                    >
                      <FaGithub size={17} />
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          )
        })}
      </div>
    </section>
  )
}