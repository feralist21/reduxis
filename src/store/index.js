import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import usersReducer from '../features/users/usersSlice';
import { pokemonApi } from '../services/pokemon';
import { usersApi } from '../services/users';

const store = configureStore({
    reducer: {
        counter: counterReducer,
        users: usersReducer,
        [pokemonApi.reducerPath]: pokemonApi.reducer,
        [usersApi.reducerPath]: usersApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(pokemonApi.middleware, usersApi.middleware),
});

export default store;
