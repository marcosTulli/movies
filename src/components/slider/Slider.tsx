import * as React from 'react';
import Card from '../card/Card';
import { ISearchResult } from '@/models/models';
import { Container } from '@mui/material';
import { ArrowBack, ArrowForward } from '@mui/icons-material';
import { Button } from '@mui/material';
import Link from 'next/link';

export interface ISliderProps {
    data: ISearchResult;
}

const Slider: React.FC<ISliderProps> = ({ data }) => {
    const results = data?.results;
    const totalEntries = data?.results.length;
    const slideSize = 5;
    const [currentPage, setCurrentPage] = React.useState<number>(0);
    const disableNext = (currentPage + 1) * slideSize >= totalEntries;
    const disableBack = currentPage === 0;
    const currentResults = results?.slice(currentPage * slideSize, (currentPage + 1) * slideSize);

    React.useEffect(() => {
        if (data) {
            setCurrentPage(0);
        }
    }, [data]);

    const handleNext = () => {
        if ((currentPage + 1) * slideSize < totalEntries) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handleBack = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1);
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
