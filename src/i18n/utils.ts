import { content, defaultLang, type Lang } from './ui';

export function getLangFromUrl(url: URL): Lang {
  const [, lang] = url.pathname.split('/');
  if (lang in content) return lang as Lang;
  return defaultLang;
}

export function useContent(lang: Lang) {
  return content[lang];
}

// El idioma por defecto vive en la raíz; el resto bajo /<lang>/
export function localizedPath(lang: Lang) {
  return lang === defaultLang ? '/' : `/${lang}/`;
}
