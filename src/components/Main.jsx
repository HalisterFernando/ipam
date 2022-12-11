import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { allStatesAndCounties, fetchCounties, fetchStates } from '../redux/features/apiSlice';
import { setState, setCounty, selectedStateAndCounty } from '../redux/features/statesCountySlice';

export default function Main() {
  const history = useNavigate();
  const {
    states, counties, fetchingStates, fetchingCounties,
  } = useSelector(allStatesAndCounties);

  const { state, county } = useSelector(selectedStateAndCounty);

  const dispatch = useDispatch();

  const dispatchObj = {
    state: (value) => dispatch(setState(value)),
    county: (value) => dispatch(setCounty(value)),
  };

  const handleChange = ({ target: { name, value } }) => dispatchObj[name](value);

  useEffect(() => {
    dispatch(fetchStates());
  }, []);

  useEffect(() => {
    if (state) {
      dispatch(fetchCounties(state));
    }
  }, [state]);

  useEffect(() => {
    if (state && counties.length) {
      dispatch(setCounty(counties[0].nome));
    }
  }, [state, counties]);
  return (
    <>
      <select name="state" id="state" onChange={handleChange}>
        <option value="" selected disabled>Selecione um estado</option>
        {
          !fetchingStates && states.map(({ id, sigla, nome }) => (
            <option key={id} value={sigla}>
              {nome}
            </option>
          ))
        }
      </select>
      <select name="county" id="" onChange={handleChange} disabled={!state}>
        <option value="" selected disabled>Selecione um municipio</option>
        {
          !fetchingCounties && counties.map(({ id, nome }) => (
            <option key={id} id={id} value={nome}>{nome}</option>
          ))
        }
      </select>
      <button type="button" onClick={() => history(`/${county}`)}>Buscar</button>
    </>
  );
}
