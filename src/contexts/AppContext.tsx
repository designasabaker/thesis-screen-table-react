import {createContext,useContext, useState} from "react";

interface AppContextType {
    bodyBackground: {
        r: number;
        g: number;
        b: number;
    };
    setBodyBackground: React.Dispatch<React.SetStateAction<{ r: number, g: number, b: number }>>;
}
export const AppContext = createContext<AppContextType | undefined>(undefined);
export const AppProvider = ({children}: any) => {
    const [bodyBackground, setBodyBackground] = useState({
        r: 36,
        g: 36,
        b: 36,
    });
    return (<AppContext.Provider value={{bodyBackground, setBodyBackground}}>
        {children}
    </AppContext.Provider>)
}

export const useAppContext = () => {
    const context = useContext(AppContext);
    if (context === undefined) {
        throw new Error('useAppContext must be used within an AppProvider');
    }
    return context;
}