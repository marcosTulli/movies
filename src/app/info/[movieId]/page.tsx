'use client';
import React from 'react';


export interface IMovieDetailsParams {
    params: { movieId: string; };
}

const MovieDetails: React.FC<IMovieDetailsParams> = ({ params }) => {
    const { movieId } = params;
    return (
        <div>
            <h1>Movie Details for ID:{movieId} </h1>
        </div>
    );
};

export default MovieDetails;