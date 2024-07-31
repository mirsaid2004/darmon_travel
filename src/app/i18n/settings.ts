export const fallbackLng: supportedLangs = "uz";
export const languages = [fallbackLng, "ru", "en"];
export const defaultNS: string = "translation";
export const cookieName = "i18next";

export function getOptions(lng = fallbackLng, ns = defaultNS) {
  return {
    // debug: true,
    supportedLngs: languages,
    fallbackLng,
    lng,
    fallbackNS: defaultNS,
    defaultNS,
    ns,
  };
}
