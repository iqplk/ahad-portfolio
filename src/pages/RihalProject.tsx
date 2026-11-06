import { useState } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'motion/react'
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  X,
  Maximize2,
  Map,
  Smartphone,
  Compass,
  CalendarDays,
} from 'lucide-react'
import { useTranslation } from 'react-i18next'

type RihalProjectProps = {
  darkMode: boolean
}

const screenshots = [
  {
    src: '/projects/rihal/home-trip-setup.jpg',
    en: 'Trip Setup',
    ar: 'إعداد الرحلة',
  },
  {
    src: '/projects/rihal/interactive-map.jpg',
    en: 'Interactive Map',
    ar: 'الخريطة التفاعلية',
  },
  {
    src: '/projects/rihal/itinerary-day-one.jpg',
    en: 'Trip Itinerary',
    ar: 'جدول الرحلة',
  },
  {
    src: '/projects/rihal/instant-explore-list.jpg',
    en: 'Instant Exploration',
    ar: 'الاستكشاف اللحظي',
  },
  {
    src: '/projects/rihal/account-screen.jpg',
    en: 'Account Interface',
    ar: 'واجهة الحساب',
  },
]

export default function RihalProject({
  darkMode,
}: RihalProjectProps) {
  const { i18n } = useTranslation()
  const isArabic = i18n.resolvedLanguage === 'ar'
  const reduceMotion = useReducedMotion()

  const [activeIndex, setActiveIndex] = useState(0)
  const [isFullscreen, setIsFullscreen] = useState(false)

  const activeScreen = screenshots[activeIndex]

  const nextImage = () => {
    setActiveIndex((prev) => (prev + 1) % screenshots.length)
  }

  const previousImage = () => {
    setActiveIndex(
      (prev) => (prev - 1 + screenshots.length) % screenshots.length
    )
  }

  const features = [
    {
      icon: Map,
      en: 'Interactive Map',
      ar: 'خريطة تفاعلية',
      descriptionEn:
        'Explore tourist destinations through an interactive map.',
      descriptionAr:
        'استكشاف الوجهات السياحية من خلال خريطة تفاعلية.',
    },
    {
      icon: CalendarDays,
      en: 'Trip Planning',
      ar: 'تخطيط الرحلات',
      descriptionEn:
        'Browse personalized itineraries organized by day.',
      descriptionAr:
        'استعراض خطط رحلات مخصصة ومنظمة حسب الأيام.',
    },
    {
      icon: Compass,
      en: 'Instant Exploration',
      ar: 'الاستكشاف اللحظي',
      descriptionEn:
        'Discover nearby attractions based on available time.',
      descriptionAr:
        'اكتشاف الأماكن القريبة بناءً على الوقت المتاح.',
    },
    {
      icon: Smartphone,
      en: 'Mobile Experience',
      ar: 'تجربة الجوال',
      descriptionEn:
        'A mobile-friendly interface with intuitive navigation.',
      descriptionAr:
        'واجهة متوافقة مع الجوال وسهلة التنقل.',
    },
  ]

  return (
    <main
      className={`min-h-screen ${
        darkMode ? 'bg-[#090e1c] text-white' : 'bg-[#f8f9fd] text-slate-900'
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-12">

        {/* Back Button */}
        <a
          href="/#projects"
          className="mb-12 inline-flex items-center gap-3 text-sm font-medium text-violet-400 transition hover:text-violet-300"
        >
          {isArabic ? <ArrowRight size={18} /> : <ArrowLeft size={18} />}
          {isArabic ? 'العودة إلى المشاريع' : 'Back to Projects'}
        </a>

        {/* Hero */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-20"
        >
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-violet-400">
            {isArabic ? 'دراسة حالة · تطبيق تفاعلي' : 'CASE STUDY · INTERACTIVE APP'}
          </p>

          <h1 className="text-6xl font-black tracking-tight md:text-8xl">
            Rihal<span className="text-violet-500">.</span>
          </h1>

          <p
            className={`mt-7 max-w-3xl text-lg leading-9 ${
              darkMode ? 'text-slate-400' : 'text-slate-600'
            }`}
          >
            {isArabic
              ? 'تجربة رقمية لاستكشاف الوجهات السياحية وتخطيط الرحلات بطريقة تفاعلية وسهلة الاستخدام.'
              : 'A digital experience designed to help travelers explore destinations and plan personalized journeys through intuitive, interactive interfaces.'}
          </p>

          <a
            href="https://rihal-fc413.web.app"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-9 inline-flex items-center gap-3 rounded-xl bg-violet-600 px-6 py-4 text-sm font-semibold text-white transition hover:bg-violet-500"
          >
            {isArabic ? 'تجربة التطبيق' : 'Explore Live Application'}
            <ArrowUpRight size={18} />
          </a>
        </motion.div>

        {/* Screenshot Gallery */}
        <section className="mb-28">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-5">
            <div>
              <p className="mb-3 text-sm font-semibold tracking-widest text-violet-400">
                UI SHOWCASE
              </p>
              <h2 className="text-3xl font-bold md:text-5xl">
                {isArabic ? 'واجهات التطبيق' : 'Interface Gallery'}
              </h2>
            </div>

            <span className="text-sm text-slate-400">
              {String(activeIndex + 1).padStart(2, '0')} /{' '}
              {String(screenshots.length).padStart(2, '0')}
            </span>
          </div>

          <div
            className={`relative overflow-hidden rounded-3xl border p-6 sm:p-12 ${
              darkMode
                ? 'border-white/10 bg-[#151b2c]'
                : 'border-slate-200 bg-white'
            }`}
          >
            <div className="flex min-h-[440px] items-center justify-center sm:min-h-[600px]">
              <AnimatePresence mode="wait">
                <motion.button
                  key={activeScreen.src}
                  type="button"
                  initial={
                    reduceMotion ? false : { opacity: 0, x: 25, scale: 0.96 }
                  }
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={
                    reduceMotion ? undefined : { opacity: 0, x: -25 }
                  }
                  transition={{ duration: 0.3 }}
                  onClick={() => setIsFullscreen(true)}
                  className="group relative"
                  aria-label={isArabic ? 'تكبير الصورة' : 'Enlarge image'}
                >
                  <img
                    src={activeScreen.src}
                    alt={isArabic ? activeScreen.ar : activeScreen.en}
                    className="max-h-[580px] w-auto max-w-full rounded-[24px] border-[5px] border-slate-800 shadow-2xl"
                  />

                  <span className="absolute bottom-5 right-5 rounded-xl bg-black/70 p-3 text-white opacity-100 transition sm:opacity-0 sm:group-hover:opacity-100">
                    <Maximize2 size={18} />
                  </span>
                </motion.button>
              </AnimatePresence>
            </div>

            <div className="mt-8 flex items-center justify-between gap-4">
              <button
                type="button"
                onClick={previousImage}
                aria-label={isArabic ? 'الصورة السابقة' : 'Previous image'}
                className="rounded-full border border-violet-500/30 p-3 text-violet-400 transition hover:bg-violet-500/10"
              >
                <ChevronLeft size={22} />
              </button>

              <p className="text-center text-sm font-medium">
                {isArabic ? activeScreen.ar : activeScreen.en}
              </p>

              <button
                type="button"
                onClick={nextImage}
                aria-label={isArabic ? 'الصورة التالية' : 'Next image'}
                className="rounded-full border border-violet-500/30 p-3 text-violet-400 transition hover:bg-violet-500/10"
              >
                <ChevronRight size={22} />
              </button>
            </div>
          </div>

          {/* Thumbnails */}
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            {screenshots.map((screen, index) => (
              <button
                key={screen.src}
                type="button"
                onClick={() => setActiveIndex(index)}
                aria-label={isArabic ? screen.ar : screen.en}
                aria-pressed={activeIndex === index}
                className={`overflow-hidden rounded-xl border-2 transition ${
                  activeIndex === index
                    ? 'border-violet-500'
                    : 'border-transparent opacity-60 hover:opacity-100'
                }`}
              >
                <img
                  src={screen.src}
                  alt=""
                  loading="lazy"
                  className="h-24 w-16 object-cover object-top"
                />
              </button>
            ))}
          </div>
        </section>

        {/* Features */}
        <section className="mb-24">
          <p className="mb-4 text-sm font-semibold tracking-widest text-violet-400">
            DESIGN HIGHLIGHTS
          </p>

          <h2 className="mb-12 text-3xl font-bold md:text-5xl">
            {isArabic ? 'مميزات الواجهات' : 'Experience Highlights'}
          </h2>

          <div className="grid gap-5 md:grid-cols-2">
            {features.map((feature, index) => (
              <motion.div
                key={feature.en}
                initial={reduceMotion ? false : { opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className={`rounded-2xl border p-7 ${
                  darkMode
                    ? 'border-white/10 bg-[#151b2c]'
                    : 'border-slate-200 bg-white'
                }`}
              >
                <feature.icon className="mb-5 text-violet-400" size={26} />

                <h3 className="mb-3 text-xl font-semibold">
                  {isArabic ? feature.ar : feature.en}
                </h3>

                <p className="text-sm leading-7 text-slate-400">
                  {isArabic ? feature.descriptionAr : feature.descriptionEn}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Technology */}
        <section className="pb-20">
          <p className="mb-4 text-sm font-semibold tracking-widest text-violet-400">
            TECHNOLOGIES
          </p>

          <h2 className="mb-8 text-3xl font-bold md:text-5xl">
            {isArabic ? 'التقنيات' : 'Technologies'}
          </h2>

          <div className="flex flex-wrap gap-3">
            {['Flutter', 'Dart', 'Interactive UI', 'Responsive Design'].map(
              (tech) => (
                <span
                  key={tech}
                  className="rounded-xl border border-violet-500/20 bg-violet-500/5 px-5 py-3 text-sm font-medium text-violet-400"
                >
                  {tech}
                </span>
              )
            )}
          </div>
        </section>
      </div>

      {/* Image Preview Overlay */}
      <AnimatePresence>
        {isFullscreen && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={isArabic ? 'معاينة الصورة' : 'Image preview'}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-6"
            onClick={() => setIsFullscreen(false)}
          >
            <button
              type="button"
              onClick={() => setIsFullscreen(false)}
              aria-label={isArabic ? 'إغلاق' : 'Close'}
              className="absolute right-6 top-6 rounded-full border border-white/20 p-3 text-white"
            >
              <X size={24} />
            </button>

            <img
              src={activeScreen.src}
              alt={isArabic ? activeScreen.ar : activeScreen.en}
              className="max-h-[85vh] max-w-full rounded-xl object-contain"
              onClick={(event) => event.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  )
}