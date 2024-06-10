import { useQuery } from "@tanstack/react-query";
import DataProviderInstance from "@/services/data-provider";
import { IGetPosterParams, ISearchParams, MOVIE_CATEGORIES } from "@/models/models";

export const useMoviesByCategory = (category: MOVIE_CATEGORIES, params: ISearchParams) =>
    useQuery({
        queryKey: ['top-rated', params],
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
