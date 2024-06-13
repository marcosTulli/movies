'use client';
import React from 'react';
import Landing from '../landing/Landing';
import SearchResult from '@/app/search/page';
import { useAppSelector } from '@/store/store';


const Body = () => {
    const query = useAppSelector(state => state.query?.query);
    const displayLanding = !query;
    const displaySearchResults = typeof query === 'string' && query.trim().length > 0;

    return (
        <React.Fragment>
            {displayLanding && <Landing />}
            {displaySearchResults && <SearchResult />}
        </React.Fragment>
    );
};

export default Body;