

import  i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import en from "../public/local/en.json"
import uz from "../public/local/uz.json"
import ru from "../public/local/ru.json"
const laungage = localStorage.getItem('i18nextLng') || 'uz'

i18n
.use(Backend)
.use(initReactI18next)
.use(LanguageDetector)

.init ({
    fallbackLng:"en",
    debug:true,
    lng:laungage,
    resources :{
        en:{ translation: en },
        uz:{ translation: uz },
        ru:{ translation: ru }
    }
})
export default i18n;