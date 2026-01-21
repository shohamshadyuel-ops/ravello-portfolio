"use client";

import { usePathname, useRouter } from "next/navigation";

export default function LanguageSwitcher({ locale }: { locale: "en" | "he" }) {
  const router = useRouter();
  const pathname = usePathname();

  const switchTo = (nextLocale: "en" | "he") => {
    const segments = pathname.split("/").filter(Boolean);
    if (segments.length === 0) {
      router.push(`/${nextLocale}`);
      return;
    }
    segments[0] = nextLocale;
    router.push("/" + segments.join("/"));
  };

  return (
    <div className="flex items-center gap-2">
      <button
        type="button"
        onClick={() => switchTo("en")}
        className={`text-sm font-medium transition-opacity ${
          locale === "en" 
            ? "opacity-100 text-purple-400" 
            : "opacity-60 hover:opacity-100 text-zinc-400 hover:text-white"
        }`}
      >
        EN
      </button>
      <span className="opacity-50 text-zinc-500">|</span>
      <button
        type="button"
        onClick={() => switchTo("he")}
        className={`text-sm font-medium transition-opacity ${
          locale === "he" 
            ? "opacity-100 text-purple-400" 
            : "opacity-60 hover:opacity-100 text-zinc-400 hover:text-white"
        }`}
      >
        עברית
      </button>
    </div>
  );
}
