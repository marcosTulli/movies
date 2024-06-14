import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IPage } from "@/models/models";

export interface ICategoryPages {
}

const initialState: IPage = {
    nowPlayingPage: 1,
    topRatedPage: 1,
    upcomingPage: 1,
    popularPage: 1,
    category: undefined,
};

export const pageSlice = createSlice({
    name: 'page',
    initialState,
    reducers: {
        setPage: (state, action: PayloadAction<IPage>) => {
            state.nowPlayingPage = action.payload.nowPlayingPage ?? state.nowPlayingPage;
            state.topRatedPage = action.payload.topRatedPage ?? state.topRatedPage;
            state.upcomingPage = action.payload.upcomingPage ?? state.upcomingPage;
            state.popularPage = action.payload.popularPage ?? state.popularPage;
            state.category = action.payload.category;
        }
    }
});

export default pageSlice.reducer;
export const { setPage } = pageSlice.actions;
