import { AppButton } from "components";

interface WelcomeProps {
	setStartActivity: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Welcome = ({ setStartActivity }: WelcomeProps) => {
	return (
		<main className="bg-gray-900 py-6 px-6 rounded text-center">
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

			<AppButton type="button" onClick={() => setStartActivity(true)}>
				Start Activity
			</AppButton>
		</main>
	);
};
