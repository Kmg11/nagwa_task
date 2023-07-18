import { AppButton } from "components/ui";
import { useAppContext } from "context";

export const ActivityFooter = () => {
	const { exitActivity } = useAppContext();

	return (
		<div className="mt-3 flex items-center gap-3 justify-center">
			<AppButton
				type="button"
				className="bg-red-500 hover:bg-red-600"
				onClick={exitActivity}
			>
				Exit
			</AppButton>

			<AppButton type="button" className="bg-green-500 hover:bg-green-600">
				Check
			</AppButton>

			<AppButton type="button">Next</AppButton>

			<AppButton type="button" className="bg-yellow-500 hover:bg-yellow-600">
				Submit
			</AppButton>
		</div>
	);
};
