import {configureStore} from '@reduxjs/toolkit';
import reducer from './Reducers';

const store = configureStore({
    reducer: {
        customerReducer: reducer,
    },
});

export default store;