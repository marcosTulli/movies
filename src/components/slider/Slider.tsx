import React from 'react';
import Card from '../card/Card';
import { IMovie } from '@/models/models';
import { Container } from '@mui/material';

export interface ISliderProps {
    movies: IMovie[];
}
const Slider: React.FC<ISliderProps> = ({ movies }) => {
    return (
        <Container sx={{ display: 'flex' }}>
            {
                movies?.map((movie) => {
                    return (
                        <Card key={movie.id} posterId={movie.poster_path} />
                    );
                })
            }
        </Container>
    );
};

export default Slider;