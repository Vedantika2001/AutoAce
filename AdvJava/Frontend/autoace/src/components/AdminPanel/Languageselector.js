import { changeLanguage } from "i18next";
import React from "react";
import { useTranslation } from "react-i18next";
import i18next from "i18next";

const language = [
    {code:"en",lang:"English"},
    {code:"hi",lang:"Hindi"}
];


export const LanguageSelector=()=>{
    const {i18n} = useTranslation();

    const changeLanguage=(lng)=>{
        i18n.changeLanguage(lng);

    };
    
    

    
    return(
        <div className="btn-container">
        {
            language.map((lng) => {
                return (<button className={lng.code === i18next.language?"selected":""} 
                key={lng.code} 
                onClick={()=>changeLanguage(lng.code)}
                >
                {lng.lang}
                </button>);
            })
        }
    </div>

    ); 
};

//export default LanguageSelector;