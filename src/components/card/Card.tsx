import React from 'react';
import { usePoster } from '@/hooks/queries';
import Image from 'next/image';
import { Container } from '@mui/material';
import style from './Card.module.scss';

export interface ICardProps {
    posterId: string;
}
const Card: React.FC<ICardProps> = ({ posterId }) => {
    const { data: poster } = usePoster({ width: '200', id: posterId, enable: posterId.length > 0 });
    return (
        <Container className={style.cardContainer}>
            {poster && <Image alt={'poster'} src={poster} height={300} width={200} />}
        </Container>
    );
};

export default Card;