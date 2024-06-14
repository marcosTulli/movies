'use client';

import { useEffect, useState } from 'react';
import { useMoviesByCategory } from '@/hooks/queries';
import { ISearchParams, LANGUAGE, MOVIE_CATEGORIES } from '@/models/models';
import { useAppSelector } from '@/store/store';

export const useMovies = () => {
    const { page: selectedPage, category: selectedCategory } = useAppSelector(state => state.page);
    const [currentCategory, setCurrentCategory] = useState<MOVIE_CATEGORIES | undefined>(undefined);
    const [currentPage, setCurrentPage] = useState<number>(selectedPage);

    useEffect(() => {
        if (selectedCategory !== currentCategory) {
            setCurrentCategory(selectedCategory);
            setCurrentPage(selectedPage);
        } else {
            setCurrentPage(selectedPage);
        }
    }, [selectedCategory]);

    const params: ISearchParams = {
        language: LANGUAGE.EN,
        page: currentPage
    };

    const { data: nowPlaying } = useMoviesByCategory(MOVIE_CATEGORIES.NOW_PLAYING, params);
    const { data: topRated } = useMoviesByCategory(MOVIE_CATEGORIES.TOP_RATED, params);
    const { data: upcoming } = useMoviesByCategory(MOVIE_CATEGORIES.UPCOMING, params);
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
