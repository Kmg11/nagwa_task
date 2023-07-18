import React from "react";

interface AppContextType {
	openActivity: () => void;
	exitActivity: () => void;
}

interface AppProviderProps {
	children: React.ReactNode;
	value: AppContextType;
}

const AppContext = React.createContext({} as AppContextType);

export const AppProvider = ({ children, value }: AppProviderProps) => {
	return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAppContext = () => {
	return React.useContext(AppContext);
};
