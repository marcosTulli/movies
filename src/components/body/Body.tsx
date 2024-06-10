'use client';
import React from 'react';
import styles from './Body.module.scss';
import { useMovies } from '@/hooks/useMovies';


const Body = () => {
    const movies = useMovies();
    console.log(movies);
    return (
        <div>Body</div>
    );
};

export default Body;