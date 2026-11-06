import { useEffect, useRef, useState, type MouseEvent } from 'react'

import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from 'motion/react'

import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Mail,
  Layers3,
  MousePointer2,
  Palette,
  Code2,
} from 'lucide-react'

import { FaGithub, FaLinkedin } from 'react-icons/fa6'
import { useTranslation } from 'react-i18next'

import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
} from 'react-router-dom'

import Navbar from './components/Navbar'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'

import RihalProject from './pages/RihalProject'
import FaseelahProject from './pages/FaseelahProject'

// ==========================================
// Scroll To Top
// ==========================================

function ScrollToTop() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const timer = window.setTimeout(() => {
        const element = document.getElementById(
          decodeURIComponent(hash.substring(1))
        )

        if (element) {
          element.scrollIntoView({
            behavior: 'auto',
            block: 'start',
          })
        }
      }, 100)

      return () => window.clearTimeout(timer)
    }

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'auto',
    })
  }, [pathname, hash])

  return null
}

// ==========================================
// Home Page
// ==========================================

type HomePageProps = {
  darkMode: boolean
  setDarkMode: (value: boolean) => void
}

function HomePage({
  darkMode,
  setDarkMode,
}: HomePageProps) {
  const { t, i18n } = useTranslation()

  const isArabic = i18n.resolvedLanguage === 'ar'

  const showcaseRef = useRef<HTMLElement>(null)
  const reduceMotion = useReducedMotion()

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const rotateX = useSpring(mouseY, {
    stiffness: 100,
    damping: 25,
  })

  const rotateY = useSpring(mouseX, {
    stiffness: 100,
    damping: 25,
  })

  const handleMouseMove = (e: MouseEvent<HTMLElement>) => {
    if (!showcaseRef.current || reduceMotion) return

    const rect = showcaseRef.current.getBoundingClientRect()

    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5

    mouseX.set(x * 13)
    mouseY.set(-y * 13)
  }

  const handleMouseLeave = () => {
    mouseX.set(0)
    mouseY.set(0)
  }

  const reveal = (delay = 0) => ({
    initial: reduceMotion
      ? false
      : { opacity: 0, y: 28 },

    animate: {
      opacity: 1,
      y: 0,
    },

    transition: {
      duration: 0.8,
      delay,
      ease: 'easeOut' as const,
    },
  })

  return (
    <div
      className={`relative min-h-screen overflow-x-hidden transition-colors duration-500 ${
        darkMode
          ? 'bg-[#090e1c] text-white'
          : 'bg-[#f8f9fd] text-[#111827]'
      }`}
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-60 right-[-180px] h-[650px] w-[650px] rounded-full bg-violet-600/10 blur-[130px]" />

        <div className="absolute bottom-0 left-[-200px] h-[500px] w-[500px] rounded-full bg-indigo-600/10 blur-[130px]" />
      </div>

      {/* Navbar */}
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      {/* Hero Section */}
      <main
        id="home"
        className="relative z-10 mx-auto grid min-h-[calc(100vh-110px)] max-w-7xl items-center gap-12 px-6 pb-24 pt-10 lg:grid-cols-2 lg:gap-8 lg:px-12"
      >
        {/* Left Side */}
        <section>
          <motion.div
            {...reveal(0.1)}
            className="mb-8 inline-flex items-center gap-3 rounded-full border border-violet-500/20 bg-violet-500/5 px-4 py-2"
          >
            <span className="relative flex h-2 w-2">
              <span className="relative inline-flex h-2 w-2 rounded-full bg-violet-400" />
            </span>

            <span className="text-xs font-semibold uppercase tracking-[0.15em] text-violet-400">
              {t('hero.role')}
            </span>
          </motion.div>

          <motion.p
            {...reveal(0.2)}
            className={`mb-3 text-lg ${
              darkMode
                ? 'text-slate-400'
                : 'text-slate-600'
            }`}
          >
            {t('hero.greeting')}
          </motion.p>

          <motion.h1
            {...reveal(0.3)}
            className="text-[clamp(5rem,11vw,9rem)] font-black leading-[0.95] tracking-[-0.09em]"
          >
            Ahad
            <span className="text-violet-500">.</span>
          </motion.h1>

          <motion.h2
            {...reveal(0.4)}
            className="mt-7 max-w-xl text-2xl font-semibold leading-snug tracking-tight sm:text-3xl"
          >
            {t('hero.headline1')}

            <br />

            <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
              {t('hero.headline2')}
            </span>
          </motion.h2>

          <motion.p
            {...reveal(0.5)}
            className={`mt-6 max-w-lg text-base leading-8 ${
              darkMode
                ? 'text-slate-400'
                : 'text-slate-600'
            }`}
          >
            {t('hero.description')}
          </motion.p>

          {/* Buttons */}
          <motion.div
            {...reveal(0.6)}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <a
              href="#projects"
              className="group flex items-center gap-3 rounded-xl bg-violet-600 px-7 py-4 text-sm font-semibold text-white shadow-[0_10px_35px_rgba(124,58,237,0.25)] transition hover:-translate-y-1 hover:bg-violet-500"
            >
              {t('hero.projectsButton')}

              <ArrowUpRight
                size={18}
                className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </a>

            <a
              href="#contact"
              className={`flex items-center gap-3 rounded-xl border px-7 py-4 text-sm font-semibold transition hover:-translate-y-1 ${
                darkMode
                  ? 'border-white/10 hover:border-violet-500/40'
                  : 'border-slate-200 hover:border-violet-400'
              }`}
            >
              {t('hero.contactButton')}

              <ArrowRight size={17} />
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            {...reveal(0.8)}
            className="mt-14 flex items-center gap-5"
          >
            <div className="flex items-center gap-4">

              {/* GitHub */}
              <a
                href="https://github.com/iqplk"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-slate-400 transition hover:-translate-y-1 hover:text-violet-400"
              >
                <FaGithub size={20} />
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/ahad-alharbi-911b95361"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-slate-400 transition hover:-translate-y-1 hover:text-violet-400"
              >
                <FaLinkedin size={20} />
              </a>

              {/* Email */}
              <a
                href="mailto:ahadmalharbi@outlook.com"
                aria-label="Email"
                className="text-slate-400 transition hover:-translate-y-1 hover:text-violet-400"
              >
                <Mail size={20} />
              </a>
            </div>

            <span className="h-px w-10 bg-slate-700" />

            <span className="text-xs uppercase tracking-widest text-slate-500">
              {isArabic
                ? 'لنصنع شيئًا مميزًا'
                : "Let's build something great"}
            </span>
          </motion.div>
        </section>

        {/* Interactive UI Showcase */}
        <motion.section
          {...reveal(0.4)}
          ref={showcaseRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="relative flex min-h-[480px] items-center justify-center lg:min-h-[600px]"
          style={{ perspective: 1200 }}
          aria-label="Interactive frontend design showcase"
        >
          <motion.div
            style={{
              rotateX,
              rotateY,
              transformStyle: 'preserve-3d',
            }}
            className="relative w-full max-w-[510px]"
          >
            {/* Main UI Window */}
            <div
              className={`relative overflow-hidden rounded-3xl border p-5 shadow-[0_35px_100px_rgba(0,0,0,0.35)] backdrop-blur-2xl sm:p-6 ${
                darkMode
                  ? 'border-white/10 bg-[#151b2c]/95'
                  : 'border-slate-200 bg-white/95'
              }`}
            >
              {/* Window Header */}
              <div className="mb-7 flex items-center justify-between">
                <div className="flex gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
                  <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                </div>

                <span className="text-[10px] uppercase tracking-[0.2em] text-slate-500">
                  {isArabic
                    ? 'مساحة التصميم'
                    : 'Design Workspace'}
                </span>

                <Layers3
                  size={16}
                  className="text-violet-400"
                />
              </div>

              {/* UI Preview */}
              <div className="rounded-2xl bg-gradient-to-br from-[#30205d] via-[#191a43] to-[#101a3e] p-6 text-white sm:p-8">
                <div className="mb-12 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="h-7 w-7 rounded-lg bg-violet-400/30" />

                    <span className="text-xs font-bold tracking-wide">
                      studio.
                    </span>
                  </div>

                  <div className="flex gap-3">
                    <span className="h-1.5 w-8 rounded bg-white/30" />
                    <span className="h-1.5 w-5 rounded bg-white/20" />
                    <span className="h-1.5 w-5 rounded bg-white/20" />
                  </div>
                </div>

                <div className="mb-5 inline-flex rounded-full border border-violet-300/20 px-3 py-1 text-[10px] text-violet-200">
                  {isArabic
                    ? 'تجارب رقمية إبداعية'
                    : 'Creative Digital Experiences'}
                </div>

                <div className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
                  {isArabic
                    ? 'تصميم يصنع'
                    : 'Design that'}

                  <br />

                  {isArabic
                    ? 'الاختلاف.'
                    : 'feels different.'}
                </div>

                <p className="mt-4 max-w-[250px] text-xs leading-6 text-violet-200/70">
                  {isArabic
                    ? 'حين يلتقي الإبداع البصري بالتفاعل المدروس.'
                    : 'Where visual creativity meets thoughtful interaction.'}
                </p>

                <div className="mt-7 flex items-center gap-2">
                  <span className="rounded-lg bg-violet-500 px-4 py-2 text-[10px] font-semibold">
                    {isArabic
                      ? 'استكشف التصميم'
                      : 'Explore Design'}
                  </span>

                  <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/20">
                    <ArrowUpRight size={13} />
                  </span>
                </div>
              </div>

              {/* Mini Panels */}
              <div className="mt-5 grid grid-cols-3 gap-3">
                {[
                  {
                    icon: Palette,
                    label: isArabic
                      ? 'تصميم الواجهات'
                      : 'UI Design',
                    value: isArabic
                      ? 'إبداعي'
                      : 'Creative',
                  },
                  {
                    icon: Code2,
                    label: isArabic
                      ? 'تطوير الواجهات'
                      : 'Frontend',
                    value: isArabic
                      ? 'حديث'
                      : 'Modern',
                  },
                  {
                    icon: Layers3,
                    label: isArabic
                      ? 'التجربة'
                      : 'Experience',
                    value: isArabic
                      ? 'سلسة'
                      : 'Seamless',
                  },
                ].map((item) => (
                  <div
                    key={item.label}
                    className={`rounded-xl border p-3 ${
                      darkMode
                        ? 'border-white/5 bg-white/[0.03]'
                        : 'border-slate-100 bg-slate-50'
                    }`}
                  >
                    <item.icon
                      size={16}
                      className="mb-3 text-violet-400"
                    />

                    <p className="text-[9px] text-slate-500">
                      {item.label}
                    </p>

                    <p className="mt-1 text-[11px] font-semibold">
                      {item.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Floating Interactive Panel */}
            <motion.div
              animate={
                reduceMotion
                  ? undefined
                  : { y: [0, -12, 0] }
              }
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className={`absolute -right-3 top-24 hidden rounded-2xl border p-4 shadow-2xl sm:block lg:-right-10 ${
                darkMode
                  ? 'border-white/10 bg-[#20263a]'
                  : 'border-slate-200 bg-white'
              }`}
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-500/20">
                  <MousePointer2
                    className="text-violet-400"
                    size={20}
                  />
                </div>

                <div>
                  <p className="text-[11px] font-semibold">
                    {isArabic
                      ? 'واجهات تفاعلية'
                      : 'Interactive UI'}
                  </p>

                  <p className="text-[10px] text-slate-500">
                    {isArabic
                      ? 'صُممت بعناية'
                      : 'Crafted with precision'}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Floating Design System */}
            <motion.div
              animate={
                reduceMotion
                  ? undefined
                  : { y: [0, 10, 0] }
              }
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className={`absolute -bottom-8 -left-3 hidden rounded-2xl border p-4 shadow-2xl sm:block lg:-left-10 ${
                darkMode
                  ? 'border-white/10 bg-[#20263a]'
                  : 'border-slate-200 bg-white'
              }`}
            >
              <p className="mb-3 text-[10px] font-semibold text-slate-400">
                {isArabic
                  ? 'نظام التصميم'
                  : 'Design System'}
              </p>

              <div className="flex gap-2">
                {[
                  '#8B5CF6',
                  '#6366F1',
                  '#C4B5FD',
                  '#E2E8F0',
                ].map((color) => (
                  <span
                    key={color}
                    className="h-7 w-7 rounded-lg"
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>
            </motion.div>
          </motion.div>
        </motion.section>

        {/* Scroll Indicator */}
        <motion.a
          {...reveal(1)}
          href="#about"
          className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 items-center gap-3 text-xs uppercase tracking-[0.2em] text-slate-500 lg:flex"
        >
          {isArabic
            ? 'مرر للاستكشاف'
            : 'Scroll to explore'}

          <ArrowDown size={15} />
        </motion.a>
      </main>

      {/* About Me Section */}
      <About darkMode={darkMode} />

      {/* Skills & Technologies Section */}
      <Skills darkMode={darkMode} />

      {/* Featured Projects Section */}
      <Projects darkMode={darkMode} />

      {/* Contact Section */}
      <Contact darkMode={darkMode} />
    </div>
  )
}

// ==========================================
// App Routes
// ==========================================

function App() {
  const [darkMode, setDarkMode] = useState(true)

  return (
    <BrowserRouter>
      <ScrollToTop />

      <Routes>
        {/* Home Page */}
        <Route
          path="/"
          element={
            <HomePage
              darkMode={darkMode}
              setDarkMode={setDarkMode}
            />
          }
        />

        {/* Rihal Project Page */}
        <Route
          path="/projects/rihal"
          element={
            <>
              <Navbar
                darkMode={darkMode}
                setDarkMode={setDarkMode}
              />

              <RihalProject darkMode={darkMode} />
            </>
          }
        />

        {/* Faseelah Project Page */}
        <Route
          path="/projects/faseelah"
          element={
            <>
              <Navbar
                darkMode={darkMode}
                setDarkMode={setDarkMode}
              />

              <FaseelahProject darkMode={darkMode} />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App