import React from 'react';
import Card from '../card/Card';
import { IMovie } from '@/models/models';
import { Container } from '@mui/material';
import style from './Slider.module.scss';
import Link from 'next/link';

export interface ISliderProps {
    movies: IMovie[];
}
const Slider: React.FC<ISliderProps> = ({ movies }) => {
    return (
        <Container sx={{ display: 'flex', margin: '0', gap: '2rem' }}>
            {
                movies?.slice(0, 8).map((movie) => {
                    return (
                        <Link
                            key={movie.id}
                            href={`/info/${movie.id}`}
                        >
                            <Card
                                posterPath={movie.poster_path}
                            />
                        </Link>
                    );
                })
            }
        </Container >
    );
};

export default Slider;