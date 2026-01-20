"use client";

import { useEffect } from "react";

interface LocaleHtmlAttributesProps {
  locale: string;
}

export function LocaleHtmlAttributes({ locale }: LocaleHtmlAttributesProps) {
  useEffect(() => {
    const dir = locale === "he" ? "rtl" : "ltr";
    document.documentElement.setAttribute("lang", locale);
    document.documentElement.setAttribute("dir", dir);
    document.documentElement.classList.add(dir);
  }, [locale]);

  return null;
}
