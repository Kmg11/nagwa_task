import { useMutation } from "@tanstack/react-query";
import { ApiErrorResponseType } from "@types";
import axios, { AxiosResponse } from "axios";

interface GetRankRequestBodyType {
	score: number;
}

interface GetRankResponseType {
	rank: number;
}

export const useGetRankMutation = () => {
	return useMutation<
		AxiosResponse<GetRankResponseType, GetRankRequestBodyType>,
		ApiErrorResponseType,
		{ score: number }
	>({
		mutationFn: ({ score }) => {
			return axios.post<
				GetRankResponseType,
				AxiosResponse<GetRankResponseType, GetRankRequestBodyType>,
				GetRankRequestBodyType
			>(process.env.REACT_APP_API_URL + "/rank", { score });
		},
	});
};
