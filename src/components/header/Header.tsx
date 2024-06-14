import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import logo from '@/app/favicon.ico';
import Image from 'next/image';
import { useAppDispatch } from '@/store/store';
import { setQuery } from '@/store/features/';
import { useRouter } from 'next/navigation';
import InputSearch from '../input-search/InputSearch';


const Navbar = () => {
    const router = useRouter();
    const dispatch = useAppDispatch();
    const handleSearch = (value: string) => {
        router.replace('/', undefined);
        if (value.length === 0) {
            dispatch(setQuery(null));
        } else {
            dispatch(setQuery(value));
        }

    };

    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Typography
                        component="a"
                        href="/"
                    >
                        <Image alt='logo' src={logo} height={40} width={40} />
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: 'flex' }}>
                        <InputSearch handleSearch={handleSearch} />
                    </Box>

                </Toolbar>
            </Container>
        </AppBar>
    );
};
export default Navbar;