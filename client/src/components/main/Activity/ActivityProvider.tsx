import React from "react";
import { ActivityState } from "./useActivity/ActivityReducer.type";
import { PosType } from "@types";

interface ActivityContextType {
	activityState: ActivityState;
	nextQuestion: () => void;
	checkAnswer: () => void;
	selectAnswer: (answer: PosType) => void;
}

interface ActivityProviderProps {
	children: React.ReactNode;
	value: ActivityContextType;
}

const ActivityContext = React.createContext({} as ActivityContextType);

export const ActivityProvider = ({
	children,
	value,
}: ActivityProviderProps) => {
	return (
		<ActivityContext.Provider value={value}>
			{children}
		</ActivityContext.Provider>
	);
};

export const useActivityContext = () => {
	return React.useContext(ActivityContext);
};
