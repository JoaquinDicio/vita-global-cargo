import es from "./es";
import en from "./en";

const translations = {
    es,
    en,
};

export function getTranslations(lang: string = "es") {
    return translations[lang as keyof typeof translations] || translations.es;
}