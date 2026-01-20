/**
 * Currency conversion utilities
 * Fixed conversion rate: ₪2,200 == $600
 * ILS_PER_USD = 3.6667
 */
export const ILS_PER_USD = 3.6667;

/**
 * Convert USD to ILS
 */
export function usdToIls(usd: number): number {
  return Math.round(usd * ILS_PER_USD);
}

/**
 * Convert ILS to USD
 * Rounds to nearest 10 for cleaner budget range values
 */
export function ilsToUsd(ils: number, roundToNearest10: boolean = false): number {
  const usd = ils / ILS_PER_USD;
  if (roundToNearest10) {
    return Math.round(usd / 10) * 10;
  }
  return Math.round(usd * 100) / 100;
}

/**
 * Format currency based on locale
 */
export function formatCurrency(amount: number, locale: "en" | "he"): string {
  if (locale === "he") {
    return `₪${amount.toLocaleString("he-IL")}`;
  } else {
    return `$${amount.toLocaleString("en-US")}`;
  }
}

/**
 * Format price estimate with "Starting from" prefix
 */
export function formatPriceEstimate(amount: number, locale: "en" | "he"): string {
  const formatted = formatCurrency(amount, locale);
  if (locale === "he") {
    return `החל מ- ${formatted}`;
  } else {
    return `Starting from ${formatted}`;
  }
}

/**
 * Format budget range label
 */
export function formatBudgetRange(
  min: number | null,
  max: number | null,
  locale: "en" | "he"
): string {
  if (locale === "he") {
    if (min === null) {
      return `מתחת ל־${formatCurrency(max!, "he")}`;
    } else if (max === null) {
      return `${formatCurrency(min, "he")}+`;
    } else {
      return `${formatCurrency(min, "he")} – ${formatCurrency(max, "he")}`;
    }
  } else {
    if (min === null) {
      return `Under ${formatCurrency(max!, "en")}`;
    } else if (max === null) {
      return `${formatCurrency(min, "en")}+`;
    } else {
      return `${formatCurrency(min, "en")} – ${formatCurrency(max, "en")}`;
    }
  }
}
