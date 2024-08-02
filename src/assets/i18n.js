import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    translation: {
      "language":{
        "change": "Change language",
        "it": "Italian",
        "en": "English"
      },
      "sideMenu": {
        "diy": "DIY projects",
        "library": "Library",
        "calendar": "Calendar",
        "finance": "Finance"
      },
      "title": {
        "home": "Home",
        "diy": "DIY Projects",
        "calendar": "Calendar",
        "library": "Library",
        "todo": "ToDo List",
        "finance": "Finance"
      },
      "finance": {
        "budget": "Budget",
        "spent": "Spent",
        "category": "Category",
        "balance": "Blance",
        "left": "Left to spend",
        "budget_category": "Budget by Category",
        "budget_spent": "Budget vs Spent",
        "budget_spent_category": "Budget vs Spent by Category",
        "categories": {
          "food": "Food",
          "bills": "Bills",
          "cleaning": "Cleaning",
          "entertainment": "Entertainment",
          "rent": "Rent",
          "loans": "Loans",
          "subscriptions": "Subscriptions"
        }
      },
      "library": {
        "columns": {
          "id": "ID",
          "title": "Title",
          "author": "Author",
          "comic": "Comic",
          "volumes": "Volumes",
          "pages": "Pages",
          "year": "Year",
          "desc": "Description",
          "read": "Read",
          "packed": "Packed",
          "actions": "Actions"
        }
      }
      
    }
  },
  it: {
    translation: {
      "language":{
        "change": "Cambia lingua",
        "it": "Italiano",
        "en": "Inglese"
      },
      "sideMenu": {
        "diy": "Progetti fai da te",
        "library": "Biblioteca",
        "calendar": "Calendario",
        "finance": "Finanze"
      },
      "title": {
        "home": "Home",
        "diy": "Progetti fai da te",
        "calendar": "Calendario",
        "library": "Biblioteca",
        "todo": "ToDo List",
        "finance": "Finanze"
      },
      "finance": {
        "budget": "Budget",
        "spent": "Spese",
        "category": "Categoria",
        "balance": "Bilancio",
        "left": "Disponibili",
        "budget_category": "Budget per Categoria",
        "budget_spent": "Budget vs Spese",
        "budget_spent_category": "Budget vs Spese per Categoria",
        "categories": {
          "food": "Cibo",
          "bills": "Bollette",
          "cleaning": "Pulizia",
          "entertainment": "Svago",
          "rent": "Affitto",
          "loans": "Prestiti",
          "subscriptions": "Abbonamenti"
        }
      },
      "library": {
        "columns": {
          "id": "ID",
          "title": "Titolo",
          "author": "Autore",
          "comic": "Fumetto",
          "volumes": "Volumi",
          "pages": "Pagine",
          "year": "Anno",
          "desc": "Descrizione",
          "read": "Letto",
          "packed": "Inscatolato",
          "actions": "Azioni"
        }
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