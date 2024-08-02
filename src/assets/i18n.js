import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: {
      "welcome": {
        "ciao": "Hello",
        "message": "Welcome to React"
      },
      "language":{
        "change": "Change language",
        "it": "Italian",
        "en": "English"
      },
      "sideMenu": {
        "diy": "DIY projects",
        "library": "Library",
        "calendar": "Calendar"
      },
      "title": {
        "home": "Home",
        "diy": "DIY Projects",
        "calendar": "Calendar",
        "library": "Library",
        "todo": "ToDo List"
      }
      
    }
  },
  it: {
    translation: {
      "welcome": {
        "ciao": "Ciao",
        "message": "Benvenuto in React"
      },
      "language":{
        "change": "Cambia lingua",
        "it": "Italiano",
        "en": "Inglese"
      },
      "sideMenu": {
        "diy": "Progetti fai da te",
        "library": "Biblioteca",
        "calendar": "Calendario"
      },
      "title": {
        "home": "Home",
        "diy": "Progetti fai da te",
        "calendar": "Calendario",
        "library": "Libreria",
        "todo": "ToDo List"
      }
      
    }
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "en", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

  export default i18n;