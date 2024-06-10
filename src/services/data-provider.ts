import axios, { AxiosRequestConfig } from 'axios';
import { ISearchResult, ISearchParams } from '@/models/models';

const baseUrl = process.env.NEXT_PUBLIC_API_URL || '';
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

    public getTopRated = async (params: ISearchParams): Promise<ISearchResult> => {
        return this.get('/movie/top_rated', { ...params });
    };

}
const DataProviderInstance = new DataProvider();
export default DataProviderInstance;