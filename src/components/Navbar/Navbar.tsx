import React from 'react';
import Image from 'next/image';
import logo from '@/app/favicon.ico';
import { Container } from '@mui/material';


const Navbar = () => {
    return (
        <Container>
            <Image src={logo} alt={'logo'} height={50} width={50} />
        </Container>
    );
};

export default Navbar;