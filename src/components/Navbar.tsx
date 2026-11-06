import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { Menu, X, Sun, Moon, Globe } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { Link, useLocation } from 'react-router-dom'

type NavbarProps = {
  darkMode: boolean
  setDarkMode: (value: boolean) => void
}

const navigation = [
  { id: 'home' },
  { id: 'about' },
  { id: 'skills' },
  { id: 'projects' },
  { id: 'contact' },
]

export default function Navbar({
  darkMode,
  setDarkMode,
}: NavbarProps) {
  const { t, i18n } = useTranslation()
  const location = useLocation()

  const headerRef = useRef<HTMLElement>(null)

  const [menuOpen, setMenuOpen] = useState(false)

  const language =
    i18n.resolvedLanguage === 'ar' ? 'ar' : 'en'

  const isHomePage = location.pathname === '/'

  // ==========================================
  // Navigation Labels
  // ==========================================

  const getNavigationLabel = (id: string) => {
    if (id === 'skills') {
      return language === 'ar' ? 'المهارات' : 'Skills'
    }

    return t(`nav.${id}`)
  }

  // ==========================================
  // Navigation Links
  // ==========================================

  const getNavigationLink = (id: string) => {
    return isHomePage ? `#${id}` : `/#${id}`
  }

  // ==========================================
  // Smart Scroll
  // ==========================================

  const scrollToSection = (
    id: string,
    behavior: ScrollBehavior = 'smooth'
  ) => {
    if (id === 'home') {
      window.scrollTo({
        top: 0,
        behavior,
      })

      return
    }

    const section = document.getElementById(id)

    if (!section) return

    // Scroll to the section heading instead of
    // its outer container to avoid large empty space.

    const heading = section.querySelector('h2')

    const target = heading || section

    const headerHeight =
      headerRef.current?.getBoundingClientRect().height ?? 80

    const spacing = 24

    const targetPosition =
      target.getBoundingClientRect().top +
      window.scrollY -
      headerHeight -
      spacing

    window.scrollTo({
      top: Math.max(0, targetPosition),
      behavior,
    })
  }

  // ==========================================
  // Handle Navigation
  // ==========================================

  const handleNavigation = (id: string) => {
    setMenuOpen(false)

    if (isHomePage) {
      // Wait until React Router finishes its
      // default hash navigation before adjusting
      // the position below the navbar.

      window.setTimeout(() => {
        scrollToSection(id, 'smooth')
      }, 180)
    }
  }

  // ==========================================
  // Navigation From Project Pages
  // ==========================================

  useEffect(() => {
    if (
      location.pathname !== '/' ||
      !location.hash
    ) {
      return
    }

    const id = decodeURIComponent(
      location.hash.substring(1)
    )

    const timer = window.setTimeout(() => {
      scrollToSection(id, 'auto')
    }, 200)

    return () => window.clearTimeout(timer)
  }, [location.pathname, location.hash])

  // ==========================================
  // Change Language
  // ==========================================

  const changeLanguage = () => {
    const nextLanguage =
      language === 'en' ? 'ar' : 'en'

    void i18n.changeLanguage(nextLanguage)

    setMenuOpen(false)
  }

  return (
    <header
      ref={headerRef}
      className={`sticky top-0 z-50 border-b backdrop-blur-xl ${
        darkMode
          ? 'border-white/10 bg-[#090e1c]/80'
          : 'border-slate-200 bg-white/80'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-12">

        {/* ================================== */}
        {/* Logo */}
        {/* ================================== */}

        <Link
          to="/#home"
          onClick={() => handleNavigation('home')}
          className="text-2xl font-black tracking-[-0.08em]"
          aria-label="Ahad Portfolio - Home"
        >
          AHAD
          <span className="text-violet-500">.</span>
        </Link>

        {/* ================================== */}
        {/* Desktop Navigation */}
        {/* ================================== */}

        <nav
          className="hidden items-center gap-9 md:flex"
          aria-label="Main navigation"
        >
          {navigation.map((item) => (
            <Link
              key={item.id}
              to={getNavigationLink(item.id)}
              onClick={() => handleNavigation(item.id)}
              className="group relative text-sm font-medium text-slate-400 transition-colors hover:text-violet-400"
            >
              {getNavigationLabel(item.id)}

              <span className="absolute -bottom-2 start-0 h-[2px] w-0 bg-violet-500 transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        {/* ================================== */}
        {/* Controls */}
        {/* ================================== */}

        <div className="flex items-center gap-3">

          {/* Language */}

          <button
            type="button"
            onClick={changeLanguage}
            className="flex items-center gap-2 rounded-xl border border-violet-500/20 px-3 py-2 text-xs font-semibold text-violet-400 transition hover:bg-violet-500/10"
            aria-label={
              language === 'en'
                ? 'Switch to Arabic'
                : 'Switch to English'
            }
            title={
              language === 'en'
                ? 'Switch to Arabic'
                : 'Switch to English'
            }
          >
            <Globe size={16} />

            <span>
              {language === 'en' ? 'AR' : 'EN'}
            </span>
          </button>

          {/* ================================== */}
          {/* Theme */}
          {/* ================================== */}

          <button
            type="button"
            onClick={() => setDarkMode(!darkMode)}
            className={`rounded-xl border p-2.5 transition hover:border-violet-500/50 ${
              darkMode
                ? 'border-white/10'
                : 'border-slate-200'
            }`}
            aria-label={
              darkMode
                ? 'Switch to light mode'
                : 'Switch to dark mode'
            }
            title={
              darkMode
                ? 'Light Mode'
                : 'Dark Mode'
            }
          >
            {darkMode ? (
              <Sun size={18} />
            ) : (
              <Moon size={18} />
            )}
          </button>

          {/* ================================== */}
          {/* Mobile Menu Button */}
          {/* ================================== */}

          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className={`rounded-xl border p-2.5 md:hidden ${
              darkMode
                ? 'border-white/10'
                : 'border-slate-200'
            }`}
            aria-label={
              menuOpen ? 'Close menu' : 'Open menu'
            }
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
          >
            {menuOpen ? (
              <X size={20} />
            ) : (
              <Menu size={20} />
            )}
          </button>
        </div>
      </div>

      {/* ================================== */}
      {/* Mobile Navigation */}
      {/* ================================== */}

      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            id="mobile-navigation"
            initial={{
              opacity: 0,
              height: 0,
            }}
            animate={{
              opacity: 1,
              height: 'auto',
            }}
            exit={{
              opacity: 0,
              height: 0,
            }}
            transition={{
              duration: 0.25,
            }}
            className={`overflow-hidden border-t md:hidden ${
              darkMode
                ? 'border-white/10 bg-[#090e1c]'
                : 'border-slate-200 bg-white'
            }`}
            aria-label="Mobile navigation"
          >
            <div className="flex flex-col gap-2 px-6 py-5">

              {navigation.map((item) => (
                <Link
                  key={item.id}
                  to={getNavigationLink(item.id)}
                  onClick={() =>
                    handleNavigation(item.id)
                  }
                  className="rounded-xl px-4 py-3 text-sm font-medium transition hover:bg-violet-500/10 hover:text-violet-400"
                >
                  {getNavigationLabel(item.id)}
                </Link>
              ))}

            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}