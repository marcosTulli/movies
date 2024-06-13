'use client';
import { useRouter } from 'next/navigation';

const Movie = () => {
    const router = useRouter();
    router.replace('/', undefined);

    return (
        <div> </div>
    );
};

export default Movie;