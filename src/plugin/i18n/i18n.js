
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import EN from './locales/en/en.json';
import TC from './locales/tc/tc.json';
import SC from './locales/sc/sc.json';

const resources = {
    en: {
        translation: EN
    },
    sc: {
        translation: SC
    },
    tc: {
        translation: TC
    }
};

i18n.use(initReactI18next).init({
resources,
lng: 'en',
fallbackLng: 'en',
interpolation: { escapeValue: false },
});

export default i18n;