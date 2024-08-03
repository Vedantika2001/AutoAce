import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import {initReactI18next} from "react-i18next";

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
    debug:true,
    lng:"en",
    resources:{
        en: {
            translation:{
                Email:"Email",
                Password:"Password",
                Name:"Name",
                Contact:"Contact",
                Home:"Home",
                Services:"Services",
                AboutUs:"About Us",
                ContactUs:"Contact Us",
                Login:"Login",
                Register:"Register Now",
                Center:"Center Name",
                Location:"Center location"

            }
        },
        hi:{
            translation:{
                Email:"ईमेल",
                Password:"पासवर्ड",
                Name:"नाम",
                Contact:"संपर्क",
                Home:"होम",
                Services:"सेवाएँ",
                AboutUs:"हमारे बारे में",
                ContactUs:"संपर्क करें",
                Login:"लॉग इन करें",
                Register:"रजिस्टर",
                Center:"केंद्र",
                Location:"केंद्र स्थान"
            }

        }
    }
})
