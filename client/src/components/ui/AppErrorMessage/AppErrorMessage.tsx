interface AppErrorMessageProps {
	children: string;
}

export const AppErrorMessage = ({ children }: AppErrorMessageProps) => {
	return <div className="text-red-500 text-sm font-semibold">{children}</div>;
};
