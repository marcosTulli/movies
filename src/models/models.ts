export enum LANGUAGE {
    EN = 'en-US',
    SP = 'sp-ES'
}

export enum MOVIE_CATEGORIES {
    NOW_PLAYING = 'now_playing',
    POPULAR = 'popular',
    TOP_RATED = 'top_rated',
    UPCOMMING = 'upcomming',
}
export interface IFilmOptions {
    title: string;
    year: number;
}

export interface IMovieIdResult {
    id: number;
    adult: boolean;
}

export interface IMovieIdArray {
    results: IMovieIdResult[];
}

export interface IMovie {
    adult: boolean;
    backdrop_path: string;
    genre_ids: number[];
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
}

export interface IMovieSearchResult {
    page: number;
    results: IMovie[];
    total_pages: number;
    total_results: number;
}

export interface IKnownFor {
    backdrop_path: string;
    id: number;
    media_type: string;
    original_title: string;
    overview: string;
    poster_path: string;
    title: string;
    original_language: string;
    genre_ids: number[];
    popularity: number;
    release_date: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
}

export interface IPerson {
    adult: boolean;
    gender: number;
    id: number;
    known_for_department: string;
    name: string;
    original_name: string;
    popularity: number;
    profile_path: string;
    known_for: IKnownFor[];
}

export interface IPeopleSearchResult {
    page: number;
    results: IPerson[];
    total_pages: number;
    total_results: number;
}

export interface IGenre {
    id: number;
    name: string;
}

export interface IProductionCompany {
    id: number;
    logo_path: string;
    name: string;
    origin_country: string;
}

export interface IProductionCountry {
    iso_3166_1: string;
    name: string;
}

export interface ISpokenLanguage {
    english_name: string;
    iso_639_1: string;
    name: string;
}

export interface IMovieExtended extends IMovie {
    belongs_to_collection: {
        id: number;
        name: string;
        poster_path: string;
        backdrop_path: string;
    };
    budget: number;
    genres: IGenre[];
    homepage: string;
    imdb_id: string;
    origin_country: string[];
    production_companies: IProductionCompany[];
    production_countries: IProductionCountry[];
    revenue: number;
    runtime: number;
    spoken_languages: ISpokenLanguage[];
    status: string;
    tagline: string;
}

export interface ISearchResult {
    page: number;
    results: IMovie[];
    total_pages: number;
    total_results: number;
}

export interface ISearchParams {
    language: LANGUAGE;
    page: number;
}