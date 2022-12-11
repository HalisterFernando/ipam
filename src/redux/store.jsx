import { configureStore } from '@reduxjs/toolkit';
import stateCountyReducer from './features/statesCountySlice';
import statesAndCountiesReducer from './features/apiSlice';

const store = configureStore({
  reducer: {
    stateAndCounty: stateCountyReducer,
    statesAndCounties: statesAndCountiesReducer,
  },
});

export default store;
