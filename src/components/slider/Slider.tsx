import * as React from 'react';
import Card from '../card/Card';
import { ISearchResult } from '@/models/models';
import { Container } from '@mui/material';
import { ArrowBack, ArrowForward } from '@mui/icons-material';
import { Button } from '@mui/material';
import Link from 'next/link';
import { useAppDispatch } from '@/store/store';
import { setPage } from '@/store/features/';
import { MOVIE_CATEGORIES, IPage } from '@/models/models';
import { useAppSelector } from '@/store/store';

export interface ISliderProps {
    data: ISearchResult;
    category: MOVIE_CATEGORIES;
}

const convertToCamelCase = (enumValue: string): keyof IPage => {
    const camelCaseValue = enumValue.replace('_', " ").replace(/\w+/g, (match, index) => {
        if (index === 0) {
            return match.toLowerCase();
        } else {
            return match.charAt(0).toUpperCase() + match.slice(1).toLowerCase();
        }
    }).replace(' ', '');
    return (camelCaseValue + 'Page') as keyof IPage;
};

// I need to organize the code, but it's working. 
const Slider: React.FC<ISliderProps> = ({ data, category }) => {
    const results = data?.results;
    const { nowPlayingPage, topRatedPage, upcomingPage, popularPage } = useAppSelector(state => state.page);
    const page: IPage = { nowPlayingPage, topRatedPage, upcomingPage, popularPage };
    const key: keyof IPage = convertToCamelCase(category) as keyof IPage;
    const pageNumber = page[key] as number;
    const totalEntries = data?.results.length;
    const slideSize = 5;
    const [currentSlide, setCurrentSlide] = React.useState<number>(0);
    const disableNext = pageNumber > data?.total_pages;
    const disableBack = pageNumber <= 1 && currentSlide === 0;
    const currentResults = results?.slice(currentSlide * slideSize, (currentSlide + 1) * slideSize);
    const dispatch = useAppDispatch();



    const handleNextPage = (pageNumber: number) => {
        dispatch(setPage({ [key]: pageNumber, category }));
        setCurrentSlide(0);
    };

    const handlePreviousPage = (pageNumber: number) => {
        dispatch(setPage({ [key]: pageNumber, category }));
        setCurrentSlide(Math.floor(totalEntries / slideSize) - 1);
    };

    const handleNext = () => {
        dispatch(setPage({ [key]: pageNumber, category }));
        const nextPage = pageNumber + 1;
        if ((currentSlide + 1) * slideSize === totalEntries) {
            handleNextPage(nextPage);
        }


        if ((currentSlide + 1) * slideSize < totalEntries) {
            setCurrentSlide(currentSlide + 1);
        }
    };


    const handleBack = () => {
        if (currentSlide > 0) {
            setCurrentSlide(currentSlide - 1);
        } else if (currentSlide === 0 && pageNumber > 1) {
            const previousPage = pageNumber - 1;
            handlePreviousPage(previousPage);
        }
    };


    return (
        <Container sx={{ display: 'flex', margin: '0', gap: '2rem', alignItems: 'center' }} >
            <Button title={'back'} onClick={handleBack} style={{ padding: '1rem' }} disabled={disableBack} >
                <ArrowBack />
            </Button>
            <div style={{ display: 'flex', gap: '1rem' }}>
                {
                    currentResults?.map((movie) => (
                        <Link
                            key={movie.id}
                            href={`/movie/${movie.id}`}
                        >
                            <Card
                                posterPath={movie.poster_path}
                            />
                        </Link>
                    ))
                }
            </div>
            <Button title={'next'} onClick={handleNext} style={{ padding: '1rem' }} disabled={disableNext} >
                <ArrowForward />
            </Button>
        </Container>
    );
};

export default Slider;
