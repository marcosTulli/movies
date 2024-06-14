'use client';
import React from 'react';
import { useMovies } from '@/hooks/useMovies';
import Slider from '../slider/Slider';
import { ISearchResult } from '@/models/models';

const Landing = () => {
    const movieCategories = useMovies();

    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            {movieCategories?.map((category) => {
                const { displayName, data } = category;

                return (
                    <div key={category.category} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                        <p style={{ alignSelf: 'center', fontSize: '2rem' }}>{displayName}</p>
                        <Slider
                            data={data as ISearchResult}
                            category={category.category}
                        />
                    </div>
                );
            })}
        </div>
    );
};

export default Landing;