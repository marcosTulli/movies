'use client';
import React from 'react';
import styles from './Home.module.scss';
import Navbar from '../Navbar/Navbar';
import { useTopRatedMovies } from '@/hooks/queries';
import { ISearchParams, LANGUAGE } from '@/models/models';

const HomePage = () => {
    const params: ISearchParams = {
        language: LANGUAGE.EN,
        page: 1

    };

    const { data } = useTopRatedMovies(params);
    console.log(data);
    return (
        <React.Fragment>
            <Navbar />
            <div>
                <h2>Top-Rated</h2>
                {data?.results.map(i => <div key={i.id}>{i.title}</div>)}
            </div>
        </React.Fragment>
    );
};

export default HomePage;