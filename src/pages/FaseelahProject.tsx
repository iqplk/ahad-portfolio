import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  motion,
  AnimatePresence,
  useReducedMotion,
} from 'motion/react'
import {
  ArrowLeft,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  X,
  Maximize2,
  Sprout,
  MapPinned,
  Users,
  Video,
  Award,
  Camera,
} from 'lucide-react'
import { useTranslation } from 'react-i18next'

type FaseelahProjectProps = {
  darkMode: boolean
}

type Screenshot = {
  src: string
  en: string
  ar: string
}

const screenshots: Screenshot[] = [
  {
    src: '/projects/Faseelah/home.jpg',
    en: 'Home',
    ar: 'الرئيسية',
  },
  {
    src: '/projects/Faseelah/soil-result.jpg',
    en: 'Soil Analysis',
    ar: 'تحليل التربة',
  },
  {
    src: '/projects/Faseelah/plant-result.jpg',
    en: 'Plant Recognition',
    ar: 'التعرف على النباتات',
  },
  {
    src: '/projects/Faseelah/black-soil-result.jpg',
    en: 'Soil Results',
    ar: 'نتائج التربة',
  },
]

const features = [
  {
    icon: Sprout,
    en: 'Soil Analysis',
    ar: 'تحليل التربة',
    descriptionEn:
      'Analyze soil images to discover plants suitable for different soil types.',
    descriptionAr:
      'تحليل صور التربة لمعرفة النباتات المناسبة للزراعة فيها.',
  },
  {
    icon: Camera,
    en: 'Plant Recognition',
    ar: 'التعرف على النباتات',
    descriptionEn:
      'Identify plants through photos and explore their care instructions.',
    descriptionAr:
      'تصوير النباتات للتعرف عليها والحصول على إرشادات العناية بها.',
  },
  {
    icon: MapPinned,
    en: 'Agricultural Trips',
    ar: 'الرحلات الزراعية',
    descriptionEn:
      'Create and explore agricultural trips through an interactive map.',
    descriptionAr:
      'إنشاء رحلات زراعية باستخدام خريطة تفاعلية.',
  },
  {
    icon: Users,
    en: 'Community Planting',
    ar: 'الزراعة المجتمعية',
    descriptionEn:
      'Plant, name, and share the stories behind planting experiences.',
    descriptionAr:
      'زراعة النباتات وتسميتها ومشاركة سبب زراعتها مع الآخرين.',
  },
  {
    icon: Video,
    en: 'Community Reels',
    ar: 'مشاركة الريلز',
    descriptionEn:
      'Share short videos documenting planting activities and experiences.',
    descriptionAr:
      'مشاركة مقاطع فيديو قصيرة توثّق تجارب الزراعة.',
  },
  {
    icon: Award,
    en: 'Badges & Achievements',
    ar: 'الأوسمة والإنجازات',
    descriptionEn:
      'Earn digital badges that celebrate planting and environmental contributions.',
    descriptionAr:
      'الحصول على أوسمة رقمية تشجّع على الزراعة والمشاركة.',
  },
]

const technologies = [
  'UI/UX Design',
  'Mobile Application',
  'Interactive Experience',
]

export default function FaseelahProject({
  darkMode,
}: FaseelahProjectProps) {
  const { i18n } = useTranslation()
  const isArabic = i18n.resolvedLanguage === 'ar'
  const reduceMotion = useReducedMotion()

  const [activeIndex, setActiveIndex] = useState(0)
  const [isFullscreen, setIsFullscreen] = useState(false)

  const activeScreen = screenshots[activeIndex]

  const fontFamily = isArabic
    ? "'IBM Plex Sans Arabic', 'Noto Sans Arabic', sans-serif"
    : "'Outfit', sans-serif"

  const cardStyle = darkMode
    ? 'border-white/[0.09] bg-white/[0.025]'
    : 'border-[#171426]/[0.09] bg-white'

  const secondaryText = darkMode
    ? 'text-[#a5a3b9]'
    : 'text-[#686477]'

  const nextImage = () => {
    setActiveIndex(
      (previous) => (previous + 1) % screenshots.length
    )
  }

  const previousImage = () => {
    setActiveIndex(
      (previous) =>
        (previous - 1 + screenshots.length) %
        screenshots.length
    )
  }

  useEffect(() => {
    if (!isFullscreen) return

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsFullscreen(false)
      }

      if (event.key === 'ArrowRight') {
        setActiveIndex(
          (previous) =>
            (previous + 1) % screenshots.length
        )
      }

      if (event.key === 'ArrowLeft') {
        setActiveIndex(
          (previous) =>
            (previous - 1 + screenshots.length) %
            screenshots.length
        )
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isFullscreen])

  const reveal = (delay = 0) => ({
    initial: reduceMotion
      ? false
      : { opacity: 0, y: 20 },

    whileInView: {
      opacity: 1,
      y: 0,
    },

    viewport: {
      once: true,
      amount: 0.15,
    },

    transition: {
      duration: 0.6,
      delay,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  })

  return (
    <main
      dir={isArabic ? 'rtl' : 'ltr'}
      className={`min-h-screen ${
        darkMode
          ? 'bg-[#090e1c] text-white'
          : 'bg-[#f8f9fd] text-slate-900'
      }`}
      style={{ fontFamily }}
    >
      <div className="mx-auto max-w-7xl px-5 pb-16 pt-8 sm:px-8 lg:px-12">

        {/* BACK TO PROJECTS */}

        <Link
          to="/#projects"
          className="mb-10 inline-flex items-center gap-2 text-[13px] font-medium text-violet-400 transition-colors hover:text-violet-300"
        >
          {isArabic ? (
            <ArrowRight size={17} />
          ) : (
            <ArrowLeft size={17} />
          )}

          {isArabic
            ? 'العودة إلى المشاريع'
            : 'Back to Projects'}
        </Link>

        {/* PROJECT INTRODUCTION */}

        <motion.section
          {...reveal()}
          className="mb-14"
        >
          <h1
            dir="ltr"
            className="w-fit text-[clamp(3rem,6vw,5rem)] font-semibold leading-[1.15] tracking-[-0.06em]"
          >
            Faseelah
          </h1>

          <p
            className={`mt-5 max-w-2xl text-[14px] leading-[2] sm:text-[15px] ${secondaryText}`}
          >
            {isArabic
              ? 'فسيلة تطبيق زراعي ذكي يجمع بين التعرف على النباتات وتحليل التربة والرحلات الزراعية التفاعلية، ويشجع المستخدمين على الزراعة ومشاركة تجاربهم والمساهمة في حماية البيئة.'
              : 'Faseelah is a smart agricultural application combining plant recognition, soil analysis, interactive planting trips, and community experiences to make planting more accessible, engaging, and meaningful.'}
          </p>
        </motion.section>

        {/* INTERFACE GALLERY */}

        <section className="mb-16">
          <motion.div
            {...reveal()}
            className="mb-7 flex flex-wrap items-end justify-between gap-4"
          >
            <div>
              <p className="mb-3 text-[11px] font-semibold tracking-[0.16em] text-violet-400">
                {isArabic
                  ? 'معرض التصميم'
                  : 'UI SHOWCASE'}
              </p>

              <h2
                className={`font-semibold ${
                  isArabic
                    ? 'text-[clamp(2rem,4vw,3.8rem)] leading-[1.5]'
                    : 'text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.12] tracking-[-0.055em]'
                }`}
              >
                {isArabic
                  ? 'واجهات التطبيق'
                  : 'Interface Gallery'}
              </h2>
            </div>

            <span
              dir="ltr"
              className={`text-[12px] font-medium ${secondaryText}`}
            >
              {String(activeIndex + 1).padStart(2, '0')}
              {' / '}
              {String(screenshots.length).padStart(2, '0')}
            </span>
          </motion.div>

          <motion.div
            {...reveal(0.1)}
            className={`overflow-hidden rounded-2xl border p-4 sm:p-6 ${cardStyle}`}
          >
            <div
              className={`relative flex min-h-[300px] items-center justify-center overflow-hidden rounded-xl py-6 sm:min-h-[390px] ${
                darkMode
                  ? 'bg-[#101527]'
                  : 'bg-[#f2f0fa]'
              }`}
            >
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(139,92,246,0.12),transparent_65%)]"
              />

              <AnimatePresence mode="wait">
                <motion.button
                  key={activeScreen.src}
                  type="button"
                  initial={
                    reduceMotion
                      ? false
                      : {
                          opacity: 0,
                          y: 12,
                          scale: 0.97,
                        }
                  }
                  animate={{
                    opacity: 1,
                    y: 0,
                    scale: 1,
                  }}
                  exit={
                    reduceMotion
                      ? undefined
                      : {
                          opacity: 0,
                          y: -10,
                        }
                  }
                  transition={{ duration: 0.3 }}
                  onClick={() => setIsFullscreen(true)}
                  aria-label={
                    isArabic
                      ? 'تكبير الصورة'
                      : 'Enlarge image'
                  }
                  className="group relative z-10"
                >
                  <img
                    src={activeScreen.src}
                    alt={
                      isArabic
                        ? activeScreen.ar
                        : activeScreen.en
                    }
                    className="block max-h-[320px] max-w-full rounded-[17px] border-[4px] border-[#252638] object-contain shadow-[0_15px_40px_rgba(0,0,0,0.3)] sm:max-h-[380px]"
                  />

                  <span className="absolute bottom-3 right-3 rounded-lg bg-black/70 p-2 text-white opacity-100 transition-opacity sm:opacity-0 sm:group-hover:opacity-100">
                    <Maximize2 size={16} />
                  </span>
                </motion.button>
              </AnimatePresence>
            </div>

            <div className="mt-5 flex items-center justify-between gap-3">
              <button
                type="button"
                onClick={previousImage}
                aria-label={
                  isArabic
                    ? 'الصورة السابقة'
                    : 'Previous image'
                }
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-violet-500/20 text-violet-400 transition-colors hover:bg-violet-500/10"
              >
                <ChevronLeft size={19} />
              </button>

              <p className="text-center text-[13px] font-medium">
                {isArabic
                  ? activeScreen.ar
                  : activeScreen.en}
              </p>

              <button
                type="button"
                onClick={nextImage}
                aria-label={
                  isArabic
                    ? 'الصورة التالية'
                    : 'Next image'
                }
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-violet-500/20 text-violet-400 transition-colors hover:bg-violet-500/10"
              >
                <ChevronRight size={19} />
              </button>
            </div>
          </motion.div>

          {/* THUMBNAILS */}

          <div className="mt-4 flex flex-wrap justify-center gap-2.5">
            {screenshots.map((screen, index) => {
              const isActive = activeIndex === index

              return (
                <button
                  key={screen.src}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  aria-label={
                    isArabic ? screen.ar : screen.en
                  }
                  aria-pressed={isActive}
                  className={`overflow-hidden rounded-lg border-2 transition-all duration-300 ${
                    isActive
                      ? 'border-violet-500 opacity-100'
                      : 'border-transparent opacity-55 hover:opacity-100'
                  }`}
                >
                  <img
                    src={screen.src}
                    alt=""
                    loading="lazy"
                    className="h-[76px] w-[52px] object-cover object-top sm:h-[88px] sm:w-[60px]"
                  />
                </button>
              )
            })}
          </div>
        </section>

        {/* EXPERIENCE HIGHLIGHTS */}

        <section className="mb-16">
          <motion.div
            {...reveal()}
            className="mb-8"
          >
            <p className="mb-3 text-[11px] font-semibold tracking-[0.16em] text-violet-400">
              {isArabic
                ? 'أبرز المميزات'
                : 'DESIGN HIGHLIGHTS'}
            </p>

            <h2
              className={`font-semibold ${
                isArabic
                  ? 'text-[clamp(2rem,4vw,3.8rem)] leading-[1.5]'
                  : 'text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.12] tracking-[-0.055em]'
              }`}
            >
              {isArabic
                ? 'مميزات الواجهات'
                : 'Experience Highlights'}
            </h2>
          </motion.div>

          <div className="grid gap-4 md:grid-cols-2">
            {features.map((feature, index) => {
              const Icon = feature.icon

              return (
                <motion.article
                  key={feature.en}
                  {...reveal(index * 0.06)}
                  className={`flex items-start gap-4 rounded-2xl border p-5 transition-colors duration-300 sm:p-6 ${
                    darkMode
                      ? 'border-white/[0.09] bg-white/[0.025] hover:border-violet-500/30'
                      : 'border-[#171426]/[0.09] bg-white hover:border-violet-400/40'
                  }`}
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-violet-500/10 text-violet-400">
                    <Icon size={21} strokeWidth={1.7} />
                  </div>

                  <div className="min-w-0 flex-1">
                    <h3 className="text-[17px] font-semibold leading-[1.6]">
                      {isArabic
                        ? feature.ar
                        : feature.en}
                    </h3>

                    <p
                      className={`mt-1.5 text-[13px] leading-[1.9] ${secondaryText}`}
                    >
                      {isArabic
                        ? feature.descriptionAr
                        : feature.descriptionEn}
                    </p>
                  </div>
                </motion.article>
              )
            })}
          </div>
        </section>

        {/* TECHNOLOGIES */}

        <section className="pb-6">
          <motion.div
            {...reveal()}
            className="mb-7"
          >
            <p className="mb-3 text-[11px] font-semibold tracking-[0.16em] text-violet-400">
              {isArabic
                ? 'التصميم والتجربة'
                : 'DESIGN & EXPERIENCE'}
            </p>

            <h2
              className={`font-semibold ${
                isArabic
                  ? 'text-[clamp(2rem,4vw,3.8rem)] leading-[1.5]'
                  : 'text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.12] tracking-[-0.055em]'
              }`}
            >
              {isArabic
                ? 'مجالات العمل'
                : 'Project Focus'}
            </h2>
          </motion.div>

          <motion.div
            {...reveal(0.1)}
            className={`rounded-2xl border p-5 sm:p-6 ${cardStyle}`}
          >
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech) => (
                <span
                  key={tech}
                  dir="ltr"
                  className={`rounded-lg border px-3 py-1.5 text-[12px] font-medium ${
                    darkMode
                      ? 'border-white/[0.09] bg-white/[0.035] text-[#bcb9cf]'
                      : 'border-[#171426]/[0.09] bg-[#f7f6fb] text-[#625d74]'
                  }`}
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </section>
      </div>

      {/* FULLSCREEN IMAGE VIEWER */}

      <AnimatePresence>
        {isFullscreen && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={
              isArabic
                ? 'معاينة الصورة'
                : 'Image preview'
            }
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setIsFullscreen(false)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-5"
          >
            <button
              type="button"
              onClick={() => setIsFullscreen(false)}
              aria-label={
                isArabic ? 'إغلاق' : 'Close'
              }
              className="absolute right-5 top-5 z-20 flex h-11 w-11 items-center justify-center rounded-xl border border-white/20 text-white transition-colors hover:bg-white/10"
            >
              <X size={21} />
            </button>

            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation()
                previousImage()
              }}
              aria-label={
                isArabic
                  ? 'الصورة السابقة'
                  : 'Previous image'
              }
              className="absolute left-3 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-xl border border-white/20 bg-black/40 text-white transition-colors hover:bg-white/10 sm:left-6"
            >
              <ChevronLeft size={21} />
            </button>

            <AnimatePresence mode="wait">
              <motion.img
                key={activeScreen.src}
                src={activeScreen.src}
                alt={
                  isArabic
                    ? activeScreen.ar
                    : activeScreen.en
                }
                initial={
                  reduceMotion
                    ? false
                    : { opacity: 0, scale: 0.96 }
                }
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
                exit={
                  reduceMotion
                    ? undefined
                    : { opacity: 0, scale: 0.96 }
                }
                transition={{ duration: 0.2 }}
                onClick={(event) => event.stopPropagation()}
                className="max-h-[85vh] max-w-[calc(100vw-110px)] rounded-xl object-contain sm:max-w-[80vw]"
              />
            </AnimatePresence>

            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation()
                nextImage()
              }}
              aria-label={
                isArabic
                  ? 'الصورة التالية'
                  : 'Next image'
              }
              className="absolute right-3 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-xl border border-white/20 bg-black/40 text-white transition-colors hover:bg-white/10 sm:right-6"
            >
              <ChevronRight size={21} />
            </button>

            <div
              dir="ltr"
              className="absolute bottom-5 left-1/2 -translate-x-1/2 text-[12px] font-medium text-white/70"
            >
              {String(activeIndex + 1).padStart(2, '0')}
              {' / '}
              {String(screenshots.length).padStart(2, '0')}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  )
}