import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { allStatesAndCounties, fetchCounties, fetchStates } from '../redux/features/apiSlice';
import { setState, setCounty, selectedStateAndCounty } from '../redux/features/statesCountySlice';
import BrasMap from '../images/brasil.png';

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
    if (!states.length) {
      dispatch(fetchStates());
    }
  }, []);

  useEffect(() => {
    if (state) {
      dispatch(fetchCounties(state));
    }
  }, [state]);

  useEffect(() => {
    if (states.length && counties.length) {
      dispatch(setCounty(counties[0].nome));
    }
  }, [states, counties]);

  useEffect(() => {
    if (states.length) {
      dispatch(setState(states[0].sigla));
    }
  }, [states]);

  useEffect(() => {
    if (states.length) {
      dispatch(fetchCounties(states[0].sigla));
    }
  }, [states]);

  return (
    <div
      className="
      flex
      flex-col
      items-center
      justify-evenly
      gap-2
      h-full
      w-4/5
      mx-auto
      "
    >
      <img className="h-60 drop-shadow-[5px_10px_5px_rgba(0,0,0,0.85)]" src={BrasMap} alt="Mapa do Brasil" />
      <label htmlFor="state">
        <span className="font-semibold">Selecione um estado:</span>
        <select
          className="
          w-full
          shadow-sm
        shadow-black
          rounded p-2
          "
          name="state"
          id="state"
          onChange={handleChange}
        >
          {
          !fetchingStates && states.map(({ id, sigla, nome }) => (
            <option key={id} value={sigla}>
              {nome}
            </option>
          ))
        }
        </select>
      </label>
      {
        state && (
          <>
            <label htmlFor="county">
              <span className="font-semibold">Selecione um município:</span>
              <select
                className="
                w-full
                rounded p-2
                shadow-sm
                shadow-black
                "
                name="county"
                id=""
                onChange={handleChange}
              >
                {
          !fetchingCounties && counties.map(({ id, nome }) => (
            <option key={id} id={id} value={nome}>{nome}</option>
          ))
        }
              </select>
            </label>
            <button
              className="
              w-1/2
              px-4
              py-2
              bg-ipam-l-green
              rounded
              shadow-sm
              shadow-ipam-cream
              font-semibold
              "
              type="button"
              onClick={() => history(`/${county}`)}
            >
              Buscar
            </button>
          </>
        )
      }
    </div>
  );
}
