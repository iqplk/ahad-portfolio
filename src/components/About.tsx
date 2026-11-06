import { motion, useReducedMotion } from 'motion/react'
import {
  ArrowUpRight,
  Code2,
  Palette,
  GraduationCap,
  Sparkles,
} from 'lucide-react'
import { useTranslation } from 'react-i18next'

type AboutProps = {
  darkMode: boolean
}

export default function About({ darkMode }: AboutProps) {
  const { t } = useTranslation()
  const reduceMotion = useReducedMotion()

  const highlights = [
    {
      icon: Code2,
      title: t('about.frontendTitle'),
      description: t('about.frontendDescription'),
    },
    {
      icon: Palette,
      title: t('about.uiTitle'),
      description: t('about.uiDescription'),
    },
    {
      icon: Sparkles,
      title: t('about.experienceTitle'),
      description: t('about.experienceDescription'),
    },
  ]

  return (
    <section
      id="about"
      className="relative mx-auto max-w-7xl scroll-mt-24 px-6 py-28 lg:px-12"
    >
      <motion.div
        initial={reduceMotion ? false : { opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7 }}
      >
        <div className="mb-16">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-violet-400">
            {t('about.subtitle')}
          </p>

          <h2 className="text-4xl font-bold tracking-tight md:text-6xl">
            {t('about.title')}
            <span className="text-violet-500">.</span>
          </h2>

          <div className="mt-6 h-1 w-20 rounded-full bg-violet-500" />
        </div>

        <div className="grid items-start gap-12 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <h3 className="mb-6 text-2xl font-semibold leading-snug md:text-3xl">
              {t('about.headline')}
            </h3>

            <p
              className={`max-w-2xl text-base leading-9 ${
                darkMode ? 'text-slate-400' : 'text-slate-600'
              }`}
            >
              {t('about.description')}
            </p>

            <div
              className={`mt-10 rounded-2xl border p-6 ${
                darkMode
                  ? 'border-white/10 bg-white/[0.03]'
                  : 'border-slate-200 bg-white'
              }`}
            >
              <div className="flex items-start gap-4">
                <div className="rounded-xl bg-violet-500/10 p-3 text-violet-400">
                  <GraduationCap size={24} />
                </div>

                <div>
                  <p className="text-sm font-semibold text-violet-400">
                    {t('about.educationLabel')}
                  </p>

                  <h4 className="mt-2 text-lg font-semibold">
                    {t('about.degree')}
                  </h4>

                  <p className="mt-1 text-sm text-slate-400">
                    {t('about.university')}
                  </p>

                  <p className="mt-2 text-xs text-slate-500">
                    {t('about.graduation')}
                  </p>
                </div>
              </div>
            </div>

            <a
              href="#projects"
              className="group mt-9 inline-flex items-center gap-3 font-semibold text-violet-400 transition hover:text-violet-300"
            >
              {t('about.viewWork')}

              <ArrowUpRight
                size={19}
                className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </a>
          </div>

          <div className="space-y-5">
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={reduceMotion ? false : { opacity: 0, x: 35 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.12 }}
                whileHover={reduceMotion ? undefined : { y: -5 }}
                className={`group rounded-2xl border p-6 transition-colors ${
                  darkMode
                    ? 'border-white/10 bg-[#151b2c]/70 hover:border-violet-500/40'
                    : 'border-slate-200 bg-white hover:border-violet-400/50'
                }`}
              >
                <div className="flex items-start gap-5">
                  <div className="rounded-xl bg-violet-500/10 p-3 text-violet-400 transition-colors group-hover:bg-violet-500/20">
                    <item.icon size={23} />
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold">
                      {item.title}
                    </h4>

                    <p className="mt-2 text-sm leading-7 text-slate-400">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}