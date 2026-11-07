import { motion, useReducedMotion } from 'motion/react'
import { ArrowUpRight, Mail } from 'lucide-react'
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

  const fontFamily = isArabic
    ? "'IBM Plex Sans Arabic', 'Noto Sans Arabic', sans-serif"
    : "'Outfit', sans-serif"

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
      dir={isArabic ? 'rtl' : 'ltr'}
      className={`relative scroll-mt-24 border-t ${
        darkMode
          ? 'border-white/10 bg-[#090e1c]'
          : 'border-slate-200 bg-[#f8f9fd]'
      }`}
      style={{ fontFamily }}
    >
      <div className="mx-auto max-w-7xl px-5 pb-8 pt-16 sm:px-8 sm:pt-20 lg:px-12">

        {/* SECTION HEADING */}

        <motion.div
          initial={
            reduceMotion
              ? false
              : { opacity: 0, y: 20 }
          }
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-9 max-w-3xl"
        >
          <p className="mb-4 text-[11px] font-semibold tracking-[0.2em] text-violet-400">
            {isArabic ? 'لنتواصل' : "LET'S CONNECT"}
          </p>

          <h2
            className={`font-semibold ${
              isArabic
                ? 'text-[clamp(2rem,4vw,3.8rem)] leading-[1.5]'
                : 'text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.12] tracking-[-0.055em]'
            }`}
          >
            {isArabic ? 'لنعمل معًا' : "Let's Work Together"}
          </h2>

          <p
            className={`mt-5 max-w-2xl text-[14px] leading-[2] sm:text-[15px] ${
              darkMode
                ? 'text-[#a5a3b9]'
                : 'text-[#686477]'
            }`}
          >
            {isArabic
              ? 'مهتمة بفرص تطوير الواجهات الأمامية وتصميم واجهات وتجارب المستخدم، ويسعدني التواصل بشأن الفرص المهنية والمشاريع الإبداعية.'
              : "I'm open to opportunities in Frontend Development and UI/UX Design. Feel free to connect about professional opportunities and creative projects."}
          </p>
        </motion.div>

        {/* CONTACT CARDS */}

        <div className="grid gap-4 md:grid-cols-3">
          {links.map((link, index) => {
            const Icon = link.icon

            return (
              <motion.a
                key={link.name}
                href={link.href}
                target={
                  link.name === 'Email'
                    ? undefined
                    : '_blank'
                }
                rel={
                  link.name === 'Email'
                    ? undefined
                    : 'noopener noreferrer'
                }
                initial={
                  reduceMotion
                    ? false
                    : { opacity: 0, y: 20 }
                }
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                whileHover={
                  reduceMotion
                    ? undefined
                    : { y: -4 }
                }
                className={`group flex min-w-0 items-center gap-4 rounded-2xl border p-5 transition-colors duration-300 ${
                  darkMode
                    ? 'border-white/[0.09] bg-white/[0.025] hover:border-violet-500/30'
                    : 'border-[#171426]/[0.09] bg-white hover:border-violet-400/40'
                }`}
              >
                {/* ICON */}

                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-violet-500/10 text-violet-400">
                  <Icon size={20} />
                </div>

                {/* INFORMATION */}

                <div className="min-w-0 flex-1">
                  <h3 className="text-[15px] font-semibold">
                    {link.name}
                  </h3>

                  <p
                    dir="ltr"
                    className={`mt-1 truncate text-left text-[12px] ${
                      darkMode
                        ? 'text-[#a5a3b9]'
                        : 'text-[#686477]'
                    }`}
                  >
                    {link.value}
                  </p>
                </div>

                {/* ARROW */}

                <ArrowUpRight
                  size={17}
                  className={`shrink-0 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 ${
                    darkMode
                      ? 'text-slate-500 group-hover:text-violet-400'
                      : 'text-slate-400 group-hover:text-violet-500'
                  }`}
                />
              </motion.a>
            )
          })}
        </div>

        {/* FOOTER */}

        <footer
          className={`mt-14 flex flex-col items-center justify-between gap-4 border-t pt-7 text-center text-[12px] sm:flex-row ${
            darkMode
              ? 'border-white/[0.09] text-slate-500'
              : 'border-[#171426]/[0.09] text-slate-500'
          }`}
        >
          {/* LOGO WITHOUT DOT */}

          <span
            dir="ltr"
            className="text-[20px] font-bold tracking-[-0.06em]"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            AHAD
          </span>

          {/* COPYRIGHT */}

          <p>
            © 2026 Ahad Alharbi.{' '}
            {isArabic
              ? 'جميع الحقوق محفوظة.'
              : 'All rights reserved.'}
          </p>

          {/* BACK TO TOP */}

          <a
            href="/#home"
            className="font-medium transition-colors hover:text-violet-400"
          >
            {isArabic
              ? 'العودة للأعلى ↑'
              : 'Back to top ↑'}
          </a>
        </footer>
      </div>
    </section>
  )
}