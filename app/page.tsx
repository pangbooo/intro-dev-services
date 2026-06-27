"use client";

import { useI18n } from "./i18n/context";
import LanguageSwitcher from "./components/LanguageSwitcher";

const serviceIcons = [
  (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
    </svg>
  ),
  (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125v-3.75" />
    </svg>
  ),
  (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 0 0-2.455 2.456Z" />
    </svg>
  ),
  (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a4.5 4.5 0 0 1 6.364 0l.638.638a4.5 4.5 0 0 0 6.364 0l2.475-2.475m0 0-2.475-2.475m2.475 2.475L21 11.25" />
    </svg>
  ),
];

const serviceKeys = ["web", "api", "consult", "ui"];

export default function Home() {
  const { ts } = useI18n();

  return (
    <>
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
          <span className="font-semibold text-lg tracking-tight">DevServices</span>
          <div className="flex items-center gap-6">
            <div className="hidden sm:flex items-center gap-8 text-sm text-gray-500">
              <a href="#services" className="hover:text-gray-900 transition-colors">{ts("nav.services")}</a>
              <a href="#about" className="hover:text-gray-900 transition-colors">{ts("nav.about")}</a>
              <a href="#contact" className="hover:text-gray-900 transition-colors">{ts("nav.contact")}</a>
            </div>
            <LanguageSwitcher />
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="min-h-screen flex items-center justify-center px-6 pt-14">
        <div className="max-w-2xl text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
            {ts("hero.title1")}
            <br />
            {ts("hero.title2")}
            <span className="text-accent">{ts("hero.title3")}</span>
          </h1>
          <p className="mt-6 text-lg text-gray-500 leading-relaxed max-w-xl mx-auto">
            {ts("hero.subtitle")}
          </p>
          <div className="mt-10 flex items-center justify-center gap-4">
            <a
              href="#contact"
              className="inline-flex items-center px-6 py-3 rounded-full bg-gray-900 text-white text-sm font-medium hover:bg-gray-800 transition-colors"
            >
              {ts("hero.cta1")}
            </a>
            <a
              href="#services"
              className="inline-flex items-center px-6 py-3 rounded-full border border-gray-200 text-sm font-medium text-gray-600 hover:border-gray-300 hover:text-gray-900 transition-colors"
            >
              {ts("hero.cta2")}
            </a>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-24 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm font-medium text-accent tracking-widest uppercase">{ts("services.label")}</p>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight">{ts("services.heading")}</h2>
            <p className="mt-4 text-gray-500 max-w-lg mx-auto">{ts("services.subtitle")}</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {serviceKeys.map((key, i) => (
              <div
                key={key}
                className="group bg-white rounded-2xl p-8 border border-gray-100 hover:border-gray-200 hover:shadow-sm transition-all"
              >
                <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-gray-100 text-gray-600 group-hover:bg-accent group-hover:text-white transition-colors">
                  {serviceIcons[i]}
                </div>
                <h3 className="mt-5 text-lg font-semibold">{ts(`services.${key}.title`)}</h3>
                <p className="mt-2 text-gray-500 leading-relaxed text-sm">{ts(`services.${key}.desc`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-sm font-medium text-accent tracking-widest uppercase">{ts("about.label")}</p>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight">{ts("about.heading")}</h2>
          <p className="mt-8 text-gray-500 leading-relaxed text-lg">{ts("about.desc")}</p>
          <div className="mt-12 grid grid-cols-3 gap-8 max-w-md mx-auto">
            {[
              { value: "5+", label: ts("about.stat1.label") },
              { value: "30+", label: ts("about.stat2.label") },
              { value: "20+", label: ts("about.stat3.label") },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl font-bold text-gray-900">{stat.value}</div>
                <div className="mt-1 text-sm text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24 px-6 bg-gray-900 text-white">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-sm font-medium text-accent tracking-widest uppercase">{ts("contact.label")}</p>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight">{ts("contact.heading")}</h2>
          <p className="mt-4 text-gray-400 max-w-lg mx-auto">{ts("contact.subtitle")}</p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="mailto:hello@example.com"
              className="inline-flex items-center px-8 py-3 rounded-full bg-white text-gray-900 text-sm font-medium hover:bg-gray-100 transition-colors"
            >
              {ts("contact.btn")}
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-gray-800 bg-gray-900">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-500">
          <span>DevServices</span>
          <span>&copy; {new Date().getFullYear()} {ts("footer.rights")}</span>
        </div>
      </footer>
    </>
  );
}
