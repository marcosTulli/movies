import React from 'react';
import Card from '../card/Card';
import { IMovie } from '@/models/models';
import { Container } from '@mui/material';
import style from './Slider.module.scss';

export interface ISliderProps {
    movies: IMovie[];
}
const Slider: React.FC<ISliderProps> = ({ movies }) => {
    return (
        <Container sx={{ display: 'flex', margin: '0', gap: '2rem' }}>
            {
                movies?.slice(0, 8).map((movie) => {
                    return (
                        <Card key={movie.id} posterId={movie.poster_path} />
                    );
                })
            }
        </Container >
    );
};

export default Slider;