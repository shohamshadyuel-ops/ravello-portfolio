"use client";

import { useParams } from "next/navigation";
import { type Locale, t as tFn, tArray as tArrayFn } from "@/lib/i18n";

export function useLocale() {
  const params = useParams();
  const locale = (params?.locale as Locale) || "en";
  
  return {
    locale,
    t: (key: string, params?: Record<string, string | number>) => tFn(locale, key, params),
    tArray: (key: string) => tArrayFn(locale, key),
  };
}