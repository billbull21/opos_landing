import { WifiOff, Smartphone, Save, Cloud, Mail, CheckCircle2, ArrowRight, Globe } from "lucide-react";
import Image from "next/image";
import RotatingText from "../components/RotatingText";
import { getDictionary } from "../dictionaries";
import Link from "next/link";

export default async function Home({ params }: { params: Promise<{ lang: "en" | "id" }> }) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-blue-100">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-slate-100 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
              O
            </div>
            <span className="font-bold text-xl tracking-tight">OPOS</span>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 text-sm font-medium text-slate-600">
              <Globe className="w-4 h-4" />
              <Link href="/en" className={`hover:text-blue-600 ${lang === 'en' ? 'text-blue-600 font-bold' : ''}`}>EN</Link>
              <span className="text-slate-300">|</span>
              <Link href="/id" className={`hover:text-blue-600 ${lang === 'id' ? 'text-blue-600 font-bold' : ''}`}>ID</Link>
            </div>
            <a
              href="mailto:pub.billbull21@gmail.com"
              className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors"
            >
              {dict.nav.contact}
            </a>
          </div>
        </div>
      </nav>

      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-sm font-medium mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              {dict.hero.badge}
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 mb-6">
              {dict.hero.title} <RotatingText words={lang === 'id' ? ["Di Mana Saja", "Kapan Saja", "Tanpa Batas"] : ["Anywhere", "Anytime", "Limitless"]} />
            </h1>
            <p className="text-lg sm:text-xl text-slate-600 mb-8 leading-relaxed">
              {dict.hero.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="mailto:pub.billbull21@gmail.com?subject=Request Access to OPOS"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 text-base font-semibold text-white bg-blue-600 rounded-full hover:bg-blue-700 transition-all shadow-lg shadow-blue-200 hover:shadow-blue-300"
              >
                <Mail className="w-5 h-5" />
                {dict.hero.cta_request}
              </a>
              <a
                href="#features"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 text-base font-semibold text-slate-700 bg-slate-100 rounded-full hover:bg-slate-200 transition-all"
              >
                {dict.hero.cta_learn_more}
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Hero Screenshot Placeholder */}
          <div className="relative mt-12 lg:mt-20 rounded-2xl border border-slate-200 bg-slate-50 p-2 sm:p-4 shadow-2xl shadow-slate-200/50">
            <div className="aspect-[16/9] rounded-xl bg-slate-200 overflow-hidden relative flex items-center justify-center group">
              <Image 
                src="/images/dashboard.gif" 
                alt="OPOS Dashboard" 
                fill
                className="object-contain object-top"
                priority
                unoptimized
              />
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 bg-slate-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">{dict.features.title}</h2>
              <p className="text-slate-600">
                {dict.features.subtitle}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Feature 1 */}
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 mb-6">
                  <WifiOff className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{dict.features.offline.title}</h3>
                <p className="text-slate-600 leading-relaxed">
                  {dict.features.offline.desc}
                </p>
              </div>

              {/* Feature 2 */}
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center text-indigo-600 mb-6">
                  <Smartphone className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{dict.features.rich.title}</h3>
                <p className="text-slate-600 leading-relaxed">
                  {dict.features.rich.desc}
                </p>
              </div>

              {/* Feature 3 */}
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center text-emerald-600 mb-6">
                  <Save className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{dict.features.backup.title}</h3>
                <p className="text-slate-600 leading-relaxed">
                  {dict.features.backup.desc}
                </p>
              </div>

              {/* Feature 4 */}
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-sky-100 rounded-xl flex items-center justify-center text-sky-600 mb-6">
                  <Cloud className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{dict.features.sync.title}</h3>
                <p className="text-slate-600 leading-relaxed">
                  {dict.features.sync.desc}
                </p>
              </div>

              {/* Feature 5 */}
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center text-orange-600 mb-6">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{dict.features.easy.title}</h3>
                <p className="text-slate-600 leading-relaxed">
                  {dict.features.easy.desc}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Tech Stack / About */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl font-bold text-slate-900 mb-8">{dict.tech.title}</h2>
            <div className="flex flex-wrap justify-center gap-8 items-center opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
              {/* Flutter Logo Placeholder */}
              <div className="flex items-center gap-2">
                 {/* 
                    TODO: Add Flutter Logo 
                 */}
                 <span className="text-xl font-semibold text-slate-700">{dict.tech.flutter}</span>
              </div>
              <div className="h-8 w-px bg-slate-200"></div>
              <span className="text-slate-600">{dict.tech.offline_arch}</span>
              <div className="h-8 w-px bg-slate-200"></div>
              <span className="text-slate-600">{dict.tech.local_db}</span>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-blue-600">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              {dict.cta_bottom.title}
            </h2>
            <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
              {dict.cta_bottom.desc}
            </p>
            
            <div className="flex items-center justify-center gap-3 mb-10 text-blue-200 text-sm font-medium">
              <span className="bg-blue-700/50 px-3 py-1 rounded-full border border-blue-500/30">Android</span>
              <span className="bg-blue-700/50 px-3 py-1 rounded-full border border-blue-500/30">iOS</span>
            </div>

            <a
              href="mailto:pub.billbull21@gmail.com?subject=Request Access to OPOS"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-bold text-blue-600 bg-white rounded-full hover:bg-blue-50 transition-all shadow-xl"
            >
              <Mail className="w-5 h-5" />
              {dict.cta_bottom.button}
            </a>
            <p className="mt-6 text-sm text-blue-200">
              {dict.cta_bottom.note}
            </p>
          </div>
        </section>
      </main>

      <footer className="bg-slate-900 text-slate-400 py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-slate-700 rounded flex items-center justify-center text-white font-bold text-xs">
              O
            </div>
            <span className="font-bold text-white tracking-tight">OPOS</span>
          </div>
          <div className="text-sm">
            &copy; {new Date().getFullYear()} OPOS. {dict.footer.rights}
          </div>
        </div>
      </footer>
    </div>
  );
}
