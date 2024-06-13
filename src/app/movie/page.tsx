'use client';
import { useRouter } from 'next/navigation';
import { withRouter } from 'next/router';

const Movie = () => {
    const router = useRouter();
    router.replace('/', undefined);

    return (
        <div> </div>
    );
};

export default Movie;