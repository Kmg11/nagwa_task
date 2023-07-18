interface AppButtonProps
	extends React.DetailedHTMLProps<
		React.ButtonHTMLAttributes<HTMLButtonElement>,
		HTMLButtonElement
	> {
	children: React.ReactNode;
}

export const AppButton = ({ children, ...rest }: AppButtonProps) => {
	const { className, ...buttonAttrs } = rest;

	return (
		<button
			className={`
				bg-purple-700 text-white font-bold py-2 px-4 rounded mb-3 capitalize hover:bg-purple-600 transition-colors
				${className}
			`}
			{...buttonAttrs}
		>
			{children}
		</button>
	);
};
