import { useQuery } from "@tanstack/react-query";
import DataProviderInstance from "@/services/data-provider";
import { IGetMovieParams, IGetPosterParams, ISearchMoviesParams, ISearchParams, MOVIE_CATEGORIES } from "@/models/models";

export const useMoviesByCategory = (category: MOVIE_CATEGORIES, params: ISearchParams) =>
    useQuery({
        queryKey: ['top-rated', params, category],
        queryFn: () => DataProviderInstance.getMoviesByCategory(category, params)
    });


export const usePoster = ({ width, id, enable }: IGetPosterParams) => {
    return useQuery<string | undefined, Error>({
        queryKey: ['poster', id],
        queryFn: async () => {
            const blob: any = await DataProviderInstance.getPoster({ width, id });
            const imageUrl = URL.createObjectURL(blob);
            return imageUrl;
        },
        enabled: enable,
    });
};

export const useMovie = (params: IGetMovieParams) =>
    useQuery({
        queryKey: ['movie', params],
        queryFn: () => DataProviderInstance.getMovie(params)
    });

export const useSearchMovie = (params: ISearchMoviesParams) =>
    useQuery({
        queryKey: ['search-results', params],
        queryFn: () => DataProviderInstance.searchMovies(params)
    });