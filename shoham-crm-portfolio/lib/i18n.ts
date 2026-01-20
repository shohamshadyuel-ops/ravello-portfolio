import enMessages from "@/messages/en.json";
import heMessages from "@/messages/he.json";

export const locales = ["en", "he"] as const;
export type Locale = (typeof locales)[number];

const messages = {
  en: enMessages,
  he: heMessages,
};

export function getMessages(locale: Locale) {
  return messages[locale];
}

export function t(locale: Locale, key: string, params?: Record<string, string | number>): string {
  const message = getMessages(locale);
  const keys = key.split(".");
  let value: any = message;

  // Try to get value from current locale
  for (const k of keys) {
    if (value && typeof value === "object" && k in value) {
      value = value[k];
    } else {
      // Fallback to English if key not found in current locale
      if (locale !== "en") {
        const enMessage = getMessages("en");
        let enValue: any = enMessage;
        for (const k of keys) {
          if (enValue && typeof enValue === "object" && k in enValue) {
            enValue = enValue[k];
          } else {
            return key; // Return key if not found in English either
          }
        }
        value = enValue;
      } else {
        return key; // Return key if not found in English
      }
      break;
    }
  }

  if (typeof value !== "string") {
    // If value is not a string, try English fallback
    if (locale !== "en") {
      const enMessage = getMessages("en");
      let enValue: any = enMessage;
      for (const k of keys) {
        if (enValue && typeof enValue === "object" && k in enValue) {
          enValue = enValue[k];
        } else {
          return key;
        }
      }
      if (typeof enValue === "string") {
        value = enValue;
      } else {
        return key;
      }
    } else {
      return key;
    }
  }

  // Replace params if provided
  if (params) {
    return value.replace(/\{\{(\w+)\}\}/g, (match: string, paramKey: string) => {
      return params[paramKey]?.toString() || match;
    });
  }

  return value;
}

export function tArray(locale: Locale, key: string): any[] {
  const message = getMessages(locale);
  const keys = key.split(".");
  let value: any = message;

  // Try to get value from current locale
  for (const k of keys) {
    if (value && typeof value === "object" && k in value) {
      value = value[k];
    } else {
      // Fallback to English if key not found in current locale
      if (locale !== "en") {
        const enMessage = getMessages("en");
        let enValue: any = enMessage;
        for (const k of keys) {
          if (enValue && typeof enValue === "object" && k in enValue) {
            enValue = enValue[k];
          } else {
            return []; // Return empty array if not found in English either
          }
        }
        value = enValue;
      } else {
        return []; // Return empty array if not found in English
      }
      break;
    }
  }

  return Array.isArray(value) ? value : [];
}