import React, { createContext, useContext, useState } from "react";

const LanguageContext = createContext<{
    language: "en" | "vi";
    toggleLanguage: () => void;
}>({
    language: "en",
    toggleLanguage: () => {}
});

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [language, setLanguage] = useState<"en" | "vi">("en");

    const toggleLanguage = () => {
        setLanguage((prev) => (prev === "en" ? "vi" : "en"));
    };

    return (
        <LanguageContext.Provider value={{ language, toggleLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => useContext(LanguageContext);
