'use client';
import { useMoviesByCategory } from '@/hooks/queries';
import { IPage, ISearchParams, LANGUAGE, MOVIE_CATEGORIES } from '@/models/models';
import { useAppSelector } from '@/store/store';

const createParams = (page: number, category: MOVIE_CATEGORIES): ISearchParams => ({
    language: LANGUAGE.EN,
    page,
    category
});

export const useMovies = () => {
    const { nowPlayingPage, topRatedPage, upcomingPage, popularPage } = useAppSelector(state => state.page as IPage);
    const nowPlayingParams = createParams(nowPlayingPage as number, MOVIE_CATEGORIES.NOW_PLAYING);
    const topRatedParams = createParams(topRatedPage as number, MOVIE_CATEGORIES.TOP_RATED);
    const upcomingParams = createParams(upcomingPage as number, MOVIE_CATEGORIES.UPCOMING);
    const popularParams = createParams(popularPage as number, MOVIE_CATEGORIES.POPULAR);

    const { data: nowPlaying } = useMoviesByCategory(MOVIE_CATEGORIES.NOW_PLAYING, nowPlayingParams);
    const { data: topRated } = useMoviesByCategory(MOVIE_CATEGORIES.TOP_RATED, topRatedParams);
    const { data: upcoming } = useMoviesByCategory(MOVIE_CATEGORIES.UPCOMING, upcomingParams);
    const { data: popular } = useMoviesByCategory(MOVIE_CATEGORIES.POPULAR, popularParams);

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
            data: upcoming,
            category: MOVIE_CATEGORIES.UPCOMING,
            displayName: 'Upcoming'
        },
        {
            data: popular,
            category: MOVIE_CATEGORIES.POPULAR,
            displayName: 'Popular'
        },
    ];
    return movies;
};
