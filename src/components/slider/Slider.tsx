import * as React from 'react';
import Card from '../card/Card';
import { ISearchResult } from '@/models/models';
import { Container } from '@mui/material';
import { ArrowBack, ArrowForward } from '@mui/icons-material';
import { Button } from '@mui/material';
import Link from 'next/link';
import { useAppDispatch } from '@/store/store';
import { setPage } from '@/store/features/';
import { MOVIE_CATEGORIES } from '@/models/models';
// import { useAppSelector } from '@/store/store';

export interface ISliderProps {
    data: ISearchResult;
    category: MOVIE_CATEGORIES;
}

const Slider: React.FC<ISliderProps> = ({ data, category }) => {
    const results = data?.results;
    const totalEntries = data?.results.length;
    const slideSize = 5;
    const [currentSlide, setCurrentSlide] = React.useState<number>(0);
    const [currentPage, setCurrentPage] = React.useState<number>(0);
    // const disableNext = (currentSlide + 1) * slideSize >= totalEntries;
    const disableNext = currentPage > data?.total_pages;
    const disableBack = currentSlide === 0;
    const currentResults = results?.slice(currentSlide * slideSize, (currentSlide + 1) * slideSize);
    const dispatch = useAppDispatch();
    const lastSlide = (currentSlide + 2);
    const getNextPage = (lastSlide * slideSize === totalEntries);
    // const { page } = useAppSelector(state => state.page);

    React.useEffect(() => {
        if (data) {
            const page = data.page;
            setCurrentPage(page);
        }
    }, [data]);


    const handleNextPage = (pageNumber: number) => {
        dispatch(setPage({ page: pageNumber, category }));
        setCurrentSlide(0);
    };


    const handleNext = () => {
        const nextPage = currentPage + 1;
        if (getNextPage) {
            handleNextPage(nextPage);
        }


        if ((currentSlide + 1) * slideSize < totalEntries) {
            setCurrentSlide(currentSlide + 1);
        }
    };

    const handleBack = () => {
        if (currentSlide > 0) {
            setCurrentSlide(currentSlide - 1);
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
