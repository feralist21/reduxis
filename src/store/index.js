import { configureStore } from '@reduxjs/toolkit';
import { counterSlice } from '../features/counter/counterSlice';
import { pokemonApi } from '../services/pokemon';

const store = configureStore({
    reducer: {
        counter: counterSlice.reducer,
        [pokemonApi.reducerPath]: pokemonApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(pokemonApi.middleware),
});

export default store;
