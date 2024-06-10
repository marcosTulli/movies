import { useQuery } from "@tanstack/react-query";
import DataProviderInstance from "@/services/data-provider";
import { ISearchParams, MOVIE_CATEGORIES } from "@/models/models";

export const useMoviesByCategory = (category: MOVIE_CATEGORIES, params: ISearchParams) =>
    useQuery({
        queryKey: ['top-rated', params],
        queryFn: () => DataProviderInstance.getMoviesByCategory(category, params)
    });