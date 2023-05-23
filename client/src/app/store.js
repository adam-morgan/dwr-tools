import { configureStore } from '@reduxjs/toolkit';

import romReducer from '../data/rom/romSlice';

export const store = configureStore({
    reducer: {
        rom: romReducer
    }
});
