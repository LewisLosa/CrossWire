import { locales } from "virtual:wuchale/locales";
import { browser } from "$app/environment";
import { loadLocale } from "wuchale/load-utils";
import "../locales/loader.svelte.js";
import { language } from "./state.js";
import { get } from "svelte/store";
export const ssr = false;

/** @type {import('./$types').LayoutLoad} */
export const load = async ({ url }) => {
  const locale = get(language) || "en";
  console.log("Current locale:", locale);
  console.log("Available locales:", locales);
  if (!locales.includes(locale)) {
    return;
  }
  if (browser) {
    await loadLocale(locale);
  }
};
