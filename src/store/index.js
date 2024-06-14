import { configureStore } from '@reduxjs/toolkit';
import { counterSlice} from '../features/counter/counterSlise';

const store = configureStore({
    reducer: {
        counter: counterSlice.reducer,
    },
});

export default store;
