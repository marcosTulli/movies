'use client';
import React from 'react';
import { useMovie } from '@/hooks/queries';
import { LANGUAGE } from '@/models/models';


export interface IMovieDetailsParams {
    params: { movieId: string; };
}

const MovieDetails: React.FC<IMovieDetailsParams> = ({ params }) => {
    const { movieId } = params;
    const { data } = useMovie({ language: LANGUAGE.EN, movie_id: parseInt(movieId) });
    console.log(data);
    return (
        <div>
            <h1>Movie Details for ID:{movieId} </h1>
        </div>
    );
};

export default MovieDetails;