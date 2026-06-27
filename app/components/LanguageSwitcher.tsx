"use client";

import { useState, useRef, useEffect } from "react";
import { useI18n } from "@/app/i18n/context";
import type { Lang } from "@/app/i18n/translations";

const options: { lang: Lang; label: string }[] = [
  { lang: "ja", label: "日本語" },
  { lang: "en", label: "English" },
  { lang: "zh", label: "中文" },
];

export default function LanguageSwitcher() {
  const { lang, setLang } = useI18n();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const current = options.find((o) => o.lang === lang)!;

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1 text-sm text-gray-500 hover:text-gray-900 transition-colors"
      >
        <span>{current.label}</span>
        <svg
          className={`w-3 h-3 transition-transform ${open ? "rotate-180" : ""}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
        </svg>
      </button>

      {open && (
        <div className="absolute right-0 top-full mt-2 bg-white rounded-xl border border-gray-100 shadow-lg py-1 min-w-[110px] z-50">
          {options.map((opt) => (
            <button
              key={opt.lang}
              onClick={() => {
                setLang(opt.lang);
                setOpen(false);
              }}
              className={`w-full flex items-center justify-between px-4 py-2 text-sm transition-colors hover:bg-gray-50 ${
                opt.lang === lang ? "text-gray-900 font-medium" : "text-gray-500"
              }`}
            >
              {opt.label}
              {opt.lang === lang && (
                <svg className="w-3.5 h-3.5 ml-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                </svg>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
