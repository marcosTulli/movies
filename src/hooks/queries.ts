import { useQuery, QueryClientProvider } from "@tanstack/react-query";
import DataProviderInstance from "@/services/data-provider";
import { ISearchParams } from "@/models/models";

export const useTopRatedMovies = (params: ISearchParams) =>
    useQuery({
        queryKey: ['top-rated', params],
        queryFn: () => DataProviderInstance.getTopRated(params)
    });