'use client';
import React from 'react';
import styles from './Body.module.scss';
import { useMovies } from '@/hooks/useMovies';
import { usePoster } from '@/hooks/queries';
import Image from 'next/image';


const Body = () => {
    const [posterId, setPosterId] = React.useState<string>('');
    const movies = useMovies();

    React.useEffect(() => {
        if (movies) {
            const catNum = 1;
            const category = movies[catNum].data;
            console.log(movies[catNum].displayName);
            if (category) {
                const id = category.results[8].poster_path;
                setPosterId(id);
            }
        }

    }, [movies]);

    const { data: poster } = usePoster({ width: '200', id: posterId, enable: posterId.length > 0 });

    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            Body
            {
                poster &&
                <Image alt='poster' src={poster} width={200} height={300} />
            }
        </div>
    );
};

export default Body;