import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface IQuery {
    query: string | null;
}

const initialState: IQuery = {
    query: null
};

export const querySlice = createSlice({
    name: 'query',
    initialState,
    reducers: {
        setQuery: (state, action: PayloadAction<string | null>) => {
            state.query = action.payload;
        }
    }
});

export default querySlice.reducer;
export const { setQuery } = querySlice.actions;