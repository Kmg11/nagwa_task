import { AppButton, AppErrorMessage, AppLoading } from "components/ui";
import styles from "./score.module.css";
import { useAppContext } from "context";
import { useActivityContext } from "../ActivityProvider";
import { useGetRankMutation } from "api";
import { useEffect } from "react";

export const Score = () => {
	const { setCurrentScreen } = useAppContext();
	const {
		activityState: { questionsCount, correctAnswersCount },
	} = useActivityContext();

	const score = (correctAnswersCount / questionsCount) * 100;

	const {
		mutate: getRank,
		data,
		isLoading,
		isError,
		error,
	} = useGetRankMutation();

	useEffect(() => {
		getRank({ score });
	}, []);

	return (
		<section>
			{isLoading && <AppLoading />}

			{isError && <AppErrorMessage>{error.message}</AppErrorMessage>}

			{data && (
				<>
					<div className="flex items-center gap-0 justify-center">
						<div
							className={`${styles.scoreBox} rounded-tl-3xl`}
							title="Score is based on the number of questions you have answered correctly."
						>
							<h2 className={styles.scoreNumber}>{score}</h2>
							<h3 className={styles.scoreText}>Score</h3>
						</div>

						<div
							className={`${styles.scoreBox} rounded-br-3xl`}
							title="Rank is based on the number of points you have compared to other users."
						>
							<h2 className={styles.scoreNumber}>{data.data.rank}</h2>
							<h3 className={styles.scoreText}>Rank</h3>
						</div>
					</div>

					<ul className={`${styles.scoreList}`}>
						<li className={styles.scoreListItem}>
							<h3 className={styles.scoreListItemText}>Correct</h3>
							<h3 className={styles.scoreListItemText}>
								{correctAnswersCount}
							</h3>
						</li>

						<li className={styles.scoreListItem}>
							<h3 className={styles.scoreListItemText}>Incorrect</h3>
							<h3 className={styles.scoreListItemText}>
								{questionsCount - correctAnswersCount}
							</h3>
						</li>

						<li className={styles.scoreListItem}>
							<h3 className={styles.scoreListItemText}>Total</h3>
							<h3 className={styles.scoreListItemText}>{questionsCount}</h3>
						</li>
					</ul>

					<AppButton
						className="my-4 text-sm"
						onClick={() => setCurrentScreen("welcome")}
					>
						Try Again
					</AppButton>
				</>
			)}
		</section>
	);
};
