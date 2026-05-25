import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useMemo,
} from "react";

import en from "./en";
import mr from "./mr";

const LanguageContext = createContext();

const translations = {
  en,
  mr,
};

export const LanguageProvider = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] =
    useState("mr");

  // Load saved language
  useEffect(() => {
    const savedLanguage =
      localStorage.getItem("language");

    if (
      savedLanguage &&
      ["en", "mr"].includes(savedLanguage)
    ) {
      setCurrentLanguage(savedLanguage);
    }
  }, []);

  // Update body class
  useEffect(() => {
    document.body.classList.remove(
      "lang-en",
      "lang-mr"
    );

    document.body.classList.add(
      `lang-${currentLanguage}`
    );
  }, [currentLanguage]);

  // Change language
  const selectLanguage = (lang) => {
    if (!["en", "mr"].includes(lang)) return;

    setCurrentLanguage(lang);
    localStorage.setItem("language", lang);
  };

  // Translation function
  // - Supports dot-path lookup for nested translation objects (e.g. t("admin.title"))
  // - Preserves existing flat-key behavior (e.g. t("nav.home"))
  const t = (key) => {
    if (typeof key !== "string") return key;

    const lookup = (lang) => {
      const dict = translations[lang];
      if (!dict) return undefined;

      // Direct flat-key lookup first (keeps backward compatibility)
      if (Object.prototype.hasOwnProperty.call(dict, key)) {
        return dict[key];
      }

      // Dot-path lookup (supports nested objects)
      const parts = key.split(".");
      let cur = dict;
      for (const part of parts) {
        if (cur == null || typeof cur !== "object") return undefined;
        if (!Object.prototype.hasOwnProperty.call(cur, part)) return undefined;
        cur = cur[part];
      }
      return cur;
    };

    return lookup(currentLanguage) ?? lookup("en") ?? key;
  };

  const value = useMemo(
    () => ({
      currentLanguage,
      selectLanguage,
      t,
    }),
    [currentLanguage]
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useTranslator = () => {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error(
      "useTranslator must be used within LanguageProvider"
    );
  }

  return context;
};