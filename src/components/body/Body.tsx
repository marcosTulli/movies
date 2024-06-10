'use client';
import React from 'react';
import styles from './Body.module.scss';
import { useMovies } from '@/hooks/useMovies';
import { usePoster } from '@/hooks/queries';
import Image from 'next/image';
import Slider from '../slider/Slider';
import { IMovie } from '@/models/models';


const Body = () => {
    const movieCategories = useMovies();

    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            {movieCategories.map((category) => {
                return (
                    <div key={category.category}>
                        <p>{category.displayName}</p>
                        <Slider movies={category.data?.results as IMovie[]} />
                    </div>
                );
            })}
        </div>
    );
};

export default Body;