import React from 'react';
import { usePoster } from '@/hooks/queries';
import Image from 'next/image';
import { Container } from '@mui/material';
import style from './Card.module.scss';

export interface ICardProps {
    posterPath: string;
}
const Card: React.FC<ICardProps> = ({ posterPath }) => {
    const { data: poster } = usePoster({ width: '200', id: posterPath, enable: posterPath.length > 0 });
    return (
        <Container className={style.cardContainer}>
            {poster && <Image alt={'poster'} src={poster} height={300} width={200} />}
        </Container>
    );
};

export default Card;