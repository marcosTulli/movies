import { configureStore } from "@reduxjs/toolkit";
import { pageReducer, queryReducer } from "./features";

import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

export const store = configureStore({
    reducer: {
        page: pageReducer,
        query: queryReducer
    },
});

export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<ReturnType<typeof store.getState>> = useSelector;