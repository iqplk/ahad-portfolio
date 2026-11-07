import { useEffect, useState } from 'react'
import { motion, useReducedMotion } from 'motion/react'
import {
  ArrowDown,
  ArrowUpRight,
  ArrowRight,
  Mail,
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
// SCROLL MANAGEMENT
// ==========================================

function ScrollToTop() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const timer = window.setTimeout(() => {
        const id = decodeURIComponent(hash.slice(1))
        const element = document.getElementById(id)

        if (element) {
          element.scrollIntoView({
            behavior: 'auto',
            block: 'start',
          })
        }
      }, 150)

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
// HOME PAGE
// ==========================================

type HomePageProps = {
  darkMode: boolean
  setDarkMode: (value: boolean) => void
}

function HomePage({
  darkMode,
  setDarkMode,
}: HomePageProps) {
  const { i18n } = useTranslation()

  const isArabic = i18n.resolvedLanguage === 'ar'
  const reduceMotion = useReducedMotion()

  // ==========================================
  // BILINGUAL CONTENT
  // ==========================================

  const copy = isArabic
    ? {
        intro: 'مرحبًا، أنا',
        name: 'عهد الحربي',
        role: 'مطوّرة واجهات أمامية | مصمّمة UI/UX',

        description:
          'أحوّل الأفكار إلى تجارب رقمية مميزة، تجمع بين جمال التصميم وسهولة الاستخدام والتفاعل السلس.',

        work: 'استكشف أعمالي',
        contact: 'تواصل معي',
        scroll: 'اكتشف المزيد',
        detail: 'التفاصيل تصنع الفارق',
      }
    : {
        intro: "Hello, I'm",
        name: 'Ahad Al Harbi',
        role: 'Frontend Developer | UI/UX Designer',

        description:
          'I turn ideas into distinctive digital experiences, combining thoughtful design, intuitive usability, and seamless interactions.',

        work: 'Explore my work',
        contact: "Let's connect",
        scroll: 'SCROLL TO EXPLORE',
        detail: 'THE DETAILS MAKE THE DIFFERENCE',
      }

  const textFont = isArabic
    ? "'IBM Plex Sans Arabic', 'Noto Sans Arabic', sans-serif"
    : "'Outfit', sans-serif"

  // ==========================================
  // ANIMATIONS
  // ==========================================

  const reveal = (delay = 0) => ({
    initial: reduceMotion
      ? false
      : {
          opacity: 0,
          y: 24,
        },

    animate: {
      opacity: 1,
      y: 0,
    },

    transition: {
      duration: 0.8,
      delay,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  })

  return (
    <div
      className={`relative min-h-screen overflow-x-hidden transition-colors duration-500 ${
        darkMode
          ? 'bg-[#090b17] text-[#f8f7ff]'
          : 'bg-[#f7f6fb] text-[#171426]'
      }`}
    >
      {/* ======================================
          BACKGROUND
      ====================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute -right-52 top-10 h-[600px] w-[600px] rounded-full bg-[#8b5cf6]/10 blur-[150px]" />

        <div className="absolute -left-64 top-[650px] h-[500px] w-[500px] rounded-full bg-[#6366f1]/10 blur-[140px]" />
      </div>

      {/* ======================================
          NAVBAR - HOME ONLY
      ====================================== */}

      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      {/* ======================================
          HERO SECTION
      ====================================== */}

      <main
        id="home"
        dir={isArabic ? 'rtl' : 'ltr'}
        className="relative z-10 mx-auto w-full max-w-[1440px] px-5 pb-12 pt-12 sm:px-8 sm:pb-16 sm:pt-16 lg:px-14 lg:pb-20 lg:pt-20"
      >
        <div className="mx-auto w-full max-w-[1050px]">

          {/* ==================================
              INTRO
          ================================== */}

          <motion.p
            {...reveal(0.05)}
            className={`mb-3 text-[15px] font-normal sm:text-lg ${
              darkMode
                ? 'text-[#b4b1c9]'
                : 'text-[#69657c]'
            }`}
            style={{ fontFamily: textFont }}
          >
            {copy.intro}
          </motion.p>

          {/* ==================================
              FULL NAME
          ================================== */}

          <motion.h1
            {...reveal(0.13)}
            className={`max-w-full font-semibold ${
              isArabic
                ? 'text-[clamp(2.65rem,8vw,5.6rem)] leading-[1.35] tracking-[-0.035em]'
                : 'text-[clamp(2.8rem,7vw,6.5rem)] leading-[1.12] tracking-[-0.065em]'
            }`}
            style={{ fontFamily: textFont }}
          >
            {copy.name}
          </motion.h1>

          {/* ==================================
              SPECIALIZATION
          ================================== */}

          <motion.p
            {...reveal(0.2)}
            className={`mt-3 max-w-full text-[12px] font-medium leading-[1.8] sm:mt-4 sm:text-[14px] ${
              darkMode
                ? 'text-[#b79aff]'
                : 'text-[#7852c5]'
            }`}
            style={{ fontFamily: textFont }}
          >
            {copy.role}
          </motion.p>

          {/* ==================================
              DESCRIPTION
          ================================== */}

          <motion.p
            {...reveal(0.3)}
            className={`mt-7 max-w-[610px] text-[14px] leading-[2] sm:mt-9 sm:text-[16px] ${
              darkMode
                ? 'text-[#a5a3b9]'
                : 'text-[#686477]'
            }`}
            style={{ fontFamily: textFont }}
          >
            {copy.description}
          </motion.p>

          {/* ==================================
              ACTION BUTTONS
          ================================== */}

          <motion.div
            {...reveal(0.42)}
            className="mt-8 flex flex-wrap items-center gap-3 sm:mt-10"
          >
            {/* PROJECTS BUTTON */}

            <a
              href="#projects"
              className="group inline-flex min-h-[52px] items-center justify-center gap-4 rounded-full bg-[#8b5cf6] px-6 text-[13px] font-semibold text-white shadow-[0_15px_40px_rgba(139,92,246,0.2)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#9d73ff] hover:shadow-[0_20px_50px_rgba(139,92,246,0.3)] sm:px-7 sm:text-sm"
            >
              {copy.work}

              <ArrowUpRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </a>

            {/* CONTACT BUTTON */}

            <a
              href="#contact"
              className={`group inline-flex min-h-[52px] items-center justify-center gap-3 rounded-full border px-6 text-[13px] font-semibold transition-all duration-300 hover:-translate-y-1 sm:text-sm ${
                darkMode
                  ? 'border-white/15 hover:border-[#a78bfa]/50 hover:bg-white/5'
                  : 'border-[#171426]/15 hover:border-[#8b5cf6]/50 hover:bg-[#8b5cf6]/5'
              }`}
            >
              {copy.contact}

              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>
          </motion.div>

          {/* ==================================
              SOCIAL LINKS
          ================================== */}

          <motion.div
            {...reveal(0.5)}
            className="mt-9 flex items-center gap-6 sm:mt-11"
          >
            {/* GITHUB */}

            <a
              href="https://github.com/iqplk"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className={`transition-all duration-300 hover:-translate-y-1 hover:text-[#a78bfa] ${
                darkMode
                  ? 'text-[#85829e]'
                  : 'text-[#77728d]'
              }`}
            >
              <FaGithub size={20} />
            </a>

            {/* LINKEDIN */}

            <a
              href="https://www.linkedin.com/in/ahad-alharbi-911b95361"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className={`transition-all duration-300 hover:-translate-y-1 hover:text-[#a78bfa] ${
                darkMode
                  ? 'text-[#85829e]'
                  : 'text-[#77728d]'
              }`}
            >
              <FaLinkedin size={20} />
            </a>

            {/* EMAIL */}

            <a
              href="mailto:ahadmalharbi@outlook.com"
              aria-label="Email"
              className={`transition-all duration-300 hover:-translate-y-1 hover:text-[#a78bfa] ${
                darkMode
                  ? 'text-[#85829e]'
                  : 'text-[#77728d]'
              }`}
            >
              <Mail size={20} />
            </a>
          </motion.div>
        </div>

        {/* ======================================
            HERO BOTTOM
        ====================================== */}

        <motion.div
          {...reveal(0.6)}
          className={`mx-auto mt-14 flex w-full max-w-[1050px] flex-wrap items-center justify-between gap-5 border-t pt-5 sm:mt-16 ${
            darkMode
              ? 'border-white/10'
              : 'border-[#171426]/10'
          }`}
        >
          <span
            className={`text-[10px] font-medium uppercase tracking-[0.18em] ${
              darkMode
                ? 'text-white/35'
                : 'text-[#171426]/45'
            }`}
          >
            {copy.detail}
          </span>

          <a
            href="#about"
            className={`group flex items-center gap-3 text-[10px] font-medium uppercase tracking-[0.16em] transition-colors hover:text-[#a78bfa] ${
              darkMode
                ? 'text-white/45'
                : 'text-[#171426]/50'
            }`}
          >
            {copy.scroll}

            <ArrowDown
              size={14}
              className="transition-transform group-hover:translate-y-1"
            />
          </a>
        </motion.div>
      </main>

      {/* ======================================
          OTHER SECTIONS
      ====================================== */}

      <About darkMode={darkMode} />
      <Skills darkMode={darkMode} />
      <Projects darkMode={darkMode} />
      <Contact darkMode={darkMode} />
    </div>
  )
}

// ==========================================
// APP ROUTES
// ==========================================

function App() {
  const [darkMode, setDarkMode] = useState(true)

  return (
    <BrowserRouter>
      <ScrollToTop />

      <Routes>
        {/* HOME PAGE */}

        <Route
          path="/"
          element={
            <HomePage
              darkMode={darkMode}
              setDarkMode={setDarkMode}
            />
          }
        />

        {/* RIHAL PROJECT - NO NAVBAR */}

        <Route
          path="/projects/rihal"
          element={
            <RihalProject darkMode={darkMode} />
          }
        />

        {/* FASEELAH PROJECT - NO NAVBAR */}

        <Route
          path="/projects/faseelah"
          element={
            <FaseelahProject darkMode={darkMode} />
          }
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App