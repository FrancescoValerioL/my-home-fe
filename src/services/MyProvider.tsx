import { createContext, useContext, ReactNode, ComponentType, FC, useState } from "react";
import DIY from "../pages/DIY";
import Home from "../pages/Home";
import PagesEnum from "./PagesEnum";

// Definisci l'interfaccia per il valore del contesto
export interface MyContextPages {
	value: PagesEnum; // Può essere specifico con i tipi dei props se necessario
	setValue: (newValue: PagesEnum) => void;
}

// Crea il contesto con un valore di default (può essere undefined)
const MyContext = createContext<MyContextPages | undefined>(undefined);

// Crea il provider del contesto
export const MyProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
	const [value, setValue] = useState<PagesEnum>(PagesEnum.HOME);

	return <MyContext.Provider value={{ value, setValue }}>{children}</MyContext.Provider>;
};

// Custom hook per utilizzare il contesto
export const useMyContext = (): MyContextPages => {
	const context = useContext(MyContext);
	if (!context) {
		throw new Error("useMyContext must be used within a MyProvider");
	}
	return context;
};

// Esportazione fittizia per segnare il file come modulo
export {};
