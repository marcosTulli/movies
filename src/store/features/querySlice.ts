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






















// Keep for objects
// export interface Person {
//     id: number,
//     name: string;
// }

// export interface PersonState {
//     persons: Person[];
// }

// const initialState: PersonState = {
//     persons: []
// };

// export const PersonSlice = createSlice({
//     name: "person",
//     initialState,
//     reducers: {
//         addPerson: (state, action: PayloadAction<{ name: string; }>) => {
//             state.persons.push({
//                 id: state.persons.length,
//                 name: action.payload.name
//             });
//         }
//     }
// });
