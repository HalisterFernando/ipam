import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  state: '',
  county: '',
};

export const stateCountySlice = createSlice({
  name: 'state and county',
  initialState,
  reducers: {
    setState(state, { payload }) {
      return { ...state, state: payload };
    },
    setCounty(state, { payload }) {
      return { ...state, county: payload };
    },
  },
});

export const { setState, setCounty } = stateCountySlice.actions;

export const selectedStateAndCounty = (state) => state.stateAndCounty;

export default stateCountySlice.reducer;
