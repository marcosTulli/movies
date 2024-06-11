'use client';
import React from 'react';
import { useMovie, usePoster } from '@/hooks/queries';
import { LANGUAGE } from '@/models/models';
import Image from 'next/image';

export interface IMovieDetailsParams {
    params: { movieId: string; };
}

const MovieDetails: React.FC<IMovieDetailsParams> = ({ params }) => {
    const { movieId } = params;
    const { data } = useMovie({ language: LANGUAGE.EN, movie_id: parseInt(movieId) });
    const enablePoster = data !== undefined && data.poster_path.length > 0;
    const { data: poster } = usePoster({ width: '200', id: data?.poster_path, enable: enablePoster });

    return (
        <div>
            {data &&
                <div>
                    <h1>{data.title}</h1>
                    <h3 style={{ width: '55%' }}>{data.overview}</h3>
                    {poster && <Image alt={'poster'} src={poster} height={300} width={200} />}
                </div>


            }
        </div>
    );
};

export default MovieDetails;