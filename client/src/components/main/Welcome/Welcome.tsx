import { AppButton } from "components";
import { useAppContext } from "context";

export const Welcome = () => {
	const { setCurrentScreen } = useAppContext();

	return (
		<main>
			<h1 className="text-2xl font-bold inline-block py-2 px-3 rounded-tl-2xl rounded-br-2xl mb-4">
				Part of Speech Activity
			</h1>

			<p className="text-md mb-6 max-w-2xl m-auto">
				In this activity, you&apos;ll learn how to identify the parts of speech
				in English sentences. Your task is to choose the correct part of speech
				for the underlined word from four options: adverb, verb, noun, or
				adjective. Knowing the parts of speech is crucial for improving your
				grammar and communication skills in English. Let&apos;s begin!
			</p>

			<AppButton type="button" onClick={() => setCurrentScreen("activity")}>
				Start Activity
			</AppButton>
		</main>
	);
};
