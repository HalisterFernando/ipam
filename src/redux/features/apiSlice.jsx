import { createSlice } from '@reduxjs/toolkit';
import api from '../../api';

const initialState = {
  states: [],
  counties: [],
  countyData: [],
};

const apiSlice = createSlice({
  name: 'ibgeAPI',
  initialState,
  reducers: {
    setStates(state, { payload }) {
      return { ...state, states: payload, fetchingStates: false };
    },
    setCounties(state, { payload }) {
      return { ...state, counties: payload, fetchingCounties: false };
    },
    setCountyData(state, { payload }) {
      return { ...state, countyData: payload, fetchingCountyData: false };
    },
  },
});

export default apiSlice.reducer;
export const allStatesAndCounties = (state) => state.statesAndCounties;

const { setStates, setCounties, setCountyData } = apiSlice.actions;

export const fetchStates = () => async (dispatch) => {
  try {
    const response = await api.get('/estados');
    return dispatch(setStates(response.data));
  } catch (err) {
    return console.log(err.message);
  }
};

export const fetchCounties = (uf) => async (dispatch) => {
  try {
    const response = await api.get(`estados/${uf}/municipios`);
    return dispatch(setCounties(response.data));
  } catch (err) {
    return console.log(err.message);
  }
};

export const fetchCountyData = (countyId) => async (dispatch) => {
  try {
    const response = await api.get(`/municipios/${countyId}/distritos`);
    return dispatch(setCountyData(response.data));
  } catch (err) {
    return console.log(err.message);
  }
};
