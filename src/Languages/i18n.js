import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import en from './locales/en.json';
import tr from './locales/tr.json';
import ru from './locales/ru.json';

i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    fallbackLng: "en", 
    resources: {
      en: {
        translation: en
      },
      tr: {
        translation: tr
      },
      ru: {
        translation: ru
      }
    },
    interpolation: {
      escapeValue: false
    }
  });

export default i18next;
