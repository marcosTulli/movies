import { useAppSelector } from "@/store/store";
import { ISearchMoviesParams } from "@/models/models";
import { useSearchMovie } from "@/hooks/queries";
import { Grid } from '@mui/material';
import Card from "../card/Card";
import Link from "next/link";


const SearchResult = () => {
    const { query } = useAppSelector(state => state.query);
    const params: ISearchMoviesParams = { query: query as string };
    const { data } = useSearchMovie(params);
    const searchResults = data ? data.results : [];

    return (
        <Grid container spacing={2}>
            {searchResults?.map((movie, index) => (
                <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
                    <Link
                        key={movie.id}
                        href={`/movie/${movie.id}`}
                    >
                        <Card
                            posterPath={movie.poster_path}
                        />
                    </Link>
                </Grid>
            ))}
        </Grid>
    );
};

export default SearchResult;