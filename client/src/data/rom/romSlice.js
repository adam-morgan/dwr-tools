import { createSlice } from '@reduxjs/toolkit';

export const setActiveRom = (activeRom) => ({
    type: 'rom/setActiveRom',
    activeRom
});

export const setActiveRomFile = (file) => async (dispatch) => {
    const response = await fetch(
        '/api/rom/analyze',
        {
            method: 'POST',
            body: file
        }
    );

    if (response.ok) {
        const data = await response.json();
        dispatch(setActiveRom(data));
    }
};

const romSlice = createSlice({
    name: 'rom',
    initialState: {
        activeRom: null
    },
    reducers: {
        setActiveRom: (state, payload) => {
            state.activeRom = payload.activeRom;
        }
    }
});

export default romSlice.reducer;
