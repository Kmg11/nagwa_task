import { useQuery } from "@tanstack/react-query";
import { ApiErrorResponseType, WordType } from "@types";
import axios, { AxiosResponse } from "axios";

interface GetWordsResponseType {
	words: WordType[];
}

interface UseGetWordsQueryProps {
	onSuccess: (data: AxiosResponse<GetWordsResponseType>) => void;
}

export const useGetWordsQuery = ({ onSuccess }: UseGetWordsQueryProps) => {
	return useQuery<AxiosResponse<GetWordsResponseType>, ApiErrorResponseType>({
		queryKey: ["Words"],
		queryFn: () => {
			return axios.get<GetWordsResponseType>(
				process.env.REACT_APP_API_URL + "/words",
			);
		},
		onSuccess,
	});
};
