import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { MOVIE_CATEGORIES } from "@/models/models";

export interface IPage {
    page: number,
    category?: MOVIE_CATEGORIES;
}

const initialState: IPage = {
    page: 1,
};

export const pageSlice = createSlice({
    name: 'page',
    initialState,
    reducers: {
        setPage: (state, action: PayloadAction<IPage>) => {
            state.page = action.payload.page;
            state.category = action.payload.category;
        }
    }
});

export default pageSlice.reducer;
export const { setPage } = pageSlice.actions;
