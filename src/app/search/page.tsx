import { useAppSelector } from "@/store/store";
import { ISearchMoviesParams } from "@/models/models";
import { useSearchMovie } from "@/hooks/queries";

const SearchResult = () => {
    const { query } = useAppSelector(state => state.query);
    const params: ISearchMoviesParams = { query: query as string };
    const { data } = useSearchMovie(params);
    const searchResults = data ? data.results : [];

    return (
        <div>
            <h1>Search Results</h1>
            <ul>
                {searchResults?.map(i => {
                    return (
                        <li key={i.id}>{i.title}</li>
                    );
                })}
            </ul>
        </div>
    );
};

export default SearchResult;