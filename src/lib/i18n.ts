import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enAboutMe from "../../assets/locale/en/aboutme.js";
import enCommon from "../../assets/locale/en/common.json";

void i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        ...enCommon,
        aboutme: enAboutMe,
      },
    },
  },
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
