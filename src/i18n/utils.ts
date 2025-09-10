import { ui, defaultLang, showDefaultLang } from './ui';

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return lang as keyof typeof ui;
  return defaultLang;
}

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof typeof ui[typeof defaultLang]) {
    // Verifica si la clave existe en el idioma seleccionado
    if (ui[lang] && key in ui[lang]) {
      return ui[lang][key as keyof typeof ui[typeof lang]];
    } else {
      // Si no existe en el idioma seleccionado, devuelve la clave en el idioma predeterminado
      return ui[defaultLang][key];
    }
  };
}

export function useTranslatedPath(lang: keyof typeof ui) {
  return function translatePath(path: string, l: string = lang) {
    // Si el idioma es el predeterminado y no se debe mostrar, devolver solo el path
    return !showDefaultLang && l === defaultLang ? path : `/${l}${path}`;
  };
}
