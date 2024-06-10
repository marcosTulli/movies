'use client';
import { useMoviesByCategory } from '@/hooks/queries';
import { ISearchParams, LANGUAGE, MOVIE_CATEGORIES } from '@/models/models';

export const useMovies = () => {
    const params: ISearchParams = {
        language: LANGUAGE.EN,
        page: 1
    };

    const { data: nowPlaying } = useMoviesByCategory(MOVIE_CATEGORIES.NOW_PLAYING, params);
    const { data: topRated } = useMoviesByCategory(MOVIE_CATEGORIES.TOP_RATED, params);
    const { data: upcomming } = useMoviesByCategory(MOVIE_CATEGORIES.UPCOMMING, params);
    const { data: popular } = useMoviesByCategory(MOVIE_CATEGORIES.POPULAR, params);

    const movies = [
        {
            data: nowPlaying,
            category: MOVIE_CATEGORIES.NOW_PLAYING,
            displayName: 'Now Playing'
        },
        {
            data: topRated,
            category: MOVIE_CATEGORIES.TOP_RATED,
            displayName: 'Top Rated'
        },
        {
            data: upcomming,
            category: MOVIE_CATEGORIES.UPCOMMING,
            displayName: 'Upcomming'
        },
        {
            data: popular,
            category: MOVIE_CATEGORIES.POPULAR,
            displayName: 'Popular'
        },
    ];
    return movies;
};