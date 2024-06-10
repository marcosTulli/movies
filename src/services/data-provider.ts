import axios, { AxiosRequestConfig } from 'axios';
import { ISearchResult, ISearchParams, MOVIE_CATEGORIES, IGetPosterParams } from '@/models/models';

const baseUrl = process.env.NEXT_PUBLIC_API_URL || '';
const cdn = process.env.NEXT_PUBLIC_API_POSTER_URL || '';
const apiToken = process.env.NEXT_PUBLIC_API_ACCESS_TOKEN;

class DataProvider {
    headers: Record<string, string> = {
        "Content-Type": "application/json;charset=UTF-8",
        "Authorization": `Bearer ${apiToken}`,
    };

    public async get<T>(path: string, params: Record<string, unknown> = {}, options: AxiosRequestConfig = {}): Promise<T> {
        const response = await axios.get(baseUrl + path, {
            ...options, params,
            paramsSerializer: {
                encode: (params) => {
                    return params;
                }
            }, headers: this.headers
        });
        return response.data;
    }

    public async getCdn<T>(path: string, params: Record<string, unknown> = {}, options: AxiosRequestConfig = {}): Promise<T> {
        const response = await axios.get(cdn + path, {
            ...options, params,
            paramsSerializer: {
                encode: (params) => {
                    return params;
                }
            }, headers: this.headers
        });
        return response.data;
    }

    public getMoviesByCategory = async (category: MOVIE_CATEGORIES, params: ISearchParams): Promise<ISearchResult> => {
        return this.get(`/movie/${category}`, { ...params });
    };

    public getPoster = async ({ width, id }: IGetPosterParams): Promise<Blob> => {
        return this.getCdn(`/w${width}}/${id}`);
    };

}
const DataProviderInstance = new DataProvider();
export default DataProviderInstance;