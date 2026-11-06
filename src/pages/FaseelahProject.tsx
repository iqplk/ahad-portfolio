import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'motion/react'
import {
  ArrowLeft,
  ArrowRight,
  X,
  ChevronLeft,
  ChevronRight,
  Sprout,
  Leaf,
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

const screenshots = [
  {
    src: '/projects/Faseelah/home.jpg',
    label: 'Home',
    labelAr: 'الرئيسية',
  },
  {
    src: '/projects/Faseelah/soil-result.jpg',
    label: 'Soil Analysis',
    labelAr: 'تحليل التربة',
  },
  {
    src: '/projects/Faseelah/plant-result.jpg',
    label: 'Plant Recognition',
    labelAr: 'التعرف على النباتات',
  },
  {
    src: '/projects/Faseelah/black-soil-result.jpg',
    label: 'Soil Results',
    labelAr: 'نتائج التربة',
  },
]

export default function FaseelahProject({
  darkMode,
}: FaseelahProjectProps) {
  const { i18n } = useTranslation()
  const isArabic = i18n.language === 'ar'

  const [activeImage, setActiveImage] = useState(0)
  const [isFullscreen, setIsFullscreen] = useState(false)

  const features = [
    {
      icon: Sprout,
      title: isArabic ? 'تحليل التربة' : 'Soil Analysis',
      description: isArabic
        ? 'تحليل صور التربة لمعرفة النباتات المناسبة للزراعة فيها.'
        : 'Analyze soil images to discover plants suitable for different soil types.',
    },
    {
      icon: Camera,
      title: isArabic ? 'التعرف على النباتات' : 'Plant Recognition',
      description: isArabic
        ? 'تصوير النباتات للتعرف عليها والحصول على إرشادات العناية بها.'
        : 'Identify plants through photos and explore their care instructions.',
    },
    {
      icon: MapPinned,
      title: isArabic ? 'الرحلات الزراعية' : 'Agricultural Trips',
      description: isArabic
        ? 'إنشاء رحلات زراعية باستخدام خريطة تفاعلية.'
        : 'Create and explore agricultural trips through an interactive map.',
    },
    {
      icon: Users,
      title: isArabic ? 'الزراعة المجتمعية' : 'Community Planting',
      description: isArabic
        ? 'زراعة النباتات وتسميتها ومشاركة سبب زراعتها مع الآخرين.'
        : 'Plant, name, and share the meaningful stories behind every planting experience.',
    },
    {
      icon: Video,
      title: isArabic ? 'مشاركة الريلز' : 'Community Reels',
      description: isArabic
        ? 'مشاركة مقاطع فيديو قصيرة توثّق تجارب الزراعة.'
        : 'Share short videos documenting planting activities and experiences.',
    },
    {
      icon: Award,
      title: isArabic ? 'الأوسمة والإنجازات' : 'Badges & Achievements',
      description: isArabic
        ? 'الحصول على أوسمة رقمية تشجّع على الزراعة والمشاركة.'
        : 'Earn digital badges that celebrate planting and environmental contributions.',
    },
  ]

  const nextImage = () => {
    setActiveImage((current) => (current + 1) % screenshots.length)
  }

  const previousImage = () => {
    setActiveImage(
      (current) =>
        (current - 1 + screenshots.length) % screenshots.length
    )
  }

  return (
    <main
      dir={isArabic ? 'rtl' : 'ltr'}
      className={`min-h-screen transition-colors duration-300 ${
        darkMode
          ? 'bg-[#080f0d] text-white'
          : 'bg-[#f7faf8] text-slate-900'
      }`}
    >
      <section className="mx-auto max-w-6xl px-6 pb-20 pt-32">
        <Link
          to="/#projects"
          className={`inline-flex items-center gap-2 text-sm transition-colors ${
            darkMode
              ? 'text-slate-300 hover:text-emerald-300'
              : 'text-slate-600 hover:text-emerald-700'
          }`}
        >
          {isArabic ? (
            <ArrowRight size={17} />
          ) : (
            <ArrowLeft size={17} />
          )}
          {isArabic ? 'العودة للمشاريع' : 'Back to Projects'}
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-14"
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-2 text-xs font-medium tracking-wide text-emerald-500">
            <Leaf size={15} />
            {isArabic
              ? 'تطبيق زراعي تفاعلي'
              : 'INTERACTIVE AGRICULTURAL APPLICATION'}
          </div>

          <h1 className="text-5xl font-bold tracking-tight sm:text-7xl">
            Faseelah
            <span className="text-emerald-500">.</span>
          </h1>

          <p
            className={`mt-6 max-w-3xl text-lg leading-9 ${
              darkMode ? 'text-slate-300' : 'text-slate-600'
            }`}
          >
            {isArabic
              ? 'فسيلة تطبيق زراعي ذكي يجمع بين التعرف على النباتات وتحليل التربة والرحلات الزراعية التفاعلية، ويشجع المستخدمين على الزراعة ومشاركة تجاربهم والمساهمة في حماية البيئة.'
              : 'Faseelah is a smart agricultural application combining plant recognition, soil analysis, interactive planting trips, and community experiences to make planting more accessible, engaging, and meaningful.'}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {['UI/UX Design', 'Mobile Application', 'Interactive Experience'].map(
              (tag) => (
                <span
                  key={tag}
                  className={`rounded-full border px-4 py-2 text-xs ${
                    darkMode
                      ? 'border-white/10 bg-white/5 text-slate-300'
                      : 'border-slate-200 bg-white text-slate-600'
                  }`}
                >
                  {tag}
                </span>
              )
            )}
          </div>
        </motion.div>

        <div className="mt-20">
          <div className="mb-8 flex items-end justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-500">
                {isArabic ? 'واجهة التطبيق' : 'APPLICATION PREVIEW'}
              </p>

              <h2 className="mt-3 text-3xl font-bold">
                {isArabic ? 'معرض الواجهات' : 'Interface Gallery'}
              </h2>
            </div>

            <span
              className={`text-sm ${
                darkMode ? 'text-slate-400' : 'text-slate-500'
              }`}
            >
              {String(activeImage + 1).padStart(2, '0')} /{' '}
              {String(screenshots.length).padStart(2, '0')}
            </span>
          </div>

          <div
            className={`relative overflow-hidden rounded-[2rem] border p-6 sm:p-12 ${
              darkMode
                ? 'border-white/10 bg-gradient-to-br from-emerald-950/70 to-[#101c17]'
                : 'border-emerald-100 bg-gradient-to-br from-emerald-50 to-white'
            }`}
          >
            <div className="flex min-h-[440px] items-center justify-center sm:min-h-[600px]">
              <AnimatePresence mode="wait">
                <motion.button
                  key={activeImage}
                  type="button"
                  onClick={() => setIsFullscreen(true)}
                  initial={{ opacity: 0, y: 20, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -15, scale: 0.96 }}
                  transition={{ duration: 0.35 }}
                  className="cursor-zoom-in"
                  aria-label={
                    isArabic ? 'تكبير الصورة' : 'Enlarge screenshot'
                  }
                >
                  <div className="overflow-hidden rounded-[2rem] border-[7px] border-slate-900 bg-slate-900 shadow-2xl shadow-black/20">
                    <img
                      src={screenshots[activeImage].src}
                      alt={screenshots[activeImage].label}
                      className="h-[390px] w-auto max-w-[75vw] object-contain sm:h-[540px]"
                    />
                  </div>
                </motion.button>
              </AnimatePresence>
            </div>

            <div className="mt-8 flex items-center justify-between gap-4">
              <button
                type="button"
                onClick={previousImage}
                className={`flex h-11 w-11 items-center justify-center rounded-full border transition-colors ${
                  darkMode
                    ? 'border-white/20 hover:bg-white/10'
                    : 'border-slate-200 hover:bg-emerald-100'
                }`}
                aria-label={
                  isArabic ? 'الصورة السابقة' : 'Previous screenshot'
                }
              >
                {isArabic ? (
                  <ChevronRight size={20} />
                ) : (
                  <ChevronLeft size={20} />
                )}
              </button>

              <span className="text-center text-sm font-medium">
                {isArabic
                  ? screenshots[activeImage].labelAr
                  : screenshots[activeImage].label}
              </span>

              <button
                type="button"
                onClick={nextImage}
                className={`flex h-11 w-11 items-center justify-center rounded-full border transition-colors ${
                  darkMode
                    ? 'border-white/20 hover:bg-white/10'
                    : 'border-slate-200 hover:bg-emerald-100'
                }`}
                aria-label={
                  isArabic ? 'الصورة التالية' : 'Next screenshot'
                }
              >
                {isArabic ? (
                  <ChevronLeft size={20} />
                ) : (
                  <ChevronRight size={20} />
                )}
              </button>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-4 gap-3">
            {screenshots.map((screen, index) => (
              <button
                key={screen.src}
                type="button"
                onClick={() => setActiveImage(index)}
                aria-label={
                  isArabic ? screen.labelAr : screen.label
                }
                aria-pressed={activeImage === index}
                className={`overflow-hidden rounded-xl border-2 p-2 transition-all ${
                  activeImage === index
                    ? 'border-emerald-500'
                    : darkMode
                      ? 'border-white/10'
                      : 'border-slate-200'
                }`}
              >
                <img
                  src={screen.src}
                  alt={screen.label}
                  className="mx-auto h-24 w-auto object-contain sm:h-36"
                />
              </button>
            ))}
          </div>
        </div>

        <section className="mt-28">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-500">
            {isArabic ? 'مميزات المشروع' : 'PROJECT FEATURES'}
          </p>

          <h2 className="mt-3 text-3xl font-bold">
            {isArabic ? 'ماذا يقدم فسيلة؟' : 'What Faseelah Offers'}
          </h2>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => {
              const Icon = feature.icon

              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.06,
                  }}
                  className={`rounded-2xl border p-7 ${
                    darkMode
                      ? 'border-white/10 bg-white/[0.03]'
                      : 'border-slate-200 bg-white'
                  }`}
                >
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-500">
                    <Icon size={23} />
                  </div>

                  <h3 className="text-lg font-semibold">
                    {feature.title}
                  </h3>

                  <p
                    className={`mt-3 text-sm leading-7 ${
                      darkMode
                        ? 'text-slate-400'
                        : 'text-slate-600'
                    }`}
                  >
                    {feature.description}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </section>
      </section>

      <AnimatePresence>
        {isFullscreen && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={
              isArabic ? 'عرض الصورة المكبرة' : 'Enlarged screenshot'
            }
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-6"
            onClick={() => setIsFullscreen(false)}
          >
            <button
              type="button"
              onClick={() => setIsFullscreen(false)}
              className="absolute end-6 top-6 rounded-full bg-white/10 p-3 text-white hover:bg-white/20"
              aria-label={isArabic ? 'إغلاق' : 'Close'}
            >
              <X size={23} />
            </button>

            <img
              src={screenshots[activeImage].src}
              alt={screenshots[activeImage].label}
              className="max-h-[85vh] max-w-full object-contain"
              onClick={(event) => event.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  )
}