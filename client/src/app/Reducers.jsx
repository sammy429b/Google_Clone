import {createReducer, createAction} from '@reduxjs/toolkit';


const SET_TEXT_DATA = createAction('SET_TEXT_DATA');
const SET_IMAGE_DATA = createAction('SET_IMAGE_DATA');
const SET_LOADING = createAction('SET_LOADING');
const SET_ERROR = createAction('SET_ERROR')

const initialState = {
    textData: [],
    imageData: [],
    loading: false,
    error: null,
};

const reducer = createReducer(initialState, (builder) => {
    builder.
    addCase(SET_TEXT_DATA, (state, action) => {
        state.textData = [...state.textData, ...action.payload];
    })
    .addCase(SET_IMAGE_DATA, (state, action) => {
        state.imageData = [...state.imageData, ...action.payload];
    })
    .addCase(SET_LOADING, (state, action) => {
        state.loading = action.payload;
    })
    .addCase(SET_ERROR, (state, action) => {
        state.error = action.payload;
    });

});


export default reducer;