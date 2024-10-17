import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    recommended: null,
    newDisney: null,
    originals: null,
    trending: null,
}
const movieSlice = createSlice({
    name: 'movie',
    initialState,
    reducers: {
        setMovies: (state, action) => {
            state.recommended = action.payload.recommended
            state.newDisney = action.payload.newDisney
            state.originals = action.payload.originals
            state.trending = action.payload.trending

        },

    }
})
export const { setMovies } = movieSlice.actions;
export const movieReducer = movieSlice.reducer;