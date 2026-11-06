
import { motion, useReducedMotion } from 'motion/react'
import {
  ArrowUpRight,
  Mail,
  Send,
  Sparkles,
} from 'lucide-react'
import { FaGithub, FaLinkedin } from 'react-icons/fa6'
import { useTranslation } from 'react-i18next'

type ContactProps = {
  darkMode: boolean
}

const email = 'ahadmalharbi@outlook.com'
const github = 'https://github.com/iqplk'
const linkedin = 'https://www.linkedin.com/in/ahad-alharbi-911b95361'

export default function Contact({ darkMode }: ContactProps) {
  const { i18n } = useTranslation()
  const isArabic = i18n.resolvedLanguage === 'ar'
  const reduceMotion = useReducedMotion()

  const links = [
    {
      name: 'Email',
      value: email,
      href: `mailto:${email}`,
      icon: Mail,
    },
    {
      name: 'GitHub',
      value: 'github.com/iqplk',
      href: github,
      icon: FaGithub,
    },
    {
      name: 'LinkedIn',
      value: 'Ahad Alharbi',
      href: linkedin,
      icon: FaLinkedin,
    },
  ]

  return (
    <section
      id="contact"
      className={`relative scroll-mt-24 overflow-hidden border-t ${
        darkMode
          ? 'border-white/10 bg-[#090e1c]'
          : 'border-slate-200 bg-[#f8f9fd]'
      }`}
    >
      <div className="pointer-events-none absolute left-1/2 top-20 h-80 w-80 -translate-x-1/2 rounded-full bg-violet-600/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6 pb-12 pt-28 lg:px-12">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-violet-500/20 bg-violet-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-violet-400">
            <Sparkles size={15} />
            {isArabic ? 'لنتواصل' : "LET'S CONNECT"}
          </div>

          <h2 className="text-4xl font-black tracking-tight sm:text-6xl lg:text-7xl">
            {isArabic ? 'لنعمل معًا' : "Let's Work"}
            <span className="text-violet-500">
              {isArabic ? '.' : ' Together.'}
            </span>
          </h2>

          <p
            className={`mx-auto mt-7 max-w-2xl text-base leading-8 sm:text-lg ${
              darkMode ? 'text-slate-400' : 'text-slate-600'
            }`}
          >
            {isArabic
              ? 'مهتمة بفرص تطوير الواجهات الأمامية وتصميم واجهات المستخدم، ويسعدني التواصل بشأن الفرص المهنية والمشاريع التقنية.'
              : "I'm open to opportunities in Frontend Development and UI Design. Feel free to reach out about professional opportunities and creative projects."}
          </p>

          <motion.a
            href={`mailto:${email}`}
            whileHover={reduceMotion ? undefined : { y: -4 }}
            className="mt-10 inline-flex items-center gap-3 rounded-2xl bg-violet-600 px-8 py-4 text-sm font-semibold text-white shadow-[0_12px_40px_rgba(124,58,237,0.25)] transition-colors hover:bg-violet-500"
          >
            <Send size={18} />
            {isArabic ? 'تواصل عبر البريد' : 'Send Me an Email'}
            <ArrowUpRight size={18} />
          </motion.a>
        </motion.div>

        <div className="mt-20 grid gap-5 md:grid-cols-3">
          {links.map((link, index) => {
            const Icon = link.icon

            return (
              <motion.a
                key={link.name}
                href={link.href}
                target={link.name === 'Email' ? undefined : '_blank'}
                rel={link.name === 'Email' ? undefined : 'noopener noreferrer'}
                initial={reduceMotion ? false : { opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                whileHover={reduceMotion ? undefined : { y: -6 }}
                className={`group flex min-w-0 items-center gap-4 rounded-2xl border p-5 transition-colors ${
                  darkMode
                    ? 'border-white/10 bg-[#151b2c]/70 hover:border-violet-500/40'
                    : 'border-slate-200 bg-white hover:border-violet-400'
                }`}
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-violet-500/10 text-violet-400">
                  <Icon size={21} />
                </div>

                <div className="min-w-0 flex-1">
                  <p className="text-sm font-bold">{link.name}</p>
                  <p
                    dir="ltr"
                    className={`mt-1 truncate text-left text-xs ${
                      darkMode ? 'text-slate-400' : 'text-slate-600'
                    }`}
                  >
                    {link.value}
                  </p>
                </div>

                <ArrowUpRight
                  size={18}
                  className="shrink-0 text-slate-500 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-violet-400"
                />
              </motion.a>
            )
          })}
        </div>

        <footer
          className={`mt-24 flex flex-col items-center justify-between gap-5 border-t pt-8 text-center text-sm sm:flex-row ${
            darkMode
              ? 'border-white/10 text-slate-500'
              : 'border-slate-200 text-slate-500'
          }`}
        >
          <span className="text-xl font-black tracking-[-0.08em]">
            AHAD<span className="text-violet-500">.</span>
          </span>

          <p>
            © 2026 Ahad Alharbi.
            {' '}
            {isArabic ? 'جميع الحقوق محفوظة.' : 'All rights reserved.'}
          </p>

          <a
            href="#home"
            className="transition-colors hover:text-violet-400"
          >
            {isArabic ? 'العودة للأعلى ↑' : 'Back to top ↑'}
          </a>
        </footer>
      </div>
    </section>
  )
}
